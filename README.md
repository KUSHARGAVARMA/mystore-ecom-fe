
# MyStore E-commerce App - Frontend

## Overview

MyStore is a robust e-commerce application built using React for the front end. The app features dynamic product listings, search functionality, multi-language support, and a responsive design. It utilizes React context for state management to provide a seamless shopping experience.

## Features

- Dynamic product listings
- Search functionality
- Multi-language support (English, Español)
- Responsive design for mobile and desktop
- Sticky top bar for navigation
- Shopping cart with real-time updates

## Technologies Used

- React
- React Router
- Context API
- Tailwind CSS
- i18next for internationalization
- Axios for API requests
- Vercel for deployment

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/KUSHARGAVARMA/mystore-ecom-fe.git
cd mystore-ecom-fe
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the App

To start the development server, run:

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:5713`.

### Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
```

The optimized build will be in the `build` folder.

## Project Structure

```plaintext
src/
│
├── components/            # Reusable components
│   ├── ProductItem.jsx    # Component for rendering individual product items
│   ├── SkeletonLoader.jsx # Component for loading skeletons
│   └── ...
│
├── context/               # Context for state management
│   └── CartContext.js     # Context for shopping cart
│
├── pages/                 # Page components
│   ├── HomePage.jsx       # Main landing page
│   ├── CartPage.jsx       # Shopping cart page
│   └── ...
│
├── i18n/                  # Internationalization setup
│   └── i18n.js            # i18next configuration
│
├── assets/                # Static assets
│   └── ...
│
├── App.jsx                # Root component
├── index.js               # Entry point
└── ...
```

## Internationalization

The app supports multiple languages using i18next. You can add more translations by modifying the `locales` folder in the `src/i18n` directory.

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

## Deployment

The app is deployed on Vercel. To deploy your own version:

1. Connect your GitHub repository to Vercel.
2. Set up the project and environment variables as needed.
3. Deploy the app directly from the Vercel dashboard.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please reach out to [kushavrm008@gmail.com](mailto:kushavrm008@gmail.com).
