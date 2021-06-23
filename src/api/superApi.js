import axiosClient from "./axiosClient";

const superApi = {
    getAll(params){
        const url = "/superApi";
        return axiosClient.get(url,{params});
    },
    get(id){
        const url = `/superApi/${id}`;
        return axiosClient.get(url);
    },
    update(data){
        const url = `/superApi/${data.id}`;
        return axiosClient.patch(url,data);
    },
    add(data){
        const url ='/superApi';
        return axiosClient.post(url,data);
    },
    remove(id){
        const url = `/superApi/${id}`;
        return axiosClient.delete(url);
    }

}
export default superApi;