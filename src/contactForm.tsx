import React, { useState } from 'react';
import './Stylesheets/ComponentsStyleSheet.css';
/*Define tsx interface to specify shape and size of form input*/
interface FormData {
    name: string;
    email: string;
    contact: number;
}

/* SimpleForm- A form for contacting the company owning the website
*  FormData: contains our values and their types.
*  UseState-stores data that the use enters in FormData
*  handleInputChange-captures data as the user enters it to FormData 
    param: e - an html element representing the form input fields
*  handleSubmit-handles form submission and prevents default behaviour, 
*       i.e stops the page from reloading
    param: e - an html element representing form input fields
*  return: renders the form with specified form input fields each with their values
*       corresponding onChange handlers
*
*/

const SimpleForm: React.FC = () => {
    /* Create state varibles and store form data*/
    const [FormData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        contact: 27

    });

    //Function to handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...FormData, [name]: value });
    }

    //Function to handle form submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //To perfom API transaction here later...
        console.log('Form data submitted:', FormData)
    }
    //Creation of the form UI
    return(
        <div className='form'>
            <h2>Contact Us</h2>
            {/*Name input field */}
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name: </label>
                    <input 
                        type='text' 
                        name='Names' 
                        value={FormData.name} 
                        placeholder='Your name and surname...'
                        onChange={handleInputChange} 
                    />
                </div>
                {/*Email input field */}
                <div className='form-group'>
                    <label>Email: </label>
                    <input 
                        type='text' 
                        name='email' 
                        value={FormData.email}
                        placeholder='Your Email...'
                        onChange={handleInputChange} />
                </div>
                {/*Contact input field */}
                <div className='form-group'>
                    <label>Contact: </label>
                    <input 
                        type='number' 
                        name='contact' 
                        value={FormData.contact} 
                        placeholder='+27'
                        onChange={handleInputChange} 
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )


}
//Create a form that takes name, email and contact info
export default SimpleForm;