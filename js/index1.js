// a = []
// for(let i = 0; i<3; i++){
//    a[i] = {}
//     a[i].name = i
// }
//
// a[2].last = 4
// a[1].last = 5
// a[0].last = 6
// console.log(a)
// let ali = "ali"
// console.log(ali)
// ali[0] = 'b'
// console.log(ali)
function checkPlace(array){
    let length = array.length
    for(let i = 0; i<length-2; i++){
        for (let j = i+1 ; j < length; j++){
            if(array[i].place === array[j].place && (array[i].place !==0 && array[i].place !==0 && array[i].end !==true)){
                array[j].place = 0
            }
        }
    }
}
function show(carStatus, winner) {
    let carArray = '-'.repeat(300)
    carArray = carArray.split('')
    for (const index in carStatus) {
        let place = carStatus[index].place
        if( place !== 0 && place < 300){
            carArray[place] = carStatus[index].name
        }
    }
    console.log(`${carArray.join('')}` +`${winner.join('')}` )
}

function race() {
    let carNumber = parseInt(prompt("inter number of cars"))
    let carStatus = []
    let winner = []
    for(let i = 0 ; i < carNumber ; i++){
        carStatus[i] = {}
        carStatus[i].name = prompt(`Enter the name of car number ${i+1}`)
        carStatus[i].end = false
        carStatus[i].place = Math.floor(Math.random() * 10)
    }
    checkPlace(carStatus)
    show(carStatus, winner)
    while (carStatus.some(a => a.end !== true)){
        for (const index in carStatus) {
            if(carStatus[index].end === false){
            carStatus[index].place += Math.floor(Math.random() * 10)}
            if(carStatus[index].place >= 300 && carStatus[index].end === false){
                carStatus[index].end = true
                winner.push(carStatus[index].name)
            }
        }
        checkPlace(carStatus)
        show(carStatus, winner)
    }
    console.log(`winner is car name ${winner[0]}`)

}

race()