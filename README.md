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
             "foreground-dark": "#9A9EA7",
             outline: "#EEEEEE",
           },
           fontFamily: {
             inter: ['"Inter"', "serif"],
           },
         },
       },
       plugins: [],
     };
     ```

   - add font in `index.html` (**class="font-inter"**)

     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <link rel="icon" type="image/svg+xml" href="/logo.svg" />
         <meta
           name="viewport"
           content="width=device-width, initial-scale=1.0"
         />
         <title>Car Business</title>
       </head>
       <body>
         <div id="root" class="font-inter"></div>
         <script type="module" src="/src/main.jsx"></script>
       </body>
     </html>
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

   - add page `pages` folder and create some component
   - `home.jsx` create starting component
   - `register.jsx` create starting component
   - `login.jsx` create starting component
   - `error.jsx`

     ```javascript
     import { useRouteError } from "react-router-dom";

     export const ErrorPage = () => {
       const error = useRouteError();
       console.error(error);

       return (
         <div className="min-h-svh w-full flex justify-center items-center flex-col gap-5">
           <h1 className="font-bold text-3xl">Oops!</h1>
           <p className="text-lg text-lime-800">
             Sorry, an unexpected error has occurred.
           </p>
           <p className="text-slate-600 font-semibold">
             <i>{error.statusText || error.message}</i>
           </p>
         </div>
       );
     };
     ```

   - create with navbar component in `router/width-navbar`

     ```javascript
     import { Navbar } from "../components/Navbar";

     export const WithNavbar = ({ main }) => {
       return (
         <>
           <Navbar />
           {main}
         </>
       );
     };
     ```

   - create `router/index.js`

     ```javascript
     import { createBrowserRouter } from "react-router-dom";
     import ErrorPage from "../error-page";
     export const router = createBrowserRouter([
       {
         path: "/",
         element: <WithNavbar main={<Home />} />,
         errorElement: <ErrorPage />,
       },
       {
         path: "/register",
         element: <Register />,
       },
       {
         path: "/login",
         element: <Login />,
       },
     ]);
     ```

   - home page
     ```javascript
     export const Home = () => {
       return (
         <main className="min-h-svh w-full flex justify-center items-center">
           <h1 className="text-5xl font-bold text-green-500">Hello World</h1>
         </main>
       );
     };
     ```
   - Register page initial setup

     ```javascript
     export const Register = () => {
       return (
         <main className="p-7 flex flex-col-reverse lg:flex-row items-center justify-evenly gap-2.5">
           <AuthLeft />
           <RegisterRight />
         </main>
       );
     };
     ```

     - Create AuthLeft section

       ```javascript
       import { Link } from "react-router-dom";

       export const AuthLeft = () => {
         return (
           <section className="relative w-fit text-white">
             <img
               src="/img/auth-left.png"
               alt="Auth Left Image"
               className="w-full max-w-[500px] lg:max-w-fit lg:w-[500px] xl:w-auto"
             />
             {/* top */}
             <div className="absolute w-[90%] max-w-[497px] top-[30px] left-[30px] lg:top-[80px] xl:top-[120px] lg:left-[40px] xl:left-[60px] z-10">
               <h1 className="font-bold text-xl md:text-5xl xl:text-[62px]">
                 A new way to buy and sell cars
               </h1>
             </div>

             {/* footer */}
             <div className="absolute w-full bottom-0 left-0 z-10 h-20 sm:h-[65px] xl:h-[86px] flex justify-between items-center px-2.5 sm:px-10 lg:px-[60px]">
               <h6 className="font-semibold text-xs md:text-base">
                 Do you already have an account?
               </h6>
               <Link to="/login">
                 <button className="bg-primary font-bold text-sm text-white text-center py-3 px-8 rounded-[10px]">
                   Sign&nbsp;In
                 </button>
               </Link>
             </div>
           </section>
         );
       };
       ```

     - Create AuthRight section

       - Create a new component `Register/right.jsx` in `components/auth`

         ```javascript
         import { SocialLogin } from "../SocialLogin";
         import { Header } from "./header";
         import { Step1 } from "./Step1";

         export const RegisterRight = () => {
           return (
             <section className="py-[70px] w-full max-w-[455px]">
               {/* Header */}
               <Header
                 title="Sign Up to getting started"
                 subTitle="Enter your details to proceed further"
               />

               {/* Authentication Form */}
               <div className="w-full max-w-[420px] mx-auto pt-[42px]">
                 {/* Step: 1 */}
                 <Step1 />

                 <SocialLogin />
               </div>
             </section>
           );
         };
         ```

       - Create a `header.jsx` in `Register` folder

         ```javascript
         import React from "react";

         export const Header = ({ title, subTitle }) => {
           return (
             <div className="flex flex-col justify-center items-center">
               <img src="/logo.svg" alt="Logo" />
               <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center pt-[34px]">
                 {title}
               </h1>
               <p className="text-sm text-foreground pt-[5px]">{subTitle}</p>
             </div>
           );
         };
         ```

       - Create a `Step1.jsx` in `Register` folder

         ```javascript
         import React from "react";

         export const Step1 = () => {
           return (
             <form>
               <div className="border rounded-lg border-outline pt-3 p-5">
                 <label htmlFor="email" className="text-xs text-foreground">
                   Email
                 </label>
                 <div className="flex justify-between items-center w-full gap-2.5">
                   <input
                     placeholder="Enter your email!"
                     type="email"
                     className="w-full font-bold text-sm focus:outline-none placeholder:font-normal"
                   />
                   <img src="/icons/email.png" alt="email icon" />
                 </div>
               </div>

               <div className="space-x-2.5 pt-[15px]">
                 <input type="radio" name="" id="" />
                 <span className="font-bold text-sm text-foreground">
                   I agree with terms & conditions
                 </span>
               </div>

               <button className="w-full bg-primary font-bold text-sm py-4 text-center rounded-[10px] text-white mt-[30px]">
                 Sign Up
               </button>
             </form>
           );
         };
         ```

8. ### create a next step functionally

   - `RegisterRight.jsx`

     ```javascript
     export const RegisterRight = () => {
       const [data, setData] = useState({
         email: "",
       });
       const [step, setStep] = useState(1);

       const changeData = (name, value) => setData({ ...data, [name]: value });
       const nextStep = () => {
         const stepNo =
           (step === 1 && data.email.length <= 1 && 2) ||
           (step === 2 && 2) ||
           1;
         setStep(stepNo);
       };

       const stepData = () => {
         switch (step) {
           case 1:
             return {
               main: (
                 <>
                   <Step1 nextStep={nextStep} changeData={changeData} />
                   <SocialLogin />
                 </>
               ),
               title: "Sign Up to getting started",
               subtitle: "Enter your details to proceed further",
             };
           case 2:
             return {
               main: <></>,
               title: "Tell us about yourself",
               subtitle: "Enter your details to proceed further",
             };

           default:
             return { main: <></>, title: "", subtitle: "" };
         }
       };

       return (
         <section className="py-[70px] w-full max-w-[455px]">
           {/* Header */}
           <Header title={stepData().title} subTitle={stepData().subtitle} />

           {/* Authentication Form */}
           <div className="w-full max-w-[420px] mx-auto pt-[42px]">
             {stepData().main}
           </div>
         </section>
       );
     };
     ```

   - `Step1.jsx`

     ```javascript
     import React, { useState } from "react";

     export const Step1 = ({ nextStep, changeData }) => {
       const [agree, setAgree] = useState(false);

       return (
         <form>
           <div className="border rounded-lg border-outline pt-3 p-5">
             <label htmlFor="email" className="text-xs text-foreground">
               Email
             </label>
             <div className="flex justify-between items-center w-full gap-2.5">
               <input
                 placeholder="Enter your email!"
                 type="email"
                 onChange={(e) => changeData(e.target.name, e.target.value)}
                 className="w-full font-bold text-sm focus:outline-none placeholder:font-normal"
               />
               <img src="/icons/email.png" alt="email icon" />
             </div>
           </div>

           <div className="space-x-2.5 pt-[15px]">
             <input
               type="checkbox"
               name=""
               id=""
               onChange={(e) => setAgree(e.target.checked)}
             />
             <span className="font-bold text-sm text-foreground">
               I agree with terms & conditions
             </span>
           </div>

           <button
             type="button"
             disabled={!agree}
             onClick={nextStep}
             className="w-full bg-primary font-bold text-sm py-4 text-center rounded-[10px] text-white mt-[30px] disabled:opacity-80 disabled:cursor-not-allowed"
           >
             Sign Up
           </button>
         </form>
       );
     };
     ```

9. ### Add cn function and Email Validity Check function

- pass email in `Step1.jsx` component
  ```javascript
  <Step1 email={data.email} nextStep={nextStep} changeData={changeData} />
  ```
- It will check if the email is correct and if it is wrong then the border color will show red

  - `isValidEmail` function
    ```javascript
    const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    ```
  - add `cn` function in `lib/utils/index.js`.

    ```javascript
    import { clsx } from "clsx";
    import { twMerge } from "tailwind-merge";

    export const cn = (...inputs) => twMerge(clsx(...inputs));
    ```

  - change input border color
    ```javascript
    className={cn(
      "border rounded-lg border-outline pt-3 p-5",
      email.length !== 0 && !isValidEmail() && "border-red-500"
    )}
    ```

10. ### Add Input Common component `Input.jsx`

    ```javascript
    import { cn } from "../../lib/utils";

    export const Input = ({
      icon,
      name,
      type,
      value,
      label,
      changeData,
      isNotValid,
      placeholder,
    }) => {
      return (
        <div
          className={cn(
            "border rounded-lg border-outline pt-3 p-5",
            isNotValid && "border-red-500"
          )}
        >
          <label htmlFor={name} className="text-xs text-foreground">
            {label}
          </label>
          <div className="flex justify-between items-center w-full gap-2.5">
            <input
              placeholder={placeholder}
              name={name}
              type={type}
              value={value}
              onChange={(e) => changeData(e.target.name, e.target.value)}
              className="w-full font-bold text-sm focus:outline-none placeholder:font-normal"
            />
            <img src={icon} alt="" />
          </div>
        </div>
      );
    };
    ```

11. ### Add Button Common Component

    ```javascript
    import React from "react";

    export const Button = ({
      children,
      disabled,
      type = "button",
      onClick,
    }) => {
      return (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className="w-full bg-primary font-bold text-sm py-4 text-center rounded-[10px] text-white mt-[30px] disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {children}
        </button>
      );
    };
    ```
