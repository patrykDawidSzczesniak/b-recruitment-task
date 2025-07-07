function checkOrientationOnLoad() {
  const portrait = window.matchMedia("(orientation: portrait)").matches;
  return portrait;
}

function checkOrientationOnChange() {
  window
    .matchMedia("(orientation: portrait)")
    .addEventListener("change", (e) => {
      const portrait = e.matches;

      return portrait;
    });
}

export { checkOrientationOnLoad, checkOrientationOnChange };
