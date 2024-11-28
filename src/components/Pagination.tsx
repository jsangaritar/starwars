type ArrowButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const ArrowButton = ({ children, onClick, disabled }: ArrowButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        height: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        cursor: "pointer",
        background: "var(--main-color)",
        color: "inherit",
      }}
    >
      {children}
    </button>
  );
};

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePrev = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.25rem",
        color: "#333",
      }}
    >
      <ArrowButton onClick={handlePrev} disabled={currentPage <= 1}>
        &lt;
      </ArrowButton>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            height: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: page === currentPage ? "var(--main-color)" : "#ccc",
            color: "inherit",
            border: "none",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
      <ArrowButton onClick={handleNext} disabled={currentPage >= totalPages}>
        &gt;
      </ArrowButton>
    </div>
  );
};

export default Pagination;
