import add from '../images/add.png'
const robots = [
  {
    attack: 30,
    defense: 50,
    name: 'Deltron',
    image: 'https://robohash.org/deltron'
  },
  {
    attack: 50,
    defense: 30,
    name: 'Hal',
    image: 'https://robohash.org/hal'
  },
  {
    attack: 60,
    defense: 10,
    name: 'Dalek',
    image: 'https://robohash.org/dalek'
  },
  {
    attack: 10,
    defense: 100,
    name: 'Marvin',
    image: 'https://robohash.org/marvin'
  },
  {
    attack: 100,
    defense: 100,
    name: 'T-1000',
    image: 'https://robohash.org/t-1000'
  },
  {
    attack: 70,
    defense: 30,
    name: 'R.O.B.',
    image: 'https://robohash.org/rob'
  },
  {
    attack: null,
    defense: null,
    name: '',
    image: add 
  }
]

const computeWinningRobot = (robotOne, robotTwo) => {
  const critOne = Math.floor(Math.random() * 100) > 90 ? 100 : 0
  const critTwo = Math.floor(Math.random() * 100) > 90 ? 100 : 0

  const attackOne = robotOne.attack + critOne - robotTwo.defense
  const attackTwo = robotTwo.attack + critTwo - robotOne.defense

  if (attackOne === attackTwo) {
    if (Math.floor(Math.random() * 10) > 5) {
      return robotOne
    } else {
      return robotTwo
    }
  } else {
    return attackOne > attackTwo ? robotOne : robotTwo
  }
}

const isRobotOneWinner = (winningRobot, robotOne) => {
  if (!winningRobot) return null

  return robotOne.name === winningRobot.name
}

const isRobotTwoWinner = (winningRobot, robotTwo) => {
  if (!winningRobot) return null

  return robotTwo.name === winningRobot.name
}


export { robots, computeWinningRobot, isRobotOneWinner, isRobotTwoWinner }
