document.querySelector("#click1").addEventListener("click", () => {

  const select = selectLeague.value;
  const request = new XMLHttpRequest()

  request.open("GET", `https://api.collectapi.com/sport/league?data.league=${select}`);


  request.setRequestHeader("content-type", "application/json");
  request.setRequestHeader("authorization", "apikey Your Api_Key");
  request.send()

  request.addEventListener('load', function () {

    const dataTable = JSON.parse(this.responseText);
 

    const leageTables = document.querySelector("#leageTables");
    leageTables.classList.remove("dnone")
    leageTables.classList.add("dblock")

    const resultTables = document.querySelector("#matchResult");

    resultTables.classList.add("dnone")
    resultTables.classList.remove("dblock")



    const goalKings = document.querySelector("#goalKings");
    goalKings.classList.add("dnone")
    goalKings.classList.remove("dblock")

    const table = dataTable.result;
    let standings = ""

    for (let stand of table) {
      standings += `

          <tr class="tbody">
            <th scope="row" class="count">${stand.rank}</th>
            <td >${stand.team} <span class="king"></span> </td>
            <td>${stand.play}</td>
            <td>${stand.win}</td>
            <td>${stand.draw}</td>
            <td>${stand.lose}</td>
            <td>${stand.goalfor}</td>
            <td>${stand.goalagainst}</td>
            <td>${stand.goaldistance}</td>
            <td>${stand.point}</td>
          </tr>
          
          `
      document.querySelector("#tableBody").innerHTML = standings

    }

    const color = document.querySelector(".count")
    const allteam = color.parentElement.parentElement
    const team = color.parentElement.nextSibling.previousElementSibling.children

    for (i = 0; i < allteam.children.length; i++) {
      if (i == 0) {

        allteam.children[i].classList.add("first")
        const king = document.querySelector(".king")
        king.innerHTML = `<i class="fa-solid fa-medal text-warning"></i>`
      } else if (i == 1) {
        allteam.children[i].classList.add("two")
      } else if (i == 2) {
        allteam.children[i].classList.add("third")
      }

    }
    for (i = 0; i < allteam.children.length; i++) {
      if (i == 16) {
        allteam.children[i].classList.add("second4")

        allteam.children[i].classList.add("bad")

      } else if (i == 17) {
        allteam.children[i].classList.add("second3")

        allteam.children[i].classList.add("bad")


      } else if (i == 18) {
        allteam.children[i].classList.add("second2")

        allteam.children[i].classList.add("bad")


      } else if (i == 19) {
        allteam.children[i].classList.add("second")

        allteam.children[i].classList.add("bad")


      }
    }


    const tableShow = dataTable.result;


    if (tableShow.success == false) {
      const notİnformation = document.querySelector(".error")
      tableError = `
  <img src="img/not.jpg">
  `
      notİnformation.innerHTML = tableError
      notİnformation.classList.remove("dnone");
      notİnformation.classList.add("dblock")
      const leageTables = document.querySelector("#leageTables");
      leageTables.classList.add("dnone")
      leageTables.classList.remove("dblock")

    } else {
      const notİnformation = document.querySelector(".error")
      notİnformation.classList.add("dnone");
      notİnformation.classList.remove("dblock")
    }


  })
})