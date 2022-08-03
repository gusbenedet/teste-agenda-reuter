var constlogin = [
    'teste@1',
    'teste@2',
    'teste@3'
]

const constsenha = {
    'teste@1'(y) {
        if (y == "senha") {
            valid = 1
        }
    },
}




function registrar() {
    senhanova = prompt("insira")

    senhanova = senhanova.toString()

    var contanova = function (y) {
        if (y == senhanova) {
            alert("doidera")
            valid = 1
        }
    }
    constsenha['teste@2'] = contanova(js_senha)
}

function logar() {
    js_login = document.getElementById('login').value
    js_senha = document.getElementById('senha').value
    const teste = constsenha[js_login]
    teste(js_senha)
    if (-1 !== constlogin.indexOf(js_login)) {
        switch (valid) {
            case 1:
                alert("deu")
                break;

            default:
                alert("senha incorreta inserida")
                break;
        }

    }
}