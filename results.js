document.querySelector("#click3").addEventListener("click",()=>{

    const select = selectLeague.value;
    const leageTables=document.querySelector("#leageTables");
        leageTables.classList.add("dnone")
        leageTables.classList.remove("dblock")

    const resultTables = document.querySelector("#matchResult");

        resultTables.classList.remove("dnone")
        resultTables.classList.add("dblock")

    const goalKings =document.querySelector("#goalKings");
        goalKings.classList.add("dnone")
        goalKings.classList.remove("dblock")

    const request = new XMLHttpRequest()
   
      request.open("GET",  `https://api.collectapi.com/sport/results?data.league=${select}` );

        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("authorization", "apikey  Your Api_Key");  
        request.send()


    request.addEventListener('load',function(){
    
        const dataResult = JSON.parse(this.responseText);
   
    //results

    const matchResult = dataResult.result;
        let match = "";
        for(let playedMatch of matchResult){
            console.log(playedMatch)
            match += `
            
            <tr>

            <td >${playedMatch.home}</td>
            <td> ${playedMatch.skor} </td>
            <td> ${playedMatch.away} </td>

            </tr>
            `

        document.querySelector("#resultMatch").innerHTML=match

        }
    
})

})
     