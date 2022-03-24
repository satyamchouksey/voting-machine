class contestant {
  constructor(name) {
    this.name = name;
    this.votes = 0;
  }
  getVotes() {
    return this.votes;
  }
  updateVotes() {
    this.votes += 1;
  }
}
class voting {
  constructor(contestant1, contestant2) {
    this.contestant1 = contestant1;
    this.contestant2 = contestant2;
  }
  totalVotes() {
    return this.contestant1.votes + this.contestant2.votes;
  }
  calculateBar1Share() {
    return (this.contestant1.votes / this.totalVotes()) * 100;
  }
  calculateBar2Share() {
    return (this.contestant2.votes / this.totalVotes()) * 100;
  }
}

const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const barContainer = document.querySelectorAll(".bar-container");

const contestant1 = new contestant(
  document.getElementById("name1").textContent
);
const contestant2 = new contestant(
  document.getElementById("name2").textContent
);
const results = new voting(contestant1, contestant2);
const finalResult = document.getElementById("final-result");

barContainer.forEach((bar, index) => {
  bar.addEventListener("click", () => {
    const contestantName = index === 0 ? contestant1 : contestant2;
    contestantName.updateVotes();
    const voteShareBar1 = `${results.calculateBar1Share().toFixed(1)}%`;
    const voteShareBar2 = `${results.calculateBar2Share().toFixed(1)}%`;
    bar1.textContent = voteShareBar1;
    bar2.textContent = voteShareBar2;
    bar1.style.width = voteShareBar1;
    bar2.style.width = voteShareBar2;
    finalResult.textContent = `Current Winner is ${
      results?.calculateBar1Share() > results?.calculateBar2Share()
        ? contestant1.name
        : contestant2.name
    }`;
  });
});
