function topeconomicalbowlers(deliveries,matches) {
   
    let id=matches.filter(a=>(a.season)==2015).map(a=>a.id);
    
    let bowler_name;
    bowler_name=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]))
    .map(a=>a.bowler));
     
    let wide_runs;
    wide_runs=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]))
    .map(a=>a.wide_runs));

     
    let noball_runs;
    noball_runs=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]))
    .map(a=>a.noball_runs));

    let total_runs;
    total_runs=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]))
    .map(a=>a.total_runs));
    var uniqueArray = [...new Set(bowler_name)]
   // let extrarun=(deliveries.filter(a=>(a.match_id)>=id[0] && (a.match_id)<=id[id.length-1] && (a.extra_runs)>0)
   // .map(a=>a.extra_runs));
  
  /*
    let tt=matches.filter(a=>(a.season)==2016);
    let name=tt.map(a=>(a.team1));
    let name1=tt.map(a=>(a.team2));
    const returnedTarget = Object.assign(name, name1);
    var uniqueArray = [...new Set(returnedTarget)]
 */   
 
   
  let r={};
    for(let j=0;j<uniqueArray.length;j++){
       
        let run=0;
        let ball=0;
    for(let i=0;i<bowler_name.length;i++){
              if(uniqueArray[j]===bowler_name[i]){
                  if(noball_runs[i]=="0" && wide_runs[i]=="0"){
                    ball++;
                  }
                  run=run+Number(total_runs[i]);

              }
    }
    let economy=Number((6*(run/ball)).toFixed(2));
    r[uniqueArray[j]]=economy;
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
  return a[1]-b[1];
});

let d=sort;


      return d.slice(0,10);
      
    }
    
    module.exports = topeconomicalbowlers;
    