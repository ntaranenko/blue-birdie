import React, { useState } from "react";
import LoadMore from "../LoadMore/LoadMore";
import SingleUserCard from "./SingleUserCard/SingleUserCard";
import { StyledUserCards } from "./UserCards.styled";

const UserCards = ({ users }) => {
  const [page, setPage] = useState(1);
  const [visibleUsers, setVisibleUsers] = useState(users.slice(0, 8 * page));

  const handleLoadMore = () => {
    setPage(page + 1);
    setVisibleUsers(users.slice(0, 8 * (page + 1)));
  };

  return (
    <>
      <StyledUserCards>
        {visibleUsers.map(({ id, user, avatar, tweets, followers }) => (
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
      {visibleUsers.length < users.length && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </>
  );
};

export default UserCards;
