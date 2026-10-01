{
    let coinFlip
    let flips = parseInt(prompt('How many times do you want to flip the coin?'))
    for (let i = 1; i <= flips; i++) {
        coinFlip = Math.round(Math.random())
        if (coinFlip === 0) {
            console.log('Heads')
        } else {
            console.log('Tails')
        }
    }
}