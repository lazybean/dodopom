YUI.add("lang/leafLetMojit_zh", function(Y, NAME) {
  Y.Intl.add(
    "leafLetMojit",
    "zh",
    {
      venueContent: [
        { where: '武昌教會 1F',
          lat: '22.62008',
          lng: '120.31391',
          what: ['婚禮', '團體照', '下午茶'],
          adress: '民權一路38號(近四維三路口)'
        },
        { 
          where: '寒軒大飯店 6F', 
          lat: '22.61976',
          lng: '120.31093',
          what: ['宴客'],
          adress: '四維三路33號(市政府斜對面)'
        },
        {
          where: '左營高鐵站',
          lat: '22.6878',
          lng: '120.3078'
        },
        {
          where: '小港機場',
          lat: '22.571774',
          lng: '120.34509'
        }
      ]
    }
  );
}, "0.1", {requires: ["intl"]});
