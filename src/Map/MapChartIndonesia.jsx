import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";

// const geoUrl = "https://gist.githubusercontent.com/tvalentius/066b055d4d55de3eb303dc9f3d210d76/raw/bd8310d383d23a08d62e2b22d2daa834f21535d0/indonesia-topojson-city-regency.json";
const geoUrl = "/provinces-simplified-topo.json";

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

const MapChartIndonesia = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // https://www.bls.gov/lau/
    csv("/ipm.csv").then(counties => {
      setData(counties);
    });
  }, []);

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              // console.log(data);
              const cur = data.find(s => {
                if(String(s.nama_kabkota).toLowerCase() === String(geo.properties.NAME_2).toLowerCase()) {
                  // console.log(String(s.nama_kabkota).toLowerCase() + " : "+String(geo.properties.NAME_2).toLowerCase());
                  return true;
                }
                return false;
              });
              console.log(geo);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  // fill={colorScale(cur ? Math.random()*(10+1)-1 : "#EEE")}
                  fill={colorScale(Math.random()*(10+1)-1)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChartIndonesia;