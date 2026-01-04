export function placeIntoCenter(div1, div2) {

  if (div1.offsetHeight < div2.offsetHeight && div1.offsetWidth < div2.offsetWidth)
    [div1, div2] = [div2, div1];

  div2.style.position = 'absolute';
  div2.style.right = '';
  div2.style.bottom = '';
  div2.style.top = `${div1.offsetTop + div1.offsetHeight / 2 - div2.offsetHeight / 2}px`;
  div2.style.left = `${div1.offsetLeft + div1.offsetWidth / 2 - div2.offsetWidth / 2}px`;

}