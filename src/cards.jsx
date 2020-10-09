import React from 'react'
import './cards.css'


    const cardData = [

    {
        p: "Forrester names Red Hat Ansible Automation Platform among solutions that lead the pack for infrastructure automation platform providers.",
        a: "Read More"
    },

    {
        p: "Forrester names Red Hat Ansible Automation Platform among solutions that lead the pack for infrastructure automation platform providers.",
        a: "Read More"
    },

    {
        p: "Forrester names Red Hat Ansible Automation Platform among solutions that lead the pack for infrastructure automation platform providers.",
        a: "Read More"
    },

]


function cards() {
    return (
        <div className="cards">
            
            <div className="card-body1">
                <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
         

          
            <div className="card-body1">
                <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
         

         
            <div className="card-body1">
                <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
         
        </div>
            
       
    )
}

export default cards
