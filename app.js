let array = document.querySelectorAll(".card");

// addEventListener("mouseenter", () => {
//     document.querySelector(this).classList.toggle("blur");
// })

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    array[index].addEventListener("mouseenter", () => {
        switch (index) {
            case 0:
                document.querySelector(".card__two").classList.toggle("blur");
                document.querySelector(".card__three").classList.toggle("blur");
                document.querySelector(".card__four").classList.toggle("blur");
                document.querySelector(".card__five").classList.toggle("blur");
                break;
            case 1:
                document.querySelector(".card__one").classList.toggle("blur");
                document.querySelector(".card__three").classList.toggle("blur");
                document.querySelector(".card__four").classList.toggle("blur");
                document.querySelector(".card__five").classList.toggle("blur");
                break;
            case 2:
                document.querySelector(".card__one").classList.toggle("blur");
                document.querySelector(".card__two").classList.toggle("blur");
                document.querySelector(".card__four").classList.toggle("blur");
                document.querySelector(".card__five").classList.toggle("blur");
                break;
            case 3:
                document.querySelector(".card__one").classList.toggle("blur");
                document.querySelector(".card__two").classList.toggle("blur");
                document.querySelector(".card__three").classList.toggle("blur");
                document.querySelector(".card__five").classList.toggle("blur");
                break;
            case 4:
                document.querySelector(".card__one").classList.toggle("blur");
                document.querySelector(".card__two").classList.toggle("blur");
                document.querySelector(".card__three").classList.toggle("blur");
                document.querySelector(".card__four").classList.toggle("blur");
                break;
        
            default:
                console.log("Default");
                break;
        }
    })
}

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    array[index].addEventListener("mouseleave", () => {
        switch (index) {
            case 0:
                document.querySelector(".card__two").classList.toggle("blur");
                document.querySelector(".card__three").classList.toggle("blur");
                document.querySelector(".card__four").classList.toggle("blur");
                document.querySelector(".card__five").classList.toggle("blur");
                break;
            case 1:
                document.querySelector(".card__one").classList.toggle("blur");
                document.querySelector(".card__three").classList.toggle("blur");
                document.querySelector(".card__four").classList.toggle("blur");
                document.querySelector(".card__five").classList.toggle("blur");
                break;
            case 2:
                document.querySelector(".card__one").classList.toggle("blur");
                document.querySelector(".card__two").classList.toggle("blur");
                document.querySelector(".card__four").classList.toggle("blur");
                document.querySelector(".card__five").classList.toggle("blur");
                break;
            case 3:
                document.querySelector(".card__one").classList.toggle("blur");
                document.querySelector(".card__two").classList.toggle("blur");
                document.querySelector(".card__three").classList.toggle("blur");
                document.querySelector(".card__five").classList.toggle("blur");
                break;
            case 4:
                document.querySelector(".card__one").classList.toggle("blur");
                document.querySelector(".card__two").classList.toggle("blur");
                document.querySelector(".card__three").classList.toggle("blur");
                document.querySelector(".card__four").classList.toggle("blur");
                break;

            default:
                console.log("Default");
                break;
        }
    })
}