import React, { useState } from 'react';
import '../styles/index.scss';

function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { name: 'Alice', info: 'Lorem ipsum...' },
    { name: 'Bob', info: 'Dolor sit amet...' },
    // ...기타 팀원 정보
  ];

  return React.createElement('div', { className: 'team-page' },
    React.createElement('h1', {}, '팀 소개 페이지'),
    React.createElement('p', {}, 'Lorem ipsum...'),
    React.createElement(TeamMemberList, { members, setSelectedMember }),
    selectedMember && React.createElement(MemberDetail, { member: selectedMember })
  );
}

function TeamMemberList({ members, setSelectedMember }) {
  return React.createElement('ul', { className: 'member-list' },
    members.map(member =>
      React.createElement('li', {
        key: member.name,
        onClick: () => setSelectedMember(member)
      }, member.name)
    )
  );
}

function MemberDetail({ member }) {
  return React.createElement('div', { className: 'member-detail' },
    React.createElement('h2', {}, member.name),
    React.createElement('p', {}, member.info)
  );
}

export default TeamPage;
