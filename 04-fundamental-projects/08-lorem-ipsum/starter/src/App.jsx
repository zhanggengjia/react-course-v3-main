import { useState } from "react";
import ShowArea from "./ShowArea";
import TextArea2 from "./TextArea2";
import data from './data';

const App = () => {
  const [showNum, setShowNum] = useState(0);

  return (
    <main className="section-center">
      <h4 className="title">
        tired of boring lorem ipsum?
      </h4>
      <TextArea2 setShowNum={setShowNum} />
      <ShowArea data={data} showNum={showNum} />
    </main>
  );
};
export default App;
