'use strict';
const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userIds = await User.findAll({
			attributes: {
				include: ['id'],
			},
		});

		function getUserId() {
			let i = Math.floor(Math.random() * userIds.length);
			return userIds[i].id;
		}

		await queryInterface.bulkInsert(
      'Spots',
      [
        { hostId: getUserId(),
          title: 'Cozy futon in East Village',
          body: 'Cute futon in East Village (6th St. and Avenue A) on second floor (no elevator). Dishwasher in unit. Washer & dryer in building. Street-facing w/ fire escape. Building has backyard you can use. Within minutes walking distance of restaurants, bars, and shopping.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'King Futon Sky',
          body: 'With awe-inspiring views of Manhattan’s busy urban landscape, these king-bedded rooms really showcase the city’s splendor through wrap-around floor to ceiling windows.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'City Queen',
          body: 'Why We Like It: In the heart of one of the coolest spaces in the city -- SoHo, Retro-style restaurant with long, diner-style banquettes.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Gold Futon in Old American Style House, Near Subway',
          body: 'Private room in a beautiful house in Queens. located 5min walk from the metro J, Z Subway (24/7), around 40-45min to Downtown Manhattan (9/11 Memorial, Wall Street). 50min to times square and central park. Easy to get anywhere with public transport',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Luxury building, balcony, gym, rooftop 3FL -#177',
          body: "Private futon in a new luxury building with a gym, lounge, two rooftops over looking manhattan, laundry and a backyard. This apartment has a private balcony. Located in Bushwick, 23 minutes to Manhattan, right near the J and Z trains.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Private Couch in Brooklyn Prospect Park',
          body: 'Experience the best of Brooklyn’s creative scene just steps from this furnished apartment, fully equipped with everything you need to get settled in — all you have to bring is your suitcase! Walk outside and find yourself in the heart of Brooklyn',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Excellent studio in Midtown Manhattan',
          body: 'Furnished studio with private bath and fully equipped kitchen in midtown. 3 blocks from Grand Central Station. 24 Hour Reception and Concierge Desk. Doorman. Laundry Room.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Penthouse futon in SoHo / Greenwich Village',
          body: "This 1 bedroom apartment is at the intersection of SoHo, Greenwich Village, and the West Village. It's an X- Large 1 bedroom. Separate eat-in kitchen, hardwood floors, ample closet space, great natural light and steps away from some of the best that NYC has to offer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Flatbush Hideaway - Quiet and close to subway!',
          body: "Newly renovated, LED Lighting, smart plugs and outlets. Private entry and full bath with stall shower. Quiet and clean! The space is in the historic Flatbush section of Brooklyn and short 2 minute walk to the subway! Contact me directly if you're interested in staying more than 14 days.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Bright Bedroom in the heart of Bushwick',
          body: 'Experience the best of Brooklyn’s creative scene just steps from this renovated, furnished apartment, fully equipped with everything you need to get settled in — all you have to bring is your suitcase! Walk outside and find yourself in the heart of Bushwick',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Bright Junior 1 bedroom Suite in the heart of NYC',
          body: 'Furnished Junior 1 Bdr suite with private bath and fully equipped kitchen in midtown. 3 blocks from Grand Central Station. All utilities, cable, wifi, local calls, complimentary weekly linen service, toiletries, in-room coffee and tea supplies',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Enjoy great views of the City with FREE PARKING!',
          body: 'Your room charge has been taken prior to your arrival as a deposit. A remaining balance of the taxes (NY Sales Tax: 8.875%, NY City Tax: 5.875%, Occupancy Tax: $2.00 & Javits Fee: $1.50) and facility fee ($33.85) per night will be charged on arrival',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Uptown Chic - Hoboken',
          body: 'Easy access to NYC via bus, train, car or ferry. Large open plan studio. The location is outstanding! Situated on a sought after residential street and only a stones throw away from all the magic Hoboken has to offer.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: 'Amazing Modern FUTON',
          body: 'Experience the best of Brooklyn’s creative scene just steps from this renovated, furnished apartment, fully equipped with everything you need to get settled in — all you have to bring is your suitcase! Walk outside and find yourself in the heart of Bushwick',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          title: '~ NEWLY RENOVATED COUCH ~ GRAND CENTRAL ~',
          body: 'Amazing studio apartment with ALL BRAND NEW FURNITURE near hot United Nations location!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
