import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setinput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini Pro</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult
          ? <>
            <div className="greet">
              <p>
                <span>Hello There,</span>
              </p>
              <p>How can i help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>What is react and it's market worth</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>What is react and it's market worth</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>What is react and it's market worth</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>What is react and it's market worth</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
          :
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" /> {loading ?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div> :
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setinput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter Your Prompt Here.."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
