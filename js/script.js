// ============================================
// AGUARDAR CARREGAMENTO DO HTML
// ============================================
document.addEventListener("DOMContentLoaded", function () {

    // ============================================
    // TEMA CLARO / ESCURO (FUNCIONA EM TODAS PÁGINAS)
    // ============================================

    // Seleciona o botão de troca de tema
    const botaoTema = document.getElementById("toggleTema");

    if (!botaoTema) return;

    const tema = localStorage.getItem("tema") || "light";

    // define texto IMEDIATAMENTE sem recalcular layout depois
    const texto = (tema === "dark")
        ? "Tema Claro"
        : "Tema Escuro";

    botaoTema.textContent = texto;

    botaoTema.addEventListener("click", function () {

        const isDark = document.documentElement.classList.toggle("dark");

        localStorage.setItem("tema", isDark ? "dark" : "light");

        // muda texto sem reflow perceptível
        botaoTema.textContent = isDark
            ? "Tema Claro"
            : "Tema Escuro";
    });

    


    // ============================================
    // FORMULÁRIO DE CONTATO (APENAS NA PÁGINA CONTATO)
    // ============================================

    // Seleciona o formulário
    const form = document.getElementById("formContato");

    // Só executa se o formulário existir
    if (form) {

        form.addEventListener("submit", function (event) {

            // Impede o envio padrão do formulário
            event.preventDefault();

            // Captura os valores dos campos
            let nome = document.getElementById("nome").value.trim();
            let email = document.getElementById("email").value.trim();
            let mensagem = document.getElementById("mensagem").value.trim();
            let status = document.getElementById("status");

            // 🔹 Validação: campos obrigatórios
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            // 🔹 Validação: formato de e-mail
            let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailValido.test(email)) {
                alert("Digite um e-mail válido!");
                return;
            }

            // 🔹 Simulação de envio
            alert("Mensagem enviada com sucesso!");

            // Limpa o formulário
            form.reset();

            // Exibe mensagem de confirmação na tela
            status.innerText = "Obrigado pelo contato!";
        });
    }

});