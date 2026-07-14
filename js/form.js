const scriptURL = "https://script.google.com/macros/s/AKfycbxg6mfKEp2vTPy88j85HgllRfyT19jgUsZvbrUCHn-x9sEMy8Ab6XtPwc-9MT50MznyZw/exec";

const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
        alert("✅ Заявка успешно отправлена!");
        form.reset();
    })
    .catch(error => {
        alert("❌ Ошибка при отправке.");
        console.error(error);
    });
});
