// 추후 사용하면 좋을 것 같은 로직
// 팀원과 논의하지 않은 모듈 작성


/**
 * 각 대입에 맞춰서 data 전용, html 템플릿을 리턴합니다.
 * 
 * @param {string} teamMember : 맴버 자신 이름이 들어갑니다.
 * @param {string} imageUrl : git 아바타 
 * @param {string} githubUrl : git 주소
 * @param {string} introduceYourSelf : p태그 안에 작성됩니다.html작성 방식처럼 작성하여도 좋습니다.
 * @returns html 템플릿이 작성됩니다.
 */
export default function introTemplate(teamMember,imageUrl,githubUrl,introduceYourSelf ){
  return '`'+`<div class="profile">
    <img src="${imageUrl}" alt="프로필 사진"> 
    <h3>${teamMember}</h3>
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


