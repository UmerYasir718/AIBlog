import React from 'react'
import Slider from './Slider';
import Slider2 from './Slider2';
import '../App.css';
import { useLocation } from 'react-router-dom';
export default function DataLoader() {
    let location = useLocation();
    return (
        <div className='CompletePage'>
            <Slider2 />
            <div className="container ResultSection my-2">
                <div className="main">
                    <h3 className='title text-primary'>{location.state.post.title}</h3>
                    <h5 className='description'>{location.state.post.description}</h5>
                </div>
                <h3 className='heading'>Blog on {location.state.post.title}</h3>
                <p className='content'>
                    <p dangerouslySetInnerHTML={{ __html: location.state.post.post }}></p>
                </p>
            </div>
        </div >
    )
}
