// ------> Calculator?

// -------> Characters? Operators* Screen* Keys* QSel*
let numPad = document.querySelector('.numOnly')

let screen = document.querySelector('.calScreen')
// 7--8--9--- X
// 4--5--6--- X
// 1--2--3--- X
// 0--.--(=)- X


// const createNumberKey = () =>{
//     let numKey = document.createElement('div')
//     // ---(CreateEle)
//     numKey.setAttribute('class','smBtn' )
//     // ---(addClass)

//     // ---addOnclick that takes evt params
//     numPad.append(numKey)
// }
// ----gotBored
const addToScreen = (info) => {
    screen.append(info);
}
const findMyVal = (evt) =>{
    addToScreen(evt.target.textContent);
}
const clearscreen = () => {
   screen.textContent = "";
}
const Answer = () => {
    if (screen.textContent.includes('x')){
        let val = screen.textContent;
        val = val.replace('x', '*');
        result = eval(val);
    }
    else if (screen.textContent.includes('%')){
        let val = screen.textContent;
        val = val.replace('%', '/');
        result = eval(val); 
    }
    else{
        result = eval(screen.textContent);
    }
    screen.textContent = result;
}