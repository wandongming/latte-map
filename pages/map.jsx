import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = ReactMapboxGl({
  accessToken:
      'pk.eyJ1Ijoid2RtMTk5MyIsImEiOiJjanBtYzh3ZXYwbmZsNDNxb3doaDNwYjdzIn0.XjIWFvB7Y1e_vDWCxyv74g'
})

export default class BaseMap extends React.Component {
  render () {
    return (
      <Map
        style='mapbox://styles/wdm1993/cklqmgpoj7vda17k58y2awkha'
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      />
    )
  }
}
