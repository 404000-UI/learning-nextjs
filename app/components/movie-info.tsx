import styles from "../styles/movie-info.module.css";
import { MovieInterface, URL } from "../(home)/page";

export const getMovieById = async (id: string): Promise<MovieInterface> => {
  const response = await fetch(`${URL}/${id}`);
  const json = await response.json();
  return json;
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieById(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.info}>🌟️ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.overview}>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage ➡️
        </a>
      </div>
    </div>
  );
}
