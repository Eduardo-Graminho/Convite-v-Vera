
const scriptURL = 'https://script.google.com/macros/s/AKfycbxvokeP8IBfK9-Fs3EoWuSFLiSaWYDeE9G0Vfcmnoxl-DQ06C2r114ZcnnrDy2L_wleWg/exec';
const form = document.getElementById('enviar-formulario');
const btn = document.getElementById('btn-enviar');
const statusmsg = document.getElementById('mensagem-status');

form.addEventListener('submit', function(e){
    e.preventDefault();

    btn.disable = true;
    btn.textContent = 'Enviando...';
    statusmsg.textContent = '';

    const payload = {
        nome: document.getElementById('name').value,
        quantidade: document.getElementById('total_pessoas').value
    };

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Evita bloqueio de segurança CORS do navegador com o Google Script
        headers: {
            'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
    })

    .then(() => {
        statusmsg.textContent = 'Presença confirmada com sucesso!';
        form.reset(); //Limpa os campos do formulário.
        btn.disable = false;
        btn.textContent = 'Confirmar';
    })

    .catch(() => {
        statusmsg.textContent = 'Erro ao enviar. Tente novamente';
        btn.disable = false;
        btn.textContent = 'Confirmar';
    })
})
    
    
