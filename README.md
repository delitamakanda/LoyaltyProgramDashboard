# Loyalty Program Dashboard

This project is a React and TypeScript application built with [Vite](https://vitejs.dev/). It provides a dashboard interface for managing a loyalty program where users, rewards and transactions can be viewed or edited. The repository started from the Vite template and includes ESLint and other development tooling out of the box.

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start a development server with hot reload:

   ```bash
   npm run dev
   ```

3. Create a production build:

   ```bash
   npm run build
   ```

4. Preview the production build locally:

   ```bash
   npm run preview
   ```

## Project Structure

The application code lives in the `src` directory:

- **assets** – static files bundled by Vite.
- **components** – reusable UI components.
- **features** – page level components for clients, rewards and transactions.
- **layouts** – layout wrappers used by the router.
- **routes** – route definitions used by React Router.
- **services** – small modules for API calls and helper utilities.

Static files placed in `public` are served at the root during development and copied to the build output.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Running Tests

To execute unit tests, run:

```bash
npm test
```

## License

This project is licensed under the [MIT License](LICENSE).
