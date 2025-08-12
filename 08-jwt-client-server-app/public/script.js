const authForm = document.getElementById("authForm");
const email = document.getElementById("e-mail");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errormessage");
const btn = document.getElementById("btn");

authForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const mail = email.value;
    const code = password.value;

    const data = {
        username: mail,
        password: code
    };

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Login success ✅", result);
            const token = result.token;

            // Now fetch dashboard data
            const dashRes = await fetch("http://localhost:3000/dashboard", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const dashData = await dashRes.json();
            console.log("Dashboard", dashData);

        } else {
            errorMessage.textContent = result.message || "Something went wrong.";
        }
    } catch (err) {
        console.log("Error: ", err);
        errorMessage.textContent = "Server error. Please try again.";
    }
});
