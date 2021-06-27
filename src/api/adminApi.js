import { get } from "react-hook-form";
import axiosClient from "./axiosClient";

const adminApi = {
    login(data){
        const url = '/adminApi/auth';
        return axiosClient.post(url,data);
    },
    getAll(params){
        const url = '/adminApi';
        return axiosClient.get(url,{params});
    },
     get(id){
        const url = `/adminApi/${id}`;
        return axiosClient.get(url);
    },
    update(data){
        const url = `/adminApi/${data.id}`;
        return axiosClient.patch(url,data);
    }
}
export default adminApi;