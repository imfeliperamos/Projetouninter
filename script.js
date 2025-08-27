// ===== MODO ESCURO =====
// Seleciona o botão (novo id)
var botaoTema = document.getElementById('btn-modo-escuro');
if (botaoTema) {
    botaoTema.onclick = function() {
        document.body.classList.toggle('modo-escuro');
        if(document.body.classList.contains('modo-escuro')) {
            botaoTema.textContent = '☀️';
        } else {
            botaoTema.textContent = '🌙';
        }
    };
}