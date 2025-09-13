
const titles = document.querySelectorAll(".card-title");
console.log(titles);
for (let title of titles) {
    title.innerHTML = (`<span class = 'text-pink-500'>Hello Tanjim</span>`);
};
