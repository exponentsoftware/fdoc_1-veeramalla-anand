var arr = [];
while(arr.length < 7){
    var i = Math.floor(Math.random() * 9);
    if(arr.indexOf(i) === -1) arr.push(i);
}
console.log(arr);