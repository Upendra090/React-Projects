const FriendInput = ({ listOfFriends, handleFriendInput, removeInput }) => {
  return (
    <>
      {listOfFriends.map((friend, i) => {
        return (
          <div key={i} className="el-some">
            <input
              className="el-friend"
              placeholder="Enter your friend"
              type="text"
              name="friends"
              required
              value={friend}
              onChange={(e) => handleFriendInput(e, i)}
            />
            {listOfFriends.length !== 1 && (
              <img
                src="/cancel.png"
                alt="Cancel mark"
                className="el-cancel"
                onClick={() => removeInput(i)}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default FriendInput;
