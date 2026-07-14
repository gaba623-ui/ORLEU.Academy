const scriptURL =
    "https://script.google.com/macros/s/AKfycbxg6mfKEp2vTPy88j85HgllRfyT19jgUsZvbrUCHn-x9sEMy8Ab6XtPwc-9MT50MznyZw/exec";

const form = document.getElementById("registerForm");
const submitButton = document.getElementById("submitButton");

const statusModal = document.getElementById("successModal");
const statusModalOverlay = document.getElementById("successModalOverlay");
const statusModalClose = document.getElementById("successModalClose");
const statusModalTitle = document.getElementById("successModalTitle");
const statusModalText = document.getElementById("successModalText");

const statusModalIcon = statusModal
    ? statusModal.querySelector(".success-modal__icon")
    : null;


function getCurrentLanguage() {
    return localStorage.getItem("orleuLanguage") === "kz"
        ? "kz"
        : "ru";
}


function showStatusModal(type, title, message, buttonText) {
    if (
        !statusModal ||
        !statusModalTitle ||
        !statusModalText ||
        !statusModalClose
    ) {
        window.alert(`${title}\n\n${message}`);
        return;
    }

    statusModal.classList.toggle(
        "error",
        type === "error"
    );

    statusModalTitle.textContent = title;
    statusModalText.textContent = message;
    statusModalClose.textContent = buttonText;

    if (statusModalIcon) {
        statusModalIcon.textContent =
            type === "error" ? "!" : "✓";
    }

    statusModal.classList.add("open");
    statusModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

    statusModalClose.focus();
}


function closeStatusModal() {
    if (!statusModal) {
        return;
    }

    statusModal.classList.remove(
        "open",
        "error"
    );

    statusModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");
}


if (statusModalClose) {
    statusModalClose.addEventListener(
        "click",
        closeStatusModal
    );
}


if (statusModalOverlay) {
    statusModalOverlay.addEventListener(
        "click",
        closeStatusModal
    );
}


document.addEventListener(
    "keydown",
    function (event) {
        if (
            event.key === "Escape" &&
            statusModal &&
            statusModal.classList.contains("open")
        ) {
            closeStatusModal();
        }
    }
);


if (form) {
    form.addEventListener(
        "submit",
        async function (event) {
            event.preventDefault();

            const firstNameInput =
                document.getElementById("firstName");

            const lastNameInput =
                document.getElementById("lastName");

            const phoneInput =
                document.getElementById("phone");

            const emailInput =
                document.getElementById("email");

            const courseSelect =
                document.getElementById("course");

            const currentLanguage =
                getCurrentLanguage();

            if (
                !firstNameInput ||
                !lastNameInput ||
                !phoneInput ||
                !emailInput ||
                !courseSelect
            ) {
                showStatusModal(
                    "error",

                    currentLanguage === "kz"
                        ? "Қате"
                        : "Ошибка",

                    currentLanguage === "kz"
                        ? "Форма өрістерін табу мүмкін болмады."
                        : "Не удалось найти поля формы.",

                    currentLanguage === "kz"
                        ? "Жабу"
                        : "Закрыть"
                );

                return;
            }

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            if (!courseSelect.value) {
                courseSelect.focus();
                return;
            }

            const selectedCourseText =
                courseSelect.options[
                    courseSelect.selectedIndex
                ].textContent.trim();

            const data = {
                firstName:
                    firstNameInput.value.trim(),

                lastName:
                    lastNameInput.value.trim(),

                phone:
                    phoneInput.value.trim(),

                email:
                    emailInput.value.trim(),

                course:
                    selectedCourseText
            };

            const originalButtonText =
                submitButton
                    ? submitButton.textContent
                    : "";

            try {
                if (submitButton) {
                    submitButton.disabled = true;

                    submitButton.textContent =
                        currentLanguage === "kz"
                            ? "Жіберілуде..."
                            : "Отправка...";
                }

                const response =
                    await fetch(scriptURL, {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=utf-8"
                        },

                        body: JSON.stringify(data)
                    });

                if (!response.ok) {
                    throw new Error(
                        `Ошибка сервера: ${response.status}`
                    );
                }

                const result =
                    await response.json();

                if (result.result !== "success") {
                    throw new Error(
                        "Скрипт не подтвердил отправку."
                    );
                }

                form.reset();

                showStatusModal(
                    "success",

                    currentLanguage === "kz"
                        ? "Өтінім сәтті жіберілді!"
                        : "Заявка успешно отправлена!",

                    currentLanguage === "kz"
                        ? "Тіркелгеніңізге рақмет. Жақын арада сізбен хабарласамыз."
                        : "Спасибо за регистрацию. Мы свяжемся с вами в ближайшее время.",

                    currentLanguage === "kz"
                        ? "Жабу"
                        : "Закрыть"
                );
            } catch (error) {
                console.error(
                    "Ошибка отправки формы:",
                    error
                );

                showStatusModal(
                    "error",

                    currentLanguage === "kz"
                        ? "Өтінім жіберілмеді"
                        : "Заявка не отправлена",

                    currentLanguage === "kz"
                        ? "Қате пайда болды. Интернет байланысын тексеріп, қайта көріңіз."
                        : "Произошла ошибка. Проверьте интернет и попробуйте ещё раз.",

                    currentLanguage === "kz"
                        ? "Жабу"
                        : "Закрыть"
                );
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;

                    const language =
                        getCurrentLanguage();

                    if (
                        typeof lang !== "undefined" &&
                        lang[language]
                    ) {
                        submitButton.textContent =
                            lang[language].submitButton;
                    } else {
                        submitButton.textContent =
                            originalButtonText ||
                            "Подать заявку";
                    }
                }
            }
        }
    );
}
