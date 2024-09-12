import * as http from 'https';
import { SCRAPER_API_HOSTNAME, SCRAPER_API_KEY } from './scraper.constant';

export async function scrape(url: string, extractRules: Record<string, any>): Promise<string> {
  const requestUrl = encodeURI(url);
  const requestExtractRules = encodeURI(JSON.stringify(extractRules));
  const requestPath = `/v2?api_key=${SCRAPER_API_KEY}&url=${requestUrl}&extract_rules=${requestExtractRules}`;
  const requestOptions: http.RequestOptions = {
    method: 'GET',
    hostname: SCRAPER_API_HOSTNAME,
    port: null,
    path: requestPath,
    headers: {},
  };

  try {
    const response = await performHttpRequest(requestOptions);

    return response;
  } catch (error) {
    console.log(`An error occurred while scraping the url "${url}": ${error}`);
  }
}

async function performHttpRequest(requestOptions: http.RequestOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    const request = http.request(requestOptions, (response) => {
      const chunks = [];

      response.on('data', (chunk) => {
        chunks.push(chunk)
      });

      response.on('end', () => {
        resolve(Buffer.concat(chunks).toString());
      });

      response.on('error', (error: Error) => {
        reject(error.message);
      });
    });

    request.end();
  });
}
