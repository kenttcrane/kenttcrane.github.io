import { useRef, useState } from "react";

function Shuffle() {
    const minutesRef = useRef();
    const [isRunning, setIsRunning] = useState(false);

    const handleClick = async () => {
         if (isRunning) return; // 既に再生中なら何もしない
        setIsRunning(true);
        const minutes = parseInt(minutesRef.current.value, 10);
        const totalMs = minutes * 60 * 1000;
        const start = Date.now();
        window.speechSynthesis.getVoices();

        const utter = new SpeechSynthesisUtterance();
        utter.lang = "ja-JP";

        // random_words.jsonを取得
        const res = await fetch("/random_words.json");
        const words = await res.json();
        
        const intervalId = setInterval(() => {
            if (Date.now() - start >= totalMs) {
                clearInterval(intervalId);
                setIsRunning(false);
                alert("再生が終了しました。");
                return;
            }

            const word = words[Math.floor(Math.random() * words.length)];
            utter.text = word;

            const voices = window.speechSynthesis.getVoices();
            // Google日本語ボイスを優先して選択
            const googleJpVoice = voices.find(
                v => v.lang === "ja-JP" && v.name.includes("Google") && v.name.includes("日本語")
            );
            if (googleJpVoice) {
                utter.voice = googleJpVoice;
            }
                
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utter);
        }, 4000);
    }

    return (
        <>
        <div className='title'>kenttcraneのページ</div>
        <h2>認知シャッフル睡眠法用音声再生ページ</h2>
        <div id='shuffle_output'>
            <p>時間: <input id="minutes" type="number" defaultValue={15} ref={minutesRef} />分</p>
        </div>
        <button id='button' onClick={handleClick} disabled={isRunning}>再生</button>
        </>
    );
}

export default Shuffle;