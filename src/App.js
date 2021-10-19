import './App.css';
import Card from './components/Card';
import Data from './components/Data';

function App() {

  return (
    <>
      <h1 className="mr1">App component</h1>

      <Card
        imgsrc={Data[0].imgsrc}
        title={Data[0].title}
        sname={Data[0].sname}
        link={Data[0].link}
      />

<Card
        imgsrc={Data[1].imgsrc}
        title={Data[1].title}
        sname={Data[1].sname}
        link={Data[1].link}
      />

    </>
  );
}

export default App;