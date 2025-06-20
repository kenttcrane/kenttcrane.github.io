import './Home.css'
import React, {useEffect} from 'react';
import {Box, Card, CardContent, CardActions, CardMedia, Typography, CardActionArea} from '@mui/material'
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    const FADEIN_ELEM = document.getElementById('fadein');
    const onScroll = () => {
      const FADEIN_ELEM_TOP = FADEIN_ELEM.getBoundingClientRect().top;
      const WINDOW_HEIGHT = window.innerHeight;
      if (WINDOW_HEIGHT > FADEIN_ELEM_TOP + 20) {
        FADEIN_ELEM.classList.add('fadein-after');
      } else {
        FADEIN_ELEM.classList.remove('fadein-after');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // 初回実行

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <>
      <div className='title'>kenttcraneのページ</div>

      <h2>アカウント一覧</h2>
      <Box display='flex' justifyContent='center' gap={2}>
        <Card className='card_account'>
          <CardActionArea component='a' href='https://github.com/kenttcrane' className='card_account' sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia component='img' src='./images/github_logo.svg' className='logo' />
            <CardContent sx={{ marginTop: 'auto' }}>
                <Typography variant='h6' className='text_account'>&gt;&gt; Github</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className='card_account'>
          <CardActionArea component='a' href='https://mstdn.jp/@kenttcrane' className='card_account' sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia component='img' src='./images/mastodon_logo.svg' className='logo' />
            <CardContent sx={{ marginTop: 'auto' }}>
                <Typography variant='h6' className='text_account'>&gt;&gt; Mastodon</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className='card_account'>
          <CardActionArea component='a' href='https://note.com/kenttcrane' className='card_account' sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia component='img' src='./images/note_logo.svg' className='logo' />
            <CardContent sx={{ marginTop: 'auto' }}>
                <Typography variant='h6' className='text_account'>&gt;&gt; note</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      
      <h2>座右の銘</h2>
      <div id='fadein' className='fadein-before'>
        <div className='zayuu'>不即不離</div>
        <p>中学だか高校だかの授業で国語の先生から習った言葉。ほどよい人間関係を築いていきたい。実情は即or離。</p>
      </div>

      <h2>作ったもの</h2>
      <Card className='card_made'>
        <CardActionArea component='a' href='https://lubi-webapp.ue.r.appspot.com/' target='_blank' rel="noreferrer noopener" className='card_made' sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia component='img' src='./images/girigiri.png' className='ss_made' />
          <CardContent sx={{ marginTop: 'auto' }}>
              <Typography variant='h6'>何マスで鳴らせる？</Typography>
              <Typography>・・・－－－・・・がそろうとダンスにギリギリ見えなくもない動きをした棒人間が出てきます。開発者はkent。</Typography>
              <Typography>100マスくらいでそろうこともあれば数千マスかかることもある。</Typography>
              <Typography>お粗末な実装なので不正などし放題だと思いますが、悪意を持ったアクセスはやめてください…</Typography>
              <Typography>※音が出ます</Typography>
              <Typography>※名前がランキングに保存、表示されます（1日で消えます）</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='card_made'>
        <CardActionArea component={Link} to='/ruby' className='card_made' sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia component='img' src='./images/ruby.png' className='ss_made' sx={{objectFit: 'contain'}}/>
          <CardContent sx={{ marginTop: 'auto' }}>
              <Typography variant='h6'>ルビィ / Ruby</Typography>
              <Typography>ruby.wasmを使いたかっただけ。Reactでいい。</Typography>
              <Typography>黒澤ルビィちゃんが好きです。</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='card_made'>
        <CardActionArea component={Link} to='/shuffle' className='card_made' sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia component='img' src='./images/shuffle.png' className='ss_made' sx={{objectFit: 'contain'}}/>
          <CardContent sx={{ marginTop: 'auto' }}>
              <Typography variant='h6'>認知シャッフル睡眠法用音声再生ページ</Typography>
              <Typography>寝るときのために作りました。</Typography>
              <Typography>合成音声聞くと眠たくなりませんか？</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default Home
