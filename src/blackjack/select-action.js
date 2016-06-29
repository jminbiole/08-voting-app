import shouldSplit from 'blackjack/should-split';
import shouldHit from 'blackjack/should-hit';

export default function selectAction(cardA, cardB) {
  if (shouldHit(cardA, cardB)) {
    return 'hit';
  }
   if (shouldSplit(cardA, cardB)) {
    return 'split';
}
