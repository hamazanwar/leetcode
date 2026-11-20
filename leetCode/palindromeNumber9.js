const isPalindrome=(string)=>{
    if(string<0){
        return false;
    }
    let str=string.toString();
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed=reversed+str[i];
    }
    if(str===reversed){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome(121));
console.log(isPalindrome(1211));