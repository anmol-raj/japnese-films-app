import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "HomePage",
    description: "Japanese Movies app..",
  };
};
export const loader: LoaderFunction = () => {
  return { message: "Homepage..." };
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        padding: "4rem",
      }}
    >
      <Typography>{data.message}</Typography>
    </div>
  );
}
