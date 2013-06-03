/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('guestFormBinderUpdateForm', function(Y, NAME) {
  Y.namespace('mojito.binders')[NAME] = {
    init: function(mojitProxy) {
      this.mojitProxy = mojitProxy;
    },

    bind: function(node) {
      var me = this,
      timeInputs = node.all('input.time');
      this.node = node;

      timeInputs.each(function(input ) {
        var popupcalendar = new Y.PopupCalendar({
          // Popup Calendar config properties
          // input: the text input that will trigger 
          // the calendar to show
          input: input,

          // focus the calendar on input focus for 
          // keyboard control (default is false)
          autoFocusOnFieldFocus: false,

          // depending on the browser you may  
          // need to have all tabindex's defined on
          // inputs, you can use this attribute to do
            // it so you don't have to (default is false);
          // doesn't specify the tabindex then this is required
          autoTabIndexFormElements: false, 

          // Calendar config properties
          width:'400px',
          showPrevMonth: true,
          showNextMonth: true,
          date: new Date(2013, 5, 1),
 align: {
       node: input,
               points: [Y.WidgetPositionAlign.TR, Y.WidgetPositionAlign.TL]
                   }
        });

        // The popup calendar makes no assumptions as to 
        // what you want to do with the selected date
        // so it is up to you to do something with the emitted event.
        popupcalendar.on('dateSelected', function(e) { 
          //var d = Y.Date.format(e.newSelection[0], {format:"%x"});
          var d =e.newSelection[0];
          popupcalendar.get('input').set('value', d);
        });
      });

    }
  };
}, '0.0.1', {requires: ['datatype-date', 'gallery-popup-calendar', 'mojito-client']});
