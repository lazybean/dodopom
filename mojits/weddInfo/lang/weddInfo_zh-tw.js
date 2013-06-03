YUI.add("lang/weddInfo_zh", function(Y, NAME) {
  Y.Intl.add(
    "weddInfo",
    "zh",
    {
      main: '首頁',
      venue: '婚禮',
      photos: '相片',
      util: '旅遊資訊',
      guest: '我要參加',
      mainContentTitle: '佳蓉 & Ludo',
      mainContentDate: '2013.6.29',
      mainContentWhat: [
        '邀請您到高雄見證我們的婚禮',
        '期待與您分享這份喜悅'
      ],
      mainContentDetails: [
        {
          what:'3pm 婚禮', 
          where:'武昌教會'
        },
        {
          what:'6pm 宴客',
          where:'寒軒國際大飯店'
        }
      ],
      guestContentRegister: '我要參加',
      guestMailTo: '備註@ApplE'
    }
  );
}, "0.1", {requires: ["intl"]});
