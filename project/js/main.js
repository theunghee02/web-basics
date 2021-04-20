// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById("btnOpen")
// 닫는 바 아이콘 선택자
const menuCloseEl = document.getElementById("btnClose")
// 사이드 메뉴 선택자
const menuNavEl = document.getElementById("navMenu")

// addEventLister 클릭 반응
menuOpenEl.addEventListener("click", function(){
    menuOpenEl.style.display = 'none'
    menuCloseEl.style.display = 'block'
    menuNavEl.style.transform = 'block'
})

menuCloseEl.addEventListener("click", function(){
    menuCloseEl.style.display = 'none'
    menuOpenEl.style.display = 'block'
    menuNavEl.style.transform = 'none'
})

