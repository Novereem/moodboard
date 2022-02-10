import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    return (
      <div className="toevoegen">
        <div className="top">
          <h1>Wens Marjan beterschap</h1>
          <h2>Laat een foto, video, tekening of tekstbericht achter</h2>
        </div>
        <form className="form form-control">
          <div className="first">
            <input placeholder="Voornaam" class="input" type="text" />
            <input placeholder="Achternaam" class="input" type="text" />
          </div>
          <input placeholder="E-mail" class="input" type="text" />
          <textarea placeholder="Bericht" class="input" type="text"></textarea>
          <div className="bottom">
            <input type="file" />
            <button className="btn btn-primary">Verstuur bericht</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ImageCard;
