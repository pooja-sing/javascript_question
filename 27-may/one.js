function QuestionMarks(str){
    const newst= new Set()
    let dupes=0;
    for(i=0;i<str.length;i++){
        if(newst.has(str[i])){
            dupes++
        }else{
            newst.add[str[i]]
        }
    } 
    return dupes;



}
const newstr=[1,-2,-2,5,5,5];
console.log(QuestionMarks(newstr))