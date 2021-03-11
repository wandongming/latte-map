import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./cesium'), {
  ssr: false
})

export default () => {
  return <Map />
}
