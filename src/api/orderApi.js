import axiosClient from "./axiosClient";

const orderApi = {
    getAll(params){
        const url = '/orderApi';
        return axiosClient.get(url,{params});
    },
    get(id){
        const url = `/orderApi/${id}`;
        return axiosClient.get(url);

    },
    add(data){
        const url = '/orderApi';
        return axiosClient.post(url,data);
    },
    update(data){
        const url = `/orderApi/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url = `/orderApi/${id}`;
        return axiosClient.delete(url);
    }
}

export default orderApi;