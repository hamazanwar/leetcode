var maximumWealth = function(accounts) {
    let largestWealth=0;
    for(let i=0;i<accounts.length;i++){
        let currentWealth=0;
        for(let j=0;j<accounts[i].length;j++){
            currentWealth=currentWealth+accounts[i][j];
        }
        if(largestWealth<currentWealth){
            largestWealth=currentWealth;
        }
    }
    return largestWealth;
};

console.log(maximumWealth([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));