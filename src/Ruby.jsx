function Ruby() {
  return (
    <>
      <div className='title'>kenttcraneのページ</div>
      <h2>黒澤ルビィ　格言</h2>
      <div id='ruby_output'></div>
      <button id="button">ほかの格言を見る</button>
      <script type='text/ruby' src='./ruby_page.rb'/>
    </>
  )
}

export default Ruby
