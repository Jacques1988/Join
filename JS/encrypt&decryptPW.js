//here begins encrypt and decryption


function cryptpassword() {
    let crypt = {
        secret: users['userpassword'],


        encrypt: function (clear) {
            let cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
            cipher = cipher.toString();
            return cipher;
        },

        decrypt: function (cipher) {
            var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
            decipher = decipher.toString(CryptoJS.enc.Utf8);
            return decipher;
        }
    }
    console.log(users)
    addUser();
};