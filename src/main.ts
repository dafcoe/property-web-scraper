import * as commander from 'commander';
import { PropertyListItemInterface } from './property-list/property-list.interface';
import { getChannelPropertyListItems } from './property-channel/property-channel';

const program = new commander.Command()
  .version('0.0.1')
  .description('Property Scraper - a simple web scraper for popular property aggregator websites')
  .requiredOption('-u, --urls <urls>', 'the property aggregator(s) website url(s) (comma-separated values)', (urls) => urls.split(','))
  .option('-f, --full', 'perform subsequent scrapes based on pagination', false)
  .option('-o, --output <output>', 'the output format, either "list" or "count"', 'list')
  .parse(process.argv);

const { urls, full, output } = program.opts();

(async () => {
  const propertyListItems: PropertyListItemInterface[] = await getChannelPropertyListItems(urls, full);

  console.log(output === 'count' ? propertyListItems.length : JSON.stringify(propertyListItems));
})();

