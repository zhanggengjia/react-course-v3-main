import { useLoaderData } from "react-router-dom"
import axios from 'axios'
import CocktailList from "../components/CocktailList";
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      // Default to 'a' if no search term is provided since API has changed
      searchTerm = searchTerm || 'a';
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    }
  }
}

export const loader = (queryClient) => async ({ request }) => {
  const url = new URL(request.url);

  // 'search' coming from the name of form
  const searchTerm = url.searchParams.get('search') || 'a';

  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))

  return ({ searchTerm })
  // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  // return { drinks: response.data.drinks, searchTerm };
}

const Landing = () => {
  const { searchTerm } = useLoaderData();
  // const { drinks, searchTerm } = useLoaderData();

  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing