import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IUsers } from "./interface";
import { incrementByAmount } from "./components/redux/counter";
import NavBar from "./components/navbar";
import RegistPage from "./components/regist-page";
import UsersDisplay from "./components/users-display";
import usersUrl from "./api/api-instance";

function App() {
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [users, setUsers] = useState<IUsers[]>([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const { data } = await usersUrl.get("users");
    setUsers(data);

    if (!isFetched) {
      dispatch(incrementByAmount(data.length));
      setIsFetched(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [users]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<UsersDisplay users={users} />} />
        <Route path="/regist-page" element={<RegistPage />} />
      </Routes>
    </>
  );
}

export default App;
