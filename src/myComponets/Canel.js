import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Canel() {
    return (
        <div>
           <div>
            <div class="card CardMessage my-4" style={{ maxWidth: '50rem' }}>
                <img src="./Cancel.jpg" class="card-img-top CardImg" alt="..." />
                <div class="card-body">
                    <h5 class="card-title CardText">Cancel Request</h5>
                    <p class="card-text CardLines">Cancel Request due to Some reason try again</p>
                    <Link to="/" className='backToHome'>Back to Home and try again</Link>
                </div>
            </div>
        </div>
        </div>
    )
}
