// Seleção dos elementos do DOM
const modal = document.getElementById("modal-contato");
const btnAbrirContato = document.getElementById("btn-contato");
const btnFecharModal = document.querySelector(".fechar-modal");
const formContato = document.getElementById("form-contato");

// Abrir o modal ao clicar no botão "Contato"
btnAbrirContato.addEventListener("click", () => {
    modal.style.display = "block";
});

// Fechar o modal ao clicar no "X"
btnFecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal se o usuário clicar em qualquer lugar fora da caixa branca
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Manipulação do envio do formulário
formContato.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores digitados (pronto para enviar para uma API futuramente)
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Mensagem de sucesso para o usuário
    alert(`Obrigado pelo contato, ${nome}! Nossa equipe ambiental responderá em breve no e-mail: ${email}.`);

    // Limpa o formulário e fecha o modal
    formContato.reset();
    modal.style.display = "none";
});