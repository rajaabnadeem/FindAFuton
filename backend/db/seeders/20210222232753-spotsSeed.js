'use strict';
const faker = require('faker');
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
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Cozy futon in East Village',
          body: 'Cute futon in East Village (6th St. and Avenue A) on second floor (no elevator). Dishwasher in unit. Washer & dryer in building. Street-facing w/ fire escape. Building has backyard you can use. Within minutes walking distance of restaurants, bars, and shopping.',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1540991825428-5b54b09f7338?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2097&q=80',
          photo2: 'https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80',
          photo3: 'https://images.unsplash.com/photo-1577103032015-92adcd22ce22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1660&q=80',
          photo4: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'King Futon Sky',
          body: 'With awe-inspiring views of Manhattan’s busy urban landscape, these king-bedded rooms really showcase the city’s splendor through wrap-around floor to ceiling windows.',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1576909023157-8cfea9e53818?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo2: 'https://images.unsplash.com/photo-1603704508957-a5979332404a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo3: 'https://images.unsplash.com/photo-1571037549062-9d2430443eff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1602&q=80',
          photo4: 'https://images.unsplash.com/photo-1458646502219-28381daf939b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'City Queen',
          body: 'Why We Like It: In the heart of one of the coolest spaces in the city -- SoHo, Retro-style restaurant with long, diner-style banquettes.',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1599653221053-8633633ee005?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo2: 'https://images.unsplash.com/photo-1571838475231-bb5aa087c797?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1497&q=80',
          photo3: 'https://images.unsplash.com/photo-1560993153-676ba4538402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          photo4: 'https://images.unsplash.com/photo-1553812215-d1d48c58839f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Gold Futon in Old American Style House, Near Subway',
          body: 'Private room in a beautiful house in Queens. located 5min walk from the metro J, Z Subway (24/7), around 40-45min to Downtown Manhattan (9/11 Memorial, Wall Street). 50min to times square and central park. Easy to get anywhere with public transport',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1562392008-0be8f471f4dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2161&q=80',
          photo2: 'https://images.unsplash.com/photo-1493859923015-f05bc8960fa0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80',
          photo3: 'https://images.unsplash.com/photo-1614062388233-2e45bbcce648?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo4: 'https://images.unsplash.com/photo-1577451949326-1e44d745f758?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Luxury building, balcony, gym, rooftop 3FL -#177',
          body: "Private futon in a new luxury building with a gym, lounge, two rooftops over looking manhattan, laundry and a backyard. This apartment has a private balcony. Located in Bushwick, 23 minutes to Manhattan, right near the J and Z trains.",
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1612121500007-b067f455724c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo2: 'https://images.unsplash.com/photo-1551516595-09cb9fcf8db5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80',
          photo3: 'https://images.unsplash.com/photo-1516247180036-6993a4e3f583?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          photo4: 'https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Private Couch in Brooklyn Prospect Park',
          body: 'Experience the best of Brooklyn’s creative scene just steps from this furnished apartment, fully equipped with everything you need to get settled in — all you have to bring is your suitcase! Walk outside and find yourself in the heart of Brooklyn',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1589832656712-9ff45a0db738?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo2: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo3: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80',
          photo4: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Excellent studio in Midtown Manhattan',
          body: 'Furnished studio with private bath and fully equipped kitchen in midtown. 3 blocks from Grand Central Station. 24 Hour Reception and Concierge Desk. Doorman. Laundry Room.',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1573&q=80',
          photo2: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
          photo3: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo4: 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2089&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Penthouse futon in SoHo / Greenwich Village',
          body: "This 1 bedroom apartment is at the intersection of SoHo, Greenwich Village, and the West Village. It's an X- Large 1 bedroom. Separate eat-in kitchen, hardwood floors, ample closet space, great natural light and steps away from some of the best that NYC has to offer",
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1540991825428-5b54b09f7338?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2097&q=80',
          photo2: 'https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80',
          photo3: 'https://images.unsplash.com/photo-1577103032015-92adcd22ce22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1660&q=80',
          photo4: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Flatbush Hideaway - Quiet and close to subway!',
          body: "Newly renovated, LED Lighting, smart plugs and outlets. Private entry and full bath with stall shower. Quiet and clean! The space is in the historic Flatbush section of Brooklyn and short 2 minute walk to the subway! Contact me directly if you're interested in staying more than 14 days.",
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1576909023157-8cfea9e53818?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo2: 'https://images.unsplash.com/photo-1603704508957-a5979332404a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo3: 'https://images.unsplash.com/photo-1571037549062-9d2430443eff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1602&q=80',
          photo4: 'https://images.unsplash.com/photo-1458646502219-28381daf939b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Bright Bedroom in the heart of Bushwick',
          body: 'Experience the best of Brooklyn’s creative scene just steps from this renovated, furnished apartment, fully equipped with everything you need to get settled in — all you have to bring is your suitcase! Walk outside and find yourself in the heart of Bushwick',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1599653221053-8633633ee005?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo2: 'https://images.unsplash.com/photo-1571838475231-bb5aa087c797?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1497&q=80',
          photo3: 'https://images.unsplash.com/photo-1560993153-676ba4538402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          photo4: 'https://images.unsplash.com/photo-1553812215-d1d48c58839f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Bright Junior 1 bedroom Suite in the heart of NYC',
          body: 'Furnished Junior 1 Bdr suite with private bath and fully equipped kitchen in midtown. 3 blocks from Grand Central Station. All utilities, cable, wifi, local calls, complimentary weekly linen service, toiletries, in-room coffee and tea supplies',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1562392008-0be8f471f4dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2161&q=80',
          photo2: 'https://images.unsplash.com/photo-1493859923015-f05bc8960fa0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80',
          photo3: 'https://images.unsplash.com/photo-1614062388233-2e45bbcce648?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo4: 'https://images.unsplash.com/photo-1577451949326-1e44d745f758?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Enjoy great views of the City with FREE PARKING!',
          body: 'Your room charge has been taken prior to your arrival as a deposit. A remaining balance of the taxes (NY Sales Tax: 8.875%, NY City Tax: 5.875%, Occupancy Tax: $2.00 & Javits Fee: $1.50) and facility fee ($33.85) per night will be charged on arrival',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1612121500007-b067f455724c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo2: 'https://images.unsplash.com/photo-1551516595-09cb9fcf8db5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80',
          photo3: 'https://images.unsplash.com/photo-1516247180036-6993a4e3f583?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          photo4: 'https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Uptown Chic - Hoboken',
          body: 'Easy access to NYC via bus, train, car or ferry. Large open plan studio. The location is outstanding! Situated on a sought after residential street and only a stones throw away from all the magic Hoboken has to offer.',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1589832656712-9ff45a0db738?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo2: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo3: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80',
          photo4: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: 'Amazing Modern FUTON',
          body: 'Experience the best of Brooklyn’s creative scene just steps from this renovated, furnished apartment, fully equipped with everything you need to get settled in — all you have to bring is your suitcase! Walk outside and find yourself in the heart of Bushwick',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1573&q=80',
          photo2: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
          photo3: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo4: 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2089&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: getUserId(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: '~ NEWLY RENOVATED COUCH ~ GRAND CENTRAL ~',
          body: 'Amazing studio apartment with ALL BRAND NEW FURNITURE near hot United Nations location!',
          address: faker.address.streetAddress(),
          state: faker.address.stateAbbr(),
          zipCode: faker.address.zipCode(),
          photo1: 'https://images.unsplash.com/photo-1576909023157-8cfea9e53818?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo2: 'https://images.unsplash.com/photo-1603704508957-a5979332404a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          photo3: 'https://images.unsplash.com/photo-1571037549062-9d2430443eff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1602&q=80',
          photo4: 'https://images.unsplash.com/photo-1458646502219-28381daf939b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
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
