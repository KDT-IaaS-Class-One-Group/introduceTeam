import React from 'react';
import '../styles/App.scss';

const App = () => {
  const teamName = 'form 미쳤다';
  const bio = '안녕하세요! 저희는 폼이 미친 사람들 입니다.';
  const teamMemberName = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Webpack', 'SCSS'];
  const projects = [
    { title: '프로젝트 1', description: '프로젝트 1에 대한 간단한 설명' },
    // 다른 프로젝트들 추가
  ];

  return (
    <div className="app">
      <header>
        <h1>{teamName}</h1>
        <p>{bio}</p>
      </header>
      <section>
        <h2>팀 구성 인원</h2>
        <ul>
          {teamMemberName.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>프로젝트</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;