//Patrick Davis 001119456

function process(){

var hourlyPay = 15;
var hoursWorked = new Array();
var i=0, hours;
var totalPay = 0;

//hours worked
hours = parseInt(prompt(" Number of Hours Worked? "));

//run while loop until number is negative one
while(hours != -1){
	hoursWorked[i] = hours;i++;
	hours = parseInt(prompt(" Number of Hours Worked? "));
}

//make the table
var payroll= "<table border=1><tr><td style='width: 100px; color: blue; text-align: center;'> Index </td>";
payroll+= "<td style='width: 200px; color: blue; text-align: center;'> Number of hours worked </td>";
payroll+="<td style='width: 200px; color: blue; text-align: center;'> Employee Pay </td></tr>";

//loop to catch each employees' pay
for(var k=0; k<hoursWorked.length; k++){
	var pay = 0;
	//if greater than 40 apply the overtime pay
	if(hoursWorked[k] >= 40)
	pay = parseFloat((40 * hourlyPay) + ((hoursWorked[k] - 40) * 1.5 * hourlyPay));
	//or if less than 40
	else
	pay = parseFloat(hoursWorked[k] * hourlyPay);

	//the total
	totalPay += pay;

//addd new rows to the table
payroll += "<tr><td style='width: 100px; color: darkblue; text-align: center;'>" + (k+1) + " </td>";
payroll += "<td style='width: 200px; color: darkblue; text-align: center;'> " + hoursWorked[k] + " </td>";
payroll += "<td style='width: 200px; color: darkblue; text-align: center;'> $ " + pay + " </td></tr>"
}

payroll += "</table>";

document.getElementById("payrollTable").innerHTML = payroll;

document.getElementById("totalPay").innerHTML = "Total pay of all employees: $ " + totalPay;
}