const ATMScreen = document.querySelector('.scrn2')

const clearATMScreen = () => {
    ATMScreen.textContent = "";
 }

const addToATMScreen = (info) => {
    ATMScreen.append(info);
}

const findMyVal = (evt) =>{
    addToATMScreen(evt.target.textContent);
}

const OnNumPadEnter = () => {
    if (ATMScreen.textContent.includes('x')){
        let val = ATMScreen.textContent;
        val = val.replace('x', '*');
        result = eval(val);
    }
    else if (ATMScreen.textContent.includes('%')){
        let val = ATMScreen.textContent;
        val = val.replace('%', '/');
        result = eval(val); 
    }
    else{
        result = eval(ATMScreen.textContent);
    }
    ATMScreen.textContent = result;
}
