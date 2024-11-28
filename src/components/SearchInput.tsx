type SearchInputProps = React.ComponentProps<"input">;

const SearchInput = ({ style = {}, ...props }: SearchInputProps) => {
  return (
    <input
      style={{
        marginBottom: "1rem",
        minHeight: "2rem",
        padding: "0.5rem 1rem",
        width: "calc(100% - 2.25rem)",
        ...style,
      }}
      {...props}
    />
  );
};

export default SearchInput;
