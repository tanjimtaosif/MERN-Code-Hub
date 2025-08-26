
/*

const likeButton = document.getElementById("comment-button")

// console.log(likeButton)

const allPrimaryButtons = document.getElementsByClassName("btn-primary")

// console.log(allPrimaryButtons)

allPrimaryButtons[1].addEventListener("click", function () {
    console.log("Bashay zeye nasta khai")
})

const allImages = document.getElementsByTagName("img")
console.log(allImages)

*/

// -------------------------------------------

// const likeButtonQ = document.querySelector("#like-button")
// console.log(likeButtonQ)

// const likeButtonQ2 = document.querySelectorAll(".btn-primary")
// console.log(likeButtonQ2[2])

// -------------------------------------------

// Pro Tips 1 section
const heroSection = document.querySelector(".hero-section")

const heroSectionButton = heroSection.querySelector("button")
const h1TagWithinHeroSection = heroSection.querySelector("h1")
// console.log(h1TagWithinHeroSection)
const sampleButton = document.querySelector("button")

// console.log("sampleButton", sampleButton)
// console.log("heroSectionButton", heroSectionButton)
// -------------------------------------------

// Styling / DOM modifying section

// [ X ] Bad Practice
// heroSectionButton.style.backgroundColor = "#07cb92"
// heroSectionButton.style.color = "white"

// heroSection.style.backgroundColor = "brown"

// [ 💚 ] Good Practice
// heroSectionButton.classList.add("bg-[#07cb92]")
// heroSectionButton.classList.add("text-white")

// heroSection.classList.add("bg-cyan-600")
// -------------------------------------------

// getAttribute / setAttribute

// const aquriumImg = document.getElementById("aqurium-img")

// console.log(aquriumImg.getAttribute("id"))
// aquriumImg.setAttribute("src", "https://i.ibb.co.com/p0w744T/pet-1.jpg")
// aquriumImg.setAttribute("id", "new-img-id")

// -------------------------------------------


// Event Listeners
// const likeButton = document.getElementById("like-button")

// [ Good practice ]
// likeButton.addEventListener("click", function () {
//     console.log("Button is now disabled")
//     likeButton.setAttribute("disabled", true)
// })

// [ Not so good]
// function makeButtonDisable(amount, lastMessage) {
//     const likeButton = document.getElementById("like-button")
//     console.log(`${amount} - ${lastMessage}`)
//     likeButton.setAttribute("disabled", true)
// }

// -------------------------------------------

// Update Element
const likeButton = document.getElementById("like-button")
likeButton.addEventListener("click", function () {

    // Get
    const likeNumberSpanTag = document.getElementById("like-number")
    const likeNumberStr = likeNumberSpanTag.innerText

    let likeNumber = parseInt(likeNumberStr)

    // Update / Create
    likeNumber++

    // Set in UI
    likeNumberSpanTag.innerText = likeNumber

})
// -------------------------------------------

// Create Element
const commentInputBox = document.getElementById("comment-input")
const commentButton = document.getElementById("comment-button")

commentButton.addEventListener("click", function () {
    const userInput = commentInputBox.value
    console.log(userInput)

    // Create Element
    const newComment = document.createElement("p") // <p></p>
    newComment.innerText = userInput // <p> New Comment </p>

    // Add Event Listener to a newly created Element
    newComment.addEventListener("click", function () {
        newComment.remove()
    })

    // Getting container
    const commentHistoryContainer = document.getElementById("comment-history")

    // Ui update
    commentHistoryContainer.appendChild(newComment)


    // Kaj Seshe
    commentInputBox.value = ""
})
// -------------------------------------------

// Event Bubbling

const shareButton = document.getElementById("share-button")
shareButton.addEventListener("click", function (event) {
    console.log("Share Button Clicked")

    // event.stopPropagation()
})

const shareButtonParent = document.getElementById("share-button-parent")
shareButtonParent.addEventListener("click", function () {
    console.log("Share Button Parent  Clicked")
})

// -------------------------------------------
