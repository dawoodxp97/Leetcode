/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n = x;
    let rev = 0;
    while(x > 0){
        let remainder = x % 10;
        console.log(remainder)
        rev = (10 * rev) + remainder;
        console.log(rev)
        x = Math.floor(x / 10);
        console.log(x)
    }
    console.log(x, rev, "RR")
    if(n === rev){
        return true;
    }else{
        return false;
    }
};