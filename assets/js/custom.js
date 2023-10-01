const modalButtonEl = document.getElementById("p_modal_button3");
const containerElCatch = document.querySelector(".js-content1");
const buttonEl = document.getElementById("js-button-actComment");
const inputEl = document.getElementById("js-input-comment");
const containerEl = document.getElementById("js-container");

const dataAnswer = {};

buttonEl.addEventListener("click", onSubmit);
inputEl.addEventListener("input", activateButton);
containerElCatch.addEventListener("click", onData);
modalButtonEl.addEventListener("click", onLogger);

function activateButton() {
  const valueComment = inputEl.value.trim();
  if (valueComment !== "") {
    buttonEl.removeAttribute("disabled");
  } else {
    buttonEl.setAttribute("disabled", "true");
  }
}

function onSubmit() {
  const valueComment = inputEl.value.trim();
  containerEl.insertAdjacentHTML(
    "afterend",
    `<div class="comments" id="comment0" style="display: block">
      <div class="comment-content">
        <p class="name">
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">Anonim</font>
          </font>
        </p>
        <p>
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">${valueComment}</font>
          </font>
        </p>
      </div>
    </div>`
  );
  inputEl.value = "";
  activateButton();
}

function onData(e) {
  const question = e.target.previousSibling.parentElement.children[0].outerText;
  const valueQuestion = e.target.textContent.trim();

  dataAnswer[question] = valueQuestion;
}

function onLogger() {
  modalButtonEl.removeAttribute("href");
  console.log(dataAnswer);
}
