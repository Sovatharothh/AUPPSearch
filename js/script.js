document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.getElementById("toggleSidebar");

    // Toggle sidebar collapsed state when the hamburger icon is clicked
    toggleSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });

    const menuItems = document.querySelectorAll(".menu-item");
    const contentFrame = document.getElementById("contentFrame");

    // Load content when menu items are clicked
    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            const targetPage = item.getAttribute("data-target");
            contentFrame.src = targetPage;
        });
    });

    const dropdownArrow = document.querySelector(".dropdown-arrow");
    const profileContainer = document.querySelector(".profile-container");

    // Toggle dropdown menu visibility
    dropdownArrow.addEventListener("click", () => {
        profileContainer.classList.toggle("active");
    });
});
