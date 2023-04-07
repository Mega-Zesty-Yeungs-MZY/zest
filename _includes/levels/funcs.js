
function xor(a, b) {
    return a ^ b;
}
function xnor(a, b) {
    return !(a ^ b);
}
function and(a, b) {
    return a && b
}
function or(a, b) {
    return a || b
}
function nand(a, b) {
    return !(a && b)
}
function nor(a, b) {
    return !(a || b)
}
function inhX(a,b){
    return !a && b
}
function inhY(){
    return a && !b
}
function not(a){
    return !a
}
// [{a:1, b:0, op:func}, {a:output, b:0, op:"xor"}]
function submit(){
    let output = 0;
    let elems = document.getElementsByName("dropput");
    console.log(funcs["xor"](1, 0));

}