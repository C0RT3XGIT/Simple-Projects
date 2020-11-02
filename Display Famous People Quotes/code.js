let qA = [
  {
    quote:
      "A writer is someone for whom writing is more difficult than it is for other people.",
    author: "Thomas Mann",
  },
  {
    quote:
      "A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.",
    author: "G.K. Chesterton",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
];

function quotesRandomizer() {
  let rNum = Math.floor(Math.random() * qA.length);
  //alert("Random: " + rNum);
  alert(`“${qA[rNum].quote}” \n\n― ${qA[rNum].author}`);
}
