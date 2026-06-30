# Odin Weather App

A polished weather dashboard built with JavaScript and Webpack. The app fetches real-time weather data, shows current conditions, and presents a multi-day forecast for a selected location.

This project was built for the [Weather App](https://www.theodinproject.com/lessons/node-path-javascript-weather-app) assignment from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app).

## Features

- Search for a city or location and view live weather data
- Display the current temperature, weather conditions, and summary
- Show detailed metrics such as humidity, pressure, wind, visibility, UV index, and feels-like temperature
- Include a six-day forecast overview
- Provide a responsive dashboard experience with a loading state

## Tech Stack

- JavaScript (ES modules)
- Webpack
- HTML and CSS
- Weather data from Visual Crossing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or newer
- npm or Yarn

### Installation

```bash
git clone https://github.com/rimanz/odin-weather-app.git
cd odin-weather-app
npm install
```

## Available Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Build the production bundle for deployment
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
  api.js
  index.js
  styles.css
  template.html
  icons/
  ui/
package.json
README.md
```

## Usage

### Start the Development Server

```bash
npm run dev
```

Open `http://localhost:8080` in your browser.

### Build for Production

```bash
npm run build
```

The production files are output to the `dist/` folder.

## Attribution

- Weather icons are adapted from [Weather Icons by Visual Crossing](https://github.com/visualcrossing/WeatherIcons).
- The loading GIF used in this project comes from a Creative Commons-licensed source. Please retain attribution to the original creator/source when reusing or redistributing it.

## Contributing

Contributions are welcome. Feel free to open issues or submit pull requests to improve the app.

## Author

Riman Das
