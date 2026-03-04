const allCards = document.querySelectorAll(".feature-card");

allCards.forEach((card) => {
    // Step 3: Click to highlight — only one active at a time
    card.addEventListener("click", () => {
        // Remove 'active' from ALL cards first
        allCards.forEach((c) => c.classList.remove("active"));

        // Add 'active' to the clicked card only
        card.classList.add("active");

        const title = card.querySelector("h3").textContent;
        console.log(`Selected: ${title}`);
    });

});
