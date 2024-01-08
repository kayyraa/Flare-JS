export function create_element(parent, element) {
    const new_element = document.createElement(element);
    parent.appendChild(new_element);

    return new_element
}