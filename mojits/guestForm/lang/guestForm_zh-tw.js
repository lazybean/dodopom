YUI.add("lang/guestForm_zh", function(Y, NAME) {
  Y.Intl.add(
    "guestForm",  // associated mojit
    "zh",    // BCP 47 language tag
    // key-value pairs for this module and language
    {
    name: '姓',
    firstName: '名',
    address: '地址',
    email: 'E-mail',
    lang: '我說..語言',
    veget: '我吃素食餐',
    needHotel: '我需要預訂飯店',
    hotelStart: '入住時間',
    hotelEnd: '離開時間',
    submit: '確定',
    thanks: '非常感謝你!',
    updateLink: '更新資料'
    }
  );
}, "3.1.0", {requires: ['intl']});
