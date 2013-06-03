YUI.add("lang/weddInfo_fr", function(Y, NAME) {
  Y.Intl.add(
    "weddInfo",
    "fr",
    {
      main: 'Amour',
      venue: 'Où',
      photos: 'Photos',
      util: 'Info',
      guest: 'Qui',
      mainContentTitle: 'PommE et Lulu',
      mainContentDate: '29 Juin 2013',
      mainContentWhat: [
      'Nous avons la grande joie de vous inviter',
      'pour célébrer avec nous notre mariage.'
      ],
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
      guestContentRegister: 'Enregistrez-vous, s\'il vous plaît',
      guestMailTo: 'Comments'
    }
  );
}, "0.1", {requires: ["intl"]});
