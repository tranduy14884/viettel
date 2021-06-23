import axiosClient from "./axiosClient";

const companyApi = {
    getAll(params){
        const url = '/companyApi';
        return axiosClient.get(url,{params});
    },
    get(id){
        const url = `/companyApi/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = "/companyApi";
        return axiosClient.post(url,data);
    },
    update(data){
        const url = `/companyApi/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url = `/companyApi/${id}`;
        return axiosClient.delete(url);
    }
};

export default companyApi;