import React from 'react'
import "./Map.css"

export default function ControlPanel(props) {
    return (
        <div className="control-panel" onClick={() => props.onSelectCity()}>
            Reset Default
        </div>
    )
}
