function yearOptions() {
        var schoolYear = document.getElementById("yearMenu");
        
        if (schoolYear.value == "1") {
            document.getElementById("foptions").style.visibility = "visible";
        } else if (schoolYear.value != "1") {
            document.getElementById("foptions").style.visibility = "hidden";
        }
        
        if (schoolYear.value == "2") {
            document.getElementById("sophoptions").style.visibility = "visible";
        } else if (schoolYear.value != "2") {
            document.getElementById("sophoptions").style.visibility = "hidden";
        }
        
        if (schoolYear.value == "3") {
            document.getElementById("joptions").style.visibility = "visible";
        } else if (schoolYear.value != "3") {
            document.getElementById("joptions").style.visibility = "hidden";
        }
        
        if (schoolYear.value == "4") {
            document.getElementById("senoptions").style.visibility = "visible";
        } else if (schoolYear.value != "4") {
            document.getElementById("senoptions").style.visibility = "hidden";
        }
}

function checkForm() {
    let inputtedID = document.forms["websiteForm"]["idInput"].value;
    let inputtedName = document.forms["websiteForm"]["nameInput"].value;
    if (inputtedID == "" && inputtedName == "") {
      alert("Fill out both name and id");
      return false;
    } else if (inputtedID == "" && inputtedName != "") {
        alert("Fill out your UMHB ID");
        return false;
    } else if (inputtedID != "" && inputtedName == "") {
        alert("Fill out your name");
        return false;
    }
}