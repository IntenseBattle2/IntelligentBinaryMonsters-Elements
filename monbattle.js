//Monbattle - IBMon battling engine
//(C)2017 Intense Battle 2
/*
 * INSERT GNU GPL
*/
var monbattle={};
monbattle.settings={
  "ui":{
    "containerCSS":{
      //Add container CSS
    },
    "ButtonCSS":{
      //Add button CSS
    }
  },
  "buttons":[
    {"name":"Switch out!","exec":"switchIBMon"},
    {"name":"Flee!","exec":"fleeBattle"},
    {"name":"Fight!","exec":"initAttack"},
    {"name":"Maneuver!","exec":"initManeuver"}
  ]
  "extra":{
    "hostilityInitiated":false;
  };
};
monbattle.commands={};
monbattle.commands["Switch out!"]=function(){ //finish later
  var i;
  var ibmonList= ib2f.engine.rpginv.getItemsByType("IBMon");
  for(i in ibmonList)
    monbattle.setInQueue("newButton",
                         "<img class='mbimg' src='ibmon/"+ibmonList[i]+"/image.png'/><p class='mbmidhead'>"+ibmonList[i]+"</p>",
                         "ib2f.engine.rpginv.setItemWithTag('out','IBMon/"+ibmonList[i]+"');monbattle.resetDialog();");
    monbattle.replaceDialog();
};
monbattle.commands["Flee!"]=function(){ //check for completion later
      if(monbattle.settings.extra.hostilityInitiated==false){
        monbattle.setInQueue("rawHTML",
                             "<h1 class='dianotif'>You left the IBMon alone.</h1>",
                             "monbattle.resetDialog();");
        monbattle.replaceDialog();
        ibmon.world.leaveBattle();
      }else{
        var d=new Date();
        var s=d.getSeconds();
        var r=s%5;
        if(s>=5){
          monbattle.setInQueue("rawHTML",
                               "<h1 class='dianotif'>You managed to flee.</h1>",
                               "monbattle.resetDialog();");
          monbattle.replaceDialog();
          ibmon.world.leaveBattle();
        }else{
          monbattle.setInQueue("rawHTML,"
                               "<h1 class='dianotif'>The IBMon stopped you from leaving!</h1>",
                               "monbattle.resetDialog();");
          monbattle.replaceDialog();
        }
      }
};
monbattle.commands["Fight"!]=function(){
                   //finish later
};
