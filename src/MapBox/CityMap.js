import React from 'react'
import MapBox from "./Map";
import CITIES from "../data/cities.json"

export default function CityMap() {
    return (
        <div>
            <MapBox
                long={36.01043}
                lat={34.24815}
                zoomNb={12}
                infoType = {0}
                width="50"
                height="50ch"
                data={CITIES}
            />
        </div>
    )
}

// <a
//     target="_new"
//     href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
//     onHover = {onHover}
// >