
//either set root for blaze or set root for framework7
BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    action: function (params, queryParams) {
        BlazeLayout.render('MainLayout', { main: 'Page1' });
    }
});

FlowRouter.route('/page2', {
    action: function (params, queryParams) {
        BlazeLayout.render('MainLayout', { main: 'Page2' });
    }
})