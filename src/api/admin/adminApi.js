import axios from "axios";

export const getAllUsers = async(token) => {
    const response = await axios.get('http://localhost:5000/api/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

    return response
}


export const getAllBookings = async(token) => {
    const response = await axios.get('http://localhost:5000/api/admin/bookings', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

    return response
}


export const getAllContacts = async(token) => {
    const response = await axios.get('http://localhost:5000/api/admin/contacts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

    return response
}


export const updateBookingStatus = async(bookingId, token) => {
    const response = await axios.put(`http://localhost:5000/api/admin/bookings/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    });

    return response
}

export const updateContactStatus = async(bookingId, token) => {
    const response = await axios.put(`http://localhost:5000/api/admin/contacts/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    });

    return response
}