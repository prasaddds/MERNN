import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;

        try {
            const data = await axios.post('/register', { name, email, password })
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({}); // Resetting to initial state
                toast.success(`Registered successfully`);
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            toast.error('Registration failed. Please try again.'); // Informing the user about the failure
        }
    };

    return (
        <div>
            <form onSubmit={registerUser}>
                <label>Enter name</label>
                <input
                    type="text"
                    placeholder="Enter name..."
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />{' '}
                <br /> <br />
                <label>Enter email</label>
                <input
                    type="email"
                    placeholder="Enter email..."
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />{' '}
                <br /> <br />
                <label>Enter password</label>
                <input
                    type="password"
                    placeholder="Enter password..."
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />{' '}
                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
