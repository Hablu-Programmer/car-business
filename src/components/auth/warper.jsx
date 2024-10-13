import React from "react";

export const AuthWarper = ({ children }) => (
  <main className="p-7 flex flex-col-reverse lg:flex-row items-center justify-evenly gap-2.5">
    {children}
  </main>
);
