// //* 컴포넌트
import { introduceComponent } from "./introduceComponent.js";

// //* 데이터
import { introduceData } from "../data/introduce.js"

export function onMenuClick(hash) {
  // 각 메뉴 항목을 클릭할 때 호출되는 함수
  // hash에 따라 내용을 동적으로 변경할 수 있습니다.
  // 여기에서는 단순히 콘솔에 로그를 출력하는 예시를 작성했습니다.
  console.log(`Menu item clicked: ${hash}`);

  const container = document.getElementById('root')
  const introducePersonData = introduceData[`${hash}`]

  const introduceVirtualDom = introduceComponent(introducePersonData)
  container.appendChild(render(introduceVirtualDom))
}