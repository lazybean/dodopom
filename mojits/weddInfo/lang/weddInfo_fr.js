YUI.add("lang/weddInfo_fr", function(Y, NAME) {
  Y.Intl.add(
    "weddInfo",
    "fr",
    {
      main: 'Amour',
      venue: 'Où',
      photos: 'Photos',
      util: 'Info',
      mainContentTitle: 'PommE et Lulu',
      mainContentDate: '29 Juin 2013',
      mainContentWhat: 'Nous avons la grande joie de vous inviter pour célébrer avec nous notre mariage.',
      mainContentDetails: [
        {
          what:'3pm Cérémonie', 
          where:'Eglise Wu-Tang'
        },
        {
          what:'6pm Banquet',
          where:'Hôtel Han-Hsien International'
        }
      ],
      venueContent: [
        { where: 'Eglise Wu-Tang',
          what: ['Cérémonie', 'Photo', 'Apéro'],
          adress: 'No. 38, Mínquán 1st Rd'},
          { 
            where: 'Han-Hsien Intl Hotel', 
            what: ['Festin'],
            adress: 'No. 33, Sìwéi 3rd Rd'
          }
      ]
    }
  );
}, "0.1", {requires: ["intl"]});
