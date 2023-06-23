import React from "react";
import SingleUserCard from "./SingleUserCard/SingleUserCard";
import { StyledUserCards } from "./UserCards.styled";

const UserCards = ({ users }) => {
  return (
    <StyledUserCards>
      {users.map(({ id, user, avatar, tweets, followers }) => (
        <SingleUserCard
          key={id}
          id={id}
          user={user}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </StyledUserCards>
  );
};

export default UserCards;
