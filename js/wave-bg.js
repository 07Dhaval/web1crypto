(() => {
  const canvas = document.querySelector("#particle-wave-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: false });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let dpr = 1;
  let frameId = 0;
  let pointerX = 0;
  let pointerY = 0;

  const waves = [
    { y: .12, amp: .12, freq: 1.55, phase: .2, rows: 28, spread: .16, speed: .11, alpha: .5 },
    { y: .42, amp: .13, freq: 1.25, phase: 2.4, rows: 34, spread: .2, speed: -.08, alpha: .72 },
    { y: .68, amp: .1, freq: 1.75, phase: 4.1, rows: 26, spread: .15, speed: .07, alpha: .56 },
    { y: .91, amp: .13, freq: 1.35, phase: 1.2, rows: 24, spread: .14, speed: -.06, alpha: .42 }
  ];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(time = 0) {
    const seconds = time * .001;
    const mobile = width < 600;
    const xStep = mobile ? 14 : 10;

    const base = ctx.createLinearGradient(0, 0, width, height);
    base.addColorStop(0, "#020b21");
    base.addColorStop(.5, "#010817");
    base.addColorStop(1, "#020615");
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, width, height);

    const glow = ctx.createRadialGradient(
      width * (.55 + pointerX * .025),
      height * (.48 + pointerY * .02),
      0,
      width * .55,
      height * .48,
      Math.max(width, height) * .72
    );
    glow.addColorStop(0, "rgba(19, 54, 132, .2)");
    glow.addColorStop(.55, "rgba(7, 28, 78, .09)");
    glow.addColorStop(1, "rgba(1, 8, 23, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    waves.forEach((wave, waveIndex) => {
      const rowCount = mobile ? Math.ceil(wave.rows * .64) : wave.rows;
      const spread = height * wave.spread;

      for (let row = 0; row < rowCount; row += 1) {
        const normalizedRow = rowCount === 1 ? 0 : row / (rowCount - 1) - .5;
        const depth = 1 - Math.abs(normalizedRow) * .72;
        const rowOffset = normalizedRow * spread;

        for (let x = -xStep; x <= width + xStep; x += xStep) {
          const nx = x / Math.max(width, 1);
          const primary = Math.sin(
            nx * Math.PI * 2 * wave.freq +
            wave.phase +
            seconds * wave.speed +
            normalizedRow * 1.7
          );
          const secondary = Math.sin(
            nx * Math.PI * 4.2 -
            seconds * wave.speed * .65 +
            waveIndex
          ) * .32;
          const envelope = .48 + Math.sin(nx * Math.PI) * .52;
          const y =
            height * wave.y +
            (primary + secondary) * height * wave.amp * envelope +
            rowOffset * (1 + primary * .22) +
            pointerY * 7 * depth;
          const shiftedX = x + pointerX * 10 * depth;
          const edgeFade = Math.sin(Math.min(1, Math.max(0, nx)) * Math.PI);
          const alpha = Math.max(0, edgeFade) * wave.alpha * depth;
          const radius = (mobile ? .72 : .82) * (.7 + depth * .42);

          ctx.beginPath();
          ctx.fillStyle = `rgba(${76 + waveIndex * 8}, ${132 + waveIndex * 7}, 255, ${alpha})`;
          ctx.arc(shiftedX, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });

    if (!reducedMotion.matches) {
      frameId = requestAnimationFrame(draw);
    }
  }

  function restart() {
    cancelAnimationFrame(frameId);
    draw(performance.now());
  }

  window.addEventListener("resize", () => {
    resize();
    if (reducedMotion.matches) restart();
  }, { passive: true });

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX / Math.max(width, 1) - .5;
    pointerY = event.clientY / Math.max(height, 1) - .5;
  }, { passive: true });

  reducedMotion.addEventListener?.("change", restart);
  resize();
  draw();
})();
