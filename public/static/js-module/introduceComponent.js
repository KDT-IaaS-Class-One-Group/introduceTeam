export function introduceComponent(stateData) {
  function createElement(type, props, ...children) {
    return { type, props, children };
  }

  const name = createElement("div", { class: "name"}, "name: ", stateData.name);
  // const profile = createElement("div",{},"profile: ", createElement("div", { src: stateData.profile }, ""));
  const contactGithub = createElement("div", { class: "github"}, "contact: ", `github-> ${stateData.contact.github} `);
  const contactEmail = createElement("div", { class: 'email'}, `Email-> ${stateData.contact.email}`)
  const introduce = createElement("div", { class: 'introduce'}, "introduce: ", stateData.introduce);

  return createElement("div", { class: "introduce" }, name, contactGithub, contactEmail, introduce );
}
