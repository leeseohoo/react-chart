import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
// import arrayData from "./arrayData";
// import objectData from "./objectData";
import user1 from "./user1.json";
// import ApexChart from 'apexcharts'
// import ApexCharts from 'react-apexcharts'

const PADDING = 22;
const MAX_VALUE1 = 110; // 50~110
const MAX_VALUE2 = 22; // 10~22
const MAX_VALUE3 = 39; // 35~39
const Y_TICK = 4;
const DURATION = 1000 * 30; // 30s
const EX_TIME = "00:00";

function LineChart1({ id }) {
  let post1 = user1.heartrate;
  const [data, setData] = useState([[Date.now(), post1]]);  

  useEffect(() => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    const chartWidth = canvasWidth - 10;
    const chartHeight = canvasHeight - 22;
    const xFormatWidth = ctx.measureText(EX_TIME).width;
    let endTime, startTime, xTimeInterval;

    const setXInterval = () => {
      let xPoint = 0;
      let timeInterval = 1000;
      while (true) {
        xPoint = (timeInterval / DURATION) * chartWidth;
        if (xPoint > xFormatWidth) break;
        timeInterval *= 2;
      }

      xTimeInterval = timeInterval;
    };

    const setTime = () => {
      endTime = Date.now();
      startTime = endTime - DURATION;
      setXInterval();
    };

    const drawChart = () => {
      setTime();
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.beginPath();
      ctx.moveTo(PADDING, PADDING);
      // draw Y axis
      ctx.lineTo(PADDING, chartHeight);
      const yInterval = MAX_VALUE1 / Y_TICK;
      ctx.textAlign = "right";
      ctx.textBaseLine = "middle";
      for (let i = 0; i <= Y_TICK; i++) {
        const value = yInterval * i;
        const YPoint =
          chartHeight - (value / MAX_VALUE1) * (chartHeight - PADDING);
        ctx.fillText(value, PADDING - 3, YPoint); // 간격 3px
      }

      // draw X axis
      ctx.lineTo(chartWidth, chartHeight);
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      ctx.rect(PADDING, 0, chartWidth, canvasHeight);
      ctx.clip();

      let currentTime = startTime - (startTime % xTimeInterval);
      ctx.textBaseLine = "top";
      ctx.textAlign = "center";
      while (currentTime < endTime + xTimeInterval) {
        const xPoint = ((currentTime - startTime) / DURATION) * chartWidth;
        const date = new Date(currentTime);
        const text = date.getMinutes() + ":" + date.getSeconds();

        ctx.fillText(text, xPoint, chartHeight + PADDING);
        currentTime += xTimeInterval;
      }

      // draw data
      ctx.beginPath();
      data.forEach((datum, index) => {
        const [time, value] = datum;
        const xPoint = ((time - startTime) / DURATION) * chartWidth;
        const yPoint =
          chartHeight - (value / MAX_VALUE1) * (chartHeight - PADDING);

        if (!index) {
          ctx.moveTo(xPoint, yPoint);
        } else {
          ctx.lineTo(xPoint, yPoint);
        }
      });
      ctx.stroke();
      ctx.restore();
      window.requestAnimationFrame(drawChart);
    };

    const tick = () => {
      return setTimeout(() => {
        const before = data.length >= 30 ? data.slice(1) : data.slice();
        setData([...before, [Date.now(), post1]]);
        
        // console.log(data);
      }, 1000);
    };
    drawChart();
    tick();

    return () => clearTimeout(tick);
  }, [data]);

  return (
    <canvas id={id} width="600px" height="160px"></canvas>
  );
}

function LineChart2({ id }) {
  let post2 = user1.resp;
  const [data, setData] = useState([[Date.now(), post2]]);  

  useEffect(() => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    const chartWidth = canvasWidth - 10;
    const chartHeight = canvasHeight - 22;
    const xFormatWidth = ctx.measureText(EX_TIME).width;
    let endTime, startTime, xTimeInterval;

    const setXInterval = () => {
      let xPoint = 0;
      let timeInterval = 1000;
      while (true) {
        xPoint = (timeInterval / DURATION) * chartWidth;
        if (xPoint > xFormatWidth) break;
        timeInterval *= 2;
      }

      xTimeInterval = timeInterval;
    };

    const setTime = () => {
      endTime = Date.now();
      startTime = endTime - DURATION;
      setXInterval();
    };

    const drawChart = () => {
      setTime();
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.beginPath();
      ctx.moveTo(PADDING, PADDING);
      // draw Y axis
      ctx.lineTo(PADDING, chartHeight);
      const yInterval = MAX_VALUE2 / Y_TICK;
      ctx.textAlign = "right";
      ctx.textBaseLine = "middle";
      for (let i = 0; i <= Y_TICK; i++) {
        const value = yInterval * i;
        const YPoint =
          chartHeight - (value / MAX_VALUE2) * (chartHeight - PADDING);
        ctx.fillText(value, PADDING - 3, YPoint); // 간격 3px
      }

      // draw X axis
      ctx.lineTo(chartWidth, chartHeight);
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      ctx.rect(PADDING, 0, chartWidth, canvasHeight);
      ctx.clip();

      let currentTime = startTime - (startTime % xTimeInterval);
      ctx.textBaseLine = "top";
      ctx.textAlign = "center";
      while (currentTime < endTime + xTimeInterval) {
        const xPoint = ((currentTime - startTime) / DURATION) * chartWidth;
        const date = new Date(currentTime);
        const text = date.getMinutes() + ":" + date.getSeconds();

        ctx.fillText(text, xPoint, chartHeight + PADDING);
        currentTime += xTimeInterval;
      }

      // draw data
      ctx.beginPath();
      data.forEach((datum, index) => {
        const [time, value] = datum;
        const xPoint = ((time - startTime) / DURATION) * chartWidth;
        const yPoint =
          chartHeight - (value / MAX_VALUE2) * (chartHeight - PADDING);

        if (!index) {
          ctx.moveTo(xPoint, yPoint);
        } else {
          ctx.lineTo(xPoint, yPoint);
        }
      });
      ctx.stroke();
      ctx.restore();
      window.requestAnimationFrame(drawChart);
    };

    const tick = () => {
      return setTimeout(() => {
        const before = data.length >= 30 ? data.slice(1) : data.slice();
        setData([...before, [Date.now(), post2]]);
        
        // console.log(data);
      }, 1000);
    };
    drawChart();
    tick();

    return () => clearTimeout(tick);
  }, [data]);

  return (
    <canvas id={id} width="600px" height="160px"></canvas>
  );
}

function LineChart3({ id }) {
  let post3 = user1.temp;
  const [data, setData] = useState([[Date.now(), post3]]);  

  useEffect(() => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    const chartWidth = canvasWidth - 10;
    const chartHeight = canvasHeight - 22;
    const xFormatWidth = ctx.measureText(EX_TIME).width;
    let endTime, startTime, xTimeInterval;

    const setXInterval = () => {
      let xPoint = 0;
      let timeInterval = 1000;
      while (true) {
        xPoint = (timeInterval / DURATION) * chartWidth;
        if (xPoint > xFormatWidth) break;
        timeInterval *= 2;
      }

      xTimeInterval = timeInterval;
    };

    const setTime = () => {
      endTime = Date.now();
      startTime = endTime - DURATION;
      setXInterval();
    };

    const drawChart = () => {
      setTime();
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.beginPath();
      ctx.moveTo(PADDING, PADDING);
      // draw Y axis
      ctx.lineTo(PADDING, chartHeight);
      const yInterval = MAX_VALUE3 / Y_TICK;
      ctx.textAlign = "right";
      ctx.textBaseLine = "middle";
      for (let i = 0; i <= Y_TICK; i++) {
        const value = yInterval * i;
        const YPoint =
          chartHeight - (value / MAX_VALUE3) * (chartHeight - PADDING);
        ctx.fillText(value, PADDING - 3, YPoint); // 간격 3px
      }

      // draw X axis
      ctx.lineTo(chartWidth, chartHeight);
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      ctx.rect(PADDING, 0, chartWidth, canvasHeight);
      ctx.clip();

      let currentTime = startTime - (startTime % xTimeInterval);
      ctx.textBaseLine = "top";
      ctx.textAlign = "center";
      while (currentTime < endTime + xTimeInterval) {
        const xPoint = ((currentTime - startTime) / DURATION) * chartWidth;
        const date = new Date(currentTime);
        const text = date.getMinutes() + ":" + date.getSeconds();

        ctx.fillText(text, xPoint, chartHeight + PADDING);
        currentTime += xTimeInterval;
      }

      // draw data
      ctx.beginPath();
      data.forEach((datum, index) => {
        const [time, value] = datum;
        const xPoint = ((time - startTime) / DURATION) * chartWidth;
        const yPoint =
          chartHeight - (value / MAX_VALUE3) * (chartHeight - PADDING);

        if (!index) {
          ctx.moveTo(xPoint, yPoint);
        } else {
          ctx.lineTo(xPoint, yPoint);
        }
      });
      ctx.stroke();
      ctx.restore();
      window.requestAnimationFrame(drawChart);
    };

    const tick = () => {
      return setTimeout(() => {
        const before = data.length >= 30 ? data.slice(1) : data.slice();
        setData([...before, [Date.now(), post3]]);
        
        // console.log(data);
      }, 1000);
    };
    drawChart();
    tick();

    return () => clearTimeout(tick);
  }, [data]);

  return (
    <canvas id={id} width="600px" height="160px"></canvas>
  );
}

const Detail1 = () => {
  return (
    <div className="part">
      <div className="part1">
      {/* <p className="signal">Heart Rate</p> */}
      {<LineChart1 className="chart" id="HR_lineChart" />}
      </div>
      <div className="part2">
      {/* <p className="signal">Respiration Rate</p> */}
      {<LineChart2 className="chart" id="RR_lineChart" />}
      </div>
      <div className="part3">
      {/* <p className="signal">Body Temperature</p> */}
      {<LineChart3 className="chart" id="BT_lineChart" />}
      </div>
      {/* {<Getdata className="json" id="data" />} */}
    </div>
  );
}

export default Detail1;