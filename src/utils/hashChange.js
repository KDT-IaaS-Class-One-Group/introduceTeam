window.addEventListener("hashchange", () => {
  const intro = document.getElementById("intro");

  const hash = window.location.hash.substr(1);

  switch (hash) {
    case "김현":
      contentDiv.innerHTML = component("hi", { style: "color:blue;" }, ["This is Page 1"]);
      break;
    case "신동현":
      contentDiv.innerHTML = component("div", { style: "background-color:cadetblue;" }, [component("h1", {}, ["This is Page 2"])]);
      break;
    case "윤준현":
      contentDiv.innerHTML = component("div", { style: "display: flex; justify-content:center; color: #ff2222;" }, [component("h1", {}, ["This is Page 3"])]);
      break;
    case "이민구":
      contentDiv.innerHTML = component("div", { style: "display: flex; justify-content:center; color: #333;" }, [component("h1", {}, "This is Page 4")]);
      break;
    case "홍문기":
      contentDiv.innerHTML = component("div", { style: "display: flex; justify-content:center; color: #333;" }, [component("h1", {}, "This is Page 4")]);
      break;
    default: // 조건이 모두다 부합하지 않을때, 즉 false 일때 default가 실행된다. 최초 접속에는 hash가 없기 때문에 default가 실행된다.
      contentDiv.innerHTML = component("h1", {}, ["반갑습니다. 접속할 때 보이는 페이지(처럼보이는) element입니다. "])
  }

  // 초기 로딩을 위한 코드
  window.dispatchEvent(new Event("hashchange"));
});