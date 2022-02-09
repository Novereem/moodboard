import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import ImageCard from './components/ImageCard.js';

function App() {
  return (
    <div className="App flex justify-center"  data-theme="mytheme">
      <div className='grid'>    
          <Card></Card>
          <ImageCard></ImageCard>
          <Card></Card>
          <ImageCard></ImageCard>
          <Card></Card>
          <ImageCard></ImageCard>
          <Card></Card>
      </div>
    </div>
  );
}

export default App;