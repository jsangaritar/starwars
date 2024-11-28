import { Character } from "../types/character";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
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
      <h2 style={{ margin: 0 }}>{character.name}</h2>
      <div style={{ fontSize: "0.825rem" }}>
        <p
          style={{
            margin: 0,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.5rem",
          }}
        >
          <span>
            <strong>Birth Year:</strong> {character.birth_year}
          </span>
          <span>
            <strong>Gender:</strong> {character.gender}
          </span>
          <span>
            <strong>Height:</strong> {character.height}cm
          </span>
          <span>
            <strong>Weight:</strong> {character.mass}kg
          </span>
          <span>
            <strong>Hair Color:</strong> {character.hair_color}
          </span>
          <span>
            <strong>Eye Color:</strong> {character.eye_color}
          </span>
          <span>
            <strong>Skin Color:</strong> {character.skin_color}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
