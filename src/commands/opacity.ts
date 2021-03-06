import * as vscode from 'vscode';
import { getDefaultIconOptions, validateOpacityValue } from '../icons';
import * as helpers from './../helpers';
import * as i18n from './../i18n';

/** Command to toggle the folder icons. */
export const changeOpacity = async () => {
  try {
    const currentOpacityValue = getCurrentOpacityValue();
    const response = await showInput(currentOpacityValue);
    if (response) {
      await setOpacityConfig(+response);
    }
  } catch (error) {
    console.error(error);
  }
};

/** Show input to enter the opacity value. */
const showInput = (opacity: number) => {
  return vscode.window.showInputBox({
    placeHolder: i18n.translate('opacity.inputPlaceholder'),
    ignoreFocusOut: true,
    value: opacity.toString(),
    validateInput: validateOpacityInput,
  });
};

/** Validate the opacity value which was inserted by the user. */
const validateOpacityInput = (opacityInput: string) => {
  if (!validateOpacityValue(+opacityInput)) {
    return i18n.translate('opacity.wrongValue');
  }
  return undefined;
};

/** Get the current value of the opacity of the icons. */
export const getCurrentOpacityValue = (): number => {
  const defaultOptions = getDefaultIconOptions();
  const config = helpers.getMaterialIconsJSON();
  return config?.options?.opacity ?? defaultOptions.opacity;
};

const setOpacityConfig = (opacity: number) => {
  return helpers.setThemeConfig('opacity', opacity, true);
};
