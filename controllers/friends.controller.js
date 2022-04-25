function getFriends(req, res, db) {
  res.json(db);
}

function friendsHandler(req, res, friends) {
  if (!req.body.name) {
    return res.status(400).json();
  }

  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };

  friends.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res, friends) {
  res.json(friends);
}

function getFriendId(req, res, friends) {
  const friendId = req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend not found",
    });
  }
}

module.exports = {
  getFriends: getFriends,
  friendsHandler: friendsHandler,
  getFriendId: getFriendId,
};
