import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-x1 text-centre'>{text}</p>
        <Link to ={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent= {
    1: (
        <h1 className='sm: text-x1 sm: leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Yashvardhan</span>👋
            <br />
                Software Engineer from Manipal University of Technology, Bengaluru
            </h1>
    ),
    
    2: (
        <InfoBox
        text='Cybersecurity student and web developer adept at securing web applications.'
         link='/about'
         btnText='Learn more'
         />
    ),
    3: (
        <InfoBox
        text='Have gained experience by doing multiple projects. Click below to see'
         link='/projects'
         btnText='Discover my work'
         />
    ),

    4: (
        <InfoBox
        text='Open to job and intern opportunities. Lets collaborate '
         link='/contact'
         btnText='Lets connect'
         />
    ),
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo


