import axios from "axios";

export const getUsers = async () => {
    const response = await axios.get(
        "https://my-json-server.typicode.com/PedagogiaDHBrasil/ctd-esp-front2-aula19/users"
    );
    return response.data;
};