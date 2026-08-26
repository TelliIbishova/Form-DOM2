const form = document.querySelector("form");
const username = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const email = document.querySelector('input[type="email"]');
const age = document.querySelector('input[type="number"]');
const country = document.querySelector("select");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelectorAll("p").forEach((p) => {
    p.textContent = "";
});
document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("blur", () => {
        let p = input.nextElementSibling;
        if (p) {
            p.textContent = "";
        }
    });
});

    const selectedHobbies =
        document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );

    const selectedGender =
        document.querySelector(
            'input[type="radio"]:checked'
        );

    if (!username.value.trim()) {
        document.getElementById("usernameError").textContent =
            "Username doldurulmalıdır";
        return;
    }
    if (!password.value.trim() ||
        password.value.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password ən azı 8 simvol olmalıdır";
        return;
    }
    if (!email.value.trim() ||
        !email.value.includes("@")) {
        document.getElementById("emailError").textContent =
            "Düzgün Email daxil edin";
        return;
    }
    if (!age.value.trim() ||
        age.value < 18) {
        document.getElementById("ageError").textContent =
            "Age 18-dən böyük olmalıdır";
        return;
    }
    if (selectedHobbies.length === 0) {
        document.getElementById("hobbiesError").textContent =
            "Ən azı bir Hobby seçilməlidir";
        return;
    }
    if (!selectedGender) {
        document.getElementById("genderError").textContent =
            "Gender seçilməlidir";
        return;
    }
    if (!country.value) {
        document.getElementById("countryError").textContent =
            "Country seçilməlidir";
        return;
    }
    const obj = {
        username: username.value.trim(),
        password: password.value.trim(),
        email: email.value.trim(),
        age: age.value.trim(),
        hobbies: [...selectedHobbies].map(
            hobby => hobby.value
        ),
        gender: selectedGender.value,
        country: country.value
    };
    console.log(obj);
    form.reset();
});