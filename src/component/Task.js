export default function task(content, checked, id) {
  const label = document.createElement("label");
  label.id = id;
  label.className =
    "label cursor-pointer " + (checked ? "bg-white rounded" : "");

  const span = document.createElement("span");
  // Text color will change based on checked status
  span.className = `label-text font-bold text-lg ${
    checked ? "text-black" : "text-white"
  }`;
  span.innerText = content;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.className = "checkbox checkbox-primary";

  // Add event listener to update the text color when the checkbox is toggled
  input.addEventListener("change", () => {
    span.className = `label-text font-bold text-lg ${
      input.checked ? "text-black" : "text-white"
    }`;
  });

  label.appendChild(span);
  label.appendChild(input);

  return label;
}
