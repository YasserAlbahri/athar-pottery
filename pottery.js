function chooseProduct(productName) {
    document.getElementById("pottery-product").value = productName;
    document.getElementById("pottery-total").textContent = "اختاري الكمية وابدئي الحساب";
    document.getElementById("pottery-breakdown").textContent = "";
}

function readQuantity(value) {
    var arabicDigits = "٠١٢٣٤٥٦٧٨٩";
    var englishDigits = "0123456789";
    var converted = "";

    for (var i = 0; i < value.length; i++) {
        var character = value.charAt(i);
        var position = arabicDigits.indexOf(character);

        if (position >= 0) {
            converted = converted + englishDigits.charAt(position);
        } else {
            converted = converted + character;
        }
    }

    return Number(converted);
}

function calculatePrice() {
    var product = document.getElementById("pottery-product").value;
    var quantity = readQuantity(document.getElementById("pottery-quantity").value);
    var price = 0;
    var name = "";

    if (isNaN(quantity) || quantity < 1 || quantity > 20 || quantity % 1 != 0) {
        document.getElementById("pottery-total").textContent = "تأكدي من عدد القطع";
        document.getElementById("pottery-breakdown").textContent = "الكمية لازم تكون عدد صحيح من 1 إلى 20";
        document.getElementById("pottery-quantity").focus();
        return false;
    }

    if (product == "cups") {
        price = 150;
        name = "طقم أكواب بألوان طبيعية";
    } else if (product == "vase-cream") {
        price = 220;
        name = "مزهرية كريمية بعروتين";
    } else if (product == "vase-clay") {
        price = 180;
        name = "مزهرية بلون الطين";
    } else {
        document.getElementById("pottery-total").textContent = "اختاري قطعة من القائمة";
        document.getElementById("pottery-breakdown").textContent = "";
        return false;
    }

    var total = price * quantity;
    document.getElementById("pottery-total").textContent = total + " ريال سعودي";
    document.getElementById("pottery-breakdown").textContent = name + " — " + quantity + " × " + price + " ريال";
    return false;
}
