import axiosClient from "./axiosClient";

const HomePageApi = {
    getAll(){
        const url = "/games/getall";
        return axiosClient.get(url);
    },
    getTopGame(){
        const url = "/games/tag/topgame";
        return axiosClient.get(url);
    },
    getUehReview(){
        const url = "/games/tag/uehreview";
        return axiosClient.get(url);
    },
    getUehGreen(){
        const url = "/games/tag/uehgreen";
        return axiosClient.get(url);
    },
    getUehEduGames(){
        const url = "/games/tag/edugames";
        return axiosClient.get(url);
    }
}

export default HomePageApi;