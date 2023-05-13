import { ComponentWithChildren } from 'leafui';
import Head from 'next/head';
import React, { FC } from 'react';

const SITE_TITLE = 'LEAF';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PageProvider: FC<ComponentWithChildren> = ({ children: _children }) => (
  <Head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Learn how to build a personal website using Next.js"
    />
    <meta
      property="og:image"
      content={`https://og-image.vercel.app/${encodeURI(
        SITE_TITLE
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name="og:title" content={ SITE_TITLE } />
    <meta name="twitter:card" content="summary_large_image" />
    <title>{ SITE_TITLE }</title>
  </Head>
);
