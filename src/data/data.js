const random = (min = 75, max = 100) => {
  let num = Math.random() * (max - min) + min;

  return Math.floor(num);
};

const scores = new Array(20)
  .fill(1)
  .map((_, i) => ({
    id: Date.now(),
    score: `Score of ${random()}`
  }))

console.log(scores);

module.exports = scores;
