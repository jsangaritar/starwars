import { keepPreviousData, useQuery } from "@tanstack/react-query";

const fetchCharacters = async ({
  page,
  search,
}: {
  page: number;
  search: string;
}) => {
  const url = `https://swapi.dev/api/people/?page=${page}&search=${search}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error fetching characters");
  return response.json();
};

const useCharacters = (variables: { page: number; search: string }) => {
  return useQuery({
    queryKey: ["characters", variables.page, variables.search],
    queryFn: () => fetchCharacters(variables),
    placeholderData: keepPreviousData,
  });
};

export default useCharacters;
