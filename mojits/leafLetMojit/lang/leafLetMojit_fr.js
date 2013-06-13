YUI.add("lang/leafLetMojit_fr", function(Y, NAME) {
  Y.Intl.add(
    "leafLetMojit",
    "fr",
    {
      venueContent: [
        { where: 'Eglise Wu-Tang',
          lat: '22.62008',
          lng: '120.31391',
          what: ['Cérémonie', 'Photo', 'Apéro'],
          adress: 'No. 38, Mínquán 1st Rd'
        },
        { 
          where: 'Han-Hsien Intl Hotel', 
          lat: '22.61976',
          lng: '120.31093',
          what: ['Festin'],
          adress: 'No. 33, Sìwéi 3rd Rd'
        },
        {
          where: 'Gare Train HSR',
          lat: '22.6878',
          lng: '120.3078'
        },
        {
          where: 'Aéroport',
          lat: '22.571774',
          lng: '120.34509'
        }
      ]
    }
  );
}, "0.1", {requires: ["intl"]});
