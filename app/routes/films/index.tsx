import {
  Box,
  // Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Form, Link, Meta, useLoaderData } from "@remix-run/react";
import { Button } from "@tyke-invest/ui-library-v2";
import type { Film } from "~/api/films";
import { getFilms } from "~/api/films";

// export const meta: MetaFunction = () => {
//   return {
//     title: "Films | Studio Galibi...",
//     description: "List of films...",
//   };
// };

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  return getFilms(title);
};

export default function FilmsPage() {
  const films = useLoaderData<Film[]>();
  return (
    <>
      {/* <head>
        <Meta />
      </head> */}
      <Box pt={4} pl={4} pr={4} sx={{ margin: "auto" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" mb={2}>
            Search for Japanese Movies
          </Typography>
          <Form reloadDocument method="get">
            <TextField
              label="Search"
              type={"text"}
              name={"title"}
              placeholder="type a title..."
              variant="outlined"
              size="small"
            />
            <Button size="large" type="submit">
              Search
            </Button>
          </Form>
        </Grid>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent={"center"}
          mt={3}
          gap={2}
        >
          {" "}
          {films.map((film: any) => (
            <Link key={film.id} to={film.id} prefetch="none">
              <Card sx={{ maxWidth: 328, mb: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={film.movie_banner}
                  alt={film.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {film.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1.5}>
                    {film.original_title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {film.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Link>
          ))}
        </Grid>
      </Box>
    </>
  );
}
