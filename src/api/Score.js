import axiosClient from "./axiosClient";

const ScoreApi = {
    getAll(){
        const url = "/scores/getall";
        return axiosClient.get(url);
    },

}

export default ScoreApi;