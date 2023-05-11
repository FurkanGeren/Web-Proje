/*!async function ara() {
  let api =
    "https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=ffc94cb14e2c45478a87a67815e93d40";
  const res = await fetch(api);
  const data = await res.json();
  let veri = data;
  console.log(veri);
}*/
async function sec() {
  let api =
    "https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=ffc94cb14e2c45478a87a67815e93d40";
  const res = await fetch(api);
  const data = await res.json();
  let veri = data;

  // Rastgele bir takım seçin
  let randomIndex = Math.floor(Math.random() * veri.length);
  let randomTeam = veri[randomIndex];

  // Takım adı ve amblemini HTML olarak yazdırın
  let html = `<div><img src="${randomTeam.WikipediaLogoUrl}" alt="${randomTeam.Name}" width="50%" height="50%"><br><p style="font-size: 20px;"><strong>Takım İsmi: ${randomTeam.Name}</strong></p></div>`;
  
    // HTML çıktısını ekrana yazdırın
    document.getElementById("takim").style.color = "#" + randomTeam.PrimaryColor;   
    document.getElementById("ilgi2").style.backgroundColor = "#" + randomTeam.PrimaryColor;
    document.getElementById("content2").style.backgroundColor = "#" + randomTeam.SecondaryColor;
    (document.getElementById("takim").innerHTML = html);
}
