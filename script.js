// HERO CAROUSEL
let slides = document.querySelectorAll('.slide');
let current = 0;
function showSlide(index){
  slides.forEach(s=>s.classList.remove('active'));
  slides[index].classList.add('active');
}
setInterval(()=>{
  current = (current+1)%slides.length;
  showSlide(current);
},5000);

// SERVICES TABS
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    let target = tab.dataset.tab;
    tabContents.forEach(tc=>{
      tc.id === target ? tc.classList.add('active') : tc.classList.remove('active');
    });
  });
});

// WISHLIST BUTTONS
const wishlistBtns = document.querySelectorAll('.wishlist-btn');
wishlistBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(btn.innerText.includes('Add')) btn.innerText='Added to Wishlist';
    else btn.innerText='Add to Wishlist';
  });
});

// LOCATION MODAL
const modal = document.getElementById('locationModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.loc-box').forEach(box=>{
  box.addEventListener('click',()=>{
    modal.style.display='flex';
    modalImg.src = box.dataset.img;
    modalTitle.innerText = box.dataset.city;
    modalDesc.innerText = box.dataset.desc;
  });
});

closeBtn.addEventListener('click',()=>{modal.style.display='none';});
window.addEventListener('click', e=>{if(e.target===modal) modal.style.display='none';});

// IMAGE MODAL
function showDetails(image, title, desc) {
  const modal = document.getElementById("imageModal");
  document.getElementById("modalImg").src = image;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
