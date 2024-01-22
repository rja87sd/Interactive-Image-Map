"use strict";

document.querySelectorAll("area").forEach((area) => {
  area.addEventListener("mouseenter", () => {
    const coords = area.coords.split(",").map((coord) => parseInt(coord, 10));
    const shape = area.getAttribute("shape");
    const highlightDiv = document.createElement("div");

    highlightDiv.className = "highlight-area";

    if (shape === "rect") {
      const [left, top, right, bottom] = coords;
      highlightDiv.style.left = `${left}px`;
      highlightDiv.style.top = `${top}px`;
      highlightDiv.style.width = `${right - left}px`;
      highlightDiv.style.height = `${bottom - top}px`;
    } else if (shape === "circle") {
      const [x, y, radius] = coords;
      highlightDiv.style.left = `${x - radius}px`;
      highlightDiv.style.top = `${y - radius}px`;
      highlightDiv.style.width = `${radius * 2}px`;
      highlightDiv.style.height = `${radius * 2}px`;
      highlightDiv.style.borderRadius = "50%";
    }

    document.getElementById("map-container").appendChild(highlightDiv);
    area.addEventListener(
      "mouseleave",
      () => {
        highlightDiv.remove();
      },
      { once: true }
    );
  });
});
