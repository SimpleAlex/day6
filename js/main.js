function myFunc() {
  //VARIABLES FOR SLIDERS
  var rtl = document.getElementById("rtl").value;
  var rtr = document.getElementById("rtr").value;
  var rbr = document.getElementById("rbr").value;
  var rbl = document.getElementById("rbl").value;

  //VARIABLES FOR INPUTS
  var ttl = document.getElementById("ttl");
  var ttr = document.getElementById("ttr");
  var tbr = document.getElementById("tbr");
  var tbl = document.getElementById("tbl");

  //VARIABLE FOR OUR BLOCK
  var block = document.getElementById("block");
  ttl.value = rtl;
  ttr.value = rtr;
  tbr.value = rbr;
  tbl.value = rbl;

  block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
}
