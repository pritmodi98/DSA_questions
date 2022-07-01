function isvalidNumber(input) {
    let notAnumber=true

    for (let i = 0; i < input.length; i++) {
        if (input[i]>='0' && input[i]<='9') {
            continue
        }else{
            notAnumber=false
            break
        }
    }
    return notAnumber
}

console.log(isvalidNumber('12331'))
