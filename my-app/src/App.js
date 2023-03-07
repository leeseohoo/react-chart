import React from "react";
import "./App.css";
import Nav from "./Components/nav/Nav";
import Section1 from "./Components/section1/Section1";
import Section2 from "./Components/section2/Section2";
import Detail1 from "./Components/detail/Detail1";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/footer/Footer";
// import Main from "./Components/main";

function App() {
  return (
    <div>
      {/* <Nav/>
      <Section1/>
      <Section2/>
      <Detail/>
      <Footer/> */}
        <BrowserRouter>
          <Routes>
            {/* <Route path="/Main" element={<Main />} /> */}
            <Route path={"/"} element={<Home />} />
            <Route path="/Nav" element={<Nav />} />
            <Route path="/Section1" element={<Section1 />} />
            <Route path="/Section2" element={<Section2 />} />
            <Route path="/Detail1" element={<Detail1 />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

// import { Component } from 'react'
// import ApexCharts from 'react-apexcharts'

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [{
//         name: "heart rate",
//         data: [20, 35, 45, 60, 73, 82] // 심박수 : 60 ~ 100 beats
//       },
//       {
//         name: "breathing rate",
//         data: [2, 5, 7, 10, 13, 16] // 호흡수 : 1분에 12 ~ 20회
//       },
//       {
//         name: "body temperature",
//         data: [36, 36, 36, 37, 36, 37]
//       }],

//       options: {  
//         chart: {
//           zoom: {
//             enabled: false
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: 'straight'
//         },
//         title: {
//           text: 'Vital Signs',
//           align: 'left'
//         },
//         grid: {
//           row: {
//             colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//           },
//         },
//         xaxis: {
//           categories: ['10s', '20s', '30s', '40s', '50s', '60s'],
//         }
//       }
//     }
//   }
//   render() {
//     return (
//       <ApexCharts
//         options={this.state.options}
//         series={this.state.series}
//         typs='line'
//         width={500}
//         height={300}
//         />
//     );
//   }
// }