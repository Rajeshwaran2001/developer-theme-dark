/**
 * Dumps the glyph table of the generated icon font as CSV.
 * Originally based on https://github.com/bitinn/character-map
 *
 * Usage: node src/scripts/export/index.js -f <font.ttf> [-o <out.csv>]
 *
 * Writing goes to `-o` rather than a shell redirect on purpose: a redirect
 * captures stdout even when the run fails, which is how an error message
 * ended up committed as the contents of `developer-icons.csv`.
 */
const fs = require('node:fs');
const path = require('node:path');
const minimist = require('minimist');
const opentype = require('opentype.js');

/** Format a codepoint as an upper-case, zero-padded hex string. */
const formatUnicode = (unicode) => {
  const hex = unicode.toString(16).toUpperCase();
  return hex.length > 4 ? hex.padStart(6, '0') : hex.padStart(4, '0');
};

const main = () => {
  const opts = minimist(process.argv.slice(2));

  if (!opts.f || typeof opts.f !== 'string') {
    throw new Error(
      'use -f to specify your font path, TrueType and OpenType supported'
    );
  }

  const buffer = fs.readFileSync(path.resolve(opts.f));
  // opentype.js v2 dropped `loadSync`; `parse` takes an ArrayBuffer.
  const font = opentype.parse(
    buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength
    )
  );

  if (!font.numGlyphs) {
    throw new Error(`no glyphs found in ${opts.f}`);
  }

  const rows = ['short_name,character,unicode'];

  for (let i = 0; i < font.numGlyphs; i++) {
    const glyph = font.glyphs.get(i);
    const [codepoint] = glyph.unicodes ?? [];
    if (codepoint === undefined) continue;

    rows.push(
      [
        glyph.name,
        String.fromCodePoint(codepoint),
        formatUnicode(codepoint),
      ].join(',')
    );
  }

  const csv = rows.join('\n') + '\n';

  if (opts.o && typeof opts.o === 'string') {
    fs.mkdirSync(path.dirname(opts.o), { recursive: true });
    fs.writeFileSync(opts.o, csv);
    console.log(`> Wrote ${rows.length - 1} glyphs to ${opts.o}`);
  } else {
    process.stdout.write(csv);
  }
};

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
