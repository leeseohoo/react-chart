import React, { useState, useEffect } from "react";
import Nav from "./nav/Nav";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Footer from "./footer/Footer";

function Home() {
//     const [msg, setMsg] = useState('');
//   const conn = () => {
//     const webSocket = new WebSocket("ws://localhost:8080");
//     webSocket.onopen = () => {
//       console.log("웹소켓서버와 연결 성공");
//     };
//     webSocket.onmessage = (e) => {
//       console.log(`받은 데이터는: ${e.data}`);
//       setMsg(e.data);
//       console.log(msg);
//     };
//   };
//   useEffect(() => {
//     conn();
//   }, [msg]);

  return (
    <div>
      <Nav />
      <Section1 />
      <Section2 />
      <Footer />
      {/* <Temp /> */}
    </div>
  );
}

export default Home;
