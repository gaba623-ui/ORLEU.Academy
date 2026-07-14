const scriptURL =
    "https://script.google.com/macros/s/AKfycbxg6mfKEp2vTPy88j85HgllRfyT19jgUsZvbrUCHn-x9sEMy8Ab6XtPwc-9MT50MznyZw/exec";

const form = document.getElementById("registerForm");
const submitButton = document.getElementById("submitButton");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const firstNameInput = document.getElementById("firstName");
        const lastNameInput = document.getElementById("lastName");
        const phoneInput = document.getElementById("phone");
        const emailInput = document.getElementById("email");
        const courseSelect = document.getElementById("course");

        if (
            !firstNameInput ||
            !lastNameInput ||
            !phoneInput ||
            !emailInput ||
            !courseSelect
        ) {
            alert("❌ Не удалось найти поля формы.");
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (!courseSelect.value) {
            alert("❌ Выберите программу.");
            courseSelect.focus();
            return;
        }

        const selectedCourseText =
            courseSelect.options[courseSelect.selectedIndex].textContent.trim();

        const data = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),

            // В таблицу отправится полное название программы,
            // а не course1, course2, course5 и т. д.
            course: selectedCourseText
        };

        const originalButtonText = submitButton
            ? submitButton.textContent
            : "";

        try {
            if (submitButton) {
                submitButton.disabled = true;

                const currentLanguage =
                    localStorage.getItem("orleuLanguage") || "ru";

                submitButton.textContent =
                    currentLanguage === "kz"
                        ? "Жіберілуде..."
                        : "Отправка...";
            }

            const response = await fetch(scriptURL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(
                    `Ошибка сервера: ${response.status}`
                );
            }

            const result = await response.json();

            if (result.result !== "success") {
                throw new Error("Скрипт не подтвердил отправку.");
            }

            const currentLanguage =
                localStorage.getItem("orleuLanguage") || "ru";

            alert(
                currentLanguage === "kz"
                    ? "✅ Өтінім сәтті жіберілді!"
                    : "✅ Заявка успешно отправлена!"
            );

            form.reset();
        } catch (error) {
            console.error("Ошибка отправки формы:", error);

            const currentLanguage =
                localStorage.getItem("orleuLanguage") || "ru";

            alert(
                currentLanguage === "kz"
                    ? "❌ Өтінімді жіберу кезінде қате пайда болды."
                    : "❌ Ошибка при отправке заявки."
            );
        } finally {
            if (submitButton) {
                submitButton.disabled = false;

                const currentLanguage =
                    localStorage.getItem("orleuLanguage") || "ru";

                if (
                    typeof lang !== "undefined" &&
                    lang[currentLanguage]
                ) {
                    submitButton.textContent =
                        lang[currentLanguage].submitButton;
                } else {
                    submitButton.textContent =
                        originalButtonText || "Подать заявку";
                }
            }
        }
    });
}
