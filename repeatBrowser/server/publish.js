Meteor.publish('datasets', function (userId) {
    return Datasets.find({
        userId: userId
    });
});