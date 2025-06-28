import data from './data';
import Question from './Question';

const App = () => {
  const questionList = data;

  return (
    <main>
      <div className='container'>
        <h1>Questions</h1>
        <div>
          {questionList.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default App;
