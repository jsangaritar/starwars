import { useMemo, useState } from "react";
import Pagination from "../components/Pagination";
import useCharacters from "../hooks/useCharacters";
import { Character } from "../types/character";
import CharacterCard from "../components/CharacterCard";
import debounce from "../utils/debounce";
import Loader from "../components/Loader";
import SearchInput from "../components/SearchInput";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const debouncedSearchHandler = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearch(value);
        setPage(1);
      }, 500),
    []
  );
  const { data, isLoading, isError, isFetching, isPlaceholderData } =
    useCharacters({
      page,
      search: debouncedSearch,
    });

  const isLoadingNewRecords = isFetching && isPlaceholderData;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSearchHandler(e.target.value);
  };

  if (isLoading) return <Loader />;
  if (isError) return <div style={{ color: "red" }}>Error loading data</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <SearchInput
        type="text"
        placeholder="Search characters..."
        value={search}
        onChange={handleSearchChange}
        style={{ marginBottom: "1rem" }}
      />
      {isLoadingNewRecords ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "grid",
            flexWrap: "wrap",
            gap: "1rem",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {data.results.map((character: Character) => (
            <CharacterCard key={character.url} character={character} />
          ))}
        </div>
      )}
      {!data.results?.length && <p>No characters found</p>}
      {Math.ceil(data.count / 10) > 1 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(data.count / 10)}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default Characters;
