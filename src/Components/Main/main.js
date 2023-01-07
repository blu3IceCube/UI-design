import React from "react";
import Booking from "./Booking";

export default function Main() {

    const [radioData, setRadioData] = React.useState(
        {
            typeOfTravel : ""
        }
    )

    function handleChange(event) {
        const {name, value} = event.target
        setRadioData(prevRadioData => {
            return {
                ...prevRadioData,
                [name] : value
            }
        })
    }

    return (
        <main className="main">
            <div className="radio-box row">
                <div className="form-check form-check-inline col">
                    <input 
                    onChange={handleChange} 
                    className="form-check-input" 
                    type="radio" 
                    name="typeOfTravel" 
                    id="inlineRadio1" 
                    value="Round Trip" 
                    checked={radioData.typeOfTravel === "Round Trip"}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">Round Trip</label>
                </div>
                <div className="form-check form-check-inline col">
                    <input 
                    onChange={handleChange} 
                    className="form-check-input" 
                    type="radio" 
                    name="typeOfTravel" 
                    id="inlineRadio2" 
                    value="One Way"
                    checked={radioData.typeOfTravel === "One Way"}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">One Way</label>
                </div>
                <div className="form-check form-check-inline col">
                    <input 
                    onChange={handleChange} 
                    className="form-check-input" 
                    type="radio" 
                    name="typeOfTravel" 
                    id="inlineRadio3" 
                    value="Multi City"
                    checked={radioData.typeOfTravel === "Multi City"}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">Multi City</label>
                </div>
            </div>
            <hr></hr>
            <Booking />
        </main>
    )
}