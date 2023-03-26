import { PageProps } from '../functions/types';
import '../css/map.css'
import { centralPath, eastPath, northEastPath, northPath, westPath } from '../functions/constants';

const Map = (props: PageProps) => {
  return (
    <div className="map-container">
      <div className="map-view">
        <div className="map">

          <svg className="map-region region-west" width="359" height="409">
            <path d={westPath} fill="#74bd43" stroke="black" strokeWidth="2"></path>
          </svg>

          <svg className="map-region region-north" width="230" height="285">
            <path d={northPath} fill="#8eb4e3" stroke="black" strokeWidth="2"></path>
          </svg>

          <svg className="map-region region-central" width="245" height="289">
            <path d={centralPath} fill="#f5b90f" stroke="black" strokeWidth="2"></path>
          </svg>

          <svg className="map-region region-north-east" width="208" height="191">
            <path d={northEastPath} fill="#0070c0" stroke="black" strokeWidth="2"></path>
          </svg>

          <svg className="map-region region-east" width="348" height="227">
            <path d={eastPath} fill="#c00000" stroke="black" strokeWidth="2"></path>
          </svg>

        </div>

      </div>
    </div>
  )
}

export { Map }
