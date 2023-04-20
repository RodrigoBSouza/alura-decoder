const text = document.getElementById('text');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
const loader = document.getElementById('container-loader');
const containerResponseHidden = document.getElementById('container-image-response-hidden');
const containerResponse = document.getElementById('container-response');
const response = document.getElementById('response');
const btnCopy = document.getElementById('btn-copy');

function encodeText(textToEncode) {
    const code = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };
  
    let encodedText = "";
    for (let i = 0; i < textToEncode.length; i++) {
        const charEncode = textToEncode[i].toLowerCase();
        if (code[charEncode]) {
            encodedText += code[charEncode];
        } else {
            encodedText += charEncode;
        }
    }
    
    return encodedText;
};

function showResponse() {
    text.value = "";
    containerResponse.style.display = 'block';
    btnCopy.style.display = 'flex';
}

function encoder() {
    loader.style.display = 'flex';
    containerResponseHidden.style.display = 'none';
    containerResponse.style.display = 'none';
    
    setTimeout(() => {
        const textToEncode = text.value;
        const encodedText = encodeText(textToEncode);

        response.innerHTML = encodedText;
        showResponse();
        loader.style.display = 'none';
    }, 2000)
}

function decoder() {
    loader.style.display = 'flex';
    containerResponse.style.display = 'none';
    
    setTimeout(() => {
        const textToDecode = text.value;
        const decodedText = textToDecode.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    
        response.innerHTML = decodedText;
        showResponse();
        loader.style.display = 'none';
    }, 2000)
}

function copyText() {
    const textCopy = response;

    textCopy.select();
    document.execCommand('copy');
}
