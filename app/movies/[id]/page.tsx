import { MovieInterface } from "@/app/(home)/page";
import MovieInfo, { getMovieById } from "@/app/components/movie-info";
import MovieVideo from "@/app/components/movie-video";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const movie: MovieInterface = await getMovieById(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
