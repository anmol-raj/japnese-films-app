import { Typography } from "@mui/material";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Meta, useLoaderData } from "@remix-run/react";

// export const meta: MetaFunction = () => {
//   return {
//     title: "HomePage",
//     description: "Japanese Movies app..",
//   };
// };
export const loader: LoaderFunction = () => {
  return { message: "Homepage..." };
};

export default function Index() {
  const data = useLoaderData();
  return (
    <>
      {/* <head>
        <Meta />
      </head> */}
      <div>
        <Typography variant="h3">{data.message}</Typography>
      </div>
    </>
  );
}
