YUI.add("lang/guestForm_en", function(Y, NAME) {
  Y.Intl.add(
    "guestForm",  // associated mojit
    "en",    // BCP 47 language tag
    // key-value pairs for this module and language
    {
    name: 'Name',
    firstName: 'First Name',
    address: 'Address',
    email: 'E-mail',
    lang: 'You speak',
    veget: 'Vegeterian',
    needHotel: 'Need help for hotel booking',
    hotelStart: 'From',
    hotelEnd: 'To',
    submit: 'Ok',
    thanks: 'Thanks',
    updateLink: 'Update your infomation'
    }
  );
}, "3.1.0", {requires: ['intl']});
