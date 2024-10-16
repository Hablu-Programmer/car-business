import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-end items-center py-[25px] w-full max-w-screen-xl mx-auto">
      <Link to="/register">
        <button className="flex justify-center items-center gap-2.5 font-semibold text-sm text-foreground">
          <img src="/icons/auth.png" alt="Sign Up Icon" /> Sign Up
        </button>
      </Link>
    </nav>
  );
};
