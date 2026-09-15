export default {
  js2svg: { indent: 2, pretty: false },
  plugins: [
    { name: 'preset-default' },
    'removeDimensions',
    'removeOffCanvasPaths',
    'removeScripts',
    'reusePaths',
  ],
};
