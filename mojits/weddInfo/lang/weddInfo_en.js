YUI.add("lang/weddInfo_en", function(Y, NAME) {
  Y.Intl.add(
    "weddInfo",
    "en",
    {
      main: 'Love',
      venue: 'Venue',
      photos: 'Photos',
      util: 'Useful Information',
      guest: 'Guest',
      mainContentTitle: 'ApplE and Ludo',
      mainContentDate: 'June 29, 2013',
      mainContentWhat: [
        'We are happy to invite you at this date,',
        'for celebrating our wedding.'
      ],
      mainContentDetails: [
        {
          what:'3pm Ceremony', 
          where:'Wu-Tang Church'
        },
        {
          what:'6pm Banquet',
          where:'Han-Hsien International Hotel'
        }
      ],
      venueContent: [
        { where: 'Wu-Tang Church',
          what: ['Ceremony', 'Photo', 'Apero'],
          adress: 'No. 38, Mínquán 1st Rd'},
          { 
            where: 'Han-Hsien Intl Hotel', 
            what: ['Dinner'],
            adress: 'No. 33, Sìwéi 3rd Rd'
          }
      ],
      guestContentRegister: 'Please register',
      guestMailTo: 'Comments'
    }
  );
}, "0.1", {requires: ["intl"]});
