const Canvas = require('terminal-canvas');
const canvas = new Canvas({
  width: 132,
  height: 24
})

const asciify = require('asciify-image');
var options = {
  color: false,
  fit: 'none',
  width: 65
}

function render(i, change) {
  const image = images[i]

  asciify(image, options, function (err, asciified) {
    if (err) throw err;

    const lines = asciified.split('\n');
    for (let y = 0; y < lines.length; y++) {
      for (let x = 0; x < lines[y].length; x++) {
        canvas.moveTo(x, y).write(lines[y][x])
      }
    }
    canvas.flush()

    if (i + change == images.length) {
      change = - 1;
    }
    if (i + change < 0) {
      change = 1;
    }

    i = i + change;

    render(i, change);
  });
}

const images = process.argv.slice(2)
  .concat(
    process.argv.slice(2).reverse()
  )

render(0, 1)
