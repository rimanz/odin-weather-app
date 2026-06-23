# Odin Weather App

A minimal weather dashboard built with JavaScript and Webpack. The app fetches real-time weather data and displays current conditions, additional metrics, and a multi-day forecast for a selected location.

This project was created for an assignment from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app).

## Features

- Current temperature and weather conditions
- Air quality and UV index display
- Wind speed, pressure, and visibility information
- Six-day forecast overview
- Responsive dashboard layout

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or newer
- npm or Yarn

### Installation

```bash
# clone the repository
git clone https://github.com/rimanz/odin-weather-app.git

# navigate into the project
cd odin-weather-app

# install dependencies
npm install
# or
# yarn install
```

## Available Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Build the production bundle using `webpack.prod.js`
- `npm run lint` - Run ESLint across the codebase
- `npm run lint:fix` - Run ESLint and apply automatic fixes
- `npm run format` - Format files with Prettier
- `npm run check:format` - Check formatting without changing files

## Project Structure

```text
webpack.common.js
webpack.dev.js
webpack.prod.js
src/
  index.js
  styles.css
  template.html
package.json
README.md
```

- `src/` contains the application source files
- `webpack.common.js` contains shared Webpack configuration
- `webpack.dev.js` configures the development server and source maps
- `webpack.prod.js` configures production optimization

## Usage

### Start Development Server

```bash
npm run dev
```

Open `http://localhost:8080` in your browser.

### Build for Production

```bash
npm run build
```

The final production files are output to the `dist/` folder.

## Contributing

Contributions are welcome. Feel free to open issues or submit pull requests to improve the app.

## Author

Riman Das
