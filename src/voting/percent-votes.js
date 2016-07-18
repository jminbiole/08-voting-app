import calculatePercent from 'voting/calculate-percent';
import totalVotes from 'voting/total-votes';

export default function percentVotes(options, index) {
  console.log(totalVotes(options));
  return calculatePercent(options[index].votes, totalVotes(options));
}
