document.querySelector("#click2").addEventListener("click", () => {
    const select = selectLeague.value;
    console.log(select)

    const leageTables = document.querySelector("#leageTables");
    leageTables.classList.add("dnone")
    leageTables.classList.remove("dblock")

    const resultTables = document.querySelector("#matchResult");

    resultTables.classList.add("dnone")
    resultTables.classList.remove("dblock")


    const goalKings = document.querySelector("#goalKings");
    goalKings.classList.remove("dnone")
    goalKings.classList.add("dblock")


    const request = new XMLHttpRequest()
    request.open("GET", `https://api.collectapi.com/sport/goalKings?data.league=${select}`);

    ;


    request.setRequestHeader("content-type", "application/json");
    request.setRequestHeader("authorization", "apikey Your Api_Key");
    request.send()


    request.addEventListener('load', function () {

        const dataGoal = JSON.parse(this.responseText);

        //gol kralı
        const goalKings = dataGoal.result;
        let goalCount = "";
        for (let king of goalKings) {

            goalCount += `
        <tr class="tgoal">
        <td class="goalKing ms-2"> <span class="winner me-2"></span>${king.name} </th>
        <td class>${king.goals}<td>
        </tr> 

        `
            document.querySelector("#goalBody").innerHTML = goalCount


            if (king.goals == "") {
                let notError = `
            <img src="img/not.jpg">
            `
                document.querySelector(".error").innerHTML = notError

                const error = document.querySelector(".error");
                error.classList.remove("dnone")
                error.classList.add("dblock")
                const goalKings = document.querySelector("#goalKings");
                goalKings.classList.add("dnone")
                goalKings.classList.remove("dblock")
            } else {
                const error = document.querySelector(".error");
                error.classList.add("dnone")
                error.classList.remove("dblock")
            }
        }

        const winner = document.querySelector(".winner")

        winner.innerHTML = `<i class="fa-sharp fa-solid fa-crown text-warning fa-beat-fade"></i>`
        const winnerKing = winner.parentElement
        console.log(winnerKing)


    })




})