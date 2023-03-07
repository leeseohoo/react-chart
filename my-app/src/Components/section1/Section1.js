import React from "react";
import main from './main.png';

const Section1 = () => {
    return (
        <div className="section">
            <a name="target1"></a>            
            <div className="name">
                Project_OCEAN LAB
                <p/>
            </div>
            <img className="main" src={main} width="600px" alt="main"/>
            <div className="main-introduction">
                <div className="title"><h3>불법외국어선 단속강화</h3></div>
                <h4>해경특수기동대원 원격 생체신호 모니터링 시스템</h4>
            </div>
            <h3 className="back">Scroll down🙋‍♀️</h3>
        </div>
    )
}

export default Section1