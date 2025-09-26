const input = document.querySelector("#input-box");
const list = document.querySelector("#list");

const loadData = () => {
  list.innerHTML = "";
  fetch("http://localhost:3928/tarefas")
    .then((res) => res.json())
    .then((tarefas) => {
      tarefas.forEach((e) => {
        let li = document.createElement("li");
        li.innerHTML = e.frase;

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        list.appendChild(li);

        span.addEventListener("click", () => {
          fetch(`http://localhost:3928/tarefas/${encodeURIComponent(e.id)}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then(() => loadData()) // recarrega lista
            .catch((err) => console.log("Ocorreu um erro:", err));
        });

        li.addEventListener("click", () => {
          li.classList == "checked"
            ? li.classList.remove("checked")
            : li.classList.add("checked");
        });
      });
    })
    .catch((err) => console.log("Erro de conexão2:", err));
};

loadData();

const add = () => {
  const data = { frase: input.value };
  if (!data.frase) return;
  fetch("http://localhost:3928/tarefas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then(() => {
      input.value = "";
      loadData();
    })
    .catch((err) => console.log("Erro de conexão:", err));
};

const cu1 = () => {};
