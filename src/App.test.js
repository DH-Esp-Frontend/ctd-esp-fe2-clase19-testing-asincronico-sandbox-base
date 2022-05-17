import axios from "axios";
import { render, screen } from "@testing-library/react";
import App from "./App.tsx";

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

describe("Teste assincrônico", () => {
  test("Renderizando componente", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<App />);

    expect(screen.getByText("Usuários:")).toBeInTheDocument();
  });

  test("Testando se o Carregando foi exibido", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<App />);

    expect(screen.getByText("Carregando usuários...")).toBeInTheDocument();
  });

  test("Exibir o @ do usuário", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<App />);

    const userList = await screen.findByText("@stevesantos");

    expect(userList).toBeInTheDocument();
  });

  test("Exibir o nome do usuário", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<App />);

    const userList = await screen.findByText("Steve");

    expect(userList).toBeInTheDocument();
  });
});
