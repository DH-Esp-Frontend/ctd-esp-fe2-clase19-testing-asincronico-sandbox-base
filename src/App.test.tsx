import axios from "axios";
import {render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react";
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
      axios.get.mockResolvedValueOnce({ data: fakeUsers });

      render(<App />);

      await waitForElementToBeRemoved(screen.getByText("Cargando usuarios..."))
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });
    test("Debe mostrar el titulo de Usuarios", async () => {
      axios.get.mockResolvedValueOnce({ data: fakeUsers });
      render(<App />);
      await waitForElementToBeRemoved(screen.getByText("Cargando usuarios..."))

      expect(await screen.findByText("Usuarios:")).toBeInTheDocument();
    });
    test("Debe mostrar el username", async () => {
      axios.get.mockResolvedValueOnce({ data: fakeUsers });

      render(<App />);

      const userList = await screen.findByText("@stevesantos");

      expect(userList).toBeInTheDocument();
    });
    test("Debe mostrar el nombre del usuario", async () => {
      axios.get.mockResolvedValueOnce({ data: fakeUsers });

      render(<App />);

      const userList = await screen.findByText("Steve");

      expect(userList).toBeInTheDocument();
    });
  });
});
