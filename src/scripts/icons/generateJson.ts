/**
 * This file is meant to be executed exclusively by npm scripts.
 */
import { createIconFile } from './../../icons/index';

try {
  createIconFile();
} catch (error) {
  console.error(error);
  throw new Error('Could not create icon file!', { cause: error });
}
