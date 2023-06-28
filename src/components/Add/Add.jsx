import React from 'react'
import './Add.css'

const Add = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Get Started with Homyz</span>
                <span className="secondaryText">Add and Rent your properties here.</span>

                <div className="flexColStart addbutton">
                    <button className="button">Add Property</button>
                    <button className="button">Rent Property</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Add