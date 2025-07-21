import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, HomeLayout, Landing, Error, Newsletter, Cocktail, SinglePageError } from './pages';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
        //loader: pre-load the data, execute before rendering
        // pass in queryClient for preventing query again if there is the same query before
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        errorElement: <SinglePageError />,
        element: <Newsletter />,
        action: newsletterAction, //Execute after rendering
      },
      {
        path: 'about',
        element: <About />,
      }
    ]
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
