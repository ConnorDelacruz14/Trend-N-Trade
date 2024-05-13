import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from "../../components/Header/Header";
import './signup.css';

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
                [name]: undefined // or use `null` based on your error display logic
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form Data:', formData);
            // Proceed with submitting the data to a server or API
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
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                            <p className={"error " + errors.firstName ? "shown" : ""}>{errors.firstName}</p>
                        </div>
                        <div className="signup-input">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
                            <p className={"error " + errors.lastName ? "shown" : ""}>{errors.lastName}</p>
                        </div>
                    </div>
                    <div className="signup-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                        <p className={"error " + errors.email ? "shown" : ""}>{errors.email}</p>
                    </div>
                    <div className="signup-input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange}/>
                        <p className={"error " + errors.username ? "shown" : ""}>{errors.username}</p>
                    </div>
                    <div className="signup-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                        <p className={"error " + errors.password ? "shown" : ""}>{errors.password}</p>
                    </div>
                    <button className="signup-button-confirm" type="submit">Sign up</button>
                </form>
                <a href="/login">Already have an account? Login here</a>
            </div>
        </div>
    );
};

export default SignUp;
