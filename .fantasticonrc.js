const codepoints = require('./src/scripts/template/mapping.json');

/**
 * Icon-font build config (replaces the former `icon-font-generator` CLI flags).
 *
 * `codepoints` is the source of truth and MUST stay in sync with the
 * `fontCharacter` values in `product_icons/developer's-icons.json` — changing a
 * codepoint silently swaps glyphs for everyone who already has the theme.
 *
 * `normalize` reproduces the geometry of the previously shipped font. The old
 * build also passed `--center`, but enabling `centerHorizontally` here shifts
 * 25 glyphs by up to 75 units, so that flag was evidently never taking effect
 * and is deliberately left off.
 */
module.exports = {
  inputDir: './Pro-icons',
  outputDir: './dist',
  name: 'developer-icons',
  prefix: 'developer-icons',
  fontTypes: ['ttf'],
  assetTypes: ['css', 'html', 'json'],
  fontHeight: 1000,
  normalize: true,
  codepoints,
  formatOptions: {
    json: { indent: 2 },
  },
  templates: {
    css: './src/scripts/template/styles.hbs',
    html: './src/scripts/template/preview.hbs',
  },
};
