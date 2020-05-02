<template>
    <div id="app">
        <h1> CHALLENGE: Pablo Estrada </h1>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
  export default {
    name: 'BoxAssignment',
    props: ["ord", "boxList", "current_box", "refresh", "mousePosition",
      "drawMode", "canvasTransform", "showAnnotations"],
    data: function () {
      return {
        canvas: null,
      };
    },
    /* ord, order of drawing on canvas
    * box_list, list of dictionaries,
    * current_box, dictionary,
    * refresh, integer / hack for forcing reactive property change
    * mouse_position, dictionary, x, y
    * draw_mode, boolean
    * canvas_transform, dictionary,
    * show_annotations, boolean
    * */
    mounted() {

      const backgroundUrl = 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/59776030_333160800736122_6130285243388657664_o.jpg?_nc_cat=105&_nc_sid=6e5ad9&_nc_ohc=lCQKHijcEIcAX99My3s&_nc_ht=scontent-mia3-2.xx&oh=eb54100ae4ec0600447204970f1517e3&oe=5ECFB131';

      let canvas = document.getElementById("canvas");
      if (canvas != null) {
        let ctx = canvas.getContext("2d");
        this.canvas = ctx;
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        var background = new Image();
        background.src = backgroundUrl;
        const $this = this;
        background.onload = function () {
          ctx.drawImage(background, 0, 0);
          $this.draw(ctx, () => alert('done callback!'));
        };

      }


    },
    methods: {
      toInt: function (n) {
        return parseInt(n, 10);
      },
      drawCircle: function (circleSize, x, y, fill, border, ctx) {
        // TODO complete this function
        ctx.beginPath();
        ctx.arc(x, y, circleSize, 0, 2 * Math.PI);
        ctx.strokeStyle = border;
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.fillStyle = fill;
        ctx.fill();

      },
      draw: function (ctx, done) {

        if (this.showAnnotations === true) {
          let circleSize = 8 / this.canvasTransform['scale'];
          let font_size = 20 / this.canvasTransform['scale'];
          ctx.font = font_size + "px Verdana";

          let boxes = this.boxList;// TODO grab box_list

          for (var i in boxes) {

            let box = boxes[i];

            if (box.softDelete !== true) {
              if (box.label.isVisible == null || box.label.isVisible == true) {
                ctx.beginPath();
                ctx.lineWidth = '2';

                let r = box.label.colour.rgba.r;

                // TODO get other colours
                let g = box.label.colour.rgba.g;
                let b = box.label.colour.rgba.b;
                let a = box.label.colour.rgba.a;

                if (box.selected == true) {
                  ctx.fillStyle = "blue";
                } else {
                  ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
                }

                ctx.textAlign = "start";

                // TODO handle if label is undefined
                if (box.label !== undefined) {
                  ctx.fillText(box.label.name, this.toInt(box.xMin), this.toInt(box.yMin));
                }
                else {
                  ctx.fillText('N/A', this.toInt(box.xMin), this.toInt(box.yMin));
                }
                ctx.closePath();

                // TODO draw circles (using eariler created function) at box.[x/y]_min and box.[x/y]_max
                this.drawCircle(circleSize, box.xMin, box.yMin, box.circles.fill.hex, box.circles.border.hex, ctx);
                this.drawCircle(circleSize, box.xMax, box.yMax, box.circles.fill.hex, box.circles.border.hex, ctx);
                this.drawCircle(circleSize, box.xMin, box.yMax, box.circles.fill.hex, box.circles.border.hex, ctx);
                this.drawCircle(circleSize, box.xMax, box.yMin, box.circles.fill.hex, box.circles.border.hex, ctx);
                ////


                // TODO draw dashed line if special condition is true else draw solid line
                ctx.beginPath();
                if (box.specialCondition === true) {
                  ctx.setLineDash([5, 5, 5]);
                } else {
                  ctx.setLineDash([]);
                }
                ctx.fillStyle = `rgba(${box.fill.rgba.r},${box.fill.rgba.g},${box.fill.rgba.b},${box.fill.rgba.a})`;
                ctx.strokeStyle = `rgba(${box.border.rgba.r},${box.border.rgba.g},${box.border.rgba.b},${box.border.rgba.a})`;

                if (this.drawMode === false) {
                  if (this.mousePosition.raw.x >= box.xMin && this.mousePosition.raw.x <= box.xMax &&
                    this.mousePosition.raw.y >= box.yMin && this.mousePosition.raw.y <= box.yMax) {
                    /* TODO
                    * if the mouse position is within the rectangle and/or circles we drew
                    * emit an event 'box_hover', with the current index 'i',
                    * this.mouse_position.raw.x and this.mouse_position.raw.y
                    * */
                    this.$emit('box_hover', i, this.mousePosition.raw.x, this.mousePosition.raw.y);
                  }
                }


                if (box.selected === true) {
                  ctx.strokeStyle = "blue"
                } else {
                  ctx.strokeStyle = box.border.hex
                }
                ctx.rect(box.xMin, box.yMin, box.xMax - box.xMin, box.yMax - box.yMin);
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.fillStyle = `rgba(${box.fill.rgba.r},${box.fill.rgba.g},${box.fill.rgba.b},${box.fill.rgba.a})`;
                ctx.fill();
              }
            }

          }
        }
        done();

      }
    }

  }
</script>

<style scoped>

</style>
