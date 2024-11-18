// task (this is a property of the component)
export default function task(content, checked, id) {
  const label = document.createElement("label");
  label.id = id;
  label.className = "label cursor-pointer " + (checked && " bg-white rounded");

  const span = document.createElement("span");
  span.className = `label-text ${checked && "underline"}`;
  span.innerText = content;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.className = "checkbox checkbox-primary";

  label.appendChild(span);
  label.appendChild(input);

  return label;
}
