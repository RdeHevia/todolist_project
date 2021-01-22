function startCounting() {
  let counter = 1;
  setInterval(function () {
    console.log(counter);
    counter += 1;
  }, 1000);
}

startCounting();

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counterId = startCounting();