
//either set root for blaze or set root for framework7
// BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    name: 'page1',
    action: function (params, queryParams) {
        // BlazeLayout.render('MainLayout', { main: 'Page1' });
         FlowTransition.flow({body: "Page1"});
    }
});

FlowRouter.route('/page2', {
     name: 'page2',
    action: function (params, queryParams) {
        // BlazeLayout.render('MainLayout', { main: 'Page2' });
          FlowTransition.flow({body: "Page2"});
    }
})

FlowTransition.addTransition({
  section: 'body',
  from: 'page1',
  to: 'page2',
  txFull: 'left' // direction of motion, content will be moving left
});


FlowTransition.addTransition({
  section: 'body',
  from: 'page2',
  to: 'page1',
  txFull: 'right' // direction of motion, content will be moving right
});