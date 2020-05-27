
function showData1(){
    function fetchAndVisualizeData() {
      fetch("./data.json")
        .then(r => r.json())
        .then(visualizeData_dynamic1);
    } 
    fetchAndVisualizeData();
    
    function visualizeData_dynamic1(data) {
    
    const season = document.getElementById("seasons2").value;
  
    visualizetopEconomicalBowlers((data.topEconomicalBowlers)[season]);
  
  
    
    return;
  }
  
  }
  
  function visualizetopEconomicalBowlers(topEconomicalBowlers) {
    const season = document.getElementById("seasons2").value;
    //console.log(topEconomicalBowlers);
    Highcharts.chart("top_economical _bowlers", {
      chart: {
        type: "column"
      },
      title: {
        text: `<b>D. Top Economical Bowlers in ${season} season</b>`
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Economy"
        }
      },
      series: [
        {
          name: "Players",
          data: topEconomicalBowlers
        }
      ]
    });
        
  
  }
  
  