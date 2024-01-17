export const drawRect = (detections, ctx) =>{
    detections.forEach(prediction=>{
        // Get prediction results
        const [x,y,width, height] = prediction['bbox'];
        const text = prediction['class'];

        //set styling
        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        // Draw rectangles and tex
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x,y, width, height)
        ctx.stroke()
    })
}