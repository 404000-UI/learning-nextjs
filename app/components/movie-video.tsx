import styles from "../styles/movie-video.module.css";
import { URL } from "../(home)/page";

const getMovieVideoById = async (id: string): Promise<Video[]> => {
  const response = await fetch(`${URL}/${id}/videos`);
  const json = await response.json();
  return json;
};

interface Video {
  id: string;
  key: string;
  name: string;
}

export default async function MovieVideo({ id }: { id: string }) {
  const movie: Video[] = await getMovieVideoById(id);
  return (
    <div className={styles.container}>
      {movie.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}
