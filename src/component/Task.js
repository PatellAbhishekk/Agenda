// task (this is a property of the component)
export default function task(content, checked) {
  const label = document.createElement("label");
  label.className = "label cursor-pointer " + (checked && " bg-white rounded");

  const span = document.createElement("span");
  span.className = "label-text";
  span.innerText = content;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.className = "checkbox checkbox-primary";

  label.appendChild(span);
  label.appendChild(input);

  return label;
}
