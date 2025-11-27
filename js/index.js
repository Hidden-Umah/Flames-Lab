
document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("LQFthNy6dlaTY-uoP"); 

    const form = document.getElementById("suggestionForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let params = {
            name: document.getElementById("name").value,
            gender: document.getElementById("gender").value,
            school: document.getElementById("school").value,
            role: document.querySelector('input[name="role"]:checked').value,
            country: document.getElementById("country").value,
            email: document.getElementById("email").value,
            description: document.getElementById("description").value,
            time: new Date().toLocaleString()
        };

        emailjs.send("service_h7w2azo", "template_474f0co", params)
            .then(() => {
                alert("✅ Your suggestion has been sent! Thank you.");
                form.reset();
                window.location.href = "../html/thankyou.html";
            })
            .catch((error) => {
                console.error(error);
                alert("❌ Something went wrong. Check the console for details.");
            });
    });
});
