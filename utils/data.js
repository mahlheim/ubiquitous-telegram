const usernames = [
    'monkey_d_luffy',
    'roronoa_zoro',
    'portgas_d_ace',
    'nami',
    'usopp',
    'chopper',
    'sanji',
    'robin',
    'franky'
  ];

  const thoughts = [
    'I love food!',
    'I am a Three Sword Style expert!',
    'Fire fist!',
    'I am the greatest navigator!',
    'I am Captain Usopp!',
    'I am an excellent docotor!',
    'I will find the All Blue!',
    'I want to live!',
    'I need a cola refill!'
  ]
  
  const reactions = [
    'Super!',
    'Kaizuku ou ni ore wa naru!',
    'Zzzzz',
    'Anyone for a banana creme gator pie?',
    'I charge interest!',
    'Wow!',
    'Nice!',
    'Well done!',
    'Ow!',
  ];
  
  // get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // get a random username
  const getRandomUsername = () =>
    `${getRandomArrItem(usernames)}`;

  // get random friend
  const getRandomFriends = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        friendOne: getRandomArrItem(usernames),
        friendTwo: getRandomArrItem(usernames),
      });
    }
    return results;
  };
  
  // Function to generate random assignments that we can add to student object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thought: getRandomArrItem(thoughts),
      });
    }
    return results;
  };
  
  // Function to generate random assignments that we can add to student object.
  const getRandomReaction = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reaction: getRandomArrItem(reactions),
      });
    }
    return results;
  };

  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomThoughts, getRandomFriends, getRandomReaction };
  