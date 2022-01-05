// Api utilizada para a busca dos ceps digitados pelo usuário.
import axios from "axios";

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;