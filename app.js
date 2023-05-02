const imageContainer = document.querySelector(".imageContainer")
const number = document.querySelector(".number")
const btnPrev = document.querySelector(".btnPrev")
const btnNext = document.querySelector(".btnNext")

let a=1

btnNext.addEventListener('click',()=>{
    a++
    if(a>10){
        btnNext.classList.add('hidden')
    }
    else{
    imageContainer.src = `./assets/img${a}.jpg`
    number.innerHTML = a
    btnPrev.classList.remove('hidden')
}

})
btnPrev.addEventListener('click',()=>{
    a--;
    if(a<1){
        btnPrev.classList.add('hidden')
    }
    else{
        btnNext.classList.remove('hidden')
    imageContainer.src = `./assets/img${a}.jpg`
    number.innerHTML = a
}
})