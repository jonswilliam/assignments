class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
  }
  setName(namePicked) {
    this.name = namePicked
  }
  gotHit() {
    switch (this.status) {
      case "Powered Up":
        this.status = "Big"
        break
      case "Big":
        this.status = "Small"
        break
      case "Small":
        this.status = "Dead"
        break
    }
    this.hasStar = false
  }
  gotPowerup() {
    switch (this.status) {
      case "Small":
        this.status = "Big"
        break
      case "Big":
        this.status = "Powered Up"
        break
      case "Powered Up":
        this.hasStar = true
        break
    }
  }
  addCoin() {
    this.totalCoins++
  }
  print() {
    if (this.hasStar === true && this.status === "Powered Up") {
        console.log(`Congratulations, you got a star!`)
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`You have a star`)
        console.log("")
    } else if (this.hasStar === false && this.status === "Powered Up") {
        console.log(`Your star protected you!`)
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins: ${this.totalCoins}`)
        console.log("")
    } else if (this.hasStar === false && this.status !== "Dead") {
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins: ${this.totalCoins}`)
        console.log("")
    } 
  }
}

const playerNames = ["Mario", "Luigi"]
const namePicked = playerNames[Math.floor(Math.random() * playerNames.length)]
const player = new Player(namePicked, 0, "Small", false)
player.setName(namePicked)
const intervalId = setInterval(() => {
  const randomValue = Math.floor(Math.random() * 3)
  if (randomValue === 0) {
    player.gotHit()
  } else if (randomValue === 1) {
    player.gotPowerup()
  } else {
    player.addCoin()
  }
  player.print()
  if (player.status === "Dead") {
    console.log(`You lost the game! You died!`)
    console.log(`Name: ${player.name}`)
    console.log(`Your final score was ${player.totalCoins}`)
    clearInterval(intervalId)
  }
}, 1000)