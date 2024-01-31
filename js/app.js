

function encrypt() {
    let mainText = document.getElementById('before-text').value;
    let resultENDE = document.getElementById('result-en/de');
    let showH1 = document.getElementById('show-h1');
    let floatingHTML = document.getElementById('floating');
    let personTextHTML = document.getElementById('person-text');
    let sitPersonHTML = document.getElementById('sit-person');
    showH1.innerText = 'El texto encriptado es:'
    floatingHTML.style.borderTopRightRadius = '0px';
    personTextHTML.style.display = 'flex';
    personTextHTML.style.flexDirection = 'column';
    sitPersonHTML.style.display = 'none';
    let vowels = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'fat',
    };
    let encryptedText = mainText.replace(/[aeiou]/g, function (remplaceVowels) {
        return vowels[remplaceVowels];

    });
    resultENDE.innerText = encryptedText;
}

function decrypt() {
    let mainText = document.getElementById('before-text').value;
    let resultENDE = document.getElementById('result-en/de');
    let showH1 = document.getElementById('show-h1');
    let floatingHTML = document.getElementById('floating');
    let personTextHTML = document.getElementById('person-text');
    let sitPersonHTML = document.getElementById('sit-person');
    showH1.innerText = 'El texto desencriptado es:'
    floatingHTML.style.borderTopRightRadius = '0px';
    personTextHTML.style.display = 'flex';
    personTextHTML.style.flexDirection = 'column';
    sitPersonHTML.style.display = 'none';
    let replaceVowels = {
        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober: 'o',
        fat: 'u',
    };
    let decryptText = mainText.replace(/(ai|enter|imes|ober|fat)/g, function (remplaceEncrypt) {
        return replaceVowels[remplaceEncrypt];
    })
    
    resultENDE.innerText = decryptText;
}

async function copy() {
    let resultENDE = document.getElementById('result-en/de').innerText;

    try {
        await navigator.clipboard.writeText(resultENDE);
        console.log('Copiado con éxito');
    } catch (err) {
        console.log('error');
    }
}



