const p3 = document.querySelector(".part-3");

const observer = new IntersectionObserver((entries) => {
    console.log(entries);
});

observer.observe(p3);