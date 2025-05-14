import { useEffect } from 'react';
import './Ruby.css'

function Ruby() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jsdelivr.net/npm/@ruby/3.4-wasm-wasi@2.7.1/dist/browser.script.iife.js';
    document.body.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src = '/ruby_page.rb';
    script2.type = 'text/ruby';
    document.body.appendChild(script2);
    return () => {};
  }, []);

  return (
    <>
      <div className='title'>kenttcraneのページ</div>
      <h2>黒澤ルビィ　格言</h2>
      <div id='ruby_output'>
        <br />
        <div><img src='/images/ruby.png' className='ruby_img' /></div>
        <br />
      </div>
      <button id='button'>格言を見る</button>
    </>
  )
}

export default Ruby
