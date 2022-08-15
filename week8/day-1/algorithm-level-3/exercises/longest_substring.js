const longest_substring = function(str){
    if(str.length === 0){
        return null
    }
    let subString = "" 
    let subStrLengthes = {} 
    for(let i = 0; i < str.length; i++){
        let currentLetter = str.charAt(i)
        if(subString.includes(currentLetter)){
            subString = currentLetter   
        }else{
            subString += currentLetter 
        }
        subStrLengthes[subString] = subString.length
        
    }
    
    return findMax(subStrLengthes);
}

const findMax  = function(subStrLengthes){
    let subStrings = Object.keys(subStrLengthes)
    let lengths = Object.values(subStrLengthes)

    let maxLength = lengths[0]
    longestString = subStrings[0]
    for(let i = 0; i < lengths.length; i++){
        if(lengths[i] > maxLength){
            maxLength = lengths[i]
            longestString = subStrings[i]
        }
    }
    return longestString

}

let str = "communication"
console.log(longest_substring(str));