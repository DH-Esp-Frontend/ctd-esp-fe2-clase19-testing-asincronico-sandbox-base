import { formatUserName } from "./utils";

describe('Testando username', () => {
  test("formatUserName adiciona @ no início do nome de usuário", () => {
    expect(formatUserName("rick")).toBe("@rick");
  });

  test("formatUserName não adiciona @ quando já é fornecido", () => {
    expect(formatUserName("@rick")).toBe("@rick");
  });
 });
 