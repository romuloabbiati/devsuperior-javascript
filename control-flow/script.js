// IF
const time = 11;

if(time < 12) {
    console.log('Good Morning');
} else if (time < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}

// SWITCH
const dayOfTheWeek = 5;

switch(dayOfTheWeek) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid Value');
}

// WHILE
let count = 4;
while(count > 0) {
    console.log(`COUNT = ${count}`);
    count--;
}

// FOR
for(let i = 0; i < 4; i++) {
    console.log(`I = ${i}`);
}

// DO WHILE
let test = 4;
do {
    console.log(`TEST = ${test}`);
    test--;
} while(test > 0);