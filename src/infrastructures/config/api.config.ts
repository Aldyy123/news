import axios from "axios";

export const urlBase = `https://newsapi.org/v2/`
export const apiKey = '40ac9c4d52ff4e0b890e1bd47a2bf9de'

const baseAxios = axios.create({
    baseURL: urlBase,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
})
export default baseAxios