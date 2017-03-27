(function(app) {

  var Component = ng.core.Component
  
  app.AppComponent = Component({
    selector: 'my-app',
    template: '<h1>Random Quote</h1>' + '<random-quote></random-quote>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, RandomQuoteComponent],
    providers: [QuoteService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });
  
})(window.app || (window.app = {}));
