import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App.js";

jest.mock("axios");

const fakeUsers = [
  {
    id: 1,
    name: "Steve",
    username: "stevesantos",
  },
  {
    id: 2,
    name: "Fernanda",
    username: "fernandasilva",
  },
];

describe("Teste assincrônico", () => {
  test("Renderizando componente", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<App />);

    expect(screen.getByText("Usuários:")).toBeInTheDocument();
  });

  test("Exibir uma lista de usuários", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<App />);

    const userList = await waitFor(() => screen.findByTestId("user-list"));
    expect(userList).toBeInTheDocument();
  });

  test("Exibir cada usuário", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<App />);

    const userList = await waitFor(() => screen.findAllByTestId("user-item"));
    expect(userList).toHaveLength(2);
  });
});
