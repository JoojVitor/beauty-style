function redirecione(button) {
    if (button.className.includes('agendamento') ||
        button.className.includes('contato')) {
        window.location.href = '../view/contato.html';
    }
    if (button.className.includes('servicos')) {
        window.location.href = '../view/servicos.html';
    }
}