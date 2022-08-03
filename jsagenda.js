senhanova = "senha"
var constlogin = [
    'teste@1',
    'teste@2',
    'teste@3'
]

const constsenha = {
    'teste@1'(y) {
        if (y == "senha1") {
            valid = 1
        }
    },
    'teste@3'(y) {
        if (y == "senha2") {
            valid = 1
        }
    },
    'teste@3'(y) {
        if (y == "senha3") {
            valid = 1
        }
    },
}




function registrar() {
    
    location.replace("homepage/index.html")
    alert("uai")
    
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