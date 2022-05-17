import { useEffect, useState } from "react";
import axios from "axios";
import { formatUserName } from "./utils.js";
import "./style.css";

interface IUsers {
  id: number;
  user: string;
  username: string;
}

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/PedagogiaDHBrasil/ctd-esp-front2-aula19/users"
      );

      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    <>
      <h2>Usuários:</h2>
      {users.length ? (
        <ul className="card">
          {users.map(({ id, user, username }: IUsers) => (
            <li key={id}>
              <span>{user}</span> (<span>{formatUserName(username)}</span>)
            </li>
          ))}
        </ul>
      ) : (
        <div>Carregando usuários...</div>
      )}
    </>
  );
};

export default App;
