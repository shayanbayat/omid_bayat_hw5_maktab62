let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza" ,
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami"
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani"
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi"
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri"
    }
]

let additionalPersonData = [
    {
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand"
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan"
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan"
    }
]




function mergeArrays(arr1, arr2){
    let res = [];
    res = arr1.map(obj => {
        const index = arr2.findIndex(el => el["uid"] === obj["uid"]);
        const  position = arr2[index].position
        const  city = arr2[index].city
        return {
            ...obj,
            position,
            city
        };
    });
    return res;
}


function update(array, uid) {
    let result = array.filter(e => e.uid === uid)
    if(result.length > 0) {
        result = result[0]
        for(let key in result){
            if(key === 'uid'){
                continue
            }
            result[key] = prompt(`inter value for ${key} `,`${result[key]}`)
        }

        console.log(result)
    }
    else {
        console.log("not exist!!")
    }
}



function create(result){
   let obj = {
        ...result[0]
    }
    for(let key in obj){
        if(key === 'uid'){
            let uid = parseInt(prompt('enter uid',`${Math.floor(Math.random()*100)}`))
            while (result.some(e => e.uid === uid)){
                 uid = parseInt(prompt('enter uid, last choice is exist',`${Math.floor(Math.random()*100)}`))
            }
            obj[key] = uid
        }else {
            obj[key] = prompt(`inter value for ${key} `,undefined)
        }
    }
    result.push(obj)
    return result
}



function deleteObject(result,uid){
    result = result.filter(e => e.uid !== uid)
    console.log("delete is done !!")
    return result
}



function read(result) {
    let length = result.length
    for (let i = 0 ; i < length ; i++){
        for(let key in result[i]){
            console.log(`${key} : ${result[i][key]}`)
        }
        console.log('----------------------------------')
    }
}


    let index = parseInt(prompt(`
    for viwe import 1
    for create import 2
    for update import 3
    for delet import 4
    `
    ))
    console.log(index)
    var result = mergeArrays(personData, additionalPersonData)
    switch (index){
        case 1:
            console.log(read(result))
            break
        case 2:
            console.log(create(result))
            break
        case 3:
            update(result, 5)
            break
        case 4:
            let choice = parseInt(prompt('import uid'))
            console.log(deleteObject(result,choice))
            break
        default:
            console.log("nothing")
    }



// console.log(result);
//
//
//
//
