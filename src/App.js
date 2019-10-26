import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tesseract from "tesseract.js";

class App extends Component {

  state = {
    imageSrc: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 4 / 3,
  };

  onFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const imageDataUrl = await readFile(e.target.files[0]);
      Tesseract.recognize(
          imageDataUrl,
          'eng',
          { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        console.log(text);
      })
    }
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>

          <div className="App">
            <input type="file" onChange={this.onFileChange} />
          </div>


        </div>
    );
  }
}

function readFile(file) {

  return new Promise(resolve => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file)
  })
}

export default App;
