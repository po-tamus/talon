import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/App.css'
import { Viewer, Entity, PointGraphics } from 'resium'
import { Cartesian3, createWorldTerrainAsync } from 'cesium'
import GlobeControls from './components/GlobeControls'
import Loading from './components/Loading'

function App() {
  const [count, setCount] = useState(0)

  // state is being used to maintain the settings
  // the setter function is invoked in the handler
  const [globeSettings, setGlobeSettings] = useState({
    showTerrain: true,
    enableLighting: false,
    showAtmosphere: true,
    rotationSpeed: 0.5
  })

  const countHandler = () => {
    setCount(count+7);
    
  }

  const handleGlobeSettingsChange = (newSettings) => {
    // here, the existing globe settings and new settings are destructured
    // this clause is like 
    setGlobeSettings({...globeSettings, ...newSettings});
  }

  const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
  const terrainProvider = createWorldTerrainAsync();

  // set the terrain, initial overlay 
  const initialize = useEffect(() => {}, []);


  return (
    
    <>
      <div>
        
      </div>
      <h1 className='title-font' >Talon</h1>

      {
        // passing in props (full)
        // can set default settings: 
        /**
        
        const viewer = new Cesium.Viewer("cesiumContainer", {
        navigationHelpButton: false,
        baseLayerPicker: false,
        geocoder: false,
        creditContainer: document.createElement("none")
        });
        
        */ 
      }
      <Viewer
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        terrainProvider={terrainProvider}
        // baseLayer={}
        
      >
        <Entity position={position}>
          <PointGraphics pixelSize={10} />
        </Entity>
      </Viewer>
      
      <Loading/>

      {
        /*
          here, props are passed in (settings and onSettingsChange)
          their values are defined explicitly in above 
        */
      }
      <GlobeControls 
        // state is being LIFTED
        settings={globeSettings} 
        // props, but the handlers for each setting are in the GlobeControls file 
        onSettingsChange={handleGlobeSettingsChange} 
      />

      <div className="card">
        <button onClick={countHandler}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
