import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />

                <span className="secondaryText">
                    Our vision is to make all people <br/>
                    the best place to live for them.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText"><b>Address: </b>Delhi</span>

                <div className="flexCenter f-menu">
                    <span>All rights reserved. <br/>Collabration work with Tezos India X Tezos Hansraj</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer