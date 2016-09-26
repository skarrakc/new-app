Template.chooseGoal.events({
  'submit .AddGoal': function(event, template) {
    event.preventDefault();
    const texto = template.find(".my_text").value;
    Meteor.call('AddGoal', texto);

    const ev = event;
    ev.target.my_text.value = '';
  },
})