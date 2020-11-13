import { ALLOW_IMAGES_ONLY_WITH_ALLOWED_CORS } from "../constants";
export function elementToString(element) {
    const classes = Array.from(element.classList).join(".");
    const id = element.id ? "#" + element.id : "";
    const parent = element.parentElement ? elementToString(element.parentElement) + " > " : "";
    return parent + element.localName + id + (classes ? "." + classes : "");
}
export function dragElement(element, headerSelector = ".header") {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    const elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = element.offsetTop - pos2 + "px";
        element.style.left = element.offsetLeft - pos1 + "px";
    };
    const dragMouseDown = (e) => {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointerup = closeDragElement;
        document.onpointermove = elementDrag;
    };
    const header = element.querySelector(headerSelector);
    if (header) {
        header.addEventListener("pointerdown", dragMouseDown);
    }
    else {
        element.addEventListener("pointerdown", dragMouseDown);
    }
    function closeDragElement() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
    return {
        clear: () => {
            if (header) {
                header.removeEventListener("pointerdown", dragMouseDown);
            }
            else {
                element.removeEventListener("pointerdown", dragMouseDown);
            }
        },
    };
}
export function CreateImage(options) {
    const result = CreateElement("img", options);
    if (ALLOW_IMAGES_ONLY_WITH_ALLOWED_CORS) {
        result.crossOrigin = "Anonymous";
    }
    return result;
}
export function createCheckbox(label, onChange, checked = false) {
    const inputElement = CreateElement("input", {
        checked,
        type: "checkbox",
        onChange: () => onChange(inputElement.checked),
    });
    return CreateElement("label", {
        className: "checkbox-container",
        children: [label, inputElement, CreateElement("span", { className: "checkmark" })],
    });
}
export function CreateElement(type, options) {
    const result = document.createElement(type);
    if (!options) {
        return result;
    }
    Object.entries(options).forEach((entry) => {
        switch (entry[0]) {
            case "className":
                result.className = entry[1];
                break;
            case "onChange":
                result.addEventListener("change", entry[1]);
                break;
            case "onClick":
                result.addEventListener("click", entry[1]);
                break;
            case "checked":
                result.checked = entry[1];
                break;
            case "styles":
                Object.entries(entry[1]).forEach((styleEntry) => {
                    result.style[styleEntry[0]] = styleEntry[1];
                });
                break;
            case "children":
                if (Array.isArray(entry[1])) {
                    result.append(...entry[1]);
                }
                else {
                    result.append(entry[1]);
                }
                break;
            case "content":
                if (entry[1]) {
                    result.innerHTML = entry[1];
                }
                break;
            default:
                result.setAttribute(entry[0], entry[1]);
        }
    });
    return result;
}
export function chooseColorUsingDefaultInput(color = "#000000", onInput) {
    return new Promise((success) => {
        const input = CreateElement("input", {
            type: "color",
            className: "hidden",
            value: color,
            onInput: typeof onInput === "function" ? () => onInput(input.value) : undefined,
            onChange: () => {
                success(input.value);
                document.body.removeChild(input);
            },
        });
        document.body.appendChild(input);
        input.click();
    });
}
export function getOrCreate(parent, type, ...classes) {
    const result = parent.querySelector(`${type}.${classes.join(".")}`);
    if (result) {
        return result;
    }
    return CreateElement(type, { className: classes.join(" ") });
}
export function getOrCreateAndAppend(parent, type, ...classes) {
    const result = getOrCreate(parent, type, ...classes);
    parent.appendChild(result);
    return result;
}
//# sourceMappingURL=html-utils.js.map