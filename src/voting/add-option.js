export default function addOption(existingPoll, optionName) {
  return [...existingPoll, { name: optionName, votes: 0 }];
}
