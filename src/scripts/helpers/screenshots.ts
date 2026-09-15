import path from 'path';
import puppeteer from 'puppeteer';

/**
 * Create a screenshot from an HTML file and save it as image.
 * @param filePath Path of an HTML file
 * @param fileName Name of the output image
 */
export const createScreenshot = async (filePath: string, fileName: string) => {
  const htmlFilePath = path.join('file:', filePath);

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({
      height: 10,
      width: 1000,
    });

    await page.goto(htmlFilePath, { waitUntil: 'networkidle0' });

    await page.screenshot({
      path: `assest/${fileName}.png`,
      omitBackground: true,
      fullPage: true,
    });
  } catch (error) {
    console.error(error);
    throw new Error(`Could not create screenshot for the ${fileName} preview`, {
      cause: error,
    });
  } finally {
    // Always release the browser, otherwise a failed run leaves Chrome behind.
    await browser.close();
  }
};
