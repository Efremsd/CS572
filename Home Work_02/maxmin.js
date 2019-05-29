Array.prototype.pluck1 = function (isPluck) {
    let arr = this;
    process.nextTick(() => {
        console.log(Math.max.apply(null, arr))
    })


}
Array.prototype.pluck2 = function (isPluck) {
    let arr2 = this;
    setImmediate(() => {
        console.log(Math.min.apply(null, arr2))
    })


}
console.log('start');
[1, 2, 3, 4, 5, 6, 7, 8].pluck1(true);
[1, 2, 3, 4, 5, 6, 7, 8].pluck2(false);
console.log('Finish');
