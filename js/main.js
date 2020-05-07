function watchInput() {
  const inputEl = document.querySelector("#input");
  const outputEl = document.querySelector("#output");
  const shyChar = "­";

  function handleInput() {
    outputEl.innerHTML = inputEl.value
      .split(shyChar)
      .join(`<span class="shy-char">${shyChar}</span>`);
  }

  inputEl.addEventListener("keyup", handleInput);

  handleInput();
}

function clipboardFeedback() {
  const clipboard = new ClipboardJS(".btn");

  clipboard.on("success", (e) => {
    console.log(e);

    console.info("Action:", e.action);
    console.info("Text:", e.text);
    console.info("Trigger:", e.trigger);

    e.clearSelection();
  });

  clipboard.on("error", (e) => {
    $(".alert").alert();
  });
}

(function () {
  watchInput();
  clipboardFeedback();
})();
