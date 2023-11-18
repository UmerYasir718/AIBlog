import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Success() {
    return (
        <div>
            <div class="card CardMessage my-4" style={{ maxWidth: '50rem' }}>
                <img src="./ThankYou.jpg" class="card-img-top CardImg" alt="..." />
                <div class="card-body">
                    <h5 class="card-title CardText">Credit Add Successfully</h5>
                    <p class="card-text CardLines">Thank You For Subcribe your Credit added Successfully </p>
                    <Link to="/" className='backToHome'>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
