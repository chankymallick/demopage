# Order Manager

Order Manager is a web application designed to streamline the order processing system. It includes features such as multiple language support, cloud backup, printable reports, and charts. This application is intended to be hosted on GitHub Pages.

## Features

- **Multiple Language Support**: The application supports English, Spanish, and French, allowing users to select their preferred language.
- **Cloud Backup**: Users can back up their order data to a cloud service for safe storage and easy recovery.
- **Printable Reports**: Generate and view reports related to orders, with a dedicated interface for printing.
- **Charts**: Visualize order data through interactive charts and graphs.

## Project Structure

```
order-manager
├── docs
│   ├── index.html
│   ├── orders.html
│   ├── reports.html
│   ├── manifest.json
│   ├── assets
│   │   ├── css
│   │   │   ├── main.css
│   │   │   └── print.css
│   │   └── js
│   │       ├── app.js
│   │       ├── i18n.js
│   │       ├── backup.js
│   │       ├── charts.js
│   │       └── reports.js
│   └── locales
│       ├── en.json
│       ├── es.json
│       └── fr.json
├── src
│   ├── index.html
│   ├── orders.html
│   ├── reports.html
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   └── js
│   │       └── app.js
│   └── locales
│       ├── en.json
│       ├── es.json
│       └── fr.json
├── scripts
│   └── deploy-gh-pages.sh
├── .github
│   └── workflows
│       └── gh-pages.yml
├── package.json
├── README.md
└── LICENSE
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/order-manager.git
   ```
2. Navigate to the project directory:
   ```
   cd order-manager
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To run the application locally, open `docs/index.html` in your web browser. For deployment to GitHub Pages, run the deployment script:
```
bash scripts/deploy-gh-pages.sh
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.