import React, {useState, useEffect} from 'react';
import './GirigiriMain.css'

const Popup = ({ message, onClose }) => {
  const [rankData, setRankData] = useState(null);
  useEffect(() => {
    fetch("/json/rank")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setRankData(json);
      })
  }, []);
  return (
    <div className="fixed rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 bg-opacity-70 p-4 shadow-lg">
        <div className="popup">
        <div className="popup-content">
            <div align="right"><button align="right" className="close-btn flex items-center justify-center rounded-md bg-red-700 text-white w-8 h-8 text-xl scale-60" onClick={onClose}>✕</button></div>
            <p className="m-6" align="center">{message}</p>
            <p align="center">ランキング</p>
            {rankData ? (<table border="1" width="100%">
              <tr>
                <td>1位</td><td>{rankData[0].name}</td><td>{rankData[0].count}マス</td>
              </tr>
              <tr>
                <td>2位</td><td>{rankData[1].name}</td><td>{rankData[1].count}マス</td>
              </tr>
              <tr>
                <td>3位</td><td>{rankData[2].name}</td><td>{rankData[2].count}マス</td>
              </tr>
              <tr>
                <td>4位</td><td>{rankData[3].name}</td><td>{rankData[3].count}マス</td>
              </tr>
              <tr>
                <td>5位</td><td>{rankData[4].name}</td><td>{rankData[4].count}マス</td>
              </tr>
            </table>) : <p align="left">Loading...</p>}
        </div>
        </div>
    </div>
  );
};

export default Popup;

