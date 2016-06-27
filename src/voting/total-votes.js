export default function totalVotes(options) {
  return options.reduce((sum, { votes }) => sum + votes, 0);
}
