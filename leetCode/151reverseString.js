var reverseWords = function(s) {
    let sentence=s.split(" ");
    let stack=[];
    for(let element of sentence){
        stack.push(element);
    }
    let newString="";
    while(stack.length){
        let current=stack.pop();
        if(current){
            newString+=" "+current;
        }
    }
    return newString.trim("");
};

console.log(reverseWords("the sky is blue"));