import axios from "axios";

export const loginGet = async(token) => {
    const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

    return response
}

