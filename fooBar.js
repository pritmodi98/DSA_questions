//take a number and if number is multiple of 7 print 'foo' ,if numbers are multiple of 5 print 'bar' and if numbers are multiple of 5 and 7
//'FooBar'.if not a multiple of either ,print nothing.

function printNum(number) {
    if(number%5===0 && number%7===0){
        return 'Foobar'
    }else if (number%5===0) {
        return 'Bar'
    }else if (number%7===0) {
        return 'Foo'
    }else return 'nothing'
}

console.log(printNum(31))

