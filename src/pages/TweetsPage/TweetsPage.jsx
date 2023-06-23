import { useState, useEffect, startTransition } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchUsers } from "../../helpers/api";
import UserCards from "../../components/UserCards/UserCards";
import { StyledBackButton } from "./TweetsPage.styled";
import { ReactComponent as BackIcon } from "../../assets/images/back.svg";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  const handleBack = (navigate) => {
    startTransition(() => {
      navigate("/");
    });
  };

  return (
    <>
      {location.pathname === "/tweets" && (
        <StyledBackButton type="button" onClick={() => handleBack(navigate)}>
          <BackIcon />
        </StyledBackButton>
      )}
      {users?.length > 0 && <UserCards users={users} />}
    </>
  );
};

export default TweetsPage;
