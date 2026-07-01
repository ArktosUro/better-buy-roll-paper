# 🧻 Better Buy

Compare toilet paper prices and instantly find the best value per 100 sheets.

## Overview

Better Buy is a simple web application that helps shoppers determine which toilet paper product offers the best value. Users can add multiple products, and the app automatically calculates the cost per 100 sheets, ranks the products, and highlights the best deal.

This project was built using vanilla JavaScript to practice DOM manipulation, event handling, data management, and responsive design.

## Features

* Add multiple products for comparison
* Calculate cost per 100 sheets
* Automatically identify the best value
* Sort products from lowest to highest cost
* Mobile-friendly design
* Clear all products and start over

## How It Works

For each product, the application calculates:

```text
Cost per 100 Sheets = (Price ÷ Total Sheets) × 100
```

The product with the lowest cost per 100 sheets is considered the best value and is displayed at the top of the list.

## Example

| Product              | Price  | Sheets | Cost per 100 Sheets |
| -------------------- | ------ | ------ | ------------------- |
| Charmin Ultra Soft   | $18.99 | 5280   | $0.36               |
| Cottonelle Mega Roll | $16.49 | 4512   | $0.37               |
| Angel Soft Mega      | $12.99 | 3840   | $0.34 🏆            |

In this example, Angel Soft Mega provides the best value.

## Tech Stack

* HTML5
* CSS3
* JavaScript (ES6)

## Project Structure

```text
better-buy/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/better-buy.git
```

2. Open the project folder:

```bash
cd better-buy
```

3. Open `index.html` in your browser.

No installation or dependencies are required.

## Future Improvements

* Remove individual products
* Save comparisons with Local Storage
* Barcode scanner support
* Additional product categories
* Progressive Web App (PWA)
* Dark mode

## Learning Objectives

This project demonstrates:

* DOM manipulation
* Event listeners
* Array methods
* Dynamic rendering
* Form validation
* Responsive design principles

## License

This project is open source and available under the MIT License.
