'use client';

// @use client
// eslint-disable-next-line import/order
import { Button } from "leafui";
// Page.tsx
import React from "react";

const Page = () => (
  <Button onClick={() => { console.log("HI"); }}>
    Hello
  </Button>
);

export default Page;

