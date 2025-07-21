import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ value }} /> //pass value in child component, CocktailCard
        )}
      </section>
    </>
  )
}

export default HomeLayout