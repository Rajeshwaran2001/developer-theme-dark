import { glob } from 'glob';
import Mocha from 'mocha';
import path from 'path';

export const run = async (): Promise<void> => {
  const mocha = new Mocha({ ui: 'bdd', color: true });
  const testsRoot = path.resolve(__dirname, '..');

  const files = await glob('**/*.spec.js', { cwd: testsRoot });
  files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

  const failures = await new Promise<number>((resolve) => mocha.run(resolve));

  if (failures > 0) {
    throw new Error(`${failures} tests failed.`);
  }
};
