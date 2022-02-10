import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card.jsx";
import ImageCard from "./components/ImageCard.jsx";
import Masonry from "masonry-layout";

function App() {
  return (
    <div className="App flex justify-center flex-col" data-theme="mytheme">
      <div className="header">
        <h1>Goedemorgen Marjan!</h1>
        <h2>Je hebt 2 nieuwe berichten.</h2>
      </div>

      <div className="grid">
        <Card></Card>
        <ImageCard></ImageCard>
      </div>
    </div>
  );
}

window.onload = () => {
  const grid = document.querySelector(".grid");
  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    gutter: 10,
  });
};

export default App;
