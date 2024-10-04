# Encryption and Decryption Tool V2

This tool is designed for encrypting and decrypting text using various algorithms. Users can enter their text and select one of the available algorithms for encryption or decryption.

## Algorithms

### 1. Caesar Cipher
This is a type of symmetric encryption where each letter in the plaintext is shifted by a fixed amount. For example, with a shift of 3, the letter A becomes D.

- **Encryption Method**: `encryptCaesar(text, shift)`
- **Decryption Method**: `decryptCaesar(text, shift)`

### 2. Vigenère Cipher
This algorithm uses a keyword to shift letters. Each letter in the keyword corresponds to letters in the plaintext, and the shift is calculated based on the position of the letter in the keyword.

- **Encryption Method**: `encryptVigenere(text, key)`
- **Decryption Method**: `decryptVigenere(text, key)`

### 3. XOR Cipher
In this algorithm, each letter is XORed with a character from the key. This process is the same for both encryption and decryption.

- **Encryption Method**: `encryptXOR(text, key)`
- **Decryption Method**: `decryptXOR(text, key)`

### 4. Random Offset
This algorithm generates a random offset for encryption. It offers more security compared to the other methods by using a variable shift.

- **Encryption Method**: `encryptRandomOffset(text)`
- **Decryption Method**: `decryptRandomOffset(text)`

## How to Use

1. Go to https://parsa13ah.github.io/Professional-Html-Encryption-Decryption/ or run html file in your computer
2. Enter your text in the input box.
3. Select one of the available algorithms from the dropdown menu.
4. Click the "Encrypt" button for encryption or the "Decrypt" button for decryption.
5. The result will be displayed below the input box.

## Requirements

- Web browser (to use the tool)
- No specific libraries or software are required.

## Build and Development

This tool is designed and developed by **Parsa13Ah**. For any inquiries or collaborations, please contact us.

## License

This project is licensed under the MIT License. For more details, please refer to the `LICENSE` file.
