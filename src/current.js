var current = ''
var current = function (newCurrent){
    if(newCurrent!=''){
        current = newCurrent;
    }
    if(newCurrent == 'reset'){
        current = ''
    }
    return current;
}
export default current;