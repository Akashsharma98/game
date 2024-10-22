const userInput = document.querySelector('.input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.all_guesses')
const submitBtn = document.querySelector('.submit')
const StartGameBtn = document.querySelector('.start_game')

function a(){
    const allGuessesArray = []
let randomNumber = Math.round(Math.random()*100);


form.addEventListener('submit',(e) =>{
    e.preventDefault()
    const userInputvalue= parseInt(userInput.value)
    if(userInputvalue< randomNumber){
        result.innerText = 'to low!!'
    }else if (userInputvalue > randomNumber){
        result.innerText='to high!!'        
    }else{
        result.innerText='congrats!!!'
        StartGameBtn.disabled = false
        submitBtn.disabled = true
    }
    allGuessesArray.push(userInputvalue)
    allGuesses.innerText= 'your guesses ' + allGuessesArray.join(',')
        form.reset()
})


StartGameBtn.addEventListener('click',() => {
    allGuesses.innerText=''
    result.innerText = ''
    StartGameBtn.disabled = true
    submitBtn.disabled = false
    randomNumber = Math.round(Math.random()*100)

})
}
a ()
