import { useState, useEffect } from "react";
import { fetchUsers } from "../../helpers/api";
import UserCards from "../../components/UserCards/UserCards";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  return <>{users?.length > 0 && <UserCards users={users} />}</>;
};

export default TweetsPage;
