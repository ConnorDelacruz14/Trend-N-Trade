import './login.css';
import Header from "../../components/Header/Header.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import { fetchData } from '../../api/index.ts';

interface FormData {
    email: string;
    password: string;
}

interface Errors {
    [key: string]: string | undefined;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
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
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
            

                const userData = {
                        email: formData.email,
                        password: formData.password
                };

                const response = await fetchData('/api/user/login', [], userData, 'POST');
                console.log(response);

                const responseString = JSON.stringify(response);
                console.log(responseString)

                if (responseString === '{"error":"Invalid username or password"}') {
                    throw new Error('Login failed');
                }
                
                console.log("success");

                const token = JSON.stringify(response);
                console.log(token);
                localStorage.setItem('token', token);

                

                 // Store token in localStorage

                console.log('login success')
                // Optionally redirect to another page upon successful login
            } catch (error) {
                console.log('error');

                setErrors(prevErrors => ({
                    password : 'Username or password incorrect',
                }));

            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="login-page-container">
            <Header />
            <div className="login-page">
                <form className="login-page-card" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="login-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="login-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button className="login-button-confirm" name="submit" type="submit">Login</button>
                </form>
                <a href="/signup">Don't have an account? Sign up here</a>
            </div>
        </div>
    );
};

export default Login;