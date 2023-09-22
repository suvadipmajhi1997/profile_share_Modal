const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// open function

const openModal= () =>{
    console.log('modal active');
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

//modal close

const closeModal = () =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}