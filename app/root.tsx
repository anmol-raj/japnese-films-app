import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "~/styles/global.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "@tyke-invest/ui-library-v2";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Japanese Movies App using Remix.js",
  description: "An app to search japanese movies ",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={getTheme("light")}>
          <Outlet />
          <CssBaseline />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
