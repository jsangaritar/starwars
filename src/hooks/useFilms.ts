import { keepPreviousData, useQuery } from "@tanstack/react-query";

const fetchFilms = async ({
  page,
  search,
}: {
  page: number;
  search: string;
}) => {
  const url = `https://swapi.dev/api/films/?page=${page}&search=${search}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error fetching films");
  return response.json();
};

const useFilms = (variables: { page: number; search: string }) => {
  return useQuery({
    queryKey: ["films", variables.page, variables.search],
    queryFn: () => fetchFilms(variables),
    placeholderData: keepPreviousData,
  });
};

export default useFilms;
