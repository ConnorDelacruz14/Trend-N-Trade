import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from "../../components/Header/Header";
import './signup.css';
import { fetchData } from '../../api';
import { useNavigate } from 'react-router-dom';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

interface Errors {
    [key: string]: string | undefined;
}


const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: undefined // Clear error message
            }));
        }
    };

    const validateForm = (): Errors => {
        const newErrors: Errors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.username.trim()) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        console.log("called");
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                const userData = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    username: formData.username,
                    email: formData.email,
                    password: formData.password, // Include password field
                };

                console.log('Submitting user data:', userData);

                const response = await fetchData('/api/user/createUser', [], userData, 'POST');

                if (!response.ok) {
                    throw new Error('Sign up failed');
                }

                // Optionally handle success, e.g., show a success message
                setErrors({});
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    username: '',
                    password: ''
                });
                navigate("/Login");
            } catch (error) {
                setErrors(formErrors);
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="signup-page-container">
            <Header />
            <div className="signup-page">
                <form className="signup-page-card" onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <div className="signup-names-input">
                        <div className="signup-input">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                        </div>
                        <div className="signup-input">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div className="signup-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="signup-input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="signup-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button className="signup-button-confirm" type="submit">Sign up</button>
                </form>
                <a href="/login">Already have an account? Login here</a>
            </div>
        </div>
    );
};

export default SignUp;