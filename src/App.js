import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Tesseract from "tesseract.js";
import frontLogo from './frontLogo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        displayResult(text);
      })
    }
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo"/>*/}
            {/*<p>*/}
            {/*  Edit <code>src/App.js</code> and save to reload.*/}
            {/*</p>*/}
            {/*<a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*>*/}
            {/*  Learn React*/}
            {/*</a>*/}
            <div className="logo">
              <img width="321" height="93" src={frontLogo} />
            </div>
            <h1 className="text">
              An app created for HackGT
            </h1>

            <h5 className="text">
              by Aditya Tapshalkar, Ibrahima Diallo, Siddhant Singh, and William Braga
            </h5>

            <br />

            <hr width="75%" />

            <p className="text" align="justify">
              What is blocGT? blocGT is a platform where you can upload pictures of block-based code, which will then convert your block-based code into functioning Arduino code.
              <br />
              We implemented React and Tesseract to build the website and process the image, and used _____ to convert the resulting image into Arduino code.
            </p>

            <br />
            <br />

            <h3 className="text" align="center">
              Upload image below!
            </h3>

            <div className="fileUpload">
              <input type="file" onChange={this.onFileChange} />
            </div>

          </header>






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

function displayResult(text) {
  const element = (
    <div>
      <h1>{text}</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

export default App;
