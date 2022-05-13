// Declarações das constantes
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const mostrarTexto = document.getElementById("mostrar-mensagem").style.display = "none";
const btncriptografar = document.querySelector(".encriptar");
const btnDescriptografar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");


// Função do clique do botão Criptografar
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);

        if (inputTexto.value != ""){

                inputTexto.value = "";
                mensagem.value = textoEncriptado;
                mostrarTexto = document.getElementById("mostrar-mensagem").style.display = "block";
        } else {
                alert("Digite seu texto:");
            }   
}

// Função do clique do botão Descriptografar
function btnDesencriptar() {

    const textoEncriptado = desencriptar(inputTexto.value);
    if(inputTexto.value != "") {
        
        inputTexto.value = "";
        mensagem.value = textoEncriptado;
        mensagem.style.display = "block";
        mostrarTexto = document.getElementById("mostrar-mensagem").style.display = "block";
        
        
    }else {
        alert("Cole um texto no campo (Digite seu texto:)");

    } 
}

// Função que faz a lógica do enunciado, embaralhando todo o texto digitado
function encriptar(stringEncriptada) {

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    stringEncriptada = stringEncriptada.normalize("NFD").replace(/[^a-zA-Zs]/g, "");

        for(let i = 0; i < matrizCodigo.length; i++) {
            if (stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }

        } 
return stringEncriptada;

}

// Função que faz a lógica do enunciado, desembaralhando todo o texto que foi digitado
function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
        for(let i = 0; i < matrizCodigo.length; i++) {
            if (stringDesencriptada.includes(matrizCodigo[i][0])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }

        } 
return stringDesencriptada;

}

// Função que copia o texto para área de transferência e configura alguns estados dos componentes  
function copiar() {
    let copiarTexto = document.querySelector(".mensagem");
    copiarTexto.select();
    document.execCommand("copy");
    mensagem.value = "";
    btnCopiar.style.display = "none";
    mensagem.style.display = "none";
    alert("Texto copiado para área de transferência");
  
}
