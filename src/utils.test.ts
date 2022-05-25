import { formatUserName } from "./utils";

describe('formatUserName', () => {
  test("formatUserName agrega @ al inicio de nombre de usuario", () => {
    const result = formatUserName("rick");
    expect(result).toBe("@rick");
  });

  test("formatUserName no agrega @ cuando ya está provisto", () => {
    const result = formatUserName("@rick");
    expect(result).toBe("@rick");
  });
});
 