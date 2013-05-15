YUI.add("lang/guestForm_fr", function(Y, NAME) {
  Y.Intl.add(
    "guestForm",  // associated mojit
    "fr",    // BCP 47 language tag
    // key-value pairs for this module and language
    {
    name: 'Nom',
    firstName: 'Prénom',
    address: 'Adresse',
    email: 'E-mail',
    lang: 'Tu parles',
    veget: 'Végétarien',
    needHotel: 'Besoin d\'aide pour l\'hôtel',
    hotelStart: 'Depuis',
    hotelEnd: 'Juusqu\'au',
    submit: 'Confirmer',
    thanks: 'Merci',
    updateLink: 'Mets à jour les infos'
    }
  );
}, "3.1.0", {requires: ['intl']});
