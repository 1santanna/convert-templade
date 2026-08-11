// cotações das moedas em relação ao real.
const USD = 5.11;
const EUR = 5.90;
const GBP = 6.90;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector(" main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// capturando o evento de submit do form.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    default:
      alert("Selecione uma moeda válida.");
      break;
  }
};

// função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {  
    // exibindo a cotacao da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calculando o valor total da conversão.
    let total = amount * price;

    if (isNaN(total)) {
        return alert("O valor inserido não é um número válido.");
    }

    //exibe o resultado total. 
    result.textContent = formatCurrencyBRL(total)

    // exibindo o resultado da conversão no footer.     
    footer.classList.add("show-result")


     } catch (error) {
    // remove a classe do footer caso ocorra algum erro na conversão.    
        footer.classList.remove("show-result");

        console.log(error);
        alert("Ocorreu um erro ao converter a moeda. Por favor, tente novamente.");
     }
}

// formata o valor para o padrão de moeda brasileira.
function formatCurrencyBRL(value) {
    return Number (value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}




