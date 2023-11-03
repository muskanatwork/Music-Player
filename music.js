let audio = document.querySelector("audio")
let previos = document.querySelector(".previos")
let next = document.querySelector(".next")
let image = document.querySelector(".image")
let pause = document.querySelector(".play")
let valum = document.querySelector("input")
let duraction = document.querySelector(".duraction")
console.log(duraction)

let i = 0;
let musicList = [
    "songs/Bachpan Song.mp3",
    "songs/Abhi Aagaaz Hain Tera - Motivational ! Hindi.mp3",
    "songs/Student Motivational ! Motivational.mp3",
    "songs/mobcup-koslya-dasrat-ke-nandan-god-ram-61055-61072.mp3",
    "songs/Chhath Puja - Anuradha Paudwal ! Bhojpuri.mp3"

]

let imageList = [
    "images/bachpan.jpeg",
    "images/Motivational-2.jpg",
    "images/motivactional.jpg",
    "images/ram.jpg",
    "images/img6.jpg"

]

next.addEventListener("click", () => {
    i++;
    if (i > 4)
        i = 0;
    image.setAttribute("src", imageList[i])
    audio.setAttribute("src", musicList[i])
    audio.play();
    pause.setAttribute("src", "songs/img1.png")

})

previos.addEventListener("click", () => {
    i--;
    if (i < 0)
        i = 4;
    image.setAttribute("src", imageList[i])
    audio.setAttribute("src", musicList[i])
    audio.play();
    pause.setAttribute("src", "songs/img1.png")

})


// This is play and pause button
let number = 1;
pause.addEventListener("click", () => {
    if (number === 0) {
        audio.pause();
        pause.setAttribute("src", "songs/img5.png")
        number = 1;
    }
    else {
        audio.play();
        pause.setAttribute("src", "songs/img1.png")
        number = 0
    }
})


// This is volume
const volumeSlider = (e) => {
    audio.volume = e.target.value
}
valum.addEventListener("input", volumeSlider)


setInterval(() => {
    duraction.value = audio.currentTime * 100 / audio.duration
}, 1000)

duraction.addEventListener("change", () => {
    audio.currentTime = duraction.value / 100 * audio.duration
})








