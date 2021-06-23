import axiosClient from "./axiosClient";

const comboApi ={
    getAll(params){
        const url = "/comboApi";
        return axiosClient.get(url,{params});
    },
    get(id){
        const url = `/comboApi/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = `/comboApi`;
        return axiosClient.post(url,data);
    }
    ,
    update(data){
        const url = `/comboApi/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url = `comboApi/${id}`;
        return axiosClient.delete(url);
    }
    
};

export default comboApi;