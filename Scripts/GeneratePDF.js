
// Generate PDF 


function generatePDF() {
    // Get input values
    const roomNumber = document.querySelector("#roomNumberSelect").value.trim();
    const name = document.getElementById("Name").value.trim().replace(/\s+/g, " ").replace(/_/g, " "); // Replace underscores with spaces
    const monthElement = document.querySelector("select[name='month']");
    const month = monthElement && monthElement.value !== "0" ? monthElement.options[monthElement.selectedIndex].text.trim() : "";
    const lastRead = document.getElementById("LastRead").value.trim();
    const currentRead = document.getElementById("CurrentRead").value.trim();
    const unitsConsumed = document.getElementById("Units").value.trim();
    const rentSelect = document.getElementById("RentSelect");
    const rentValue = rentSelect.value === "Other" ? parseFloat(document.getElementById("Rent").value) || 0 : parseFloat(rentSelect.value);
    const serviceCharge = parseFloat(document.getElementById("Ser_Chg").value) || 0;
    const fixedCharge = parseFloat(document.getElementById("Fix_Chg").value) || 0;
    const electricityCharge = parseFloat(document.getElementById("TotalE").textContent) || 0;
    const waterCharge = parseFloat(document.getElementById("TotalW").textContent) || 0;
    const otherCharges = parseFloat(document.getElementById("Other_Chg").value) || 0;
    const deduction = parseFloat(document.getElementById("Deduction").value) || 0;

    // Format numbers with commas (no decimals)
    const formatCurrency = (value) => value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }).replace('₹', 'Rs.').replace('.00', '');

    // Check for empty fields
    let emptyFields = [];
    if (!roomNumber || roomNumber === "0") emptyFields.push("Room Number");
    if (!name) emptyFields.push("Name");
    if (!month || month === "") emptyFields.push("Month");
    if (!lastRead) emptyFields.push("Last Meter Reading");
    if (!currentRead) emptyFields.push("Current Meter Reading");
    if (!unitsConsumed) emptyFields.push("Units Consumed");

    if (emptyFields.length > 0) {
        let message = "The following fields are empty:\n" + emptyFields.join("\n");
        alert(message);
        return;
    }

    const totalRent = rentValue + serviceCharge + fixedCharge + electricityCharge + waterCharge + otherCharges - deduction;

    // Generate PDF content
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the current date and time from the device
    const today = new Date();

    // Format the date as "March 3rd 2025"
    const day = today.getDate();
    const monthName = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    
    const suffix = (day) => {
        if (day >= 11 && day <= 13) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };
    const formattedDate = `${monthName} ${day}${suffix(day)} ${year}`;

    // Format the time as "04:46:56 PM"
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = today.toLocaleTimeString('en-US', optionsTime);

    // Get last two digits of the current year
    const yearLastTwoDigits = today.getFullYear().toString().slice(-2);

    // Set Hemis Apartment Title (Bold & Green)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(27);
    doc.setTextColor(0, 153, 0); // Green color
    const apartmentTitle = "Hemis Apartment";
    const titleWidth = doc.getTextWidth(apartmentTitle);
    const pageWidth = doc.internal.pageSize.width;
    doc.text(apartmentTitle, (pageWidth - titleWidth) / 2, 15); // Centered at top

    // Set Rent Title (Blue, Size 14)
    doc.setFontSize(21);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 255); // Blue color
    const rentTitle = `${month}'${yearLastTwoDigits} Rent`;
    const rentTitleWidth = doc.getTextWidth(rentTitle);
    doc.text(rentTitle, (pageWidth - rentTitleWidth) / 2, 25); // Centered below apartment title

    // Set Date and Time (Blue, Size 14)
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 255); // Blue color
    const dateTimeText = `${formattedDate}, ${formattedTime}`;
    const dateTimeWidth = doc.getTextWidth(dateTimeText);
    doc.text(dateTimeText, (pageWidth - dateTimeWidth) / 2, 35); // Centered below rent title

    // Line Separator (Soft Thin Line)
    doc.setLineWidth(0.5);
    doc.line(10, 40, 200, 40);
    doc.setFontSize(18);

    // Column for aligning colons
    const labelX = 10;
    const valueX = 70;

    // Personal Details Section (Black)
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0); // Black color for text
    doc.text("Room No.:", labelX, 50);
    doc.text("Name:", labelX, 60);
    doc.text("Month of Bill:", labelX, 70);
    doc.text("Meter Now:", labelX, 80);
    doc.text("Unit Used:", labelX, 90);

    // Personal Info (Normal Font)
    doc.setFont("helvetica", "normal");
    doc.text(roomNumber, valueX, 50);
    doc.text(name, valueX, 60);
    doc.text(month, valueX, 70);
    doc.text(currentRead, valueX, 80);
    doc.text(unitsConsumed, valueX, 90);

    // Bill Breakdown Header (Blue, Size 14)
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 255); // Blue color
    doc.text("Bill Breakdown:", labelX, 110);

    // Bill Details Section (Black)
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0); // Black color for text
    doc.text("Rent:", labelX, 120);
    doc.text("Service Charge:", labelX, 130);
    doc.text("Fixed Charge:", labelX, 140);
    doc.text("Electricity Charge:", labelX, 150);
    doc.text("Water Charge:", labelX, 160);
    doc.text("Other Charges:", labelX, 170);
    doc.text("Deduction:", labelX, 180);

    // Bill Info in Normal font
    doc.setFont("helvetica", "normal");
    doc.text(formatCurrency(rentValue), valueX, 120);
    doc.text(formatCurrency(serviceCharge), valueX, 130);
    doc.text(formatCurrency(fixedCharge), valueX, 140);
    doc.text(formatCurrency(electricityCharge), valueX, 150);
    doc.text(formatCurrency(waterCharge), valueX, 160);
    doc.text(formatCurrency(otherCharges), valueX, 170);
    doc.text(formatCurrency(deduction), valueX, 180);

    // Total Bill Section (Red, Size 14 Bold)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(23);
    doc.setTextColor(255, 0, 0); // Red color for the total
    
    doc.text(`Total Bill: Rs. ${totalRent.toLocaleString('en-IN')}`, labelX, 200);

    // Draw an ash-colored line before the "Thanks" message
    doc.setDrawColor(169, 169, 169); // Ash color
    doc.setLineWidth(0.5);
    doc.line(10, 210, 200, 210); // Horizontal line

    // Add "Thanks for using Our Service!" message (Ash Color)
    doc.setFont("helvetica", "normal");
    doc.setTextColor(128, 128, 128); // Ash color
    doc.setFontSize(20);
    doc.text("Thanks For Using Our Service!", (pageWidth - doc.getTextWidth("Thanks for using Our Service!")) / 2, 220);

    // Generate the filename in the format: Room(number)_Name_(Month)'(Year last two digits).pdf
    const filename = `Room${roomNumber}_${name}_${month}'${yearLastTwoDigits}.pdf`;

    // Save the document with the generated filename
    doc.save(filename);
}