import { useEffect, useRef, useState } from "react";
import "./App.css";
import Pill from "./Pill";

function App() {
  const [searchTerm, setsearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selectedUser, setselectedUser] = useState([]);
  const [selectedUserSet, setselectedUserSet] = useState(new Set());
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUser.length > 0
    ) {
      const lastUser = selectedUser[selectedUser.length - 1];
      handleRemoveUser(lastUser);
      setSuggestion([]);
    } else if (e.keyCode === 40 && suggestion?.users.length > 0) {
      e.preventDefault();
      setActive((prev) =>
        prev < suggestion.users.length - 1 ? prev + 1 : prev
      );
    } else if (e.keyCode === 38 && suggestion?.users.length > 0) {
      e.preventDefault();
      setActive((prev) => (prev > 1 ? prev - 1 : prev));
    } else if (
      e.key === "Enter" &&
      active >= 0 &&
      active < suggestion.users.length
    ) {
      handleSelectUser(suggestion.users[active]);
    }
  };

  const handleSelectUser = (user) => {
    setselectedUser([...selectedUser, user]);
    setselectedUserSet(new Set([...selectedUserSet, user.email]));
    setsearchTerm("");
    setSuggestion([]);
    inputRef.current.focus();
  };

  useEffect(() => {
    setActive(0);
    const fetchUser = () => {
      if (searchTerm.trim() === "") {
        setSuggestion([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSuggestion(data))
        .catch((err) => {
          console.error(err);
        });
    };
    fetchUser();
  }, [searchTerm]);
  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUser.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setselectedUser(updatedUsers);
    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setselectedUserSet(updatedEmails);
  };
  // https://dummyjson.com/users/search?q=John
  return (
    <div className="usersearch">
      <div className="userSearchInput">
        {selectedUser.map((d) => {
          return (
            <Pill
              key={d.email}
              img={d.image}
              name={`${d.firstName}${d.lastName}`}
              onClick={() => {
                handleRemoveUser(d);
              }}
            />
          );
        })}
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Seach User here..."
            value={searchTerm}
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <ul className="suggestionList">
            {suggestion?.users?.map((d, i) => {
              return selectedUserSet.has(d.email) ? (
                <></>
              ) : (
                <li
                  className={i === active ? "active" : ""}
                  key={d.email}
                  onClick={() => {
                    handleSelectUser(d);
                  }}
                >
                  <img src={d.image} alt={`${d.firstName} ${d.lastName}`} />
                  <span>{`${d.firstName} ${d.lastName}`}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
