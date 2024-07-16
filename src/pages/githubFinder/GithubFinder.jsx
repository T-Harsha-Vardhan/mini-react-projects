import { useEffect, useState } from "react";
import "./github-finder.css";
import moment from "moment";
import { FaUser } from "react-icons/fa";

const GithubFinder = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputVal(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setUsername(inputVal);
  };

  useEffect(() => {
    if (username) {
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(null);
          const res = await fetch(`https://api.github.com/users/${username}`);
          const data = await res.json();
          setUserData(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [username]);

  return (
    <>
      <div id="github-finder">
        <div className="github-wrapper">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              <div className="github-input">
                <input
                  type="text"
                  id="search"
                  name="search"
                  onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
              </div>
              <div className="data-container">
                <div className="img">
                  {userData ? (
                    <img src={userData?.avatar_url} alt="" />
                  ) : (
                    <FaUser />
                  )}
                  <div>
                    <a href={userData?.html_url} target="_blank">
                      {userData?.login}
                    </a>
                    <p>
                      {userData
                        ? moment(userData?.created_at).format("LL")
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <span>Public Repos:</span>{" "}
                    <span>{userData?.public_repos}</span>
                  </p>
                  <p>
                    <span>Followers:</span> <span>{userData?.followers}</span>
                  </p>
                  <p>
                    <span>Following:</span> <span>{userData?.following}</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GithubFinder;
