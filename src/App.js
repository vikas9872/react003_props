import logo from './logo.svg';
import './App.css';
import Props from './propsConcept'

function App() {
  return (
    <>
      {/* Passing single element as a prop */}
      <Props name="Vikas Shanabhog"/>
      {/* Passing multiple elements as props */}
      <MultipleElementsasProps name="Vikas" university="Global Academy of Technology"/>
    </>
  );
}

export default App;
