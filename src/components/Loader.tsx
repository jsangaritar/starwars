type LoaderProps = {
  message?: string;
};

const Loader = ({ message = "Loading ..." }: LoaderProps) => {
  return (
    <div className="pulse" style={{ position: "relative" }}>
      <p
        style={{
          position: "absolute",
          top: "0.5rem",
          left: "50%",
        }}
      >
        {message}
      </p>
      <img src="/star_wars.png" style={{ width: "100%" }} />
    </div>
  );
};

export default Loader;
