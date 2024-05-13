import './login.css';
import Header from "../../components/Header/Header.tsx";
import {ChangeEvent, FormEvent, useState} from "react";

interface FormData {
    email: string;
    password: string;
}

interface Errors {
    [key: string]: string | undefined;
}

const Login= () => {
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
                [name]: undefined // or use `null` based on your error display logic
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
        <div className="login-page-container">
            <Header />
            <div className="login-page">
                <form className="login-page-card" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="login-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                        <p className={"error " + errors.email ? "shown" : ""}>{errors.email}</p>
                    </div>
                    <div className="login-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                        <p className={"error " + errors.password ? "shown" : ""}>{errors.password}</p>
                    </div>
                    <button className="login-button-confirm" type="submit">Login</button>
                </form>

            </div>
        </div>
    );
};

export default Login;
