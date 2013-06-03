YUI.add("lang/leafLetMojit_en", function(Y, NAME) {
  Y.Intl.add(
    "leafLetMojit",
    "en",
    {
      venueContent: [
        { 
          where: 'Wu-Tang Church',
          lat: '22.62008',
          lng: '120.31391',
          what: ['Ceremony', 'Photo', 'Apero'],
          adress: 'No. 38, Mínquán 1st Rd'
        },
        { 
          where: 'Han-Hsien Intl Hotel', 
          lat: '22.61976',
          lng: '120.31093',
          what: ['Dinner'],
          adress: 'No. 33, Sìwéi 3rd Rd'
        },
        {
          where: 'HSR Train Station',
          lat: '22.692586',
          lng: '120.295379'
        },
        {
          where: 'Airport',
          lat: '22.571774',
          lng: '120.34509'
        }
      ]
    }
  );
}, "0.1", {requires: ["intl"]});
