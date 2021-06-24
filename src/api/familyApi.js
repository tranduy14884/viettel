import axiosClient from "./axiosClient";

const familyApi = {
    getAll(params){
        const url = '/familyApi';
        return axiosClient.get(url,{params});
    },
    get(id){
        const url = `/familyApi/${id}`;
        return axiosClient.get(url);
    },
    add(data)
    {
        const url = '/familyApi';
        return axiosClient.post(url, data);
    },
    update(data){
        const url = `/familyApi/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url = `/familyApi/${id}`;
        return axiosClient.delete(url);
    }
};

export default familyApi;