import './App.css'

function App() {

  return (
    <>
      <div className='title'>kenttcraneのページ</div>

      <h2>アカウント一覧</h2>
      <div className='accounts'>
        <a href='https://github.com/kenttcrane'>
          <img src='./images/github_logo.svg' className='logo' />
        </a>
        <a href='https://mstdn.jp/@kenttcrane'>
          <img src='./images/mastodon_logo.svg' className='logo' />
        </a>
        <a href='https://note.com/kenttcrane'>
          <img src='images/note_logo.svg' className='logo' />
        </a>
      </div>
    </>
  )
}

export default App
