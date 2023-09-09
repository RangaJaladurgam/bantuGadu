var changedImg = document.getElementById('img');
let opt = document.getElementById('select');
function changeImg() {
    changedImg.setAttribute('src',this.value);
    console.log(this.value);
}
opt.addEventListener("change",changeImg);

