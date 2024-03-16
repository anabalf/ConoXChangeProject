const hbs = require('hbs');

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper('ifEq', function (category1, category2, options) {
    if (category1 === category2) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

hbs.registerHelper("categoryImage", function(category) {
    switch(category) {
        case "Crafts":
            return "/img/icons/Crafts.png";
        case  "Cooking":
            return "/img/icons/Cooking.png";
        case "Gardening and Horticulture":
            return "/img/icons/Gardening and Horticulture.png";
        case "Everyday Life Skills" :
            return  "/img/icons/Everyday Life Skills.png";
        case "Music":
            return "/img/icons/Music.png";
        case "Sports":
            return "/img/icons/Sports.png";
        case "Technology":
            return "/img/icons/Technology.png";
        case "Languages and Culture":
            return "/img/icons/Languages and Culture";
        case "Others":
            return "/img/icons/Others.png"        
    }
})

