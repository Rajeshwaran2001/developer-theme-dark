# Developer's theme

## Dark edition

VS code Theme For Developers

> A dark theme for [Visual Studio Code](http://code.visualstudio.com).
>
> For GitHub Actions Refer [publish-vscode-extension](https://github.com/HaaLeo/publish-vscode-extension)

&nbsp;

<p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=Rajeshwaran.developer-theme-dark"><img src="https://img.shields.io/visual-studio-marketplace/v/Rajeshwaran.developer-theme-dark?style=for-the-badge&colorA=252526&colorB=43A047&label=VERSION" alt="Version"></a>&nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=Rajeshwaran.developer-theme-dark"><img src="https://img.shields.io/visual-studio-marketplace/stars/Rajeshwaran.developer-theme-dark?style=for-the-badge&colorA=252526&colorB=43A047&label=RATING" alt="Rating"></a>&nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=Rajeshwaran.developer-theme-dark"><img src="https://img.shields.io/visual-studio-marketplace/i/Rajeshwaran.developer-theme-dark?style=for-the-badge&colorA=252526&colorB=43A047&label=INSTALLS" alt="Installs"></a>&nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=Rajeshwaran.developer-theme-dark"><img src="https://img.shields.io/visual-studio-marketplace/d/Rajeshwaran.developer-theme-dark?style=for-the-badge&colorA=252526&colorB=43A047&label=DOWNLOADS" alt="Downloads"></a>&nbsp;
    <a href="https://github.com/Rajeshwaran2001/developer-theme-dark/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Rajeshwaran2001/developer-theme-dark?style=for-the-badge&colorA=252526&colorB=43A047&label=GitHub issues" alt="GitHub issues"></a>&nbsp;
    <a href="https://github.com/Rajeshwaran2001/developer-theme-dark/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Rajeshwaran2001/developer-theme-dark?style=for-the-badge&colorA=252526&colorB=43A047&label=LICENSE" alt="LICENSE"></a>&nbsp;
    <a href="https://vscode.dev/theme/Rajeshwaran.developer-theme-dark"><img src="https://img.shields.io/badge/preview%20in-vscode.dev-blue?style=for-the-badge&colorA=252526&colorB=43A047&label=PREVIEW" alt="Preview"></a>&nbsp;
    <a href="https://discord.gg/N9WdqHdmC">
    <img
        alt="Discord"
        src="https://img.shields.io/badge/Discord-Join%20Community?style=for-the-badge&colorA=252526&colorB=5865F2&logo=discord&logoColor=white"
    >
</a>&nbsp;
</p>

# Preview of themes and colors

> Not too bright and not too subtle.

## Developers Theme

<img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/theme.webp" alt="Developer Theme Prev" />

## Firefox Dark

<img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/FirefoxDark.webp" alt="Firefox Dark" />

## Ocean Dark

<img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/OceanDark.webp" alt="Ocean Dark" />

## Slack Dark

<img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/SlackDark.webp" alt="Slack Dark" />

## Green Coffee

<img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/GreenCoffee.webp" alt="Green Coffee" />

## Aubergine Dark

<img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/Aubergine.webp" alt="Aubergine Dark" />

### Product icons

<img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/preview.png" alt="Product Icons">

### File icons

<img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/fileIcons.png" alt="file icons">

### Folder icons

<img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/folderIcons.png" alt="folder icons">

## Development

Requires **Node.js 22 or newer** (see `.nvmrc`); npm 10+ ships with it.

```bash
npm ci          # install dependencies
npm run build   # lint, typecheck, optimise SVGs, rebuild the icon font
npm test        # compile and run the suite inside a downloaded VS Code
```

Useful individual scripts:

| Script                            | What it does                                                |
| --------------------------------- | ----------------------------------------------------------- |
| `npm run lint` / `lint:fix`       | ESLint (flat config, `eslint.config.mjs`)                   |
| `npm run typecheck`               | `tsc --noEmit`                                              |
| `npm run format` / `format:check` | Prettier                                                    |
| `npm run svgo-p`                  | Optimise the product icons in `Pro-icons/`                  |
| `npm run svgo-mf`                 | Optimise the file/folder icons in `icons/`                  |
| `npm run fonts`                   | Rebuild the icon font via fantasticon (`.fantasticonrc.js`) |
| `npm run preview`                 | Regenerate the file/folder icon preview images              |
| `npm run package`                 | Build a `.vsix`                                             |

The icon font's codepoints live in `src/scripts/template/mapping.json` and must
stay in sync with the `fontCharacter` values in
`product_icons/developer's-icons.json` — changing a codepoint swaps glyphs for
everyone who already has the theme installed.

> **Running `npm test` from the VS Code integrated terminal?** VS Code exports
> `ELECTRON_RUN_AS_NODE=1`, which makes the downloaded test instance refuse every
> launch flag. Run `env -u ELECTRON_RUN_AS_NODE npm test` instead.

## Icon sources

- [Fluent Design Icons](https://fluenticons.co/)
- [Material Design Icons](https://materialdesignicons.com/)
- official icons

## Contributors

<a href="https://github.com/Rajeshwaran2001/developer-theme-dark/graphs/contributors">
    <img src="https://raw.githubusercontent.com/Rajeshwaran2001/developer-theme-dark/main/assest/contributors.png" alt="Contributors">
</a>
