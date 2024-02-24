import axios from "axios"

export const getAllProducts = () => {
    const res = axios.get("http://localhost:5000/products")
    return res.data
}