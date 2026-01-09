export function drowFlower(canvElem) {
    canvElem.width = canvElem.offsetWidth;
    canvElem.height = canvElem.offsetHeight;
    const ctx = canvElem.getContext('2d');
    const [Ox, Oy] = [
        canvElem.width / 2,
        canvElem.height / 2
    ];
    
    ctx.lineWidth = 1;

    const rad = Math.min(Ox, Oy) - 10;
    const count = 4;


    ctx.beginPath();
    ctx.moveTo(Ox, Oy);

    for (let angle = 0; angle < 2 * Math.PI; angle += 0.03) {
        const p = rad * Math.sin(count * angle);
        const coord = [
            Ox + p * Math.sin(angle),
            Oy + p * Math.cos(angle)
        ]
        ctx.lineTo(...coord);
    }

    ctx.stroke();


    //console.log(Ox, Oy);

}
