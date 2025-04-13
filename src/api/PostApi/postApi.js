import axios from "axios";

export const loginPost = async (formData) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password
    });

    return response
}


export const signUpPost = async (formData) => {
    const response = await axios.post('http://localhost:5000/api/auth/signup', formData);

    return response
}

export const bookingPost = async (token, payload) => {
    const response = await fetch('http://localhost:5000/api/bookings/create', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    return response
}