import React, { ReactNode } from "react";
import { Header } from "./Header";
import AvatarComponent from "./AvatarComponent";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({}) => {
  const myName = "Eszter Kövesdi";
  return (
    <div className="app-container">
      <Header name={myName} />
      <main className="content">
        <AvatarComponent></AvatarComponent>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
