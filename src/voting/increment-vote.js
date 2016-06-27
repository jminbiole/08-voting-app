export default function addOption(existingPoll, optionIndex) {
  const collector = [];

  for (let i = 0; i < existingPoll.length; i++) {
    if (i === optionIndex) {
      collector.push({
        name: existingPoll[i].name,
        votes: existingPoll[i].votes + 1,
      });
    } else {
      collector.push(existingPoll[i]);
    }
  }

  return collector;
}
