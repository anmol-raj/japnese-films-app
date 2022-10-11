import { Typography } from "@mui/material";
import { LoaderFunction } from "@remix-run/node";
import { getFilmById } from "~/api/films";

export const loader: LoaderFunction = async ({ params }) => {
  // const film = await getFilmById(params.filmId);
  // return film;
};

export default function Film() {
  return (
    <>
      <Typography>I am Film</Typography>
    </>
  );
}
