function enviarWhatsApp() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const botao = document.querySelector('.botao-enviar');
  
    if (nome === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const numeroWhatsApp = '5535974002853'; // <- Troque pelo seu número se precisar!
  
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  
    window.open(link, '_blank');
  
    // Feedback visual no botão
    botao.innerText = "Mensagem Enviada!";
    botao.style.backgroundColor = "green";
    botao.disabled = true;
  
    setTimeout(() => {
      botao.innerText = "Enviar no WhatsApp";
      botao.style.background = "linear-gradient(90deg, var(--primaria), var(--secundaria))";
      botao.disabled = false;
    }, 3000);
  }
  