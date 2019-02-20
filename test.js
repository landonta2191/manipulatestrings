
//QUESTION 1



let obj = "leet";
let array = obj.split('');
let newarray= array.map( x => {
    if ( x === a || x === A ) {
        x === 4;
    }
    else if ( x === e || x === E) {
        x === 3;
    }
    else if ( x === i || x === I) {
        x === 1;
    }
    else if ( x === o || x === O) {
        x === 0;
    }
    else if ( x === s || x === S) {
        x === 5;
    }
    else if ( x === t || x === T) {
        x === 7;
    }
    else if ( x === b || x === D) {
        x === 5;
    }
})

let result= newarray.join('');

//QUESTION2

let str = "aaaabbbcc";
let obj = {};
[...str].foreach( x => {
    if (obj[x]) return obj[x] =obj[x] + 1;
    return obj[x] = 1;
})
Object.entries(obj).flat().join('');