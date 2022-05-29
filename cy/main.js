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
    document.getElementById("modal").innerHTML= "<table>"+
"<tr><td class='tlabel'>Gap</td><td>:</td><td>"+ gap +" ("+ mmtoinch(gap)+")</td></tr>"+
"<tr><td class='tlabel'>Strips</td><td>:</td><td>"+ templine +"</td></tr>"+
"<tr><td></td><td></td><td></td></tr>"+
"<tr><td class='tlabel'>Bigger Gap</td><td>:</td><td>"+ gap2 +"("+ mmtoinch(gap2)+")</td></tr>"+
"<tr><td class='tlabel'>Bigger Strips</td><td>:</td><td>"+ bigtempline +"</td></tr>"+
"<tr><td></td><td></td><td></td></tr>"+
"<tr><td colspan='4' style='text-align:center;'><button id='close' onclick='fnClose()' style='height:32px; width:80px; border-radius:5px' class='line_btn' >Close</button></td></tr>"+
"</table>";
        
        /**"Gap: "+ gap +"("+ mmtoinch(gap)+")<br>"+"line: "+templine + "<br><br>" +
"gap besar: "+ gap2 + "("+ mmtoinch(gap2)+")<br>" +
"line besar: "+bigtempline + "<br>";**/
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

function input_change(h,w,maxL,minL){
    if(h === "") {
        document.getElementById("h").focus();
        return;
    }
    else if(w === "") {
        document.getElementById("w").focus();
        return;
    }
    else if(maxL === "") {
        document.getElementById("maxl").focus();
        return;
    }
    else if(minL === "") {
        document.getElementById("minl").focus();
        return;
    }
    if(h !== "" && w !== "" && maxL !== "" && minL !== ""){
        fnCalcGap(h,w,maxL,minL);
        document.getElementById("modal").style.display = "block";
        document.getElementsByClassName("flex_container_row")[0].style.filter = " blur(2px)";
    }
}

function fnClose(){
    document.getElementsByClassName("flex_container_row")[0].style.filter = "none";
    document.getElementById("modal").style.display = "none";
}
