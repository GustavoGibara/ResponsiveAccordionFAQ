const perguntas = document.querySelectorAll('.pergunta')

function accordion() {
  this.classList.toggle('ativo')
}

perguntas.forEach((pergunta) => {
  pergunta.addEventListener('click', accordion)
})