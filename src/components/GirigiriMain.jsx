import React from 'react';
import Popup from './GirigiriPopup';
import './GirigiriMain.css'

const useState = React.useState;
const useEffect = React.useEffect;

function GirigiriMain() {
    const randomName = () => {
        const firstArray = ["高知", "愛知", "ドンキ", "耕地", "掃除", "食器", "装置", "ぼっち", "国旗", "氷", "コーチ"];
        const secondArray = ["喧噪", "テント", "マント", "ヒント", "感想", "担当", "言動", "観光", "遷都", "銭湯", "練度"];

        const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

        const result = randomElement(firstArray) + "の" + randomElement(secondArray);
        return result;
    }

    const readyOnClick = () => {
        setReady(true);
    };

    let audioContext;
    const playSound = (filename, volume = 1, loop = false) => {
        if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        fetch(filename)
        .then(response => response.arrayBuffer())
        .then(audioArrayBuffer => {
            return audioContext.decodeAudioData(audioArrayBuffer);
        })
        .then(audioBuffer => {
            var source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            var gainNode = audioContext.createGain();
            gainNode.gain.value = volume;
            source.connect(gainNode);
            gainNode.connect(audioContext.destination);
            if (loop) source.loop = true;
            source.start();
        })
        .catch(error => {
            console.error('音声ファイルの読み込みに失敗しました:', error);
        });
        /* 
        let audio = new Audio(filename);
        audio.volume = volume;
        audio.loop = loop;

        const playOnlyVisible = () => {
            if(document.visibilityState === 'hidden') {
                audio.pause();
            }else if(document.visibilityState === 'visible' && !audio.ended) {
                audio.play();
            }
        }
        document.addEventListener('visibilitychange', playOnlyVisible, false);
        if (!loop) {
            audio.addEventListener('ended', function() {
                document.removeEventListener('visibilitychange', playOnlyVisible, false);
                audio = null;  // 再生終了時に null に設定
            });
        }
        audio.currentTime = 0;
        if (document.visibilityState === 'visible') {
            audio.play();
        }
        */
    }

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const handleSubmit = (name, count) => {
        fetch("json/rank", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "name": name, "count": count }),
        });
    };

    const goal = "・・・ーーー・・・";
    // const goal = "・・";
    const [playerName, setPlayerName] = useState(randomName());
    const [str, setStr] = useState("");
    const [ready, setReady] = useState(false);
    const [clear, setClear] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (ready && !clear) {
                const newChar = Math.random() < 0.5 ? "・" : "ー";
                setStr((prevStr) => {
                    const updatedStr = prevStr + newChar;
                    if (updatedStr.length >= goal.length &&
                        updatedStr.substring(updatedStr.length - goal.length) === goal) {
                        setClear(true);
                        clearInterval(interval);
                        handleSubmit(playerName, updatedStr.length);
                        setTimeout(togglePopup, 1000);
                        playSound("/audio/dance.mp3", 1, true);
                    }
                    return updatedStr;
                });
                playSound(newChar === "・" ? "/audio/ton.mp3" : "/audio/tsu.mp3");
            }
        }, 200);
    }, [ready]);

    if (!ready) {
        return (
            <div className="m-4">
                <center>
                    <div class="text-4xl my-32">ボタンを押してスタート（音が鳴ります）</div>
                    <p>あなたの名前: <input className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} /> </p> 
                    <button onClick={readyOnClick} class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110 mt-5">Start</button>
                </center>
            </div>
        );
    } else if (!clear) {
        return (
            <div className="m-4">
                <div class="text-lg select-none" style="line-break:anywhere;">{str}</div>
            </div>
        );
    } else {
        return (
            <div className="m-4">
                <div class="text-lg select-none" style="line-break:anywhere;">{str.substring(0, str.length - goal.length)}<span class="text-red-600 text-lg select-none" style="line-break:anywhere;">{goal}</span></div>
                <div class="text-center"><img src="/image/dance.gif" alt="dance" class="inline-block" /></div>
                {isPopupOpen && <Popup message={`${str.length}マスで鳴らせた、棒人間も喜んでる！`} onClose={togglePopup} />}
            </div>
        );
    }
}

export default GirigiriMain;