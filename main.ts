game.splash("Welcome to the pizza cost calculator")
let D = game.askForNumber("Enter Diameter of pizza (in)")
let Cost = 1.75 + 0.5 * D
let Total_cost = Cost * 1.13
let round = Math.round(Total_cost * 100)
let final = round / 100
game.splash(final)
pause(100)
game.reset()
