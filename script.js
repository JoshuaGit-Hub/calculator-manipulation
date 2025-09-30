const display = document.getElementById('display');
const allButtons = document.querySelectorAll('.btn');

const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let shouldResetDisplay = false;
const operadores = ['+', '-', 'X', '÷'];

allButtons.forEach(e => {
    e.addEventListener('click', () => {

        const value = e.dataset.value || e.textContent;

        if(value === '='){
            let expression = display.value;
    
            expression = expression.replace(/X/g, '*').replace(/÷/g, '/');
    
            const result = eval(expression);

            display.value = result;
            shouldResetDisplay = true;
        }
        else if(value === 'C'){
            display.value = '';
        }
        else if(value === 'DEL'){
            display.value = display.value.slice(0, -1);
        }

        else{
                if(display.value === ''){
                    display.value = value + ' ';
                }
                else{
                        if(!shouldResetDisplay){
                            display.value += ' ' + value + ' ';
                        }else{
                            if(operadores.includes(value)){
                                display.value += ' ' + value + ' ';
                                shouldResetDisplay = false;
                            }else{
                                display.value = value;
                                shouldResetDisplay = false;
                            }
                        }
                    
                }
        }
        

    });
});