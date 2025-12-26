const dropzone = document.getElementById("dropzone");

dropzone.addEventListener("dragover", e => {
  e.preventDefault();
  dropzone.classList.add("dragover");
});

dropzone.addEventListener("dragleave", () => {
  dropzone.classList.remove("dragover");
});

dropzone.addEventListener("drop", e => {
  e.preventDefault();
  dropzone.classList.remove("dragover");

  const file = e.dataTransfer.files[0];
  if (!file) return;

const name = file.name.toLowerCase();

const isAllowed =
  name.endsWith(".txt") ||
  name.endsWith(".md") ||
  name.endsWith(".json") ||
  file.type.startsWith("text/") ||
  file.type === "application/json";

if (!isAllowed) {
  alert("Please upload a .txt, .md, or .json LLM export.");
  return;
}


  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    handleLLMInput(text, file.name);
  };
  reader.readAsText(file);
});
