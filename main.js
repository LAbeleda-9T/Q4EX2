function verifyAge() {
    let age = document.getElementById('inputAge').value;

    if (!age) {
        window.alert("Please enter your age.");
        return;
    }

    if (age < 18) {
        window.alert("You're too young to vote.");
    } else {
        window.alert("You're eligible to vote!");
    }
}
