let setName = document.getElementById('fname');
let setClass = document.getElementById('class');
let setCountry = document.getElementById('country');
let localData = document.getElementById('test');

function focusFunction(element) {
    element.style.background = "Lime";
}

function blurFunction(element) {
    element.style.background = "";
}

function inputFunction(element) {
    var x = element.value;
}

function changeFunction(element) {
    var x = element.value;
}

function submitFunction() {
    localStorage.setItem('data',JSON.parse([setName.value,setClass.value,setCountry.value]));
}

// function submitFunction() {
//     localStorage.setItem('name',setName.value);
//     localStorage.setItem('class',setClass.value);
//     localStorage.setItem('country',setCountry.value);
// }

let table = document.createElement('table');
let row = document.createElement('tr');
tHeading = ['Name','Class','Country'];
for(let i=0; i<3; i++){
    let heading = document.createElement('th');
    heading.setAttribute('style','border: 2px solid black;');
    document.createTextNode(tHeading[i]);
    heading.append(tHeading[i]);
    row.appendChild(heading);
}
table.appendChild(row);

let rowData = document.createElement('tr');
let obj = {};
obj.name = localStorage.getItem('name');
obj.class = localStorage.getItem('class');
obj.country = localStorage.getItem('country');
console.log(obj);
for(let key in obj){
    let tData = document.createElement('td');
    tData.setAttribute('style','border: 2px solid black;');
    tData.append(obj[key]);
    rowData.appendChild(tData);
}


table.appendChild(rowData);

localData.appendChild(table);

