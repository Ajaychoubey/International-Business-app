const $ = element => document.querySelector(element);
const $all = element => document.querySelectorAll(element);
let $id = element => document.getElementById(element);
const addPlayer = $('#add-player');
let playerName = $('#player-name');
let data = $('#data');

const players = [];

const createPlayer = ({name, cash, cashInCard}) => players.push({name, cash, cashInCard});
const randomChoice = (array) => array[Math.floor(Math.random() * array.length)];

function createCard(player){
    let buttonClasses = ['primary','danger','success','info'];   
    let currentId = players.length-1;
    data.innerHTML = data.innerHTML+`
        <tr id='${currentId}'>
            <td>
                <button class='btn btn-${randomChoice(buttonClasses)}'>
                    ${player.name}
                </button>
            </td>
            <td><input class='form-control cash' id='calc' value=${player.cash}></td>
            <td><input class='form-control cashInCard' id='calc' value=${player.cashInCard}></td>
            <td>
                <div class='btn-group'>
                    <button class='btn btn-info' id='pcm' target='${currentId}'>
                        Pay card maintainance
                    </button>
                    <button class='btn btn-success' id='salary' target='${currentId}'>
                        Get Salary
                    </button>
                </div>
            </td>
            <td>
                <div class='btn-group'>
                    <button class='btn btn-danger roundToggle' target='${currentId}' id='decrease-rounds'>-</button>
                    <button class='btn btn-danger' id='rounds'>0</button>
                    <button class='btn btn-danger roundToggle' target='${currentId}' id='increase-rounds'>+</button> 
                </div>
            </td>
        </tr>
    `;
    $all('.roundToggle').forEach(round => {
        round.onclick = () => {
            let target = round.getAttribute('target');
            let card = $id(target);
            let roundsDone = card.querySelector('#rounds');
            let sign = '';

            if(round.id == 'increase-rounds') sign = '+';
            else sign = '-';

            roundsDone.innerHTML = eval(`${roundsDone.innerHTML} ${sign} 1`);
        }
    });

   $all('#salary').forEach(salary => {
        salary.onclick = () => {
            let target = salary.getAttribute('target');
            let card = $id(target);
            let totalMoney = card.querySelector('.cash');
            totalMoney.value = Number(totalMoney.value) + SALARY;
        }
    });

    $all('#calc').forEach(calc => {
        calc.onchange = () => calc.value = eval(calc.value) 
    })
    $all('#pcm').forEach(pcm => {
        pcm.onclick = () => {
            let target = pcm.getAttribute('target');
            let tableRow = $id(target);
            let cash = tableRow.querySelector('.cash');

            cash.value = Number(cash.value) - CARD_MAINTAIN_BILL;
        }
    })
    
}

addPlayer.onclick = () => {
    createPlayer({
        name:playerName.value, cash:INITIAL_MONEY, cashInCard:INITIAL_MONEY_IN_CARD 
    });
    createCard(players[players.length - 1]);
}