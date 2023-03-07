import React from "react";
import a from './2.jpg';
import {Link} from "react-router-dom";


const Section2 = () => {
    return (
        <div className="section">
            <div className="experience">
            <a name="target2"></a>
                <p className="title">List of Members<span className="year">2021.xx.xx ~</span></p>
                <div className="contents1">
                <img className="photo" src={a} alt="agent"/>
                <Link to={"/Detail1"}>
                    <a><div id="data" className="click">Agent1</div><br/><div id="pw">ID : <br/>NAME : </div><div id="view">View details</div><br/></a>
                    <img className="photo" src={a} alt="agent"/>
                    <a><div id="data" className="click">Agent2</div><br/><div id="pw">ID : <br/>NAME : </div><div id="view">View details</div><br/></a>
                    <img className="photo" src={a} alt="agent"/>
                    <a><div id="data" className="click">Agent3</div><br/><div id="pw">ID : <br/>NAME : </div><div id="view">View details</div><br/></a>
                </Link>
                </div>
                <div className="contents2">
                    <img className="photo" src={a} alt="agent"/>
                    <a><div id="data" className="click">Agent4</div><br/><div id="pw">ID : <br/>NAME : </div><div id="view">View details</div><br/></a>
                    <img className="photo" src={a} alt="agent"/>
                    <a><div id="data" className="click">Agent5</div><br/><div id="pw">ID : <br/>NAME : </div><div id="view">View details</div><br/></a>
                    <img className="photo" src={a} alt="agent"/>
                    <a><div id="data" className="click">Agent6</div><br/><div id="pw">ID : <br/>NAME : </div><div id="view">View details</div><br/></a>
                </div>
                <div className="contents3">
                    <img className="photo" src={a} alt="agent"/>
                    <a><div id="data" className="click">Agent7</div><br/><div id="pw">ID : <br/>NAME : </div><div id="view">View details</div><br/></a>
                    <img className="photo" src={a} alt="agent"/>
                    <a><div id="data" className="click">Agent8</div><br/><div id="pw">ID : <br/>NAME : </div><div id="view">View details</div><br/></a>
                    <img className="photo" src={a} alt="agent"/>
                    <a><div id="data" className="click">Agent9</div><br/><div id="pw">ID : <br/>NAME : </div><div id="view">View details</div><br/></a>
                    <p/>
                </div>
            </div>
        </div>
    )
}

export default Section2