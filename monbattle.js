//Monbattle - IBMon battling engine
//(C)2017 Intense Battle 2
/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/// You can contact the author of this source code at IB2Member01@gmail.com
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
