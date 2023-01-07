import React from 'react'
import footerList from "./footer-list"

export default function Footer() {
    const footerData = footerList.data

    const footer = footerData.map((data) => {

        return <div key={data.id} className='footer-about col-lg-4 col-md-6 col-xm'>
                    <p>{data.heading}</p>
                    <img className='footer-img' src={data.img} alt="About Us"></img>
                    <a className='footer-link' href={data.link}>{data.linkTitle}</a>
                </div>
    })

    return (
        <div className='container-fluid footer'>

            <div className='footer-container text-center row shownCard'>
                {footer}

            </div>

            <div className='footer-container text-center row hiddenCard'>

                <div id="carouselExampleIndicators" className="carousel slide hiddenCarousel">
                    <div className="carousel-indicators indicator-button">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button className='slide3' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active card1">
                            {footer[0]}
                            
                        </div>
                        <div className="carousel-item card2">
                            {footer[1]}
                            
                        </div>
                        <div className="carousel-item card3">
                            {footer[2]}
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </div>
    )
}