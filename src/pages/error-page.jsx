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
