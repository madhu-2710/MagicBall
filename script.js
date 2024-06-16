const options = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];
const container = document.getElementById("mg__container");
const responses = document.getElementById("mg__responses");
container.addEventListener("click", function () {
  const index = Math.floor(Math.random() * 20);
  const message = options[index];
  container.className = "magicball__outer animate";
  setTimeout(() => {
    responses.textContent = message;
    responses.style.fontSize = "1.1rem";
    container.className = "magicball__outer";
  }, 3000);
});
