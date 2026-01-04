export function addPointIntoCenter(elem) {
    if (document.querySelector('.task-219-point')) return
    const pointElem = document.createElement('div');
    pointElem.classList.add('task-219-point');
    elem.style.position = 'relative';
    elem.append(pointElem);
    pointElem.style.top = `${elem.offsetHeight / 2 - pointElem.offsetHeight / 2}px`;
    pointElem.style.left = `${elem.offsetWidth / 2 - pointElem.offsetWidth / 2}px`;
}
