const details = document.querySelectorAll("details");

[...details].forEach((targetDetail) => {
    targetDetail.addEventListener("click", _ => {
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});

