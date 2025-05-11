import './App.css'
import {Box, Card, CardContent, CardActions, CardMedia, Typography, CardActionArea} from '@mui/material'

function App() {

  return (
    <>
      <div className='title'>kenttcraneのページ</div>

      <h2>アカウント一覧</h2>
      <Box display='flex' justifyContent='center' gap={2}>
        <Card className='card'>
          <CardActionArea component='a' href='https://github.com/kenttcrane' className='card' sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia component='img' src='./images/github_logo.svg' className='logo' />
            <CardContent sx={{ marginTop: 'auto' }}>
                <Typography variant='h6'>&gt;&gt; Github</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className='card'>
          <CardActionArea component='a' href='https://mstdn.jp/@kenttcrane' className='card' sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia component='img' src='./images/mastodon_logo.svg' className='logo' />
            <CardContent sx={{ marginTop: 'auto' }}>
                <Typography variant='h6'>&gt;&gt; Mastodon</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className='card'>
          <CardActionArea component='a' href='https://note.com/kenttcrane' className='card' sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia component='img' src='./images/note_logo.svg' className='logo' />
            <CardContent sx={{ marginTop: 'auto' }}>
                <Typography variant='h6'>&gt;&gt; note</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  )
}

export default App
