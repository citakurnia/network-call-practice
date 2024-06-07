import axios from "axios";

const usersUrl = axios.create({
    baseURL: "http://localhost:1212/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default usersUrl;
