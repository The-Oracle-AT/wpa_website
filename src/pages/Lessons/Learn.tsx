import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// Importing required project components
import LessonCard from '../../Props/LessonCard';
import image1 from '../../assets/presentationSlide/wpaHatWhite.png';
import './LessonsStylingsheet.css';

const Learn: React.FC = () => {
    /** Styling the Learn page layout */
    const LessonCardStyle: React.CSSProperties = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
    };


    return (
        <div className='container'>
            <h1>Learn page DashBoard</h1>
            <Outlet />
            <div className = 'cards-container' style={LessonCardStyle}>
                
                <div className='cards-display'>
                    <Link to = "lesson1" className='custom-link'><LessonCard image={image1} title={'Lesson 1'} description = {"Learn about lesson 1"} /></Link>
                    <Link to = "lesson2" className='custom-link'><LessonCard image={image1} title={'Lesson 2'} description = {"Learn about lesson 2"} /></Link>
                    <Link to = 'lesson3' className='custom-link'><LessonCard image={image1} title={'Lesson 3'} description = {"Learn about lesson 3"} /></Link>
                    <Link to = 'lesson4' className='custom-link'><LessonCard image={image1} title={'Lesson 4'} description = {"Learn about lesson 4"} /></Link>
                    <Link to = 'lesson5' className='custom-link'><LessonCard image={image1} title={'Lesson 5'} description = {"Learn about lesson 5"} /></Link>
                    <Link to = 'lesson6' className='custom-link'><LessonCard image={image1} title={'Lesson 6'} description = {"Learn about lesson 6"} /></Link>
                    <Link to = 'lesson7' className='custom-link'><LessonCard image={image1} title={'Lesson 7'} description = {"Learn about lesson 7"} /></Link>
                    <Link to = 'lesson8' className='custom-link'><LessonCard image={image1} title={'Lesson 8'} description = {"Learn about lesson 8"} /></Link>
                    <Link to = 'lesson9' className='custom-link'><LessonCard image={image1} title={'Lesson 9'} description = {"Learn about lesson 9"} /></Link>
                </div>
            </div>
        </div>
    );
}
export default Learn;