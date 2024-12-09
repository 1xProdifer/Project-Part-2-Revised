document.getElementById("signinForm").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill out all fields.");
        e.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    } else {
        // Simulate saving data to a server or file
        console.log("Saving user data...");
        console.log(`Email: ${email}, Password: [hidden for security]`);

        // Redirect to homepage after successful sign-in
        alert("Sign-in successful! Redirecting to the homepage...");
        window.location.href = "/index.html"; // Update with your homepage path
        e.preventDefault(); // Prevent form submission to the server
    }
});

document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("newsletterEmail").value;

    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Successfully subscribed, Enjoy your stay!!");
    document.getElementById("newsletterForm").reset(); // Clear the input field
});
