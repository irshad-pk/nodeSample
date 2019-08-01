console.log ("Hello World");
var moment = require('moment');
var a=moment().format("DD/MM/YYYY, h:mm:ss A");
console.log(a);
var b=moment().add(1, 'y').add(2, 'M').add(3, 'd').format("DD/MM/YYYY");
console.log(b);

var c=[
    {"name":"rahul", "dob":"10/05/2000"},
    {"name":"rajes", "dob":"19/08/2008"},
    {"name":"john", "dob":"01/03/2009"},
    {"name":"jack", "dob":"28/05/2010"}
]

var eligble=moment().subtract(18, 'years').format("DD/MM/YYYY");
console.log(moment(eligble,'DD/MM/YYYY'));
for(i=0;i<c.length;i++) {
    var check= moment(eligble, 'DD/MM/YYYY').isAfter(c[i].dob);
    if(check==true){
     console.log(c[i].name + " is not eligible "); 
    }
    else{
        console.log(c[i].name + " is eligible "); 
    }
}