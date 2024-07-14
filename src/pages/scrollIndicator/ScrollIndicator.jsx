/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import "./scroll-indicator.css";

const url = "https://dummyjson.com/users?limit=0";

const ScrollIndicator = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(url);
  }, []);

  useEffect(() => {
    const handleScrollPercentage = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <div id="scroll-indicator">
      {error && <div>Error! {error}</div>}
      {loading ? (
        <div>Loading data! Please wait</div>
      ) : (
        <>
          <div
            style={{
              width: `${scrollPercentage}%`,
            }}
            className="progress-bar"
          ></div>
          <div className="users">
            {users.map((user) => (
              <p key={user.id}>{user.email}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ScrollIndicator;
