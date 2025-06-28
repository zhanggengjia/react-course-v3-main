import List from "./components/List";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  return (
    <main>
      <div className='container'>
        <h2 className="title">Our Tours</h2>
        <div className="title-underline"></div>
        <List url={url} />
      </div>
    </main>
  );
};
export default App;
