const notes = [
  {
    title: "First note",
    body: "Tekst oko necega",
  },
  {
    title: "Second note",
    body: "Tekst oko necega drugi deo",
  },
  {
    title: "Third note",
    body: "Tekst oko necega treci deo",
  },
];

const filters = {
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("button").addEventListener("click", function (e) {
  e.target.textContent = "Clicked button";
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#name-form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target.elements.firstName.value);
  e.target.elements.firstName.value = "";
});
