import Footer from "@/components/(root)/Footer";
import Nav from "@/components/(root)/nav";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      {/* Navbar at top */}
      {/* <header className="z-40">
        <Nav />
      </header> */}

      {/* Main content expands to fill space */}
      <main className="flex-grow">{children}</main>

      {/* Footer always at bottom */}
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}
