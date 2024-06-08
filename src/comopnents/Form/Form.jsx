import React, { useState } from 'react';
import './form.css'; 
import InputField from '../Input/InputField';


const Form = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setIsSubmitting(true);

        if (!email) {
            setError('Email is required.');
            setIsSubmitting(false);
            return;
        }

        if (!validateEmail(email)) {
            setError('Invalid email format.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('http://34.225.132.160:8002/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 200) {
                setMessage('Form Submitted');
            } else if (response.status === 422) {
                setError('Email cannot end with @ez.works.');
            } else {
                throw new Error('An error occurred. Please try again.');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <InputField
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <button type="submit" className='btn' disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Contact Me'}
                </button>
            </form>
            {error &&  <p>{error} </p>}
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Form;
