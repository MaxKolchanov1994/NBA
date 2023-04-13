alert('Привет! Для начала предлагаю сыграть в игру ; нужно угадать секретное число от 1 до 100' )

function randomNumber(){
    let number = Math.floor(Math.random()*100);
    for(let count=1; count<=10; count++){
        let result = prompt(`Попытка №${count} Введите число:`)
        if(result == null){
            alert('Вы нажали отмену. Значит игра отменяется :(');
            break;
        }
        if(result == number){
            return alert(`Вы угадали число! Попыток: ${count}, Число: ${number}`)
        }else if (result < number){
            alert(`Ваше число ${result}, меньше секретного`)
        } else if (result > number){
            alert(`Ваше число ${result}, больше секретного`)
        }
    }
    if(count == 10){
        return alert(`Вы не угадали число! Число:${number}`)
    }
    
}
randomNumber()
// продолжение следует 