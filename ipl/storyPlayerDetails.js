function storyPlayerDetails(deliveries,matches) {
   
    let id=matches.filter(a=>(a.season)==2016).map(a=>a.id);
  
    let player;
    player=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]) && (a.total_runs)>0)
    .map(a=>a.batsman));
    var uniqueArray = [...new Set(player)];

    let totalRun=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]) && (a.total_runs)>0)
    .map(a=>a.total_runs));
   
    let r={};
    for(let j=0;j<uniqueArray.length;j++){
        let run=0;   
    for(let i=0;i<player.length;i++){
              if(uniqueArray[j]===player[i]){
                  run=run+Number(totalRun[i]);

              }
    }
    
    r[uniqueArray[j]]=run;
  }
    

/*
  function sortObject(obj) {
    return Object.keys(obj)
      .sort().reduce((a, v) => {
      a[v] = obj[v];
      return a; }, {});
  }
*/

  //let sortedMyObject = sortObject(r);
//console.log(r);

var sort=[];
for(var i in r){
  sort.push([i, r[i]]);
}
sort.sort(function(a,b){
  return b[1]-a[1];
});


 let palyerD= sort.slice(0,15);
let playerName=[];
for(let i=0;i<15;i++){
    playerName.push(palyerD[i][0]);
}

//return playerName;

    let batsmanRuns=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]) && (a.total_runs)>0)
    .map(a=>a.batsman_runs));

    let result={};
    for(let j=0;j<Number(playerName.length);j++){
        let run=0;  
        let boundries=0;
        let Not_boundries=0;
        let singles=0; 
    for(let i=0;i<Number(player.length);i++){
              if(playerName[j]===player[i]){
                  if(batsmanRuns[i]=="4" || batsmanRuns[i]=="6"){
                    boundries++;
                  }else if(batsmanRuns[i]!="4" && batsmanRuns[i]!="6" && batsmanRuns[i]>"0"){
                    Not_boundries++;
                  }
                  if(batsmanRuns[i]=="1"){
                    singles++;
                  }
                  run=run+Number(totalRun[i]);

              }
    }
   
   result[playerName[j]]={TotalRun : run,Bboundries : boundries,Not_Boundries : Not_boundries,Singles : singles};
  
  }
      return result;
    
    }
    
    module.exports = storyPlayerDetails;
    