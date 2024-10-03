// Function to switch between tabs
function openTab(event, tabName) {
    // Hide all tab content
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove active class from all tab links
    tabLinks = document.querySelectorAll('nav ul li a');
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the selected tab and add active class to clicked tab link
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}
