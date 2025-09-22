var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var t5=document.getElementById("t5");
var t6=document.getElementById("t6");
var t7=document.getElementById("t7");
var t8=document.getElementById("t8");
var t9=document.getElementById("t9");
var t10=document.getElementById("t10");
var t11=document.getElementById("t11");
var t12=document.getElementById("t12");
var t13=document.getElementById("t13");
var t14=document.getElementById("t14");
var t15=document.getElementById("t15");
var t16=document.getElementById("t16");
var t17=document.getElementById("t17");
var t18=document.getElementById("t18");
var t19=document.getElementById("t19");
var t20=document.getElementById("t20");
var t21=document.getElementById("t21");
var t22=document.getElementById("t22");
var t23=document.getElementById("t23");
var t24=document.getElementById("t24");
var t25=document.getElementById("t25");
var t26=document.getElementById("t26");
var t27=document.getElementById("t27");
var t28=document.getElementById("t28");
var t29=document.getElementById("t29");
var t30=document.getElementById("t30");
var t31=document.getElementById("t31");
var t32=document.getElementById("t32");
var t33=document.getElementById("t33");
var t34=document.getElementById("t34");
var t35=document.getElementById("t35");
var t36=document.getElementById("t36");
var t37=document.getElementById("t37");
var t38=document.getElementById("t38");
var t39=document.getElementById("t39");
var t40=document.getElementById("t40");
var t41=document.getElementById("t41");
var t42=document.getElementById("t42");
var t43=document.getElementById("t43");
var t44=document.getElementById("t44");
var t45=document.getElementById("t45");
var t46=document.getElementById("t46");

function calculate(){

    if(t1.querySelector("input").value=="" || t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || t4.querySelector("input").value=="" || t5.querySelector("input").value=="" || t6.querySelector("input").value=="" || t7.querySelector("input").value=="" || t8.querySelector("input").value=="" || t9.querySelector("input").value=="" || t10.querySelector("input").value=="" || t11.querySelector("input").value=="" || t12.querySelector("input").value==""  || t13.querySelector("input").value=="" ||t14.querySelector("input").value=="" ||t15.querySelector("input").value=="" ||t16.querySelector("input").value=="" ||t17.querySelector("input").value=="" ||t18.querySelector("input").value=="" ||t26.querySelector("input").value=="" ||t27.querySelector("input").value=="" ||t28.querySelector("input").value=="" ||t29.querySelector("input").value=="" ||t30.querySelector("input").value=="" ||t31.querySelector("input").value=="" ||t32.querySelector("input").value=="" ||t33.querySelector("input").value=="" ||t34.querySelector("input").value=="" ||t35.querySelector("input").value=="" ||t36.querySelector("input").value=="" ||t37.querySelector("input").value=="" ||t38.querySelector("input").value=="" ||t39.querySelector("input").value=="" ){
        alert("Please Fill all input fields or Enter valid values in all input fields.");
    }else{
        t40.querySelector("input").value =   (parseFloat(t26.querySelector("input").value) + parseFloat(t33.querySelector("input").value)).toFixed(4)
        t41.querySelector("input").value =  (parseFloat(t27.querySelector("input").value) + parseFloat(t34.querySelector("input").value)).toFixed(4)
        t42.querySelector("input").value = (parseFloat(t28.querySelector("input").value) + parseFloat(t35.querySelector("input").value)).toFixed(4)
        t43.querySelector("input").value = (parseFloat(t29.querySelector("input").value)+ parseFloat(t36.querySelector("input").value)).toFixed(4)
        t44.querySelector("input").value =  (parseFloat(t30.querySelector("input").value)+ parseFloat(t37.querySelector("input").value)).toFixed(4)
        t45.querySelector("input").value = (parseFloat(t31.querySelector("input").value)+ parseFloat(t38.querySelector("input").value)).toFixed(4)
        t46.querySelector("input").value = ( parseFloat(t32.querySelector("input").value)+ parseFloat(t39.querySelector("input").value)).toFixed(4)

        document.querySelector("#check-button").disabled = false
    }



}

function checkYourResult(){
let flag=true
if(t1.querySelector("input").value!=14.5){
    t1.querySelector("input").style.color="red"
    flag=false
}

if(t2.querySelector("input").value!=53.60){
    t2.querySelector("input").style.color="red"
    flag=false
}

if(t3.querySelector("input").value!=21.5){
    t3.querySelector("input").style.color="red"
    flag=false
}

if(t4.querySelector("input").value!=21){
    t4.querySelector("input").style.color="red"
    flag=false
}

if(t5.querySelector("input").value!=18){
    t5.querySelector("input").style.color="red"
    flag=false
}

if(t6.querySelector("input").value!=10){
    t6.querySelector("input").style.color="red"
    flag=false
}

if(t7.querySelector("input").value!=13){
    t7.querySelector("input").style.color="red"
    flag=false
}

if(t8.querySelector("input").value!=17){
    t8.querySelector("input").style.color="red"
    flag=false
}

if(t9.querySelector("input").value!=18){
    t9.querySelector("input").style.color="red"
    flag=false
}

if(t10.querySelector("input").value!=14){
    t10.querySelector("input").style.color="red"
    flag=false
}

if(t11.querySelector("input").value!=52.5){
    t11.querySelector("input").style.color="red"
    flag=false
}

if(t12.querySelector("input").value!=21.6){
    t12.querySelector("input").style.color="red"
    flag=false
}

if(t13.querySelector("input").value!=21){
    t13.querySelector("input").style.color="red"
    flag=false
}

if(t14.querySelector("input").value!=18.2){
    t14.querySelector("input").style.color="red"
    flag=false
}

if(t15.querySelector("input").value!=10.1){
    t15.querySelector("input").style.color="red"
    flag=false
}

if(t16.querySelector("input").value!=12.8){
    t16.querySelector("input").style.color="red"
    flag=false
}

if(t17.querySelector("input").value!=17.2){
    t17.querySelector("input").style.color="red"
    flag=false
}

if(t18.querySelector("input").value!=17.9){
    t18.querySelector("input").style.color="red"
    flag=false
}

if(t40.querySelector("input").value >0.218196  && t40.querySelector("input").value<0.222604){
    t40.querySelector("input").style.color = "black"
    flag= true
}else{
    t40.querySelector("input").style.color = "red"
    flag= false
}


if(t41.querySelector("input").value >0.220671  && t41.querySelector("input").value<0.22519 ){
    t41.querySelector("input").style.color = "black"
    flag= true
}else{
    t41.querySelector("input").style.color = "red"
    flag= false
}


if(t42.querySelector("input").value >0.22176
  && t42.querySelector("input").value<0.22624  ){
    t42.querySelector("input").style.color = "black"
    flag= true
}else{
    t42.querySelector("input").style.color = "red"
    flag= false
}


if(t43.querySelector("input").value >0.184041  && t43.querySelector("input").value<0.187759 ){
    t43.querySelector("input").style.color = "black"
    flag= true
}else{
    t43.querySelector("input").style.color = "red"
    flag= false
}


if(t44.querySelector("input").value >0.172755  && t44.querySelector("input").value<0.176245 ){
    t44.querySelector("input").style.color = "black"
    flag= true
}else{
    t44.querySelector("input").style.color = "red"
    flag= false
}


if(t45.querySelector("input").value >0.181071  && t45.querySelector("input").value<0.184729 ){
    t45.querySelector("input").style.color = "black"
    flag= true
}else{
    t45.querySelector("input").style.color = "red"
    flag= false
}


if(t46.querySelector("input").value >0.183546  && t46.querySelector("input").value<0.187254){
    t46.querySelector("input").style.color = "black"
    flag= true
}else{
    t46.querySelector("input").style.color = "red"
    flag= false
}

if(flag){
        
    for (let i = 0; i < 5; i++) {
        document.querySelector(".result-table").style.display = "none"
        confetti();
        window.appData = window.appData || {};
        window.appData.powerFlag=true
      }
      
    alert("Congratulations! You have successfully completed the experiment.");
}else{
    alert("Try Again");
    document.querySelector(".result-table").style.display = "flex"
}

}




function exportToExcel() {
    var wb = XLSX.utils.book_new();


    var observationTable = document.querySelector('.givenTable');
    var observationSheetData = [];
    var observationRows = observationTable.querySelectorAll('tr');
    observationRows.forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('th, td').forEach(function (cell) {
            if (cell.querySelector('input')) {
                rowData.push(cell.querySelector('input').value);
            } else {
                rowData.push(cell.textContent);
            }
        });
        observationSheetData.push(rowData);
    });
    var observationSheet = XLSX.utils.aoa_to_sheet(observationSheetData);
    XLSX.utils.book_append_sheet(wb, observationSheet, "Given Table");

    /* Observation Table */
    var observationTable = document.querySelector('.observationTable');
    var observationSheetData = [];
    var observationRows = observationTable.querySelectorAll('tr');
    observationRows.forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('th, td').forEach(function (cell) {
            if (cell.querySelector('input')) {
                rowData.push(cell.querySelector('input').value);
            } else {
                rowData.push(cell.textContent);
            }
        });
        observationSheetData.push(rowData);
    });
    var observationSheet = XLSX.utils.aoa_to_sheet(observationSheetData);
    XLSX.utils.book_append_sheet(wb, observationSheet, "Observation Table");

    /* Calculation Table */
    var calculationTable = document.querySelector('.calculationTable');
    var calculationSheetData = [];
    var calculationRows = calculationTable.querySelectorAll('tr');
    calculationRows.forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('th, td').forEach(function (cell) {
            if (cell.querySelector('input')) {
                rowData.push(cell.querySelector('input').value);
            } else {
                rowData.push(cell.textContent);
            }
        });
        calculationSheetData.push(rowData);
    });
    var calculationSheet = XLSX.utils.aoa_to_sheet(calculationSheetData);
    XLSX.utils.book_append_sheet(wb, calculationSheet, "Calculation Table");

    /* Save workbook to file */
    XLSX.writeFile(wb, "table_data.xlsx");
}