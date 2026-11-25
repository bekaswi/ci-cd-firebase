
const { somar, verificarUsuario } = require("./app");

test("Deve somar dois números", () => {
    expect(somar(2, 3)).toBe(5);
});

test("Deve verificar se existe um usuário", () => {
    expect(verificarUsuario("Rebeka")).toBe("Usuário autenticado");
});

test("Deve informar quando não existe usuário", () => {
    expect(verificarUsuario(null)).toBe("Usuário não autenticado");
});
