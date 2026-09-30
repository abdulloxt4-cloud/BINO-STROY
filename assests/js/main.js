const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", function() {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name == "" || phone == "" || message == "") {

        sendBtn.textContent = "Barcha ma'lumotlarni kiriting";

        setTimeout(function() {
            sendBtn.textContent = "Xabar yuborish";
        }, 2000);

        return;
    }

    sendBtn.textContent = "Xabar qabul qilindi ✓";

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";

    setTimeout(function() {
        sendBtn.textContent = "Xabar yuborish";
    }, 2000);

});