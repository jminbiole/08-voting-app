import cardValue from 'blackjack/card-value';
import cardSum from 'blackjack/card-sum';
import shouldSplit from 'blackjack/should-split';

export default function shouldHit(cardA, cardB) {
  if (cardSum(cardValue(cardA), cardValue(cardB)) < 17 && (!shouldSplit(cardA, cardB)))
  {
    return true;
  }
  else {return false;}
}



// 16
// 22
// 18
// 21
