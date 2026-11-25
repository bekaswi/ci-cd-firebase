
function somar(a, b) {
    return a + b;
}

function verificarUsuario(usuario) {
    return usuario ? "Usuário autenticado" : "Usuário não autenticado";
}

module.exports = {
    somar,
    verificarUsuario
};
