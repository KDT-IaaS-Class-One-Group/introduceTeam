export function introduceComponent(stateData) {
  function createElement(type, props, ...children) {
    return { type, props, children };
  }

  const name = createElement("div", {}, "name:", stateData.name);
  const profile = createElement("div",{},"profile:", createElement("div", { src: stateData.profile }, ""));
  const contact = createElement("div", {}, "contact:", stateData.contact);
  const introduce = createElement("div", {}, "introduce:", stateData.introduce);

  return createElement("div", { class: "introduce" }, name, profile, contact, introduce );
}
