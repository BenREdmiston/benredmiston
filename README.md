# Personal Site

This is a personal site built with React. The site features a header and a large container that includes flip cards for various sections of the site.

## Project Structure

```
personal-site
├── public
│   ├── index.html        # Main HTML document for the application
│   └── favicon.ico       # Favicon for the website
├── src
│   ├── components
│   │   ├── Header.js     # Header component with site title and navigation
│   │   ├── FlipCard.js   # Flip card component for displaying sections
│   │   └── sections
│   │       ├── About.js          # About section content
│   │       ├── Contact.js        # Contact section content
│   │       ├── Intro.js          # Intro section content
│   │       └── SkillsPortfolio.js # Skills/Portfolio section content
│   ├── styles
│   │   ├── App.css        # Main styles for the application
│   │   ├── Header.css     # Styles for the header component
│   │   ├── FlipCard.css   # Styles for the flip card component
│   │   └── sections
│   │       ├── About.css          # Styles for the About section
│   │       ├── Contact.css        # Styles for the Contact section
│   │       ├── Intro.css          # Styles for the Intro section
│   │       └── SkillsPortfolio.css # Styles for the Skills/Portfolio section
│   ├── App.js            # Main component rendering the Header and flip cards
│   ├── index.js          # Entry point of the React application
│   └── logo.svg          # Logo image used in the application
├── package.json          # Configuration file for npm
└── README.md             # Documentation for the project
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-site
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- Responsive design
- Flip card functionality for sections
- Easy navigation through the header

## License

This project is licensed under the MIT License.