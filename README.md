# Random User Generator

## Overview

This is a simple web application that generates random user information using the Random User Generator API. The application is built using HTML, CSS (Bootstrap), and JavaScript. It fetches random user data asynchronously, and on the click of a button, it displays the user information dynamically on the webpage.

## How to Use

1. Open the `index.html` file in a web browser.
2. Click the "Generate New Random User" button to fetch and display a new random user.

## Live Demo

Check out the live demo [here](https://gauravmazumdar21.github.io/Random-User-Details/).

## Technologies Used

- HTML
- CSS (Bootstrap 5.0.2)
- JavaScript (Async/Await, Fetch API)

## Project Structure

- `index.html`: The main HTML file that contains the structure of the webpage.
- `main.js`: The JavaScript file that handles the logic for fetching and displaying random user data.
- `styles.css`: Inline styles for the HTML document.

## How It Works

1. The web page includes a "Generate New Random User" button and a card element (`displayCard`) to display the user information.
2. The JavaScript code (`main.js`) contains an asynchronous function (`newRandomUser`) that fetches random user data from the Random User Generator API using the `fetch` API and `async/await`.
3. The fetched data is then dynamically inserted into the HTML document to update the user interface.

## Styling

The project uses Bootstrap for styling to achieve a clean and responsive design. Custom styles are also applied to enhance the visual appearance.

## Error Handling

The application includes error handling for cases where fetching the random user data fails. If an error occurs, it is logged to the console, and an error message is not displayed on the webpage.

## Author

[Gaurav Mazumdar]

Feel free to customize this README file based on your preferences and provide more details if needed.
