<?php include("inc/connection.php"); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HA Bill Management System</title>
    
    <link rel="stylesheet" href="css/styles.css">


    </head>

<body>

<?php include("inc/header.php"); ?>

<!--Personal Details-->
<div id="PersonalDetails"  style="display: block; padding-right: 10px; padding-bottom: 5px; padding-left: 10px;">
    <hr>
        <form action="php/detailsToDB.php" method="POST">
            
            <table class="PersonalTable" height="690px" width="100%" style="border-collapse: collapse;" onchange="TableChnage()">
                <script>
                    for (let i = 1; i <= 11; i++) {
                        document.write(`
                            <tr>
                                <th colspan="2" style="border-top:'1"><u>Room ${i}</u></th>
                            </tr>
                            <tr>
                                <th width="32%">Name</th>
                                <th width="22%">Rent</th>
                            </tr>
                            <tr>
                                <td><input oninput="saveToLocalStorage()" type="text" id="Name${i}" name="name${i}" style="width: 100%;"></td>
                                <td><input oninput="saveToLocalStorage()" type="number" id="Rent${i}" name="rent${i}" style="width: 100%;"></td>
                            </tr>
                            <tr>
                                <th width="18%">Last Unit Read</th>
                                <th width="23%">Last Unit Read Month</th>
                            </tr>
                            <tr>
                                <td><input oninput="saveToLocalStorage()" type="number" id="Unit${i}" name="units${i}" style="width: 100%;"></td>
                                <td>
                                    <select oninput="saveToLocalStorage()" id="Month${i}" name="month${i}" style="width: 100%;">
                                        <option value="" disabled selected>Select Month</option>
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
                            <tr>
                                <td colspan="2"><hr></td>
                            </tr>
                        `);
                    }
                </script>
            </table>
            
    
    
    <!--Buttons-->
            
    <table>
        <tr>
            <td width="50%">&nbsp</td>
            <td><text id="SaveAlert"  style="color: #ec0a0a;font-size: 30px; text-align: right; font-weight: bolder; display: none;">
                !! Not Saved !!&nbsp</text></td>
            <td colspan="3" style="text-align: right;">
                <div style="display: flex; justify-content: flex-end; gap: 10px;">
                <button type="submit" id="Save" onclick="saveToFile(event);saveToLocalStorage()" class="saveDetails">
                    Save Details
                </button>
                </div>
            </td>
        </tr>   
            
        <tr>
            <td></td><td></td><td></td><td></td>
                <td width="20%">
                    <button id="Reset" onclick="ResetButton()" type="Reset" class="reset">
                        Reset
                    </button> 
                </td>
        </tr>
    </table>
</form>
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="js/Scripts.js"></script>

</body>
</html>

<?php mysqli_close($con); ?> 