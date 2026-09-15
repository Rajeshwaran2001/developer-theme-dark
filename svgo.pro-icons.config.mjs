export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertPathData: { noSpaceAfterFlags: false },
          mergePaths: { noSpaceAfterFlags: false },
        },
      },
    },
    { name: 'removeAttrs', params: { attrs: '*:fill' } },
    {
      name: 'addAttributesToSVGElement',
      params: { attributes: [{ fill: 'currentColor' }] },
    },
  ],
};
