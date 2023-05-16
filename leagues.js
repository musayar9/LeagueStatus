const leagues = {
    "Spor Toto Süper Lig":"super-lig",
    "Spor Toto 1.lig":"tff-1-lig",
    "İngiltere Premier Ligi":"ingiltere-premier-ligi",
    "UEFA Konferans Ligi":"uefa-konferans-ligi",
    "Almanya Bundesliga":"almanya-bundesliga",
    "Fransa Ligue 1":"fransa-ligue-1",
    "İspanya La Liga":"ispanya-la-liga",
    "İtalya Serie A":"italya-serie-a-ligi",
    "İngiltere Championship":"ingiltere-sampiyonluk-ligi",
    "Almanya 2.Bundesliga":"almanya-bundesliga-2-ligi",
    "Fransa Ligue 2":"fransa-ligue-2"
}
 
const selectLeague = document.querySelector("#selectLeague");
const dropLeague = document.querySelector("#dropdownleague");
const dropdown=document.querySelector(".dropdown-menu")
let drop="";
for(let leag in leagues){

    let options = `<option class="optionLeague" value=${leagues[leag]}>${leag}</option>`
    selectLeague.insertAdjacentHTML("beforeend",options)
}


