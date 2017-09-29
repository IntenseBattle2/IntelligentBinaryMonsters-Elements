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
  "items":{};
}
inv.slots={};
inv.slots.makeslot=function(slotname){
  if(slotname!="" && typeof slotname=="string"){
    if(inv.slots[slotname]!=undefined){
      console.log("Inv-error: Slot '"+slotname+"' already exists!");
    }else{
      inv.slots[slotname]={"items":{},"config":{}};
      inv.slots[slotname].config=inv.config.slots.defaultConfig;
      inv.slots[slotname].addItem=function(name,dataobj){ //NTS: "this" accesses parent container (inv.slot[slotname]), NOT function!
        if(name!="" && typeof name=="string" && this.items.length<this.config.slots){
          if(this.items[name]!=undefined){
            if(this.items[name].stackMax>1 && this.items[name].count<this.items[name].stackMax){
              this.items[name].count+=1;
            }else{
              console.log("Inv-info: Item '"+name+"' reached stacking maximum of "+this.items[name].stackMax+"--you can increase stack maximum with the stackMax property.");
              if(inv.config.items.multiItemPrefix!=""){
                name+=inv.config.items.multiItemPrefix;
                this.items[name]=dataObj;
              }else{
                console.log("Inv-info: There is no multi-item prefix; unable to pick up item. Please refer to the User's Manual to learn how to set this up.");
              }
            }
          }else{
           this.items[name]=dataObj;
          }
        }else{
          if(name=="")
            console.log("Inv-error: Item name cannot be left empty!");
          if(typeof name!="string"){
            console.log("Inv-error: Item name must be a string!");
          if(this.items.length==this.config.slots)
            console.log("Inv-info: Inventory slots are filled up to max. You can change this in the slot config under 'slots'.");
          return;
        }
        console.log("Inv-info: Item added.");
      }
    }
  }else{
    if(typeof slotname!="string"){
      console.log("Inv-error: Slotname must be a string!");
      return;
    }if(slotname==""){
      console.log("Inv-error: Slotname cannot be left empty!");
      return;
    }
  }
};
