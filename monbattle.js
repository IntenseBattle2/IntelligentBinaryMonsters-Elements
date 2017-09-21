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
    {"name":"IBMon","exec":"ibmon.data.getIBMonList();"},
    {"name":"Flee!","exec":"ibmon.battle.leave();"},
    {"name":"Fight","exec":"ibmon.data.getIBMonAtt("+monbattle.data.ibmonName+");"},
    {"name":"AdvAc","exec":"ibmon.battle.getAdvancedActions();"}
  ]
  "extra":{};
}
