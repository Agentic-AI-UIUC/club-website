// Hero light-wave animation. Add <canvas id="hero-canvas"></canvas> inside the hero, then load this script.
(function(){
  const state = {};
  const cv = document.getElementById("hero-canvas"); if (!cv) return;
    const ctx = cv.getContext('2d');
    const size = () => { const r = cv.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2); cv.width = r.width * d; cv.height = r.height * d; ctx.setTransform(d, 0, 0, d, 0, 0); state.W = r.width; state.H = r.height; };
    size(); state.onResize = size; window.addEventListener('resize', size);
    const t0 = performance.now();
    const draw = now => {
      const t = (now - t0) / 1000 * ((!window.matchMedia("(prefers-reduced-motion: reduce)").matches) ? 1 : 0);
      const W = state.W, H = state.H;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#050608'; ctx.fillRect(0, 0, W, H);
      const g = ctx.createRadialGradient(W * 0.62, H * 0.42, 0, W * 0.62, H * 0.42, W * 0.6);
      g.addColorStop(0, '#3A1606'); g.addColorStop(1, '#05060800');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      const N = 64, step = 8;
      for (let k = 0; k < N; k++) {
        const u = k / (N - 1) - 0.5;
        const core = Math.abs(u) < 0.04;
        ctx.beginPath();
        for (let x = -20; x <= W + 20; x += step) {
          const p = x / W;
          const spread = 40 + 260 * Math.pow(Math.abs(Math.sin(p * 2.4 + 0.6 + t * 0.12)), 1.6);
          const y = H * (0.64 - 0.32 * p) + H * 0.14 * Math.sin(p * 5.2 - 1.2 + t * 0.35) + H * 0.04 * Math.sin(p * 13 + t * 0.6 + k * 0.08) + u * spread;
          x === -20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const hue = 18 + 22 * (u + 0.5);
        ctx.strokeStyle = core ? 'hsla(' + (hue + 10) + ',100%,78%,0.55)' : 'hsla(' + hue + ',100%,' + (52 + 18 * (1 - Math.abs(u) * 2)) + '%,' + (0.05 + 0.1 * (1 - Math.abs(u) * 2)) + ')';
        ctx.lineWidth = core ? 2 : 1.4;
        ctx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        const p = ((t * 0.04 + i * 0.33) % 1);
        const x = p * W, y = H * (0.64 - 0.32 * p) + H * 0.14 * Math.sin(p * 5.2 - 1.2 + t * 0.35);
        const rg = ctx.createRadialGradient(x, y, 0, x, y, 26);
        rg.addColorStop(0, '#FFE2CCcc'); rg.addColorStop(1, '#FF5B1F00');
        ctx.fillStyle = rg; ctx.fillRect(x - 26, y - 26, 52, 52);
      }
      state.raf = requestAnimationFrame(draw);
    };
    state.raf = requestAnimationFrame(draw);
  
})();
