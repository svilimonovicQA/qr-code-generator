# QR Code Generator

A simple, user-friendly web application that generates QR codes from text or URLs. Built with HTML, CSS, and JavaScript using jQuery.

## Features

- Generate QR codes from any text or URL input
- Real-time QR code generation
- Clean and responsive user interface
- Automatic clearing of previous QR codes
- Support for special characters
- Comprehensive test coverage

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery
- jQuery QR Code library
- Cypress (for testing)
- HTTP-Server (for development)

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the local server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Usage

1. Enter any text or URL in the input field
2. Click the "Generate QR Code" button
3. The QR code will be generated instantly
4. You can scan the QR code with any QR code scanner (e.g., smartphone camera)
5. To generate a new QR code, simply enter new text and click the button again

## Running Tests

The project uses Cypress for end-to-end testing. There are two ways to run the tests:

### Headless Mode (Command Line)

Run all tests in headless mode:

```bash
npm test
```

### Interactive Mode (Cypress Test Runner)

Open Cypress Test Runner for interactive testing:

```bash
npm run cypress:open
```

## Test Coverage

The test suite includes the following test cases:

1. UI Elements

   - Verifies correct page title
   - Checks for presence of input field and generate button

2. QR Code Generation

   - Tests basic QR code generation functionality
   - Verifies QR code is generated when button is clicked

3. QR Code Management

   - Ensures previous QR codes are cleared before generating new ones
   - Verifies only one QR code is displayed at a time

4. Input Handling
   - Tests empty input scenarios
   - Verifies special characters are handled correctly

## Project Structure

```
qr-code-generator/
├── index.html          # Main HTML file
├── style.css          # Stylesheet
├── package.json       # Project dependencies and scripts
├── cypress.config.js  # Cypress configuration
├── cypress/
│   └── e2e/
│       └── qr-generator.cy.js  # Cypress test files
└── README.md         # Project documentation
```

## Scripts

- `npm start`: Starts the development server
- `npm test`: Runs tests in headless mode
- `npm run cypress:open`: Opens Cypress Test Runner
- `npm run cypress:run`: Runs Cypress tests in headless mode

## Browser Support

The application has been tested and works on:

- Google Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [jQuery QR Code](https://github.com/jeromeetienne/jquery-qrcode) for the QR code generation library
- [Cypress](https://www.cypress.io/) for the testing framework
