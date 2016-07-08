import calculatePercent from 'voting/calculate-percent';
import totalVotes from 'voting/total-votes';
<<<<<<< HEAD
=======

export default function percentVotes(options, index) {
>>>>>>> af7f43f835ee51481e713ca438943e23439138c8

export default function percentVotes(options, index) {
  console.log(totalVotes(options));
  return calculatePercent(options[index].votes, totalVotes(options));
}
