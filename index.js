// code your solution here
function superbowlWin(record){
    if(record.find(r => r.result === 'W')){
     return record.find(r => r.result === 'W').year
    }
    else{
        return record.find(r => r.result === 'W')
    }
}


