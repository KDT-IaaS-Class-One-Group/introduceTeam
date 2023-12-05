import createDynamicElement from "./createDynamicElement";

/**
 *
 * @param {string} Name
 * @param {string} text
 * @returns div > h3+p 형태의 div element를 생성합니다.
 */
export default function teamTemplate(Name, text) {
 const roof = createDynamicElement("div", { id: "hi" });
 const h3Tag = createDynamicElement("h3", {});
 h3Tag.textContent = Name;
 const pTag = createDynamicElement("p", {});
 pTag.textContent = text;

 roof.prepend(h3Tag);
 roof.append(pTag);
 console.dir(roof);

 return roof;
}
