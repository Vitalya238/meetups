const { Client } = require('pg');

const { Sequelize, DataTypes } = require('sequelize');

const path = require('path');


const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'vitalya',
  username: 'vitalya',
  password: '7117',
  host: 'localhost',
  port:5432,
});


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();


const Meetup = require('./meetup_model')(sequelize, DataTypes);

async function createMeetup() {
  try {
    const newMeetup = await Meetup.create({
      title: 'Tech Meetup',
      description: 'A meetup for technology enthusiasts',
      tags: ['tech', 'programming'],
      event_time: new Date('2024-06-30T18:00:00Z'),
      location: '123 Main St, City'
    });
    console.log('New meetup created:', newMeetup.toJSON());
  } catch (error) {
    console.error('Error creating meetup:', error);
  }
}
createMeetup();
async function getMeetups() {
  try {
    const meetups = await Meetup.findAll();
    console.log('All meetups:', meetups.map(meetup => meetup.toJSON()));
  } catch (error) {
    console.error('Error fetching meetups:', error);
  }
}
// getMeetups();




