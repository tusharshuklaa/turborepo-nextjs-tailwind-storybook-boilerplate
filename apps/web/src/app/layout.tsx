import React from "react";
import '../styles/globals.css';

const Layout = ({ children }: any) => (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./images/leaf.png" />
        <title>LEAF</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );

export default Layout;
