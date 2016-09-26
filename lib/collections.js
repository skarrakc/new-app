Goals = new Mongo.Collection('goals');
weightCollection = new Mongo.Collection('weightCollection');

const Schemas = {};

Schemas.Goals = new SimpleSchema({
  goalName: { type: String },
  owner: { type: String },
  createdAt: { type: String },
  status: { type: String },
});
Goals.attachSchema(Schemas.Goals);

Schemas.weightCollection = new SimpleSchema({
  currentWeight: { type: String },
  currentHeight: { type: String },
  targetWeight: { type: String },
  deadLine: { type: String },
});
weightCollection.attachSchema(Schemas.weightCollection);
