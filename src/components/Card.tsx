const Card = ({ title }: { title: string }) => (
  <div
    style={{
      border: "1px solid #ccc",
      padding: "1rem",
      borderRadius: "8px",
      width: "150px",
      textAlign: "center",
    }}
  >
    <h3>{title}</h3>
  </div>
);

export default Card;
