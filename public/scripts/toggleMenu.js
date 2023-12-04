export function toggleMenu(menuId) {
  // 모든 메뉴 숨김
  let allMenus = document.querySelectorAll(".menu-content");
  allMenus.forEach(function (menu) {
    menu.classList.remove("active");
  });

  // 클릭한 메뉴만 표시
  let selectedMenu = document.getElementById(menuId);
  selectedMenu.classList.add("active");
}