import React, { ReactNode, useState } from "react";
import { Header } from "./Header";
import AvatarComponent from "./AvatarComponent";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import "../style/Layout.css";
import { MainContent } from "./MainContent";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({}) => {
  const myName = "Eszter Kövesdi";
  const [activeContent, setActiveContent] = useState("repositories");
  return (
    <>
      <Header name={myName} />
      <div className="app-container">
        <main className="content">
          <div className="avatar-and-content">
            <AvatarComponent />
            <div className="main-content">
              <Navbar setContent={setActiveContent} />
              <MainContent activeContent={activeContent} />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
