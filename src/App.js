import { useEffect, useState } from "react";
import axios from "axios";
import { formatUserName } from "./utils.js";
import "./style.css";

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
        <ul data-testid="user-list" className="card">
          {users.map((user) => (
            <li key={user.id} data-testid="user-item">
              <span>{user.user}</span> (
              <span>{formatUserName(user.username)}</span>)
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
