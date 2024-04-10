document.addEventListener("DOMContentLoaded", function() {
    fetch("header/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;
        console.log("Header content loaded successfully!");  // Check if this log appears in the console
        applyStyles();
    })
    .catch(error => console.error("Error loading header:", error));

    function applyStyles() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "css/style.css";
        document.head.appendChild(link);
    }
});
