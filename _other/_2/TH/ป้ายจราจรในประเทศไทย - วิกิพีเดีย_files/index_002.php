//https://ca.wikipedia.org/wiki/MediaWiki:Common.js

function MetaBoxInit() {
  //alert("MetaBoxInit");

  var i = 0;
  for (i = 0; i <= 9; i++) {
    var vMb = document.getElementById("mb" + i);
    if (!vMb) break;
     //alert("MetaBoxInit, trobada Metacaixa mb"+i);

    var j = 1;
    var vTabIni = 0;
    for (j = 1; j <= 9; j++) {
      var vBt = document.getElementById("mb" + i + "bt" + j);
      if (!vBt) break;
        //alert("MetaBoxInit, trobat botó mb"+i+"bt"+j);
      vBt.onclick = MetaBoxShowTab;
        //alert (vBt.className);
      if (vBt.className == "mbButtonSel") vTabIni = j;
    }
     //alert ("mb="+i+", ps="+j+", psini="+vTabIni );
    if (vTabIni == 0) {
      vTabIni = 1 + Math.floor((j - 1) * Math.random());
         //alert ("Activant Pestanya a l'atzar; _mb"+i+"bt"+vTabIni +"_");
      document.getElementById("mb" + i + "ps" + vTabIni).style.display = "block";
      document.getElementById("mb" + i + "ps" + vTabIni).style.visibility = "visible";
      document.getElementById("mb" + i + "bt" + vTabIni).className = "mbButtonSel";
    }
  }
}

function MetaBoxShowTab() {
  var vMbName = this.id.substr(0, 3);
  var vIndex = this.id.substr(5, 1);

  var i = 1;
  for (i = 1; i <= 9; i++) {
    //alert(vMbName+"ps"+i);
    var vTabItem = document.getElementById(vMbName + "ps" + i);
    if (!vTabItem) break;
    if (vIndex == i) {
      vTabItem.style.display = "block";
      vTabItem.style.visibility = "visible";
      document.getElementById(vMbName + "bt" + i).className = "mbButtonSel";
    } else {
      vTabItem.style.display = "none";
      vTabItem.style.visibility = "hidden";
      document.getElementById(vMbName + "bt" + i).className = "mbButton";
    }
  }
  return false;
}

$( MetaBoxInit );