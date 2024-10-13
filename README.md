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
      label,
      changeData,
      isNotValid,
      ...inputProps
    }) => {
      return (
        <div
          className={cn(
            "border rounded-lg border-outline pt-3 p-5",
            isNotValid && "border-red-500"
          )}
        >
          <label htmlFor={inputProps.name} className="text-xs text-foreground">
            {label}
          </label>
          <div className="flex justify-between items-center w-full gap-2.5">
            <input
              onChange={(e) => changeData(e.target.name, e.target.value)}
              className="w-full font-bold text-sm focus:outline-none placeholder:font-normal  bg-transparent"
              {...inputProps}
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

12. ### Design Step 2

    ```javascript
    import React, { useState } from "react";
    import { Button } from "../button";
    import { Input } from "../input";

    export const Step2 = ({ nextStep, changeData, data }) => {
      const [agree, setAgree] = useState(false);

      return (
        <form>
          <div className="space-y-2">
            <Input
              disabled
              icon="/icons/email.png"
              name="email"
              type="email"
              label="Email"
              value={data.email}
              isNotValid={false}
              changeData={changeData}
            />
            <div className="flex justify-between items-center gap-2">
              <Input
                disabled
                icon="/icons/email.png"
                name="firstName"
                type="test"
                label="First name"
                value={data.firstName}
                isNotValid={false}
                changeData={changeData}
              />
              <Input
                disabled
                icon="/icons/email.png"
                name="lastName"
                type="text"
                label="Last name"
                value={data.lastName}
                isNotValid={false}
                changeData={changeData}
              />
            </div>
            <Input
              disabled
              icon="/icons/email.png"
              name="password"
              type="password"
              label="Password"
              value={data.password}
              isNotValid={false}
              changeData={changeData}
            />
            <Input
              disabled
              icon="/icons/email.png"
              name="confirmPassword"
              type="text"
              label="Confirm password"
              value={data.confirmPassword}
              isNotValid={false}
              changeData={changeData}
            />
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

          <Button disabled={!agree || !isValidEmail()} onClick={nextStep}>
            Continue
          </Button>
        </form>
      );
    };
    ```

13. ### Add Auth Icons

    ```javascript
    export const Email = (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14"
        fill="none"
        {...props}
      >
        <path
          fill="currentColor"
          d="M14.012 4.012V2.5L8 6.262 1.988 2.5v1.512L8 7.738zm0-3.024q.597 0 1.02.457.456.458.456 1.055v9q0 .597-.457 1.055a1.34 1.34 0 0 1-1.02.457H1.989q-.598 0-1.054-.457A1.5 1.5 0 0 1 .512 11.5v-9q0-.597.422-1.055Q1.39.988 1.988.988z"
        />
      </svg>
    );

    export const Password = (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="17"
        fill="none"
        {...props}
      >
        <path
          fill="currentColor"
          d="M9.32 6.012V4.5q0-.95-.703-1.617A2.15 2.15 0 0 0 7 2.18q-.95 0-1.652.703A2.2 2.2 0 0 0 4.68 4.5v1.512zm-3.375 6.293q.458.457 1.055.457t1.055-.457q.457-.458.457-1.055t-.457-1.055T7 9.738t-1.055.457q-.456.458-.457 1.055 0 .597.457 1.055M11.5 6.012q.597 0 1.055.457.457.42.457 1.02v7.523q0 .598-.457 1.054a1.5 1.5 0 0 1-1.055.422h-9q-.597 0-1.055-.422-.457-.457-.457-1.054V7.488q0-.597.457-1.02.458-.456 1.055-.456h.738V4.5q0-1.546 1.09-2.637Q5.452.738 7 .738q1.547 0 2.637 1.125 1.125 1.09 1.125 2.637v1.512z"
        />
      </svg>
    );
    export const ConfirmPassword = (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        {...props}
      >
        <path
          fill="currentColor"
          d="m6.488 11.762 6.75-6.75-1.054-1.09-5.696 5.695-2.672-2.672L2.762 8zM2.691 2.727Q4.907.512 8 .512t5.273 2.215Q15.488 4.906 15.488 8t-2.215 5.309q-2.179 2.18-5.273 2.18t-5.309-2.18Q.511 11.094.511 8q0-3.093 2.18-5.273"
        />
      </svg>
    );
    export const Parson = (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="none"
        {...props}
      >
        <path
          fill="currentColor"
          d="M3.027 9.355Q5.101 8.512 7 8.512t3.938.843q2.074.81 2.074 2.145v1.512H.988V11.5q0-1.335 2.04-2.145M9.11 6.121A2.88 2.88 0 0 1 7 7q-1.23 0-2.11-.879a2.88 2.88 0 0 1-.878-2.11q0-1.23.879-2.109Q5.77.988 7 .988t2.11.914q.878.88.878 2.11t-.879 2.11"
        />
      </svg>
    );
    ```

14. ### Design Complete Step 2 Component

    ```javascript
    import React, { useState } from "react";
    import {
      ConfirmPassword,
      Email,
      Parson,
      Password,
    } from "../../../lib/icon";
    import { Button } from "../button";
    import { Input } from "../input";

    export const Step2 = ({ nextStep, changeData, data }) => {
      const [agree, setAgree] = useState(false);

      const handleRegister = () => {
        console.log(data);
        nextStep();
      };

      return (
        <form>
          <div className="space-y-2">
            <Input
              disabled
              icon={<Email />}
              name="email"
              type="email"
              label="Email"
              value={data.email}
              isNotValid={false}
              changeData={changeData}
            />
            <div className="flex justify-between items-center gap-2">
              <Input
                icon={<Parson />}
                name="firstName"
                type="test"
                label="First name"
                placeholder="First name"
                value={data.firstName}
                isNotValid={false}
                changeData={changeData}
              />
              <Input
                icon={<Parson />}
                name="lastName"
                type="text"
                label="Last name"
                placeholder="Last name"
                value={data.lastName}
                isNotValid={false}
                changeData={changeData}
              />
            </div>
            <Input
              icon={<Password />}
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              value={data.password}
              isNotValid={false}
              changeData={changeData}
            />
            <Input
              icon={<ConfirmPassword />}
              name="confirmPassword"
              type="password"
              label="Confirm password"
              placeholder="Confirm password"
              value={data.confirmPassword}
              isNotValid={false}
              changeData={changeData}
            />
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

          <Button disabled={!agree} onClick={handleRegister}>
            Continue
          </Button>
        </form>
      );
    };
    ```

15. ### Add Register functionally

    ```javascript
    import React, { useState } from "react";
    import {
      ConfirmPassword,
      Email,
      Parson,
      Password,
    } from "../../../lib/icon";
    import { Button } from "../button";
    import { Input } from "../input";

    // Mock function to simulate saving data to a database
    const saveRegistrationData = (data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Data saved successfully", data);
        }, 1000); // Simulating async database call
      });
    };

    export const Step2 = ({ nextStep, changeData, data }) => {
      const [agree, setAgree] = useState(false);

      const handleRegister = async (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (
          !data.email ||
          !data.firstName ||
          !data.lastName ||
          !data.password ||
          !data.confirmPassword
        ) {
          setError("Please fill in all the fields.");
          return;
        }

        // Check if passwords match
        if (data.password !== data.confirmPassword) {
          setError("Passwords do not match!");
          return;
        }

        // All checks passed, save data (e.g., send to backend/database)
        try {
          // Simulate API call or database save
          await saveRegistrationData(data);

          // Proceed to the next step after successful registration
          console.log("User registered successfully", data);
          nextStep(3);
        } catch (error) {
          setError("An error occurred while registering. Please try again.");
          console.error("Registration Error:", error);
        }
      };

      return (
        <form>
          <div className="space-y-2" onSubmit={handleRegister}>
            <Input
              disabled
              icon={<Email />}
              name="email"
              type="email"
              label="Email"
              value={data.email}
              isNotValid={false}
              changeData={changeData}
            />
            <div className="flex justify-between items-center gap-2">
              <Input
                icon={<Parson />}
                name="firstName"
                type="test"
                label="First name"
                placeholder="First name"
                value={data.firstName}
                isNotValid={false}
                changeData={changeData}
              />
              <Input
                icon={<Parson />}
                name="lastName"
                type="text"
                label="Last name"
                placeholder="Last name"
                value={data.lastName}
                isNotValid={false}
                changeData={changeData}
              />
            </div>
            <Input
              icon={<Password />}
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              value={data.password}
              isNotValid={false}
              changeData={changeData}
            />
            <Input
              icon={<ConfirmPassword />}
              name="confirmPassword"
              type="password"
              label="Confirm password"
              placeholder="Confirm password"
              value={data.confirmPassword}
              isNotValid={false}
              changeData={changeData}
            />
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

          <Button type="submit" disabled={!agree} onClick={handleRegister}>
            Continue
          </Button>
        </form>
      );
    };
    ```

16. ### Update `nextStep` function

    ```javascript
    const nextStep = (propsStep) => {
      const step1 = data.email;
      const step2 =
        data.firstName ||
        data.lastName ||
        data.password ||
        data.confirmPassword;
      const stepNo =
        (step === 1 && step1 && 2) ||
        (step === 2 && step2 && propsStep) ||
        2 ||
        1;
      setStep(stepNo);
    };
    ```

17. ### Step 3 Component Add and update `RegisterRight` Component

    - `Step3.jsx`

      ```javascript
      import React from "react";
      import { Button } from "../button";

      export const Step3 = ({ email }) => {
        return (
          <div className="flex flex-col justify-center items-center gap-[30px] ">
            <img src="/img/thank-you.png" alt="" />
            <div className="space-y-1.5 text-center">
              <h1 className="font-bold text-[36px] leading-[48px]">
                Thank you!
              </h1>
              <p className="text-sm text-[#9A9EA7]">
                We sent an email to {email} Click confirmation link in the email
                to verify your account
              </p>
            </div>
            <Button className="mt-2.5">Open Email App & Confirm</Button>
          </div>
        );
      };
      ```

    - `RegisterRight.jsx`

      ````html
      <section className="py-[70px] w-full max-w-[455px]">
        {/_ Header _/} {step !== 3 && (
        <header title="{stepData().title}" subTitle="{stepData().subtitle}" />
        )} {/_ Authentication Form _/}
        <div className="w-full max-w-[420px] mx-auto pt-[42px]">
          {step === 3 ? <Step3 email="{data.email}" /> : stepData().main}
        </div>
      </section>
      ```
      ````

18. ### Update `AuthLeft.jsx`

    ```javascript
    import { Link } from "react-router-dom";

    export const AuthLeft = ({ label, link, buttonText }) => {
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
            <h6 className="font-semibold text-xs md:text-base">{label}</h6>
            <Link to={link}>
              <button className="bg-primary font-bold text-sm text-white text-center py-3 px-8 rounded-[10px]">
                {buttonText}
              </button>
            </Link>
          </div>
        </section>
      );
    };
    ```

    - update `register.jsx`
      ```javascript
      <AuthLeft
        link="/login"
        buttonText={<>Sign&nbsp;In</>}
        label="Do you already have an account?"
      />
      ```

19. ### Create AuthWarper Component and warp login and registration page

    ```javascript
    import React from "react";

    export const AuthWarper = ({ children }) => (
      <main className="p-7 flex flex-col-reverse lg:flex-row items-center justify-evenly gap-2.5">
        {children}
      </main>
    );
    ```

    - wrap like this:

      ```javascript
      export const Login = () => {
        return (
          <AuthWarper>
            <AuthLeft
              link="/register"
              buttonText="Sign Up"
              label="You don’t have an account?"
            />
            <LoginRight />
          </AuthWarper>
        );
      };
      ```

20. ### Create LoginRight Component and Design
