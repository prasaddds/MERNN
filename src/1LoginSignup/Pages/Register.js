import React, { useState } from 'react'

export default function Register() {
    const [data, setData] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: ''
    })
    const registerUser = (e) => {
        console.log("Hell");
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={registerUser}>
                <label>Enter name</label>
                <input type='text' placeholder='Enter name...' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} /> <br /> <br />
                <label>Enter email</label>
                <input type='email' placeholder='Enter email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} /> <br /> <br />
                <label>Enter password</label>
                <input type='password' placeholder='Enter password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} /> <br /> <br />
                <label>Confirm password</label>
                <input type='password' placeholder='Confirm password...' value={data.confirmPassword} onChange={(e) => setData({ ...data, confirmPassworde: e.target.value })} /> <br />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
