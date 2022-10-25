const insultBtn = document.querySelector('.insult-btn')
const insultDisplay = document.querySelector('.insult-display')
const initialArray = [...allInsults] // Saving the original array to use later for when array is empty.

insultBtn.addEventListener('click', generateInsult)

function generateInsult() {
    
    const randomIndex = Math.floor(Math.random() * allInsults.length) // Generate a random index between 0 and the amount of insults still left in the allInsults-array.

    const insult = allInsults[randomIndex].insult // Pick an insult randomly with the previously generated randomIndex.
    const play = allInsults[randomIndex].play

    // Render the random insult to the DOM
    insultDisplay.innerHTML = `     
    <p>"${insult}"</p>
    <p class='insult-display__play-p'>${play}</p>
    `
    allInsults.splice(randomIndex, 1) // Remove rendered insult from the array

    if (allInsults.length === 0) { // if it's empty, restore original array 
        allInsults = [...initialArray]
    } 
}