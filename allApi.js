import axios from "axios";

const base_url="https://cms-fhng.onrender.com"

export const addContactApi=async(data)=>{
    return await axios.post(`${base_url}/contact`,data)
}
export const getContactApi=async()=>{
    return await axios.get(`${base_url}/contact`)
}
export const deleteContactApi=async(id)=>{
    return await axios.delete(`${base_url}/contact/${id}`)
}
export const editContactApi = async (id, data) => {
    return await axios.put(`${base_Url}/contact/${id}`, data);
}
