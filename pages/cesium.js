import { Viewer, Ion, createWorldTerrain } from 'cesium'
import { useEffect } from 'react'
import { ionToken } from '../constant/config'

const CesiumMap = () => {
  useEffect(() => {
    Ion.defaultAccessToken = ionToken
    const viewer = new Viewer('cesiumContainer', {
      terrainProvider: createWorldTerrain(),
      animation: false,
      timeline: false,
      creditContainer: null
    })
    viewer._cesiumWidget._creditContainer.style.display = 'none'
    window.viewer = viewer
  }, [])
  return <div id='cesiumContainer' style={{ height: '100%' }} />
}

export default CesiumMap
