import { Navbar } from "../components/Navbar";

export const WithNavbar = ({ main }) => {
  return (
    <>
      <Navbar />
      {main}
    </>
  );
};
