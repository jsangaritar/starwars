const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "60%",
        margin: "0 auto",
        perspective: "450px",
      }}
    >
      <div
        style={{
          textAlign: "justify",
          color: "var(--main-color)",
          fontSize: "3vw",
          fontWeight: "bold",
          position: "relative",
          transform: "rotateX(20deg)",
        }}
      >
        <h1>STAR WARS</h1>
        <h2>Welcome to this universe.</h2>
        <p>You can now look into characters and films of this saga.</p>
      </div>
    </div>
  );
};

export default Home;
