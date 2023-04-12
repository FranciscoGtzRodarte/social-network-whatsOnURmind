const usernames = [
  "awesome01",
  "arrenUser",
  "paconga",
  "thegreatest",
  "thegoat",
  "aronjames",
];

const userThoughts = [
  "Life is simple.",
  "I dont want to go to school today",
  "Loving the weather",
  "React is just another world of amazing",
  "Ok, im definetley in love",
  "Lets go get drinks",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () => `${getRandomArrItem(usernames)}`;

// Function to generate random assignments that we can add to student object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(userThoughts),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };
