function useGenerator() {
    let dictionary = '';
    if (document.getElementById('lowercaseCb').checked) {
        dictionary += 'qwertyuiopasdfghjklzxcvbnm';
        console.log(dictionary)
    }
    if (document.getElementById('uppercaseCb').checked) {
        dictionary += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    }
    if (document.getElementById('digitsCb').checked) {
        dictionary += '1234567890';
    }
    if (document.getElementById('specialsCb').checked) {
        dictionary += '!@#$%^&*()_+-={}[];<>:';
    }

    const length = document.querySelector('input[type="range"]').value


    if (length < 1 || dictionary.length === 0) return 

    let password = '';
    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * dictionary.length);
        password += dictionary[pos];
         console.log(password)
    }

      document.querySelector('input[type="text"]').value = password;
}

//
[...document.querySelectorAll('input[type="checkbox"], button.generate')].forEach(elem => {
    elem.addEventListener('click', useGenerator);
});

document.querySelector('input[type="range"]').addEventListener('input', env => {
    document.querySelector('div.range span').innerHTML = env.target.value;
    useGenerator();
});


document.querySelector('div.password button').addEventListener('click', () => {
    const pass = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(() => {
        document.querySelector('div.password button').innerHTML = 'copied';
        setTimeout(() => {
            document.querySelector('div.password button').innerHTML = 'copy';
        }, 1000)
    })

});



useGenerator()

