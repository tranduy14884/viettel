import axiosClient from "./axiosClient";

const serviceApi ={
    getAll(params){
        const url = "/serviceApi";
        return axiosClient.get(url,{params});
    },
    get(id){
        const url = `/serviceApi/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = `/serviceApi`;
        return axiosClient.post(url,data);
    }
    ,
    update(data){
        const url = `/serviceApi/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url = `serviceApi/${id}`;
        return axiosClient.delete(url);
    }
    
};

export default serviceApi;