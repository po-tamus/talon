import { useState } from 'react';
import '../styles/GlobeControls.css';

interface GlobeSettings {
  showTerrain: boolean;
  enableLighting: boolean;
  showAtmosphere: boolean;
  rotationSpeed: number;
}

/*
    settings is an object represented by the GlobeSettings interface defined above
    onSettingsChange if a function that takes in settings to change current settings 
*/
interface GlobeControlsProps {
  settings: GlobeSettings;
  onSettingsChange: (settings: Partial<GlobeSettings>) => void;
}

// settings and onSettingsChange (handler) are passed into the component as props
// this is defined above in the interface

// note that the props are passed in from the parent component (App.tsx)
const GlobeControls: React.FC<GlobeControlsProps> = ({ settings, onSettingsChange }) => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleTerrain = () => {
    onSettingsChange({ showTerrain: !settings.showTerrain });
  };

  const handleToggleLighting = () => {
    onSettingsChange({ enableLighting: !settings.enableLighting });
  };

  const handleToggleAtmosphere = () => {
    onSettingsChange({ showAtmosphere: !settings.showAtmosphere });
  };

  const handleRotationSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSettingsChange({ rotationSpeed: parseFloat(e.target.value) });
  };

  return (
    // in this ternary for the styling, either open or closed will be set
    // but there is no 'open' style in the styles file

    /**
     * here, 'open' refers to the default settings i.e. the base style for all controls
     * 'closed' is defined in the css file and that refers to an exception in which the styling would change
     * 
     */
    <div className={`globe-controls ${isOpen ? 'open' : 'closed'}`}>
        {
            /*
                above, it uses a ternary to specify the classname
                
                below, 
            */
        }
      <div className="controls-header">
        <h3>Globe Settings</h3>
        <button className="toggle-button" onClick={toggleMenu}>
            
          {
            // what is this doing? 
          isOpen ? '×' : '⚙'}
        </button>
      </div>

      {
        /*
            here, could define one div for a specific, 
        */

        // on change to any of the inputs, the 
      }
      
      {isOpen && (
        <div className="controls-body">
          <div className="control-item">
            <label>
              <input 
                type="checkbox" 
                checked={settings.showTerrain} 
                onChange={handleToggleTerrain}
              />
              Show Terrain
            </label>
          </div>
          
          <div className="control-item">
            <label>
              <input 
                type="checkbox" 
                checked={settings.enableLighting} 
                onChange={handleToggleLighting}
              />
              Enable Lighting
            </label>
          </div>
          
          <div className="control-item">
            <label>
              <input 
                type="checkbox" 
                checked={settings.showAtmosphere} 
                onChange={handleToggleAtmosphere}
              />
              Show Atmosphere
            </label>
          </div>
          
          <div className="control-item">
            <label>
              Rotation Speed: {settings.rotationSpeed}
              <input 
                type="range" 
                min="0" 
                max="2" 
                step="0.1" 
                value={settings.rotationSpeed} 
                onChange={handleRotationSpeedChange}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobeControls;