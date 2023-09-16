import React from 'react';
import './PropsStylesheet.css';
/**LessonCard - returns a card with an image and some text below
 * @LessonCardDetails -  a set of details for each card
 * 
 * Return: A card with an image and lesson details
 */
interface LessonCardDetails{
    image: string;
    title: String;
    description: String
}

const LessonCard: React.FC<LessonCardDetails> = ({image, title, description = "Lesson description"}) => {
    /**Defining inline style of card as JS objects */
    const cardStyle: React.CSSProperties = {
        backgroundColor: '#333',
        padding: '10px',
        borderRadius: '10px',
        maxHeight: '480px',
        maxWidth: '420px',
        textAlign: 'left',
        fontFamily:'cubano, sans-serif',
        marginTop: '20px',
        marginRight: '20px',
    };
    const imgStyle: React.CSSProperties = {
        height: '60%',
        width: '100%',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    };
    const cardDetailsStyle: React.CSSProperties = {
        height: '40%',
        width: '100%'
    };
    const titleStyle: React.CSSProperties = {
        fontFamily:'cubano, sans-serif',
        fontWeight:'bold'
    };
    
    return (
        <div className="card" style={cardStyle}>
            <img src={image} alt={title + "image"} style={imgStyle}></img>
            <div className="card-detail" style={cardDetailsStyle}>
                <p style={titleStyle}>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default LessonCard;