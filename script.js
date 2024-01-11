var MovesCount = 0
function randomPos() {
    var arr = []
    while (arr.length < 9) {
        var r = ((Math.floor(Math.random() * 3) + 1).toString()) + ((Math.floor(Math.random() * 3) + 1).toString())
        if (arr.indexOf(r) === -1) arr.push(r)
    }
    return arr
}

var RandomPos = randomPos()

for (let i = 0; i < document.getElementsByClassName("tile").length; i++) {
    document.getElementsByClassName("tile")[i].style.gridArea = RandomPos[i][0] + "/" + RandomPos[i][1]
}

function MoveMe(tile) {
    var EmptyTile = document.querySelector(".emtile")
    var Possibilities = [
        parseInt(RandomPos[tile][0]) + 1 == parseInt(RandomPos[8][0]) && parseInt(RandomPos[tile][1]) == parseInt(RandomPos[8][1]),
        parseInt(RandomPos[tile][0]) - 1 == parseInt(RandomPos[8][0]) && parseInt(RandomPos[tile][1]) == parseInt(RandomPos[8][1]),
        parseInt(RandomPos[tile][1]) + 1 == parseInt(RandomPos[8][1]) && parseInt(RandomPos[tile][0]) == parseInt(RandomPos[8][0]),
        parseInt(RandomPos[tile][1]) - 1 == parseInt(RandomPos[8][1]) && parseInt(RandomPos[tile][0]) == parseInt(RandomPos[8][0]),
    ]

    if (Possibilities[0] || Possibilities[1] || Possibilities[2] || Possibilities[3]) {
        MovesCount++
        EmptyTile.style.gridArea = RandomPos[tile][0] + "/" + RandomPos[tile][1];
        document.querySelectorAll(".tile")[tile].style.gridArea = RandomPos[8][0] +"/" + RandomPos[8][1]

        var currentTile = RandomPos[tile]
        RandomPos[tile] = RandomPos[8]
        RandomPos[8] = currentTile
        NeededPos = ["11", "12", "13", "21", "22", "23", "31", "32", "33"]
        if (RandomPos.join(".") == NeededPos.join(".")) {
            document.querySelector(".blscreen").style.display = "flex"
            document.querySelector(".MovesCount").innerHTML = MovesCount;
            let StarGroup = document.getElementsByClassName("StarGroup")[0]
            if (MovesCount <= 50) {
                StarGroup.innerHTML = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
            }
            else if (MovesCount > 50 && MovesCount <= 80) {
                StarGroup.innerHTML = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
            }
            else if (MovesCount > 80 && MovesCount <= 120) {
                StarGroup.innerHTML = `<i class="fa-solid fa-star"></i>`
            }
            else {
                console.log("No Stars, You are too late!")
            }
        }
    }
}