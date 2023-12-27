console.log("1.0");


function mudarTela(id) {
    const itens = document.querySelectorAll('a');
    
    for (let item of itens) {
        if (item.id === id) {
            item.querySelector('div').classList.add("active");
        } else {
            item.querySelector('div').className = "teste";
        }
    }
}

const observer = new IntersectionObserver( entries => {
    Array.from(entries).forEach(entry => {

        if (entry.intersectionRatio > 0) {
            mudarTela(entry.target.id)
        }
    })
})

Array.from(document.querySelectorAll('section')).forEach(element => {
    observer.observe(element);
})