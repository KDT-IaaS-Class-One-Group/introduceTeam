import React from 'react';

interface MenuProps {
  teamMembers: { name: string; bio: string }[];
  onSelectMember: (index: number) => void;
}

const Menu: React.FC<MenuProps> = ({ teamMembers, onSelectMember }) => (
  <section className="menu">
    <ul>
      {teamMembers.map((member, index) => (
        <li key={index} onClick={() => onSelectMember(index)}>
          {member.name}
        </li>
      ))}
    </ul>
  </section>
);

export default Menu;
