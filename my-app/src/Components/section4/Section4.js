import React from "react";
import url from './url.png';

const Section4 = () => {
    return (
        <div className="section">
            <hr className="featurette-divider"/>
            <a name="target4"></a>
            <p className="major"><span>THE LATEST NEWS</span></p>
            <br/>
            <div className="article">
                <div className="news-img">
                    <img className="photos" src="#"/>
                    <img className="photos" src="#"/>
                    <img className="photos" src="#"/>
                    <img className="photos" src="#"/>
                    <img className="photos" src="#"/>
                    <br/>
                    <br/>
                </div>
                <hr className="featurette-divider"/>
                <p className="comment">For more Information✨ Click below</p>
                <div className="link">
                    <a href="https://cafe.naver.com/maritimesmartcloth">
                        <p>https://cafe.naver.com/maritimesmartclot</p>
                    </a>
                </div>
                <div className="thumb">
                    <a href="https://cafe.naver.com/maritimesmartcloth">
                        <img src={url} width="680" height="330"/>
                    </a>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Section4