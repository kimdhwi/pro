let currentSlide = 0;
const totalSlides = 1; // 페이지 수 (첫 페이지에서 2페이지로 넘어감)
const wrapper = document.querySelector('.portfoliobody');

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        // 아래로 스크롤 시
        if (currentSlide < totalSlides) {
            currentSlide++;
        }
    } else {
        // 위로 스크롤 시
        if (currentSlide > 0) {
            currentSlide--;
        }
    }

    // 페이지 변경
    wrapper.style.transform = `translateX(-${currentSlide * 100}vw)`;
});




window.onscroll = function() {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block"; // 200px 이상 스크롤되면 버튼 보이기
    } else {
      scrollToTopBtn.style.display = "none"; // 그 이하일 경우 버튼 숨기기
    }
  };

  // 페이지 맨 위로 스크롤하는 함수
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드러운 스크롤
    });
  }


  