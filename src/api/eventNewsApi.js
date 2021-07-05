import axiosClient from "./axiosClient";

const eventNewsApi ={
    getAll(params){
        const url = "/eventNewsApi";
        return axiosClient.get(url,{params});
    },
    get(id){
        const url = `/eventNewsApi/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = `/eventNewsApi`;
        return axiosClient.post(url,data);
    }
    ,
    update(data){
        const url = `/eventNewsApi/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url = `eventNewsApi/${id}`;
        return axiosClient.delete(url);
    }
    
};

export default eventNewsApi;