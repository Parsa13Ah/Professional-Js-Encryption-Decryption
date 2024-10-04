document.addEventListener('DOMContentLoaded', () => {
    const actionSelect = document.getElementById('action');
    const inputTextArea = document.getElementById('inputText');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');

    actionSelect.addEventListener('change', () => {
        inputTextArea.value = ''; // Clear input text when changing option
        resultText.textContent = ''; // Clear result
    });

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(resultText.textContent)
            .then(() => {
                alert('Text copied!');
            })
            .catch(err => {
                console.error('Copy error:', err);
            });
    });

    document.querySelector('button[type="button"]').addEventListener('click', () => {
        const action = actionSelect.value;
        const inputText = inputTextArea.value;

        if (action === 'encrypt') {
            resultText.textContent = encryptText(inputText);
            resultTitle.textContent = 'Encryption Result:';
        } else if (action === 'decrypt') {
            resultText.textContent = decryptText(inputText);
            resultTitle.textContent = 'Decryption Result:';
        } else {
            alert('Please select an option!');
        }
    });

    function encryptText(text) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const randomOffset = Math.floor(Math.random() * 256); // Offset between 0 and 255
            const encryptedChar = String.fromCharCode(charCode + randomOffset);
            result += `${randomOffset},${encryptedChar};`; // Store offset and character
        }
        return result;
    }

    function decryptText(text) {
        const parts = text.split(';');
        let result = '';
        for (let part of parts) {
            if (part) {
                const [offset, encryptedChar] = part.split(',');
                const decryptedChar = String.fromCharCode(encryptedChar.charCodeAt(0) - parseInt(offset));
                result += decryptedChar;
            }
        }
        return result;
    }
});
