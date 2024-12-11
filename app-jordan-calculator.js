
let numPad = document.querySelector('.numOnly')
let screen = document.querySelector('.calScreen')

const addToScreen = (info) => {
    screen.append(info)
}
const clearScreen = () => {
    screen.innerHTML = " "
}

const findMyVal = (evt) =>{
    addToScreen(evt.target.textContent)
}

const grabFormula = () => {
    let mathProblem  = screen.textContent
    console.log(mathProblem)
    return mathProblem
}
const solveProblem = (formula)=>{
    if(formula.includes("+")){
        let choppedProblem = formula.split("+")
        console.log(choppedProblem," <-- problem broken down")
        // now lets get busy..
        let term1 = Number(choppedProblem[0])
        let term2 = Number(choppedProblem[1])
        let addedSolution = term1 += term2
        console.log("Added Solution:" , addedSolution)
clearScreen()
        addToScreen(addedSolution)
    }else if(formula.includes("-")){
        let choppedProblem = formula.split("-")
        console.log(choppedProblem," <-- problem broken down")
        // now lets get busy..
        let term1 = Number(choppedProblem[0])
        let term2 = Number(choppedProblem[1])
        let addedSolution = term1 - term2
        console.log("Added Solution:" , addedSolution)
        clearScreen()
        addToScreen(addedSolution)
    }else if(formula.includes("x")){
        let choppedProblem = formula.split("x")
        console.log(choppedProblem," <-- problem broken down")
        // now lets get busy..
        let term1 = Number(choppedProblem[0])
        let term2 = Number(choppedProblem[1])
        let addedSolution = term1 * term2
        console.log("Added Solution:" , addedSolution)
        clearScreen()
        addToScreen(addedSolution)
    }else if(formula.includes("/")){
        let choppedProblem = formula.split("/")
        console.log(choppedProblem," <-- problem broken down")
        // now lets get busy..
        let term1 = Number(choppedProblem[0])
        let term2 = Number(choppedProblem[1])
        let addedSolution = term1 / term2
        console.log("Division Broken?",addedSolution)
        console.log("Added Solution:" , addedSolution)
        clearScreen()
        addToScreen(addedSolution)
    }
    // Split formula by operator  
}
const findSolution= () =>{
    solveProblem(grabFormula())
}
