$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.collapsible').collapsible();

    $('.country_search_form_area').hide();

    // list all sports in the database

    axios.get('https://www.thesportsdb.com/api/v1/json/1/all_sports.php').then(response => {
        const responseArray = response.data.sports;

        let allSports = ``;

        responseArray.forEach(sport => {
            const sportName = sport.strSport

            const collectionItem = `<li class="collection-item all-sports-collection sidenav-close" onclick="viewSports()">${sportName}</li>`

            allSports = allSports + collectionItem;
        })

        document.getElementById('slide-out').innerHTML = allSports;
    }).catch(err => {
        console.log(err)
    })

    // list all leagues in the database

    axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php').then(response => {
        const responseArray = response.data.leagues;

        let allLeagues = ``;

        responseArray.forEach(league => {
            const leagueName = league.strLeague

            const tableRow = `<li>
            <div class="collapsible-header league-name" onclick="viewTeams()">${leagueName}</div>
            <div class="collapsible-body"><ul class="collection team-collection"></ul></div>
          </li>`

          

            allLeagues = allLeagues + tableRow;
        })

        document.getElementById('leaguesTable').innerHTML = allLeagues;
    }).catch(err => {
        console.log(err);
    });
  });