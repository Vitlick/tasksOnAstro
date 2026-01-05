export function addDiagonalsIntoDiv(divElem) {
    const divCanvas = document.createElement("canvas");
    divCanvas.style.position = 'absolute';
    divCanvas.style.top = '0';
    divCanvas.style.left = '0';
    divCanvas.style.width = "100%";
    divCanvas.style.height = "100%";
    divElem?.append(divCanvas);

    const ctx = divCanvas.getContext("2d");
    const { width, height } = divCanvas

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.setLineDash([10, 5]);
    ctx.moveTo(0, 0);
    ctx.lineTo(width, height);
    ctx.moveTo(0, height);
    ctx.lineTo(width, 0);
    ctx.stroke();
}