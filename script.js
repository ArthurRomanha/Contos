let btnRelativeAtTheProject = document.getElementById(`conto${idx+1}`);

const carousel = () => {
    clearInterval(interval);
    interval = setInterval(carousel, 2000);

    idx++;

    if (idx > project.length - 1) {
        idx = 0;
    }
    btnRelativeAtTheProject = document.getElementById(`project${idx + 1}`);
    projects.style.transform = `translateX(${-idx * 277}px)`;
    btnRelativeAtTheProject.classList.add("projectSelected");
    btnRelativeAtTheProject.classList.remove("projectsUnselected");
}

let interval = setInterval(carousel, 2000);