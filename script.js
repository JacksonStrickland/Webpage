// Function to switch between tabs
function openTab(tabName) {
    // Hide all tab content
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    // Show the selected tab
    document.getElementById(tabName).style.display = "block";

    // Update active class for tabs
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(link => link.classList.remove('active'));
    document.querySelector('a[href="#' + tabName + '"]').classList.add('active');
}

</html>
