//Inventory Management

var inv={};
inv.confog={
  "ui":{
    "container":{
      "background": "#343434;",
      "color":      "#000000;",
      "top":        "50%;",
      "left":       "50%;",
      "margin":     "0px;",
      "transform":  "translate(-50%,-50%);",
    },
    "slots":{
       "defaultConfig":{
         "maximum-items": 50,
         "layout":        "grid"
       },
inv.slots={};
inv.slots.makeslot=function(slotname){
  if(slotname!="" && typeof slotname=="string"){
    if(inv.slots[slotname]!=undefined){
      console.log("Inv-error: Slot '"+slotname+"' already exists!");
    }else{
      inv.slots[slotname]={"items":[],"config":{}};
      inv.slots[slotname].config=inv.config.slots.defaultConfig;
    }
  }else{
    if(typeof slotname!="string"){
      console.log("Inv-error: Slotname is not a string!");
      return;
    }if(slotname==""){
      console.log("Inv-error: Slotname cannot be left empty!");
      return;
    }
  }
};
