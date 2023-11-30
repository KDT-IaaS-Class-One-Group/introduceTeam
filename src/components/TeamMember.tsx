import React from 'react';

interface TeamMemberProps {
  name: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, bio }) => (
  <div className="member-details">
    <h2>{name}</h2>
    <p>{bio}</p>
  </div>
);

export default TeamMember;
