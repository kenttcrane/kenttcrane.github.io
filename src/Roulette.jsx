import './Roulette.css';
import { useState, useEffect, useRef, use } from "react";

const strMap = new Map();
strMap.set(0b111, ["あなた"]);
strMap.set(0b011, ["そなた", "かなた", "こなた", "どなた", "ひなた"]);
strMap.set(0b101, ["あおた", "あきた", "あくた", "あした", "あまた", "あがた", "あばた"]);
strMap.set(0b110, ["あなや", "あなご", "あなば"]);
strMap.set(0b100, ["あたま", "あらわ", "あばら"]);
strMap.set(0b010, ["たなだ", "ばなな"]);
strMap.set(0b001, ["かまた", "はかた"]);

const allChars = [[], [], []];
strMap.forEach((arr) => {
    arr.forEach((str) => {
        for (let i = 0; i < 3; i++) {
            allChars[i].push(str[i]);
        }
    });
});
for (let i = 0; i < 3; i++) {
    allChars[i] = [...new Set(allChars[i])];
}

function Roulette() {
    const [displayedChars, setDisplayedChars] = useState(["あ", "な", "た"]);
    // 最新のfixed値を参照するためのref
    const fixedStrRef = useRef(null);
    const isFixedRef = useRef([false, false, false]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedChars(prev => {
                const newChars = [...prev];
                if (!isFixedRef.current[0]) newChars[0] = allChars[0][Math.floor(Math.random() * allChars[0].length)];
                if (!isFixedRef.current[1]) newChars[1] = allChars[1][Math.floor(Math.random() * allChars[1].length)];
                if (!isFixedRef.current[2]) newChars[2] = allChars[2][Math.floor(Math.random() * allChars[2].length)];
                return newChars;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    function fixChar(startIndex) {
        if (!fixedStrRef.current) {
            let key = 0b000;
            key |= startIndex === 0 ? 0b100 : Math.random() < 0.2 ? 0b100 : 0;
            key |= startIndex === 1 ? 0b010 : Math.random() < 0.2 ? 0b010 : 0;
            key |= startIndex === 2 ? 0b001 : Math.random() < 0.2 ? 0b001 : 0;
            const arr = strMap.get(key);
            if (!arr) fixedStrRef.current = "えらー";
            else fixedStrRef.current = arr[Math.floor(Math.random() * arr.length)];
        }
        
        isFixedRef.current[startIndex] = true;
        setDisplayedChars(prev => {
            const newChars = [...prev];
            newChars[startIndex] = fixedStrRef.current[startIndex];
            return newChars;
        });
    }

    return (
        <>
        <div>
            <h1>ルーレット</h1>
            <p>チョコミントよりも...</p>
            <div className="roulette">
                <div className='roulette_cell'>
                    <div className="box" id="box1">{displayedChars[0]}</div>
                    <button className="stop_button" id="stop1" onClick={() => fixChar(0)}/>
                </div>
                <div className='roulette_cell'>
                    <div className="box" id="box2">{displayedChars[1]}</div>
                    <button className="stop_button" id="stop2" onClick={() => fixChar(1)}/>
                </div>
                <div className='roulette_cell'>
                    <div className="box" id="box3">{displayedChars[2]}</div>
                    <button className="stop_button" id="stop3" onClick={() => fixChar(2)}/>
                </div>
            </div>

            <button onClick={() => {
                setDisplayedChars(["あ", "な", "た"]);
                fixedStrRef.current = null;
                isFixedRef.current = [false, false, false];
            }} className="reset_button">リセット</button>
        </div>
        </>
    );
}

export default Roulette;