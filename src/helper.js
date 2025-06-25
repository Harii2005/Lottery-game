function  generateNewTicket(n){
    let arr = new Array(n);
    for(let i = 0 ; i< n ; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr){
    return arr.reduce((sum , curr)=>sum+curr , 0)//this means it will return the sum of the given array also here sum is used for adding the each element of the array for "curr" and "0" means that Sum is initialised to 0 
}


export {generateNewTicket , sum};