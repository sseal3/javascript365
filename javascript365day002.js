function changeBackground() {
    var soapCol = document.getElementById("colorText").value.trim(),
        rxValidHex = /^#(?:[0-9a-f]{3}){1,2}$/i;

    if (rxValidHex.test(soapCol)) {
        document.getElementById("bsoap").style.backgroundColor = soapCol;
    } else {
        alert("Invalid CSS Hex Color");
    }
}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);