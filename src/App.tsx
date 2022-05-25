import { useEffect, useState } from "react";
import axios from "axios";
import { formatUserName } from "./utils";
import "./style.css";
import {getUsers} from "./usuario.service";

interface UserType {
  id: number;
  user: string;
  username: string;
}

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    setLoading(true)
    getUsers().then(data => {
      setLoading(false)
      setUsers(data)
    });
  }, [getUsers]);


  return (
    <>
      <h2>Usuarios:</h2>
      {loading && <div>Cargando usuarios...</div>}
      {!loading && (
        <ul className="card">
          {users.map(({ id, user, username }: UserType) => (
            <li key={id}>
              <span>{user}</span> (<span>{formatUserName(username)}</span>)
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
