import React, { useState } from 'react';
import '../styles/App.scss';

// 팀 멤버 정보 객체 배열
const teamMembers = [
  {
    name: '김현',
    bio: '김현의 소개',
  },
  {
    name: '신동현',
    bio: '신동현의 소개',
  },
  {
    name: '윤준현',
    bio: '윤준현의 소개',
  },
  {
    name: '이민구',
    bio: '이민구의 소개',
  },
  {
    name: '홍문기',
    bio: '홍문기의 소개',
  },
];

const App = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    setSelectedMember(index);
  };

  return (
    <div className="app">
      <header>
        <h1>form 미쳤다</h1>
        <p>안녕하세요! 저희는 폼이 미친 사람들 입니다.</p>
      </header>
      <section>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index} onClick={() => handleMemberClick(index)}>
              {member.name}
            </li>
          ))}
        </ul>
      </section>
      {selectedMember !== null && (
        <section className="member-details">
          <h2>{teamMembers[selectedMember].name}</h2>
          <p>{teamMembers[selectedMember].bio}</p>
        </section>
      )}
    </div>
  );
};

export default App;
