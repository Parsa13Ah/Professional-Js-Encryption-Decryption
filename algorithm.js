function encryptCaesar(text, shift) {
    return text.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const base = char.charCodeAt(0) >= 97 ? 97 : 65; // Lowercase or uppercase
            return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

function decryptCaesar(text, shift) {
    return encryptCaesar(text, 26 - (shift % 26)); // Inverse shift
}

function encryptVigenere(text, key) {
    let keyIndex = 0;
    return text.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const base = char.charCodeAt(0) >= 97 ? 97 : 65; // Lowercase or uppercase
            const shift = key[keyIndex % key.length].toLowerCase().charCodeAt(0) - 97;
            keyIndex++;
            return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

function decryptVigenere(text, key) {
    let keyIndex = 0;
    return text.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const base = char.charCodeAt(0) >= 97 ? 97 : 65; // Lowercase or uppercase
            const shift = key[keyIndex % key.length].toLowerCase().charCodeAt(0) - 97;
            keyIndex++;
            return String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}

function encryptXOR(text, key) {
    return text.split('').map((char, index) => {
        return String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(index % key.length));
    }).join('');
}

function decryptXOR(text, key) {
    return encryptXOR(text, key); // XOR رمزنگاری و دیکد کردن مشابه هم هستند
}

function getRandomOffset() {
    return Math.floor(Math.random() * 25) + 1; // عدد تصادفی بین 1 تا 25
}

document.getElementById('encryptButton').addEventListener('click', () => {
    const text = document.getElementById('inputText').value;
    const algorithm = document.getElementById('algorithmSelect').value;
    let result;

    switch (algorithm) {
        case 'caesar':
            const caesarShift = parseInt(prompt("Enter shift value (1-25):"), 10);
            result = encryptCaesar(text, caesarShift);
            break;
        case 'vigenere':
            const vigenereKey = prompt("Enter Vigenère key:");
            result = encryptVigenere(text, vigenereKey);
            break;
        case 'xor':
            const xorKey = prompt("Enter XOR key:");
            result = encryptXOR(text, xorKey);
            break;
        case 'random-offset':
            const randomOffset = getRandomOffset(); // دریافت offset تصادفی
            result = encryptCaesar(text, randomOffset);
            alert(`Random offset used: ${randomOffset}`); // نمایش offset تصادفی
            break;
        case 'aes':
            alert("AES is not implemented yet.");
            return;
        default:
            result = "Unknown algorithm.";
    }

    document.getElementById('resultTitle').classList.remove('hidden');
    document.getElementById('result').textContent = result;
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const text = document.getElementById('result').textContent;
    const algorithm = document.getElementById('algorithmSelect').value;
    let result;

    switch (algorithm) {
        case 'caesar':
            const caesarShift = parseInt(prompt("Enter shift value (1-25):"), 10);
            result = decryptCaesar(text, caesarShift);
            break;
        case 'vigenere':
            const vigenereKey = prompt("Enter Vigenère key:");
            result = decryptVigenere(text, vigenereKey);
            break;
        case 'xor':
            const xorKey = prompt("Enter XOR key:");
            result = decryptXOR(text, xorKey);
            break;
        case 'aes':
            alert("AES decryption is not implemented yet.");
            return;
        default:
            result = "Unknown algorithm.";
    }

    document.getElementById('resultTitle').classList.remove('hidden');
    document.getElementById('result').textContent = result;
    document.getElementById('result').classList.remove('hidden');
});
