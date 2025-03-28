<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HA Bill Management System</title>
    
    <link rel="stylesheet" href="styles/styles.css"


    </head>

<body>

<?php include("include/header.php"); ?>

<!--Calculator-->

<div id="Calculator" style="padding: 5px;" width="100%">
    
    <table> 
        <tr><td colspan="3"><u><b>Personal Details</b></u></td> </tr>
    <tr style="font-weight: 800;">
        <td>Room No:</td>
        <td>Name:</td>
        <td>Month:</td>
    </tr>
    <tr>
        <td>
            <select id="roomNumberSelect" onchange="RoomNOChg();UnitCal()">
                <option hidden value="0">Select</option>
                <script>
                    for (let i = 1; i <= 11; i++) {
                        document.write(`
                            <option value="${i}">${i}</option>
                        `);
                    }
                </script>
                
            </select>
        </td>
        <td>
            <input name="name" id="Name" placeholder="Update Personal Details & Select Room No." oninput="UnitCal()" readonly>
        </td>
        <td>
            <select name="month" id="month" onchange="MonthChg()">
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>

            </select>
        </td>
    </tr>

    <table>
        <tr><td colspan="2"><hr></td></tr>
        
        <tr>
            <td colspan="3"><u><b>Rent Calculation</b></u></td>
        </tr>
        <tr style="font-weight: 800;">
            <td colspan="2">Rent</td>
        </tr>
        <tr>
            <td colspan="2">
                <div style="display: flex;">
                <select id="RentSelect" onchange="UnitCal();RentValue()" class="bold-input">
                    <option value="17500">17500</option>
                    <option value="23000">23000</option>
                    <option value="Other" width="25%">Other </option>
                </select>
                    <input id="Rent" width="75%" style="display: none;" type="number" oninput="UnitCal();RentValue();" placeholder="Insert Amount" class="bold-input">
                </div>
            </td>
        </tr>
        <tr style="font-weight: 800;">
            <td>Service Charge</td>
            <td>Fixed Charge</td>
        </tr>
        <tr>
            <td><input id="Ser_Chg" value="300" type="number" oninput="UnitCal();" onfocus="hide300(this)" onblur="show300(this)" placeholder="Insert" class="bold-input"></td>
            <td><input id="Fix_Chg" value="550"  type="number" oninput="UnitCal();" onfocus="hide550(this)" onblur="show550(this)" placeholder="Insert" class="bold-input"></td>
        </tr>
        <tr style="font-weight: 800;">
            <td>Other Charges</td>
            <td>Deduction</td>
        </tr>
        <tr>
        <tr>
            <td><input id="Other_Chg" value="0" type="number" oninput="UnitCal();" onfocus="hideZero(this)" onblur="showZero(this)" placeholder="Insert" class="bold-input"></td>
            <td><input id="Deduction" type="text" value="0" oninput="UnitCal()" class="bold-input" onfocus="hideZero(this)" onblur="showZero(this)"></td>
        </tr>
    </table>
        

    <!--Units Enter Starts-->
    
    <table>
            <tr><td colspan="4"><hr></td></tr>
            <tr><td colspan="4"><u><b>Electricity & Water Bill Calculation</b></u></td></tr>
            <tr>
                <th style="font-weight: 800;">Last Read</th>
                <th style="font-weight: 800;">Current Read</th>
                <td>&nbsp&nbsp</td>
                <th style="font-weight: 800;">Units Consumption</th>
            </tr>
            <tr>
                <td><input id="LastRead" oninput="UnitCal();" placeholder="Update From Personal Details" readonly></td>
                <td><input id="CurrentRead" oninput="UnitCal();" placeholder="Insert Amount"></td>
                <td>&nbsp&nbsp</td>
                <td><input id="Units" placeholder="Plz Update Last & Current Unit Reads" readonly></td>
            </tr>
    </table>
   

<div class="BillTables" style="display: flex; justify-content: space-between; align-items: baseline;">
    <!--Electricity Bill-->
    <table border="1" style="margin-right: 5px;" height="500px" width="50%">
        <tr>
            <th colspan="4">Electricity Bill</th>
        </tr>
        <tr>
            <th>Range</th>
            <th>Qty</th>
            <th>Price Per Unit</th>
            <th>Total</th>
        </tr>
        <tr>
            <th>0-10 Units</th>
            <td class="Q1"></td>
            <td id="PE1"></td>
            <td id="TE1"></td>
        </tr>
        <tr>
            <th>11-20 Units</th>
            <td class="Q2"></td>
            <td id="PE2"></td>
            <td id="TE2"></td>
        </tr>
        <tr>
            <th>21-30 Units</th>
            <td class="Q3"></td>
            <td id="PE3"></td>
            <td id="TE3"></td>
        </tr>
        <tr>
            <th>31-40 Units</th>
            <td class="Q4"></td>
            <td id="PE4"></td>
            <td id="TE4"></td>
        </tr>
        <tr>
            <th>41 & Above</th>
            <td class="Q5"></td>
            <td id="PE5"></td>
            <td id="TE5"></td>
        </tr>
        <tr>
            <th colspan="3">Total</th>
            <td id="TotalE" style="color:rgb(105, 38, 10); font-weight: bold;"></td>
        </tr>
    </table>


    <!--Water Bill-->
    <table border="1" height="500px" width="100%">
        <tr>
            <th colspan="4">Water Bill</th>
        </tr>
        <tr>
            <th>Range</th>
            <th>Qty</th>
            <th>Price Per Unit</th>
            <th>Total</th>
        </tr>
        <tr>
            <th>0-10 Units</th>
            <td class="Q1"></td>
            <td id="PW1"></td>
            <td id="TW1"></td>
        </tr>
        <tr>
            <th>11-20 Units</th>
            <td class="Q2"></td>
            <td id="PW2"></td>
            <td id="TW2"></td>
        </tr>
        <tr>
            <th>21-30 Units</th>
            <td class="Q3"></td>
            <td id="PW3"></td>
            <td id="TW3"></td>
        </tr>
        <tr>
            <th>31-40 Units</th>
            <td class="Q4"></td>
            <td id="PW4"></td>
            <td id="TW4"></td>
        </tr>
        <tr>
            <th>41 & Above</th>
            <td class="Q5"></td>
            <td id="PW5"></td>
            <td id="TW5"></td>
        </tr>
        <tr>
            <th colspan="3">Total</th>
            <td id="TotalW" style="color: rgb(105, 38, 10); font-weight: bold;"></td>
        </tr>
    </table>
</div>

<h2>Sub Total:<text name="price" id="Total" style="color: Red;"></text></h2>

<button onclick="generatePDF();CalToDetail();saveToLocalStorage()" 
style="background-color: #0b4810; color: white; padding: 10px 15px; font-size: 14px; border: none; border-radius: 5px; cursor: pointer; transition: 0.3s;"
onmouseover="this.style.backgroundColor='#197621'" 
onmouseout="this.style.backgroundColor='#0b4810'">
Downlaod PDF</button>


<br><hr>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="Scripts/Scripts.js"></script>

</body>
</html>