# **Star Wars Explorer**

A React-based application for exploring characters and films from the Star Wars universe, built with **Vite**, **TypeScript**, **React Router**, and **React Query**. It uses the [SWAPI API](https://swapi.dev/) for data.

---

## **Features**

- **Films and Characters:** View paginated lists of Star Wars films and characters.
- **Search and Filter:** Search characters or films by name.
- **Pagination:** Navigate through multiple pages of results.

---

## **Getting Started**

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or newer)
- **npm** or **yarn**

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## **Running the Project**

### Development Mode

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

This will start the development server and the app will be accessible at [http://localhost:5173](http://localhost:5173) by default.

### Build for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## **Project Structure**

```plaintext
├── src
│   ├── components        # Reusable UI components (Card, Pagination, Topbar, etc.)
│   ├── pages             # Main pages (Films, Characters)
│   ├── utils             # Utility functions (e.g., debounce)
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public                # Static assets
├── README.md             # Project documentation
├── package.json          # Dependency and scripts configuration
└── vite.config.ts        # Vite configuration
```

---

## **Technologies Used**

- **Vite**: Fast build tool for modern web development.
- **React**: UI library for building the user interface.
- **TypeScript**: Adds type safety and better developer experience.
- **React Router**: For client-side routing.
- **React Query**: For managing server state and caching.

---

## **How to Use**

1. Navigate to the homepage, where you can choose to explore **Films** or **Characters**.
2. Use the search bar on the pages to filter results by name or title.
3. Navigate through results using the pagination controls.

---

## **API Information**

This app consumes the [SWAPI API](https://swapi.dev/). Here are the main endpoints used:

- **Characters**: `https://swapi.dev/api/people/`
- **Films**: `https://swapi.dev/api/films/`

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.
