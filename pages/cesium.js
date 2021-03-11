import { Viewer, Ion, createWorldTerrain } from 'cesium'
import { useEffect } from 'react'
import { ionToken } from './constant/config'

export default () => {
  useEffect(() => {
    Ion.defaultAccessToken = ionToken
    const viewer = new Viewer('cesiumContainer', {
      terrainProvider: createWorldTerrain()
    })
    window.viewer = viewer
  }, [])
  return <div id='cesiumContainer' />
}
