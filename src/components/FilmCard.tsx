import { Film } from "../types/film";

type FilmCardProps = {
  film: Film;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "0.25rem",
        boxShadow: "0px 0px 5px gray",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <h2 style={{ margin: 0 }}>{film.title}</h2>
      <div style={{ fontSize: "0.825rem" }}>
        <p style={{ margin: 0 }}>
          <strong>Director:</strong> <span>{film.director}</span> |{" "}
          <strong>Producer:</strong> <span>{film.producer}</span> |{" "}
          <strong>Release Date:</strong>{" "}
          <span>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "medium",
            }).format(new Date(film.release_date))}
          </span>
        </p>
        <hr />
      </div>
      <p style={{ margin: 0 }}>{film.opening_crawl}</p>
    </div>
  );
};

export default FilmCard;
