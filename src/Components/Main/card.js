import React from "react";
import '../../styles.css'

export default function Card(props) {
    return (
        <div className="col-lg-2 col-md-4 col-6 card-container">
            <div className="card">
                <h5 className="card-title">{props.title}</h5>
                <h5 className="card-desc">{props.code}</h5>
            </div>
        </div>
    )
}