
# @dafcoe/property-web-scraper

A simple web scraper for popular property aggregator websites, like idealista and supercasa. It can be extended to handle other property websites.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
## Prerequisites

- Node 16+ installed [[https://nodejs.org](https://nodejs.org)]
- Valid web sraping api key [[https://www.webscrapingapi.com](https://www.webscrapingapi.com)]

## Installation

#### 1. Clone the project:

```bash
git clone git@github.com:dafcoe/property-web-scraper.git
```

#### 2. Change to the project directory:

```bash
cd property-web-scraper
```

#### 3. Install the project dependencies:

```bash
npm install
```

#### 4. Build the project:

```bash
npm run build
```

## Usage

#### 1. Copy `.env.dist` to `.env` and replace the placeholder by your api key:

```bash
SCRAPER_API_KEY=PlaceHereYouApiKey
```

#### 2. Run the following command:

```bash
node dist/property-scraper.js [options]
```

##### *Options*

```
-u, --urls <urls>     | comma-separated urls of the property aggregator websites to scrape (required)
-f, --full            | perform subsequent scrapes based on pagination (default: false)
-o, --output <output> | the output format, either "list" or "count" (default: "list")
```

##### *Examples*

```
// Get a list of properties from a single url

node dist/property-scraper.js -u https://www.idealista.pt/comprar-casas/lisboa/
```

```
// Get a list of properties from multiple urls

node dist/property-scraper.js -u https://www.idealista.pt/comprar-casas/lisboa/,https://www.idealista.pt/comprar-casas/lisboa/pagina-5,https://supercasa.pt/comprar-casas/lisboa
```

```
// Get the size of a list of properties from a single url

node dist/property-scraper.js -u https://www.idealista.pt/comprar-casas/lisboa/ -o count
```

```
// Get a full list of properties from a single url
// Goes through all pages and perform a scrape
// Use with caution as it will take some time

node dist/property-scraper.js -u https://www.idealista.pt/comprar-casas/lisboa/ -f
```

## License
[MIT License](https://opensource.org/licenses/MIT) © [Daf Coe](mailto:dafcoe@gmail.com)
