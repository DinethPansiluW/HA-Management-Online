
//Personal Details & Calculator Link Part
function RoomNOChg() {
    document.getElementById("CurrentRead").value="";
    document.getElementById("Units").value="";

    let RN =  parseInt(document.getElementById('roomNumberSelect').value) ;
    document.getElementById('Name').value = document.getElementById('Name'+RN).value;
    document.getElementById("LastRead").value = document.getElementById("Unit"+RN).value;

    
    let m = parseInt(document.getElementById('month').value);
    let lm = parseInt(document.getElementById('Month'+RN).value);

    document.getElementById('month').value = lm+1;

    if (lm===12) {
        document.getElementById('month').value = 1;
    }

    let rent =parseInt(document.getElementById('Rent'+RN).value);
    if (rent===17500) {
        document.getElementById('RentSelect').value = "17500";
        document.getElementById('Rent').style.display="none";
        document.getElementById('Rent').value="0";
        document.getElementById('RentSelect').style.width="100%";
    }
        else if (rent===23000) {
            document.getElementById('RentSelect').value = "23000";
            document.getElementById('Rent').style.display="none";
            document.getElementById('Rent').value="0";
            document.getElementById('RentSelect').style.width="100%";
        }
            else {
                document.getElementById('RentSelect').value = "Other";
                document.getElementById('Rent').style="block";
                document.getElementById('Rent').value = document.getElementById('Rent'+RN).value;
            }
}

function MonthChg() {
    let RN =  parseInt(document.getElementById('roomNumberSelect').value) ;
    let m = parseInt(document.getElementById('month').value);
    let lm = parseInt(document.getElementById('Month'+RN).value);

    if (m===lm+1) {
        document.getElementById("LastRead").value = document.getElementById("Unit"+RN).value;
    }
        else if (lm===12 & m===1) {
            m=1;
            document.getElementById("LastRead").value = document.getElementById("Unit"+RN).value;
        }
            else {
                document.getElementById("LastRead").value = "";
                document.getElementById("CurrentRead").value="";
                document.getElementById("Units").value="";
            }
}

function CalToDetail() {
    let RN = parseInt(document.getElementById('roomNumberSelect').value);
    let m = parseInt(document.getElementById('month').value);
    let lm = parseInt(document.getElementById('Month' + RN).value);

    document.getElementById("Unit" + RN).value = document.getElementById("CurrentRead").value;
    document.getElementById('Month' + RN).value = lm + 1;

    document.getElementById('SaveAlert').style.display = "block";
    document.getElementById('SaveAlert').innerHTML='!! Not Saved !!&nbsp';
    document.getElementById('SaveAlert').style.color="red";

    if (lm === 12) {
        document.getElementById('Month' + RN).value = 1;
    }

    if (RN === 11) {
        document.getElementById('PersonalDetails').style.display = 'block';
        document.getElementById('Calculator').style.display = 'none';
        alert("Save the Personal settings for next month now.");
        document.getElementById('SaveAlert').innerHTML = "!!You Must Save!!&nbsp";
        document.getElementById('SaveAlert').style.color = "red";

    }
}



//Save Settings Button

function saveToFile(event) {
    document.getElementById('SaveAlert').innerHTML='Saved Thank You :)';
    document.getElementById('SaveAlert').style.color="Green";
    

}



//Reset Button Alert
function ResetButton() {
    let check = confirm('Are You Shuver?') ;
    if (check == false) {
        event.preventDefault();
    }
}



//Calculation Part
// Units Prices Assign Variables
let PE1 = 130; let PW1 = 80;
let PE2 = 100; 
let PE3 = 80; 
let PE4 = 60; 
let PE5 = 50;

document.getElementById('PE1').innerHTML = PE1;
document.getElementById('PE2').innerHTML = PE2;
document.getElementById('PE3').innerHTML = PE3;
document.getElementById('PE4').innerHTML = PE4;
document.getElementById('PE5').innerHTML = PE5;

document.getElementById('PW1').innerHTML = PW1;
document.getElementById('PW2').innerHTML = PW1;
document.getElementById('PW3').innerHTML = PW1;
document.getElementById('PW4').innerHTML = PW1;
document.getElementById('PW5').innerHTML = PW1;

// Calculate Units
let Q1, TE1, TW1;
let Q2, TE2, TW2;
let Q3, TE3, TW3;
let Q4, TE4, TW4;
let Q5, TE5, TW5;
let Units;
let TotalE, TotalW, Total;
let Rent;
let Ser_Chg;
let Fix_Chg;

function RentValue() {
    let RentSelect = document.getElementById('RentSelect');

    if (RentSelect.value === "23000" || RentSelect.value === "17500") {
        Rent = parseInt(RentSelect.value)||0;
        document.getElementById('Rent').style.display = 'none';
        document.getElementById('RentSelect').style.width= "100%";
    } 
        else {
            document.getElementById('Rent').style.display = 'block';
            document.getElementById('RentSelect').style.width= "25%";
            document.getElementById('Rent').style.width= "75%";
            Rent = parseInt(document.getElementById('Rent').value)||0;
        }
    }

function Cal() {
    RentValue() ;

    Units = parseInt(document.getElementById('CurrentRead').value) - parseInt(document.getElementById('LastRead').value);
    document.getElementById('Units').value = Units;

    if (Units > 40) {
        Q1 = 10; Q2 = 10; Q3 = 10; Q4 = 10; Q5 = Units - 40;
    } else if (Units > 30) {
        Q1 = 10; Q2 = 10; Q3 = 10; Q4 = Units - 30; Q5 = 0;
    } else if (Units > 20) {
        Q1 = 10; Q2 = 10; Q3 = Units - 20; Q4 = 0; Q5 = 0;
    } else if (Units > 10) {
        Q1 = 10; Q2 = Units - 10; Q3 = 0; Q4 = 0; Q5 = 0;
    } else if (Units >= 0) {
        Q1 = Units; Q2 = 0; Q3 = 0; Q4 = 0; Q5 = 0;
    } else {
        Total = Rent + Ser_Chg + Fix_Chg + Other_Chg + Deduction;

        document.querySelectorAll('.Q1').forEach(el => el.innerHTML = " ");
        document.querySelectorAll('.Q2').forEach(el => el.innerHTML = " ");
        document.querySelectorAll('.Q3').forEach(el => el.innerHTML = " ");
        document.querySelectorAll('.Q4').forEach(el => el.innerHTML = " ");
        document.querySelectorAll('.Q5').forEach(el => el.innerHTML = " ");

        document.getElementById('TE1').innerHTML = " ";
        document.getElementById('TE2').innerHTML = " ";
        document.getElementById('TE3').innerHTML = " ";
        document.getElementById('TE4').innerHTML = " ";
        document.getElementById('TE5').innerHTML = " ";

        document.getElementById('TW1').innerHTML = " ";
        document.getElementById('TW2').innerHTML = " ";
        document.getElementById('TW3').innerHTML = " ";
        document.getElementById('TW4').innerHTML = " ";
        document.getElementById('TW5').innerHTML = " "; 

        document.getElementById('TotalE').innerHTML = "Update Inputs";
        document.getElementById('TotalW').innerHTML = "Update Inputs";
        document.getElementById('Total').innerHTML = "Rs. "+Total;

        document.getElementById('Units').value="";

    }
}

function UnitCal() {
    Cal();
    
    Ser_Chg = parseInt(document.getElementById('Ser_Chg').value)||0;
    Fix_Chg = parseInt(document.getElementById('Fix_Chg').value)||0;
    Other_Chg = parseInt(document.getElementById('Other_Chg').value)||0;
    Deduction = parseFloat(document.getElementById('Deduction').value);

    TE1 = Q1 * PE1;
    TE2 = Q2 * PE2;
    TE3 = Q3 * PE3;
    TE4 = Q4 * PE4;
    TE5 = Q5 * PE5;

    TW1 = Q1 * PW1;
    TW2 = Q2 * PW1;
    TW3 = Q3 * PW1;
    TW4 = Q4 * PW1;
    TW5 = Q5 * PW1;

    TotalE = TE1 + TE2 + TE3 + TE4 + TE5;
    TotalW = (Q1 + Q2 + Q3 + Q4 + Q5) * PW1;
    Total = TotalE + TotalW  + Rent + Ser_Chg + Fix_Chg + Other_Chg - Deduction;

    document.querySelectorAll('.Q1').forEach(el => el.innerHTML = Q1);
    document.querySelectorAll('.Q2').forEach(el => el.innerHTML = Q2);
    document.querySelectorAll('.Q3').forEach(el => el.innerHTML = Q3);
    document.querySelectorAll('.Q4').forEach(el => el.innerHTML = Q4);
    document.querySelectorAll('.Q5').forEach(el => el.innerHTML = Q5);

    document.getElementById('TE1').innerHTML = TE1;
    document.getElementById('TE2').innerHTML = TE2;
    document.getElementById('TE3').innerHTML = TE3;
    document.getElementById('TE4').innerHTML = TE4;
    document.getElementById('TE5').innerHTML = TE5;

    document.getElementById('TW1').innerHTML = TW1;
    document.getElementById('TW2').innerHTML = TW2;
    document.getElementById('TW3').innerHTML = TW3;
    document.getElementById('TW4').innerHTML = TW4;
    document.getElementById('TW5').innerHTML = TW5; 

    document.getElementById('TotalE').innerHTML = TotalE;
    document.getElementById('TotalW').innerHTML = TotalW;
    document.getElementById('Total').innerHTML = " Rs." + Total;

    Cal();
};


//Input Fields Hide Show
function hideZero(input) {
    if (input.value === "0") {
        input.value = "";
    }
}


function showZero(input) {
    if (input.value === "") {
        input.value = "0";
    }
}

function hide550(input) {
    if (input.value === "550") {
        input.value = "";
    }
}


function show550(input) {
    if (input.value === "") {
        input.value = "550";
    }
}

function hide300(input) {
    if (input.value === "300") {
        input.value = "";
    }
}


function show300(input) {
    if (input.value === "") {
        input.value = "300";
    }
}


function hide22500(input) {
    if (input.value === "22500") {
        input.value = "";
    }
}


function show22500(input) {
    if (input.value === "") {
        input.value = "22500";
    }
}



//Default This Month
document.addEventListener("DOMContentLoaded", function () {
    const monthSelect = document.getElementById("month");
    const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

    for (let option of monthSelect.options) {
        if (option.text === currentMonth) {
            option.selected = true;
            break;
        }
    }
});



 // Function to save data in localStorage
 function saveToLocalStorage() {
    let data = [];
    for (let i = 1; i <= 11; i++) {
        let roomData = {
            name: document.getElementById(`Name${i}`).value,
            rent: document.getElementById(`Rent${i}`).value,
            lastUnitRead: document.getElementById(`Unit${i}`).value,
            lastUnitMonth: document.getElementById(`Month${i}`).value
        };
        data.push(roomData);
    }
    localStorage.setItem("HA_Bill_Management", JSON.stringify(data));
    document.getElementById("SaveAlert").style.display = "none"; // Hide save alert
}






