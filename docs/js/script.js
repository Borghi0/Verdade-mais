const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const senha = document.getElementById("loginSenha").value;

        const mensagem = document.getElementById("mensagemLogin");
        mensagem.textContent = "";

        if (!email) {
            mensagem.textContent = "Informe o e-mail.";
            return;
        }

        if (!senha) {
            mensagem.textContent = "Informe a senha.";
            return;
        }

        // para integração com banco
        console.log("Tentativa de login:");
        console.log({
            email,
            senha
        });

        mensagem.textContent = "Login enviado com sucesso.";
    });
}


const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {
    cadastroForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        const termos = document.getElementById("termos").checked;

        const mensagem = document.getElementById("mensagemCadastro");
        mensagem.textContent = "";

        if (nome.length < 2) {
            mensagem.textContent =
                "Informe um nome válido.";
            return;
        }

        if (!validarEmail(email)) {
            mensagem.textContent =
                "Informe um e-mail válido.";
            return;
        }

        if (senha.length < 8) {
            mensagem.textContent =
                "A senha deve possuir pelo menos 8 caracteres.";
            return;
        }
        if (senha !== confirmarSenha) {
            mensagem.textContent =
                "As senhas não coincidem.";
            return;
        }

        if (!termos) {
            mensagem.textContent =
                "É necessário aceitar os termos de uso.";
            return;
        }


        // para integração com banco
        console.log("Cadastro enviado:");

        console.log({
            nome,
            email,
            senha
        });

        mensagem.textContent =
            "Cadastro realizado com sucesso.";
    });
}


function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}