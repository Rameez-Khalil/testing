// Getting the handlers:
const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote-text");
const author = document.querySelector(".quote-author");
const twitterButton = document.querySelector(".twitter-button");
const newQuote = document.querySelector(".new-quote");

// Creating a random number function to generate a random quote

const randomNumber = () => {
  let quoteNumber = Math.floor(Math.random() * 1600);
  return quoteNumber;
};

const getQuote = async () => {
  const apiURL = "https://type.fit/api/quotes";
  try {
    const random = randomNumber();
    const response = await fetch(apiURL).then((response) => response.json());

    if (response[random]) {
      quoteText.innerText = response[Number(random)].text;
      response[random].author == null
        ? "Anonymous"
        : (author.innerText = `""${response[Number(random)].author}""`);
    }
  } catch (error) {
    console.log("Error!!", error);
  }
};

getQuote();
