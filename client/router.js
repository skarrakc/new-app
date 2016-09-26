FlowRouter.route('/', {
    
  subscriptions() {
    this.register('Goals', Meteor.subscribe('Goals'));
  },
  action() {
    BlazeLayout.render('bodyLayout', { main: 'chooseGoal' });
  },
});

FlowRouter.route('/loseWeight', {

    subscriptions() {
      this.register('weightCollection', Meteor.subscribe('weightCollection'));
    },
    action() {
        BlazeLayout.render('bodyLayout', { main: 'loseWeight' });
    },
});