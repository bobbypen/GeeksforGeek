let mapObject = new Map([
    ["Mongo", 12],
    ["React", 11],
    ["Node", 23],
    ["Express", 21]
]);
 
console.log("Display of Key-Value Pair->")
for (const entry of mapObject) {
    console.log(entry);
}
 
console.log("Display of Value only->")
for (const [a1, a2] of mapObject) {
    console.log(a1);
}

console.log("Display of Value only->")
for (const [a1, a2] of mapObject) {
    console.log(a2);
}
