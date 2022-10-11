import { Typography } from "@mui/material";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Meta, useLoaderData } from "@remix-run/react";
import styles from "~/styles/global.css";

// export const meta: MetaFunction = () => {
//   return {
//     title: "HomePage",
//     description: "Japanese Movies app..",
//   };
// };

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export const loader: LoaderFunction = () => {
  return { message: "Homepage..." };
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div>
      <Typography variant="h3">{data.message}</Typography>
    </div>
  );
}
