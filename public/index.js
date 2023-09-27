// Grupo: Gatinhas e Gatão 
// Beatriz da Silva Machado, Dannilo da Silva Sampaio, 
// Maria Eduarda de Jesus Santos, Geovana Gouveia Knupp

const setLocalStorage = (usuario) => localStorage.setItem("usuario", JSON.stringify(usuario));



function btnEntrar() {
    var inputNome = document.getElementById('nome').value;
    var idUsuario = (Math.random() * 1000).toString();
    setLocalStorage({
        nome: inputNome,
        meuId: idUsuario
    });
    
    window.location.href="chat.html?usuarionome="+ inputNome + "&meuid="+ idUsuario;
}