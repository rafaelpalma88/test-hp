# Harry Potter App

Welcome to the **Harry Potter App**! This project is a web application that allows you to explore the magical world of Harry Potter, including characters, students, staff, and spells. The app is built with React, TypeScript, and Tailwind CSS, and uses the [HP API](https://hp-api.onrender.com/) to fetch data.

## Features

- **Explore Characters**: View details about Harry Potter characters, including name, house, actor, and more.
- **Favorite Characters**: Add characters to your favorites list.
- **Search**: Search for characters by name.
- **Pagination**: Navigate through results with simple and intuitive pagination.
- **Responsive Design**: The app is fully responsive, working well on both mobile and desktop devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for improved code quality.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive styling.
- **React Router**: Manages navigation between pages in the app.
- **Axios**: HTTP client for making API requests.
- **React Helmet**: Manages page titles and metadata.

## How to Run the Project

Follow the steps below to run the project locally.

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Steps

1.  Clone the repository:

```
git clone https://github.com/rafaelpalma88/test-hp.git
cd harry-potter-app
```

2.  Install dependencies:

```
npm install
```

3.  Start the development server:

```
npm run dev
```

4.  Access the application:

```
http://localhost:5173
```

## Project Structure

Here’s an overview of the project structure:

```
harry-potter-app/
├── public/              # Static files (images, icons, etc.)
├── src/
│   ├── components/      # Reusable components
│   ├── contexts/        # React contexts (global state management)
│   ├── hooks/           # Custom hooks
│   ├── interfaces/      # TypeScript interfaces
│   ├── pages/           # Application pages
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## How to Contribute

Contributions are welcome! Follow these steps:

1.  Fork the repository.
2.  Create a branch for your feature (git checkout -b feature/new-feature).
3.  Commit your changes (git commit -m 'Add new feature').
4.  Push to the branch (git push origin feature/new-feature).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License.

**Have fun exploring the magical world of Harry Potter!** 🪄✨
