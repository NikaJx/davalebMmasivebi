//დავალება 1
const users = [
    {
        name: 'Lasha',
        age: 21
    },
    {
        name: 'Ana',
        age: 28
    },
    {
        name: 'Temo',
        age: 25
    }
];

function ageUser(userArray) {
    let min = userArray.reduce((acc, curr) => acc.age < curr.age ? acc: curr);
    console.log(min.name);

    // let minAge = userArray;
    // for(const item of userArray) {
    //     console.log(item);
    //     if(item < minAge) {
    //         minAge = item;
    //         // console.log(minAge);
    //     }
    // }
}

ageUser(users);

//დავალება 2
const user = {
    name: 'Jhon',
    lastName: 'Smith'
}

function objFunc(us) {
    for(const el in us) {
       us.name = 'Ika';
       us.lastName = 'Grigolashvili';
       console.log(us[el]);
    }
}

objFunc(user);
console.log(user);


//დავალება 3

function generateRandom() {
    return Math.floor(Math.random() * 9);
}

function startGame() {
    let counter = generateRandom();

     let a = generateRandom();
     let b = generateRandom();

    while(counter <= 3) {
        if(counter === a) {
            console.log('Win A');
        } else if(counter === b) {
            console.log('Win B');
        }
        counter++;
    }

    // if(a <= 3) {
    //     console.log('Win A ');
    // } else console.log('Not win A');
    // if(b <= 3) {
    //     console.log('Win B ');
    // } else console.log('Not win B');
}

startGame();
