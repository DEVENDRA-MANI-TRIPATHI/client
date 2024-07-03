import React from 'react'
import '../styles/tempPage.css'
import weather from '../Components/weather.png';
import Card from './Card';
import Layout from './Header';
import Weatherbackground from '../Components/new.webm';

const tempPage = () => {
    return ( 
        <div className='temp-container'>
            <video className='background-video' src={Weatherbackground} autoPlay loop muted />
            <div className='top-container'>
            <Card
                    title="Weather"
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width: '100%' }}
                    value='67'
                    className="tempcard today"
                />
                
                <Card
                    title="Weather"
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width:'100%'}}
                    className="tempcard"
                />
                <Card
                    title="Weather"
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width:'100%'}}
                    className="tempcard"
                />
                <Card
                    title="Weather"
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width:'100%'}}
                    className="tempcard"
                />
                <Card
                    title="Weather"
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width:'100%'}}
                    className="tempcard"
                />
                <Card
                    title="Weather"
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width:'100%'}}
                    className="tempcard"
                />
                <Card
                    title="Weather"
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width:'100%'}}
                    className="tempcard"
                />
                
            </div>
            <div className='bottom-container'>
                <div className='bottom-top-container'>
                    <div className='temp-card'></div>
                    <div className='temp-card'></div>
                    <div className='temp-card'></div>
                </div>
                <div className='bottom-down-container'>
                    <div className='temp-card'></div>
                    <div className='temp-card'></div>
                    <div className='temp-card'></div>
                </div>
            </div>

            </div>
    )
}

export default tempPage
