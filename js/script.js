document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.getElementById("toggleSidebar");
    const menuItems = document.querySelectorAll(".menu-item");
    const contentFrame = document.getElementById("contentFrame");

    // Toggle sidebar visibility
    toggleSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });

    // Load content when menu items are clicked
    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            const targetPage = item.getAttribute("data-target");
            contentFrame.src = targetPage;
        });
    });
});
