import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Tesseract from 'tesseract.js';
import App from './App';

// import Slider from '@material-ui/lab/Slider'
// import Cropper from 'react-easy-crop'
import './styles.css'

// class App2 extends React.Component {
//   state = {
//     imageSrc: null,
//     crop: { x: 0, y: 0 },
//     zoom: 1,
//     aspect: 4 / 3,
//   }
//
//   // onCropChange = crop => {
//   //   this.setState({ crop })
//   // }
//
//   // onCropComplete = (croppedArea, croppedAreaPixels) => {
//   //   console.log(croppedArea, croppedAreaPixels)
//   // }
//
//   // onZoomChange = zoom => {
//   //   this.setState({ zoom })
//   // }
//
//   onFileChange = async e => {
//     if (e.target.files && e.target.files.length > 0) {
//       const imageDataUrl = await readFile(e.target.files[0]);
// 	Tesseract.recognize(
// 		  imageDataUrl,
// 		  'eng',
// 		  { logger: m => console.log(m) }
// 		).then(({ data: { text } }) => {
// 		  console.log(text);
// 		})
// 		    }
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <input type="file" onChange={this.onFileChange} />
//       </div>
//       )
//   }
// }
//
// function readFile(file) {
//
//   return new Promise(resolve => {
//     const reader = new FileReader()
//     reader.addEventListener('load', () => resolve(reader.result), false);
//     reader.readAsDataURL(file)
//   })
// }

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
