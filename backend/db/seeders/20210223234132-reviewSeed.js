'use strict';
const { User, Spot } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const authorIds = await User.findAll({
			attributes: {
				include: ['id'],
			},
		});

		function getAuthorId() {
			let i = Math.floor(Math.random() * authorIds.length);
			return authorIds[i].id;
		}

    const spotIds = await Spot.findAll({
      attributes: {
        include: ['id']
      }
    })

    function getSpotId() {
      let i = Math.floor(Math.random() * spotIds.length);
			return spotIds[i].id;
    }
    await queryInterface.bulkInsert(
      'Reviews',
      [
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Great space, even better views, but small rooms. Well worth the money though. You will definitely enjoy your stay here',
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'This place is amazing, a bit small but for two people is enjoyable & enough! Highly recommended for anyone looking to stay above the clouds',
          rating: 4.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'AMAZING place! Definitely great price for the experience and we loved every minute. We will be back',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'the room has great views and for the price is great',
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'It was fun and I would do it again',
          rating: 2.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Room and views is absolutely stunning.',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Great place to stay with an ever better view!!! Woke up early just to watch the sunrise!!',
          rating: 3.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'If you enjoy the New York Skyline. This hotel is a must stay!!! I can now say this is checked off my bucket list!!!! Will definitely book again.',
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'I never leave reviews but this place is worth dropping one amazing views perfect for a couple would recommend to anyone',
          rating: 4.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: "Space is exactly as pictured and it is picture perfect, as the views are better than anything on the TV. It's the feeling of staying in a NYC highrise mini studio at a great cost. We will definitely be returning and returning soon.",
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Great Place !',
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'The view was beautiful. Room was smaller than an average hotel room but the big windows made the space seem bigger. Lots of natural light, clean, and comfortable. Definitely would stay here again.',
          rating: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Nice view',
          rating: 1.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'This was a beautiful place to stay in & the view was just amazing! It was very clean and the location was perfect for getting food or exploring around :)',
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Loved our stay. View was spectacular! Location amazing!',
          rating: 4.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'The hotel was as expected, great place to stay. Room service was horrible',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'This place is amazing. The views are amazing. Loved it for my staycation',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Lovely view of nyc! Visit the rooftop as well and empire state building',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Small but perfect for a couples getaway',
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Worth the say Well definitely recommend it to all the people I know',
          rating: 4.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Stay was amazing !',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Amazing views. I loved it. Going to sleep and waking up to that view was amazing.',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { authorId: getAuthorId(),
          spotId: getSpotId(),
          body: 'Beautiful views! Such a great experience to sleep with the skyscrapers but the room was much smaller than expected',
          rating: 4.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
