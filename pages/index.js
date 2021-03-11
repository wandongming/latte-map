import Head from 'next/head'
import Map from './map'

export default function Home () {
  return (
    <div>
      <style global jsx>
        {`
          * {
            margin: 0;
            padding: 0;
           }
          html,body {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        `}
      </style>
      <Head>
        <title>Latte Map</title>
        <link rel='icon' href='/latte_map.ico' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Head>

      <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
        <Map />
      </div>
    </div>
  )
}
