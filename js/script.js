// دالة لتفعيل العنصر المحدد
    function setActive(element) {
      const currentActive = document.querySelector('.unique-active');
      if (currentActive) {
        currentActive.classList.remove('unique-active');
      }
    
      element.classList.add('unique-active');
      localStorage.setItem('activeGroup', element.getAttribute('data-group'));
    }
    
    // استعادة الحالة النشطة عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', () => {
      const activeGroup = localStorage.getItem('activeGroup');
      if (activeGroup) {
        const activeElement = document.querySelector(`[data-group="${activeGroup}"]`);
        if (activeElement) {
          activeElement.classList.add('unique-active');
        }
      } else {
        const defaultActive = document.querySelector(`[data-group="Design"]`);
        if (defaultActive) {
          defaultActive.classList.add('unique-active');
        }
      }
    });
    const container = document.getElementById('groupContainer');
const groups = container.children;
let currentIndex = 0;

function scrollGroups() {
    currentIndex = (currentIndex + 1) % groups.length;
    const groupWidth = groups[currentIndex].offsetWidth;
    const containerWidth = container.offsetWidth;
    const scrollPosition = groups[currentIndex].offsetLeft - (containerWidth / 2) + (groupWidth / 2);
    container.scrollLeft = scrollPosition;
}

setInterval(scrollGroups, 5000);
const collectionDetails1_3 = [
  {
    title: 'Restaurants',
content: '<div class="group-list-inner-1-3">' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/-1-Tunis /index.html\'">' +
         'Bab Bhar<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/-2-Ariana/index.html\'">' +
         'Bab Souika<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/-3-Manouba/index.html\'">' +
         'Carthage<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/-4-Ben Arous/index.html\'">' +
         'El Khadra City<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/-5-Nabeul/index.html\'">' +
         'Djebel Djelloud<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/-6-Zaghouan/index.html\'">' +
         'El Haraïria<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/-7-Sousse/index.html\'">' +
         'El Kabaria<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/-8-Monastir/index.html\'">' +
         'El Menzah<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/-9-Mahdia/index.html\'">' +
         'El Omrane<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/10-Bizerte/index.html\'">' +
         'El Omrane Supérieur<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/11-Beja/index.html\'">' +
         'El Ouardia<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/12-Le kef/index.html\'">' +
         'Ettahrir<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/13-Jendouba/index.html\'">' +
         'Ezzouhour<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/14-Siliana/index.html\'">' +
         'La Goulette<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/15-Kairouan/index.html\'">' +
         'La Marsa<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/16-Sfax/index.html\'">' +
         'Le Bardo<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/17-Kasserine/index.html\'">' +
         'Le Kram<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/18-Sidi Bouzid/index.html\'">' +
         'Medina<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/19-Gafsa/index.html\'">' +
         'Sidi El Béchir<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/20-Tozeur/index.html\'">' +
         'Sidi Hassine<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '<div class="group-item-inner-1-3" onclick="window.location.href=\'/T2-main/Page/1-Restaurants/21-Kebili/index.html\'">' +
         'Sijoumi<span class="subtitle">0 Restos</span>' +
         '</div>' +
         '</div>'
}
];

function openModal1_3(index) {
  const modal = document.getElementById('modal1_3');
  const modalTitle = document.getElementById('modalTitle1_3');
  const modalContent = document.getElementById('modalContent1_3');

  // تحقق من أن الفهرس صحيح
  if (collectionDetails1_3[index]) {
    modalTitle.textContent = collectionDetails1_3[index].title;
    modalContent.innerHTML = collectionDetails1_3[index].content; // تحميل المحتوى الجديد
    modal.style.display = 'block';
    document.body.classList.add('no-scroll'); // منع التمرير في الصفحة الرئيسية
  }
}

function closeModal1_3() {
  const modal = document.getElementById('modal1_3');
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll'); // السماح بالتمرير في الصفحة الرئيسية
}
