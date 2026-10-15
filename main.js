const formulario = document.getElementById('form-validacao');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

let formEValido = false;

function validarFormulario() {
    const numeroA = Number(campoA.value);
    const numeroB = Number(campoB.value);

    return campoA.value !== '' &&
            campoB.value !== '' &&
            numeroB > numeroA;
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Numero do campo B: <b>${Number(campoB.value)}</b> é maior que o numero do campo A: <b>${Number(campoA.value)}</b>. Formulário validado com sucesso!`;

    formEValido = validarFormulario();
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');

        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        document.querySelector('.error-message').style.display = 'none';

        campoB.classList.remove('error');

        campoA.value = '';
        campoB.value = '';

    } else {
        campoB.classList.add('error');
        
        document.querySelector('.success-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'block';
    }
});

campoB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validarFormulario();

    if (!formEValido) {
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});