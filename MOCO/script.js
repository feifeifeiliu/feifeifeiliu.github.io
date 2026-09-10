document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("[data-copy-target]");
  if (!button) return;

  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const text = target?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied";
      window.setTimeout(() => { button.textContent = "Copy BibTeX"; }, 1400);
    } catch {
      button.textContent = "Select to copy";
      window.setTimeout(() => { button.textContent = "Copy BibTeX"; }, 1400);
    }
  });
});
