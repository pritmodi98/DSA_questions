//swap two no without using third variable
// let a=7 , b=9    //this program work for the string as well
// a=a+b
// b=a-b
// a=a-b

// console.log('a=',a,'b=',b)

let noOfRound=2,pinKnocked=[9,5,4,5,1,2,2],totalScore1=0,totalScore2=0
let round=1,roundScore1=0,roundScore2=0
let player1=true,player2=false,i=0

while (round<=noOfRound) {
    if (pinKnocked[i]==9 && player1) {
        roundScore1=18
        player1=false
        player2=true
    
        if (pinKnocked[i+3]===undefined) {
            totalScore1+=9
        }

        i++
        totalScore1+=roundScore1
        
    }

    if (pinKnocked[i]==9 && player2) {
        roundScore2=18
        player1=true
        player2=false
        if (pinKnocked[i+1]===undefined) {
            totalScore2+=9
        }
        i++
        totalScore2+=roundScore2
    }
    
    let j=0
    while(pinKnocked[i]<9 && player1) {
        roundScore1+=pinKnocked[i]
        j++
        
        if (pinKnocked[i+3]==undefined && roundScore1===9) {
            totalScore1+=9
        }

        if (j>1 && roundScore1==9) {
            player2=true
            player1=false
            totalScore1+=18
        }else if (j>1 && roundScore1<9) {
            player2=true
            player1=false
            totalScore1+=roundScore1
        }
        
        i++
    }

    j=0
    while (pinKnocked[i]<9 && player2) {
        roundScore2+=pinKnocked[i]
        j++
        
        if (pinKnocked[i+1]==undefined && roundScore2===9) {
            totalScore2+=9
        }

        if (j>1 && roundScore2==9) {
            player2=false
            player1=true
            totalScore2+=18
        }else if (j>1 && roundScore2<9) {
            player2=false
            player1=true
            totalScore2+=roundScore2
        }

        i++
    }

    round++
    roundScore1=0
    roundScore2=0
}

console.log(totalScore1,totalScore2)