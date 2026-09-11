function getChaseVerdict(target, scored, ballsLeft) {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) return "Won";
  if (ballsLeft <= 0) return "Lost";

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let result;
  if (requiredRate <= 6) {
    result = "Comfortable";
  } else if (requiredRate <= 12) {
    result = "Tough";
  } else {
    result = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${result}`;
}

console.log(getChaseVerdict(200, 180, 5));
console.log(getChaseVerdict(200, 190, 0));
