Template.stepOne.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

/* Template.stepOne.helpers({
  'currentBMI': function(template) {
       
      const currentWeight = $('.current_weight').val();
      const currentHeight = $('.current_height').val();
      //console.log(currentHeight);
      return parseInt(currentWeight)/parseInt(currentHeight*currentHeight);
  },
  'targetBMI': function(template) {
      const targetWeight = template.find(".target_weight").value;
      const currentHeight = template.find(".current_height").value;
      return parseInt(targetWeight)/parseInt(currentHeight*currentHeight);
  },
});
*/

Template.stepOne.events({
  'submit .formOne': function(event, template) {
    event.preventDefault();
    const currentWeight = template.find(".current_weight").value;
    const currentHeight = template.find(".current_height").value;
    const targetWeight = template.find(".target_weight").value;
    const deadLine = template.find(".deadLine").value;

    Meteor.call('InsertWeight', currentWeight, currentHeight, targetWeight, deadLine);

    const ev = event;
    ev.target.current_weight.value = '';
    ev.target.current_height.value = '';
    ev.target.target_weight.value = '';
    ev.target.deadLine.value = '';
  },
})