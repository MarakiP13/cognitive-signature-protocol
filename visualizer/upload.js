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

  if (!file.type.includes("text") && !file.name.endsWith(".md")) {
    alert("Please upload a text-based LLM export.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    handleLLMInput(text, file.name);
  };
  reader.readAsText(file);
});
