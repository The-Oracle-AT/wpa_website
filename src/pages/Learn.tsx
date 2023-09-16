import Lessoncard from '../Props/LessonCard';
import image1 from '../assets/presentationSlide/wpaHatWhite.png';

const Learn = () => {
    const LessonCardStyle: React.CSSProperties = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    };
    
    return (
        <div className='container'>
        <h1>DashBoard</h1>
        <div className = 'cards-container' style={LessonCardStyle}>
            <Lessoncard image = {image1} title={"Lesson 1"} description={"Lesson 1: Description"}/>
            <Lessoncard image = {image1} title={"Lesson 2"} description={"Lesson 2: Description"}/>
            <Lessoncard image = {image1} title={"Lesson 3"} description={"Lesson 3: Description"}/>
            <Lessoncard image = {image1} title={"Lesson 4"} description={"Lesson 4: Description"}/>
            <Lessoncard image = {image1} title={"Lesson 5"} description={"Lesson 5: Description"}/>
            <Lessoncard image = {image1} title={"Lesson 6"} description={"Lesson 6: Description"}/>
            <Lessoncard image = {image1} title={"Lesson 7"} description={"Lesson 7: Description"}/>
            <Lessoncard image = {image1} title={"Lesson 8"} description={"Lesson 8: Description"}/>
        </div>
        </div>
    );
}
export default Learn;