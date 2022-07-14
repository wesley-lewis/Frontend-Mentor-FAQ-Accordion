const questions = document.querySelectorAll('.quest-ans-container')


questions.forEach( question => {
  question.addEventListener('click', () => {
    if(question.childNodes[3].classList.contains('active')) {
      question.childNodes[3].classList.toggle("active")
    }
    else {
      questions.forEach(question => {
        question.childNodes[3].classList.remove('active')
        
      })
      question.childNodes[3].classList.add('active')
      
    }
  })
})

questions.forEach( question => {

})