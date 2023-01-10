//   |                                                          |
// --+----------------------------------------------------------+--
//   |   Code by : yasserbdj96                                  |
//   |   Email   : yasser.bdj96@gmail.com                       |
//   |   Github  : https://github.com/yasserbdj96               |
//   |   BTC     : bc1q2dks8w8uurca5xmfwv4jwl7upehyjjakr3xga9   |
// --+----------------------------------------------------------+--  
//   |        all posts #yasserbdj96 ,all views my own.         |
// --+----------------------------------------------------------+--
//   |                                                          |

//START{
function empty(){
    var days=document.getElementById("days");

    var x=52;
    var l1="";
    var l2="";
    var l3="";
    var l4="";
    var l5="";
    var l6="";
    var l7="";

    for (let i = 0; i < x; i++) {
        l1 +="<td class='zero w18 pointer' id='0-"+i+"' onclick='chng(this.id)'>0</td>";
        l2 +="<td class='zero w18 pointer' id='1-"+i+"' onclick='chng(this.id)'>0</td>";
        l3 +="<td class='zero w18 pointer' id='2-"+i+"' onclick='chng(this.id)'>0</td>";
        l4 +="<td class='zero w18 pointer' id='3-"+i+"' onclick='chng(this.id)'>0</td>";
        l5 +="<td class='zero w18 pointer' id='4-"+i+"' onclick='chng(this.id)'>0</td>";
        l6 +="<td class='zero w18 pointer' id='5-"+i+"' onclick='chng(this.id)'>0</td>";
        l7 +="<td class='zero w18 pointer' id='6-"+i+"' onclick='chng(this.id)'>0</td>";
    }

    l1="<tr>"+l1+"</tr>";
    l2="<tr>"+l2+"</tr>";
    l3="<tr>"+l3+"</tr>";
    l4="<tr>"+l4+"</tr>";
    l5="<tr>"+l5+"</tr>";
    l6="<tr>"+l6+"</tr>";
    l7="<tr>"+l7+"</tr>";

    days.innerHTML="<table id='table'>"+l1+l2+l3+l4+l5+l6+l7+"</table>";
}


function chng(id){
    var x=document.getElementById(id);

    if (x.textContent=="0"){
        x.innerText="1";
        x.classList.remove("zero");
        x.classList.add("one");

    }else{
        x.innerText="0";
        x.classList.remove("one");
        x.classList.add("zero");
    }
}

function get(){
    var table = document.getElementById('table');
    var l1="";
    var l2="";
    var l3="";
    var l4="";
    var l5="";
    var l6="";
    var l7="";
    //for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[0].cells.length; c < m; c++) {
        //    console.log(table.rows[0].cells[c].textContent);
            l1+=table.rows[0].cells[c].textContent; 
            l2+=table.rows[1].cells[c].textContent; 
            l3+=table.rows[2].cells[c].textContent; 
            l4+=table.rows[3].cells[c].textContent; 
            l5+=table.rows[4].cells[c].textContent; 
            l6+=table.rows[5].cells[c].textContent; 
            l7+=table.rows[6].cells[c].textContent; 
        }
    //}
    var f=l1+"\n"+l2+"\n"+l3+"\n"+l4+"\n"+l5+"\n"+l6+"\n"+l7;
    console.log(f);
    download('map.txt',f);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
//}END.