import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen max-w-screen dark:bg-neutral-900">
      <Header />
      <main className="flex-1 md:pt-12 pt-8 w-full">{children}</main>
      <Footer />
    </div>
  );
};
