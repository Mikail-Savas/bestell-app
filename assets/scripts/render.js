/**
 * Display each element of an array in a specific given template.
 * @param {Array} array Data, that will be displayed.
 * @param {HTMLElement} container Where the rendered content will be inserted.
 * @param {Function} template HTML generator for each element in array.
 */
function render(array, container, template) {
  container.innerHTML = "";
  array.forEach(element => renderTemplate(container, template(element)));
}

/**
 * Insert a template in a container.
 * @param {HTMLElement} container The destination, where the template is displayed.
 * @param {Function} template The HTML element, that is generated.
 */
function renderTemplate(container, template) {
  container.innerHTML += template;
}