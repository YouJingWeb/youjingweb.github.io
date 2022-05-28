function fnCalcGap(h,w,maxl,minl) {
var height = h;
var templine = Math.trunc(height/maxl);
do {
var templine2 = calc(height,w,templine);
if (templine2 < minl)
templine--;
}while (templine2 < minl);

var bigtempline = templine-1;
var bigtempline2 = calc(height,w,bigtempline);

var gap =
(Math.floor(templine2*100)/100);
var gap2 = (Math.floor(bigtempline2*100)/100);

if (bigtempline2 >= maxl) {
bigtempline = "-";
gap2 = "-"
}

for(var i=0; i<document.getElementsByClassName("hidden").length; i++){
    document.getElementsByClassName("hidden")[i].style.visibility = "visible";
    document.getElementById("line").value = templine;
    document.getElementById("gap").value = gap;
}
alert(
"gap: "+ gap +"("+ mmtoinch(gap)+")\n"+
"line: "+templine + "\n\n" +
"gap besar: "+ gap2 + "("+ mmtoinch(gap2)+")\n" +
"line besar: "+bigtempline + "\n");
}

function mmtoinch(x) {
if (x === "-")
return x;
var inch = Math.trunc(x/25.4);
var frac = Math.trunc((x/25.4- inch)*8);
var fracdec = Math.floor((((x/25.4 - inch) *8) - frac)*100);

if (fracdec < 25)
fracdec = "";
else if (fracdec < 50)
fracdec = ".25";
else if (fracdec < 75)
fracdec = ".5";
else if (fracdec < 100)
fracdec = ".75";

return inch + " inch " + frac + fracdec + "/8 ounce";
}

function calc(h,w,l){
    var ans = (h-(l*w))/(parseInt(l)+1);
    return ans;
}

function dynamic_line(h,w,l){
    document.getElementById("line").value = l;
    document.getElementById("gap").value = 
(Math.floor(calc(h,w,l)*100)/100);
}
