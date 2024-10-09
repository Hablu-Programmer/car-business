<h1 align="center">Car Business</h1>

1. ### Project Create

   - Step: 1

   ```bash
      bun create vite car-business
   ```

   - Step: 2

   ```bash
      cd car-business
      bun install
   ```

2. ### Update title and favicon in `index.html`

3. ### TailwindCss setup & installation

   ```bash
         bun add -d tailwindcss postcss autoprefixer
         bun tailwindcss init -p
   ```

   - Configure your template paths

   ```JS
      /** @type {import('tailwindcss').Config} */
      export default {
      content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
      ],
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

4. ### Printing `(Hello World)`

   - Remove `App.css` file
   - All code remove and print Hello World in `App.jsx`

   ```JSx
   const App = () => {
   return (
      <main className="min-h-svh w-full flex justify-center items-center">
         <h1 className="text-5xl font-bold text-green-500">Hello World</h1>
      </main>
   );
   };

   export default App;
   ```

5. ### Adding font family and theme color

   - Add Auth Icon (`/icon/auth.png`)
   - Add a font family and text color variable in the tailwind.config.js file

   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {
         colors: {
           primary: "#7963F0 ",
           foreground: "#9A9EA7",
         },
         fontFamily: {
           inter: ['"Inter"', "serif"],
         },
       },
     },
     plugins: [],
   };
   ```

6. ### Add only Auth Button in **`navbar`**

   ```jsx
   const App = () => {
     return (
       <main className="w-full max-w-[1200px] mx-auto px-[30px]">
         <nav className="flex justify-end items-center py-[25px]">
           <button className="flex justify-center items-center gap-2.5 font-semibold text-sm text-foreground">
             <img src="/icons/auth.png" alt="Sign Up Icon" /> Sign Up
           </button>
         </nav>
         <section className="min-h-svh w-full flex justify-center items-center">
           <h1 className="text-5xl font-bold text-green-500">Hello World</h1>
         </section>
       </main>
     );
   };

   export default App;
   ```

7. ### Setup React Router
   - install react-router-dom
   ```BASH
   bun add react-router-dom
   ```
