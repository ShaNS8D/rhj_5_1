import Card from './components/Card';
import './App.css';

function App() {
  const description = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  const descriptionOther = "With supporting text below as a natural lead-in to additional content.";
  return (
    <div className='app'>
      <Card 
        title='Card title' 
        description={description}
        path= "#"
      >
        <img src="..." className="card-img-top" alt="Image cap" />
      </Card>
      <Card 
        title='Special title treatment'
        description={descriptionOther}
        path= "#"
      />
    </div>
  );
}

export default App;
