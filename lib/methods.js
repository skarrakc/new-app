Meteor.methods({

  AddGoal(text) {
    check(text, String);
    const uniqueGoal = Goals.find({ $and:
        [{ username: Meteor.user().username },
          { goalName: text }] }).count();
    if (uniqueGoal === 0) {
      Goals.insert({ goalName: text, owner: Meteor.user().username,
				createdAt: Date(), status: 'active' },
        err => { if (err) throw new Meteor.Error(`${err}`); });
    }
  },

  InsertWeight(currentWeight, currentHeight, targetWeight, deadLine) {
    check(currentWeight, String);
    check(currentHeight, String);
    check(targetWeight, String);
    check(deadLine, String);

    weightCollection.insert({ 
        currentWeight, 
        currentHeight, 
        targetWeight, 
        deadLine
    });
  },   

});