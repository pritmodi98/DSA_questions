//split string by space into the words
function spaceSplit(str) {
    let i=0,j=0
    while (j<=str.length) {
        if (str[j]===' ' || str[j]==undefined) {
            console.log(str.slice(i,j))
            i=j+1
        }
        j++
    }
}

spaceSplit('hello world how are you')
