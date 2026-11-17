// 변수 선언
    let gnb = document.getElementById('gnb');
    let header = document.getElementById('header');

    // gnb 마우스 이벤트
    gnb.addEventListener('mouseenter', function() {
      header.style.height = '350px';
      header.style.backgroundColor = '#ffffff';
    });

    gnb.addEventListener('mouseleave', function() {
      header.style.height = '80px';
      header.style.backgroundColor = '';
    });

    // 1. 메인 배너 슬라이드 (mainSwiper로 이름 변경)
    const mainSwiper = new Swiper('.mySwiper', {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.mySwiper .swiper-pagination',
        clickable: true,
      }
    });

    // 2. 메뉴 리스트 슬라이드 (menuSwiper로 이름 변경)
    // 1. 태블릿/모바일(1024px 이하)일 때만 li들을 1개씩 슬라이드로 분리
if (window.innerWidth <= 1024) {
  document.querySelectorAll('.menu_list .swiper-slide ul').forEach(function(ul) {
    var lis = Array.from(ul.children);
    var wrapper = ul.closest('.swiper-wrapper');
    var parentSlide = ul.closest('.swiper-slide');

    lis.forEach(function(li) {
      var newSlide = document.createElement('div');
      newSlide.className = 'swiper-slide';
      var newUl = document.createElement('ul');
      newUl.appendChild(li);
      newSlide.appendChild(newUl);
      wrapper.insertBefore(newSlide, parentSlide);
    });

    parentSlide.remove(); // 기존 2개짜리 묶음 슬라이드 삭제
  });
}

// 2. Swiper 실행 (PC와 태블릿 옵션 분리)
var menuSwiper = new Swiper('.menu_list', {
  slidesPerView: 1, // 태블릿/모바일: 1개씩 보임
  spaceBetween: 30,
  slidesPerGroup: 1,

  breakpoints: {
    1025: {
      slidesPerView: 2, // PC: 1개 슬라이드(안에 li 2개)가 보이므로 결국 이미지 2개만 나옴!
      spaceBetween: 2,
      slidesPerGroup: 2
    }
  },
  navigation: {
    nextEl: '.menu_list .swiper-button-next',
    prevEl: '.menu_list .swiper-button-prev',
  },
  pagination: {
    el: '.menu_list .swiper-pagination',
    clickable: true,
  }
});

   // 3. 샵 리스트 슬라이드 (반응형: 모바일 1개, 태블릿 2개, PC 3개)
    const shopSwiper = new Swiper('.shop_list', {
      slidesPerView: 1, // 모바일 (767px 이하) 기본: 1개씩 보임
      spaceBetween: 20, // 모바일 간격
      loop: true,
      navigation: {
        nextEl: '.shop_list .swiper-button-next',
        prevEl: '.shop_list .swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2, // 태블릿 (768px ~ 1024px): 2개씩 보임
          spaceBetween: 30, // 태블릿 간격
        },
        1025: {
          slidesPerView: 3, // PC (1025px 이상): 3개씩 보임
          spaceBetween: 50, // PC 간격
        }
      }
    });

    // 4. 스크롤시 헤더 배경 생김
    window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  
  // 스크롤 위치가 50px 이상 내려가면 active 클래스 추가, 아니면 제거
  if (window.scrollY > 900) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

const sideLinks = document.querySelectorAll('.lnb > ul > li > a');

sideLinks.forEach(link => {
  link.addEventListener('click', function () {
    // 1. 모든 메뉴에서 active 클래스 제거
    sideLinks.forEach(l => l.classList.remove('active'));
    
    // 2. 방금 클릭한 메뉴에만 active 클래스 추가
    this.classList.add('active');
  });
});

// ==========================================
// 햄버거 메뉴 및 닫기 버튼 스크립트
const barsBtn = document.getElementById('bars');
const closeBtn = document.getElementById('close_btn'); // 닫기 버튼 변수 추가
const navWrap = document.getElementById('nav_wrap');

// 햄버거 버튼 클릭 시 열기
if(barsBtn && navWrap) {
  barsBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    navWrap.classList.add('open'); // 메뉴 열기
  });
}

// X 버튼 클릭 시 닫기
if(closeBtn && navWrap) {
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navWrap.classList.remove('open'); // 메뉴 닫기
  });
}

document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 1024) {
    const gnbLinks = document.querySelectorAll('.gnb > ul > li > a');
    
    gnbLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const sub = this.nextElementSibling;
        if (sub && sub.classList.contains('sub')) {
          e.preventDefault();
          const li = this.parentElement;
          li.classList.toggle('active');
          
          if (sub.style.display === 'block') {
            sub.style.display = 'none';
          } else {
            sub.style.display = 'block';
          }
        }
      });
    });
  }
});