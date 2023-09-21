import React, { useEffect, useRef, useState } from "react";
import "./particles.scss";

const ParticleEffect = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Particle(effect, x, y, color) {
      this.effect = effect;
      this.x = Math.random() * this.effect.canvasWidth;
      this.y = Math.random() * this.effect.canvasHeight;
      this.color = color;
      this.originX = Math.floor(x);
      this.originY = Math.floor(y);
      this.size = this.effect.gap;
      this.dx = 0;
      this.dy = 0;
      this.vx = 0;
      this.vy = 0;
      this.force = 0;
      this.angle = 0;
      this.distance = 0;
      this.friction = Math.random() * 0.6 + 0.3;
      this.ease = 0.1;

      this.draw = function () {
        this.effect.context.fillStyle = this.color;
        this.effect.context.fillRect(this.x, this.y, this.size, this.size);
      };

      this.update = function () {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x +=
          (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y +=
          (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      };
    }

    function Effect(context, canvasWidth, canvasHeight) {
      this.context = context;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.textX = this.canvasWidth / 2;
      this.textY = this.canvasHeight / 2;
      this.fontSize = 600;
      this.maxTextWidth = this.canvasWidth * 0.8;

      //   Particle text
      this.particles = [];
      this.gap = 2;
      this.mouse = {
        radius: 6000,
        x: 0,
        y: 0,
      };

      this.mouseMoveHandler = (e) => {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
      };

      window.addEventListener("mousemove", this.mouseMoveHandler);

      this.wrapText = function (text) {
        this.context.fillStyle = "#ffa303";
        this.context.font = this.fontSize + "px Libre Baskerville";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText(text, this.textX, this.textY);
        this.convertToParticles();
      };

      this.convertToParticles = function () {
        this.particles = [];
        const pixels = this.context.getImageData(
          0,
          0,
          this.canvasWidth,
          this.canvasHeight
        ).data;

        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        for (let y = 0; y < this.canvasHeight; y += this.gap) {
          for (let x = 0; x < this.canvasWidth; x += this.gap) {
            const index = (y * this.canvasWidth + x) * 4;
            const alpha = pixels[index + 3];

            if (alpha > 0) {
              const red = pixels[index];
              const green = pixels[index + 1];
              const blue = pixels[index + 2];
              const color = `rgb(${red},${green},${blue})`;

              this.particles.push(new Particle(this, x, y, color));
            }
          }
        }
      };

      this.render = function () {
        this.particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      };
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.wrapText("G");
    effect.render();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render();
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("mousemove", effect.mouseMoveHandler);
    };
  }, []);

  return (
 
        <div className="canvas">
          <canvas ref={canvasRef} id="canvas1"></canvas>
        </div>
    
  );
};

export default ParticleEffect;
