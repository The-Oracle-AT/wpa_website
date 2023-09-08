import Slideshow from './SlideShow';
import "./Stylesheets/ComponentsStyleSheet.css";
//importing images
import image1 from './assets/youtubeSize/wpaHatBlack.png';
import image3 from './assets/youtubeSize/wpaHowlBlack.png';
import image4 from './assets/youtubeSize/wpaHowlWhite.png';
import image2 from './assets/youtubeSize/wpaStaffBlack.png';

const HomeContent = () => {
    //Array of images to use for slide show
    const images = [image1, image2, image3, image4];
    const altTexts = [
        'Wolf Pack Academia black on white 0',
        'Wolf Pack Academia black on white 1',
        'Wolf Pack Academia black on white 2',
        'Wolf Pack Academia black on white 3'
    ];
    return (
        <div className="home-content-container">
            <header className="header-content">
                <h1 className="heading-title">Welcome to Wolf Pack Academia</h1>
                <p className="heading-text-container">
                    <span>W</span>elcome to our website! We are dedicated to providing you with the latest information and services.
                    Our mission is to make your life easier. Whether you're looking for tips on travel, technology, or health, 
                    we've got you covered. Explore our wide range of articles and resources to stay informed and inspired. 
                    From DIY projects to delicious recipes, there's something here for everyone. Join our community of readers 
                    who share a passion for learning and discovery. Connect with like-minded individuals from around the world.
                    Don't forget to subscribe to our newsletter to receive updates and exclusive content directly in your inbox.
                    We value your feedback. If you have any questions or suggestions, please don't hesitate to reach out to us.
                    Thank you for visiting our website. We hope you find it helpful and enjoyable. Stay tuned for more exciting content!
                    Follow us on social media to stay connected and engaged with our community. We look forward to connecting with you.
                    Remember, knowledge is power, and we're here to empower you every step of the way.
                    Explore, learn, and thrive with us at [WOLf PACK ACADEMIA].
                </p>
                <div className="heading-image-container">
                    <img className="heading-image" src={image3} alt="Wolf Pack Academia" />
                </div>
            </header>
            <section className="body-continer">
                <p>
                    <h1>How to join?</h1>
                    Currently you can only join Wolf Pack Academia if our organisation has approached your schools body with the the
                    offer. Every member has a specific login that we created with an ID. The selection process consists of the following,
                    a background check from your educator, and an induction test to assess your eligibility to make the most of the program.
                    <br /><h1>Future plans</h1>
                    We are currently in the process of developing a new website. We will be launching a new website in 2024 depending on the 
                    resources we have. Upon scaling it wioll be made publicly accessible. There will be a free version and a vip version.
                    W
                </p>
                <div className="image-gallery"><Slideshow images={images} altText={altTexts} interval={6000}/></div>
            </section>
            

        </div>
    );
}
export default HomeContent;