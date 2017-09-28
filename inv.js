//Inv.js - Inventory mangament engine for RPGs
//(C)2017 Intense Battle 2
/*
 * Insert GNU GPL here
*/

var inv={};
inv.config={
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
    "tabCSS":{
      "background": "url(data/inv/tab.png)",
      "color":      "#000000",
      "::inactive": "fade:#000;",
      "::active":   "fade:#222;"
    },
    "itemCSS":{
      "back":{
        "display":        "inline-block",
        "vertical-align": "top",
        "background":     "#993321",
        "width":          "100px",
        "height":         "100px",
        "border":         "14px solid #DD5521",
        "border-radius":  "10px",
        "margin":         "1px"
      },
      "icon":{
        "width":  "100px",
        "height": "100px"
      }
    }
  }
}
inv.slots={};
inv.slots.makeslot=function(slotname){
  if(slotname!="" && typeof slotname=="string"){
    if(inv.slots[slotname]!=undefined){
      console.log("Inv-error: Slot '"+slotname+"' already exists!");
    }else{
      inv.slots[slotname]={"items":[],"config":{}};
      inv.slots[slotname].config=inv.config.slots.defaultConfig;
      inv.slots[slotname].addItem=function(name,dataobj){ //NTS: "this" accesses parent container (inv.slot[slotname]), NOT function!
        if(name!="" && typeof name=="string"){
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
