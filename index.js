const lodash = require('lodash');

const data1 = [
    {
    "age": 3,
    "name": "Curtis Greene",
    "email": "curtis.greene@zaj.ca",
    },
    {
    "age": 23,
    "name": "Nikki Lowe",
    "email": "nikki.lowe@darwinium.tv",
    },
    {
    "age": 39,
    "name": "Barr Copeland",
    "email": "barr.copeland@nipaz.me",
    },
    ];
    const data2 = [
    {
    "age": 29,
    "name": "Calhoun Woodward",
    "email": "calhoun.woodward@medmex.info",
    },
    {
    "age": 21,
    "name": "Leta Lee",
    "email": "leta.lee@qnekt.com",
    },
    {
    "age": 40,
    "name": "James Dinh",
    "email": "j.dink@erw.com",
    }
    ];

// Task 1
const userIndex = lodash.findIndex(data1, function(user) { return user.age === 23; });

// Task 2
const data3 = lodash.concat(data1,data2)

// Task 3
// const oldObject = user => lodash.omit(user, ['age'])
// const newObject = oldObject(data1[0])

// Task 4
const oldObject = (data) => {
    let object = {} 
    for (let key in data) {
        if (key !== 'age'){
            object[key] = data[key]
        }
    }
    return object
}
const newObject = oldObject(data1[0])
console.log(newObject);