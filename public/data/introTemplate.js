// 팀원고 논의하지 않은 모듈 작성

/**
 * 각 대입에 맞춰서 data 전용, html 템플릿을 리턴합니다.
 * 
 * @param {string} imageSrc 
 * @param {string} githubUrl 
 * @param {string} introduceYourSelf : html작성 방식처럼 작성하여도 좋습니다.
 * @returns html 템플릿이 작성됩니다.
 */
export default function introTemplate(imageSrc,githubUrl,introduceYourSelf ){
  return '`'+`<div class="profile">
    <img src="${imageSrc}" alt="프로필 사진"> 
    <h3>김현</h3>
    <p>GitHub : <a href="${githubUrl}">${githubUrl}</a>
    </p>
  </div>
  <div class="about">
    <h3>소개</h3>
    <p>
      ${introduceYourSelf}
    </p>
  </div>`+'`'
}


