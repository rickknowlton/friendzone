const friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var userScores = userData.scores
        var newFriendName = "";
        var newFriendImage = "";
        var totalDiff = 51;

        for (i in friends) {
            var diff = 0;
            for (j in userScores) {
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            }
            if (diff < totalDiff) {
                totalDiff = diff;
                newFriendName = friends[i].name;
                newFriendImage = friends[i].photo;
            }
        }

        friends.push(req.body);
        res.json({status: 'OK', newFriendName: newFriendName, newFriendImage: newFriendImage});
        
    });
}