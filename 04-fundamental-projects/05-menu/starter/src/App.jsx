import { useEffect, useState } from "react";
import menu from "./data";
import Product from "./Product";
const App = () => {
  const [categories, setCategories] = useState([]);
  const [showItems, setShowItems] = useState(menu);

  useEffect(() => {
    const uniqeCategories = ['all', ...new Set(menu.map(item => item.category))];

    setCategories(uniqeCategories);
  }, []);

  const handleFilter = (selectItem) => {
    if (selectItem === 'all') {
      setShowItems(menu);
    } else {
      setShowItems(menu.filter((item) => item.category === selectItem))
    }
  }

  return (
    <main>
      <div className="menu">
        <h1 className="title">Menu</h1>
        <div className="title-underline"></div>
        <div className="btn-container">
          {categories.map((category, id) => (
            <button key={id} className="btn" onClick={() => handleFilter(category)}>{category}</button>
          ))}
        </div>
        <section className="section-center">
          {showItems.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </section>
      </div>
    </main>
  );
};
export default App;
