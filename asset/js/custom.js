

// 비주얼 영역 스와이퍼
visualTxt1 = [
    '100년을 향한 57번째 도약'
    ,'우리의 독보적인 우월함'
    ,'환경과 미래 세대를 위한 선택'
    ,'섬세하게 채워지는 품격의 중심'
    ,'욕실은 가장 아름다운 방이어야 합니다.'
];
visualTxt2 = [
    'Since. 1966'
    ,'THE BEST'
    ,'SMART TECH'
    ,'LAND MARK'
    ,'FIND DAELIM BATH'
];




var swiper = new Swiper(".visual-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        return `<div class=${className}>
                    <p class="title">${visualTxt1[index]}</p>
                    <span class="desc">${visualTxt2[index]}</span>
                </div>`
        },
      },
      loop:true,
    speed : 1000,
  });


// '100년을 향한 57번째 도약'
// ,'우리의 독보적인 우월함'
// ,'환경과 미래 세대를 위한 선택'
// ,'섬세하게 채워지는 품격의 중심'
// ,'욕실은 가장 아름다운 방이어야 합니다.'



// 'Since. 1966'
// ,'THE BEST'
// ,'SMART TECH'
// ,'LAND MARK'
// ,'FIND DAELIM BATH'


// info 영역 


$(".sc-info .info-item").click(function(el){
    el.preventDefault();
})
var swiper = new Swiper(".info-swiper", {
    spaceBetween: 30,
    speed:1000,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




//스마트테크영역 마우스 오버 애니메이션

tag = [
    "Automatic Flushing",
    "Perfect Flushing Performance",
    "Rimless Design",
    "Auto Open-Close Lid",
    "Clean-Cera Coating",
    "Specialized Design For Korean"
]
text = [
    "자동 물내림 기능",
    "완벽한 수세력",
    "림리스 디자인",
    "자동 개폐 기능",
    "오염 방지 특수 코팅",
    "한국인 체형 특화 디자인"
]
desc = [
    "사용자의 손이 닿지 않아도 알맞은 양의 물을<br>자동으로 내려주는 최고의 편의, 가장 완벽한 기술",
    "특허로 검증된 4단계 2회 세척법과 볼 세척력 강화 장치로<br>저수압에서도 기능이 극대화 되는 독보적인 수세 기술",
    "양변기 가장자리의 테두리를 제거하여 오물과 세균이<br>쌓이는 모서리 공간까지 집중한 위생 디자인",
    "인체 동작을 감지하여 사용자가 손을 대지 않아도<br>자동으로 여닫히는 오토 센서 제어 기술",
    "특수 방오 유약을 덧발라 도기 표면 평활도를 높여 변색과 오염에 강하고<br>오래도록 백색도와 청결함이 유지되는 도기 기술",
    "한국인의 평균 체형과 인체 치수를 반영하여<br>설계한 최적의 편안함을 선사하는 인체공학적 설계"
]
$(".sc-tech .tech-box").mouseenter(function(){

    let filter = $(this).data("filter");
    let idx = $(this).index();
    // console.log(filter)
    $(this).addClass("on");
    $(".sc-tech .tech-box").not(this).removeClass('on');

    $(".sc-tech .group-tech").css("background","url(./asset/images/tech-bg"+(idx+1)+".png) center/cover no-repeat")

    html =`<div class="text-box">
        <em class="tag">${tag[idx]}</em>
        <h3 class="text">${text[idx]}</h3>
        <p class="desc">${desc[idx]}</p>
    </div>`

    $('.sc-tech .text-area').html(html);
})

// 스마트테크 태블릿모드 태그옵션

$(".sc-tech .group-tech-portable .tech-item").click(function(){
    let idx = Number($(this).index()+1)
    
    $(this).addClass("on");
    $(".sc-tech .tech-item").not(this).removeClass("on");

    $(".group-tech-portable .ico img").attr("src","./asset/images/tech-ico"+idx+".png")
    $(".group-tech-portable .bg").attr("src","./asset/images/tech-mo"+idx+".png")
    

    html =`
    <div class="text-box">
        <h3 class="text">${text[idx-1]}</h3>
        <p class="desc">${desc[idx-1]}</p>
    </div>`

    $(".group-tech-portable .text-box").html(html)
})








// 랜드마크 마우스오버 애니메이션

$(".sc-landmark .landmark-item").mouseenter(function(){

    let idx = Number($(this).index())+1

    console.log(idx);

    $(".sc-landmark .group-landmark").css("background","url('./asset/images/landmark-bg"+idx+".jpg') center/cover no-repeat")

});

// 랜드마크 태블릿이하 좌우 스크롤
var swiper = new Swiper(".landmark-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



// 미디어 마우스오버 좌우 애니메이션

$(".sc-media .media-item").mouseenter(function(){
    $(this).addClass("on");
    $(".sc-media .media-item").not(this).removeClass("on");
})



// footer 패밀리사이트 선택옵션 애니메이션

$(".footer .family-area button").click(function(){
    $(this).parent(".family-area").toggleClass('on');
    $(this).toggleClass('delay');
});



// 헤더 마우스오버

// $(".sc-header .service-name").mouseenter(function(){
//     $(this).siblings(".group-sub").addClass("on");
// })
// $(".sc-header .service-name").mouseout(function(){
//     $(this).siblings(".group-sub").removeClass("on");
// })

// 햄버거버튼 애니메이션


$(".sc-header .btn-hamburger").click(function(e){
    e.preventDefault();
    $(".sc-side").addClass("on");
    $(".sc-side-portable").addClass("on");
});
$(".sc-side .btn-close").click(function(e){
    e.preventDefault();
    $(".sc-side").removeClass('on');
})
$(".sc-side-portable .close-area").click(function(){
    $(".sc-side-portable").removeClass("on");
})

// 태블릿 사이즈 햄버거 버튼

$(".sc-side-portable .link-name").click(function(e){
    e.preventDefault();
    $(this).toggleClass("on");
    $(this).siblings(".link-box").toggleClass("on");

})

// 제품검색 버튼 클릭

$(".group-btn .search-area").click(function(e){
    e.preventDefault();
    $(".search-area").removeClass("on");
    setTimeout(function(){
        $(".sc-search").addClass("on");
    },500)
})

$(".sc-search .close-btn").click(function(){
    $(".sc-search").removeClass("on");
    setTimeout(function(){
        $(".search-area").addClass("on");
    },500)

})


// 탑버튼 클릭

$(".group-btn .btn-top").click(function(e){
    e.preventDefault();
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
})



// gsap 애니메이션

gsap.utils.toArray("[data-fade]").forEach(element => {
    console.log(element);
    gsap.to(element,{yPercent:20,opacity:0})
    ScrollTrigger.create({
        trigger:element,
        start:"top 80%",
        end:"bottom top",
        // markers:"true",
        onEnter:function(){
            gsap.to(element,{yPercent:0,opacity:1})

        }
    })
})

