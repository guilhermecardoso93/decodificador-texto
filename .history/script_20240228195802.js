const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const copiar = document.querySelector(".div-btn-copiar");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);

  mensagem.value = textoEncriptado;
  textArea = "";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptada;
}


function btnDesencriptar() {

  if (inputTexto.value == 0) {
      alert('É necessário digitar o texto que você deseja >DESENCRIPTAR< primeiro.')
  } else if (inputTexto.value != 0) {
      const textoEncriptado = desencriptar(inputTexto.value); // Mesma coisa que lá em cima
      mensagem.value = textoEncriptado;
      mensagem.style.backgroundImage = "none";
      copiar.style.display = "flex";
  }
}

// função de descriptografia
function desencriptar(stringEncriptada) {

  let matrizCodigo = [
      ["enter", "e"],
      ["imes", "i"],
      ["ai", "a"],
      ["ober", "o"],
      ["ufat", "u"]
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringEncriptada.includes(matrizCodigo[i][0])) {
          stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
  }

  return stringEncriptada;
}
