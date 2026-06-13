import styles from "../styles/home.module.css";
import { Metadata } from "next";
import Movie from "../components/movie";

export const metadata: Metadata = {
  title: "HOME",
};

export interface MovieInterface {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  homepage: string;
}

export const URL: string =
  "https://nomad-movies-2.nomadcoders.workers.dev/movies";

async function getMovies(): Promise<MovieInterface[]> {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
