

Template.MainLayout.onRendered(() => {
  // Initialize app
  let myApp = new Framework7({
    router: false, // prevent framework 7 to override flow router link
  });

  // // If we need to use custom DOM library, let's save it to $$ variable:
  let $$ = Dom7;

});
