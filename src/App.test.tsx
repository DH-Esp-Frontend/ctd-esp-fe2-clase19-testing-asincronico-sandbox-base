import axios from "axios";
import App from "./App";

jest.mock("axios");

const fakeUsers = [
  {
    id: 1,
    user: "Steve",
    username: "stevesantos",
  },
  {
    id: 2,
    user: "Fernanda",
    username: "fernandasilva",
  },
];

describe("App", () => {
  describe("Cuando finaliza la carga", () => {
    test("No debe mostrar el cargando", async () => {

    });
    test("Debe mostrar el titulo de Usuarios", async () => {

    });
    test("Debe mostrar el username", async () => {

    });
    test("Debe mostrar el nombre del usuario", async () => {

    });
  });
});
