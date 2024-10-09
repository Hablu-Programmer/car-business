<h1 align="center">Car Business</h1>

1. Project Create

   Step: 1

   ```bash
      bun create vite car-business
   ```

   Step: 2

   ```bash
      cd car-business
      bun install
   ```

   Step: 3 `(Hello World)`

   - Remove `App.css` file
   - All code remove and print Hello World in `App.jsx`

2. TailwindCss setup & installation
   ```bash
      bun add -d tailwindcss
      bun tailwindcss init
   ```
   - Configure your template paths
   ```JS
      /** @type {import('tailwindcss').Config} */
      export default {
      content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
      theme: {
         extend: {},
      },
      plugins: [],
      };
   ```
   - Add the Tailwind directives to your CSS in `index.css`
   ```CSS
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
   ```
3. Update title and favicon in `index.html`
