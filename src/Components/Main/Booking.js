import React from "react";
import cityList from "../../city-list";
import Card from "./card";

export default function Booking() {
    const [cities, setCities] = React.useState(cityList.data)
    const [visible, setVisible] = React.useState(5)

    const [selectData, setSelectData] = React.useState(
        {
            initialCity : "San Francisco"
        }
    )

    const [showMore, setShowMore] = React.useState(false)

    const cityCard = cities.slice(0, visible).map((city) => {
        return <Card
            key = {city.id}
            title = {city.title.toUpperCase()}
            code = {city.code} 
        />
    })

    const [cityValue, setCityValue] = React.useState("San Francisco") 

    function handleChange(event) {
        const {name, value} = event.target
        setCityValue(event.target.value)

        setSelectData(prevSelectData => {
            return {
                ...prevSelectData,
                [name] : value
            }
        })
    }

    function handleClick() {
        if (visible === cities.length) {
            setVisible(prevVisible => prevVisible - 6)
        } else {
            setVisible(prevVisible => prevVisible + 6)
        }
        setShowMore(prevState => !prevState)
    }

    return (
        <div className="container-fluid booking">
            <p>Book from 
                <select 
                className="drop-down" 
                onChange={handleChange}
                value={selectData.initialCity}
                name="initialCity"
                >
                    {cities.map((city) => {
                        return <option key={city.id} value={city.title}>{city.title}</option>
                    })}
                </select>
            to</p>

            <div className="container grid-container">

                <div className="grid row">
                    {cityCard}
                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="card btn" onClick={handleClick}>
                            <h5 className="card-title">{showMore ? `Few Cities` : `All Cities`} {!showMore && <i className="fa-solid fa-angle-down"></i>} {showMore && <i className="fa-sharp fa-solid fa-angle-up"></i>}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*data-bs-toggle="collapse" href="#cardCollapse" role="button" aria-expanded="false" aria-controls="cardCollapse"  */