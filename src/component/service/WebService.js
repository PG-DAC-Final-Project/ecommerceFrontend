import axios from "axios";
const baseUrl = "http://localhost:8080/api/public/product/user";

class WebService {
    getAllProducts() {
        return axios.get(baseUrl + "/allProduct");
    }

    getAllProductsByCatName(categoryName) {
        return axios.get(baseUrl + "/productByCategory/" + categoryName);
    }

}

export default new WebService();