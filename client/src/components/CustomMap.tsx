import { useState } from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";

const locations = {
  Sofia: {lat: 42.6975, lng: 23.3242},
  Plovdiv: {lat: 42.1354, lng: 24.7453 },
  Varna: {lat: 43.2141, lng: 27.9147 },
  Haskovo: {lat: 41.9341, lng: 25.5550},
};
export default function CustomMap() {
    const [markerLocation, setMarkerLocation]= useState(locations.Haskovo);
    const handleLocationChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
        setMarkerLocation(locations[event.target.value as keyof typeof locations]);
    };

    return(
        <>
        <div>
            <select onChange={handleLocationChange}>
                {Object.keys(locations).map((city)=>(
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <Map className="border-[1px] w-[800px] h-[500px]"
                defaultZoom={13}
                center={markerLocation}
                gestureHandling={"greedy"}
                disableDefaultUI>
                    <Marker position={markerLocation}/>
            </Map>
        </div>
        </>
    );
}
