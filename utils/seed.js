const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts, getRandomFriends, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }
  // Create empty array to hold the users
  const users = [];

  // Loop 9 times -- add users to the users array
  for (let i = 0; i < 9; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    const thoughts = getRandomThoughts(9);

    const username = getRandomUsername();
    const email = `${username}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}@gmail.com`;
    const friends = getRandomFriends();

    users.push({
      username,
      email,
      friends,
      thoughts,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Create empty array to hold the thoughts
  const thoughts = [];

  // Loop 9 times -- add thoughts to the thoughts array
  for (let i = 0; i < 9; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    const username = getRandomUsername();
    const reaction = getRandomReaction();

    thoughts.push({
      username,
      reaction,
    });
  }

  // Add users to the collection and await the results
  await Thought.collection.insertMany(thoughts);
 
  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

