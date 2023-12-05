export default function animateTeamMemberName() {
  const divs = document.querySelectorAll('.teamMember div');
  divs.forEach((div, index) => {
    let horizontalPosition = 100 * index;
    let verticalPosition = 200;
    let wavePhase = Math.random() * 2 * Math.PI;
    let horizontalSpeed = 0.5 + Math.random();
    const waveSpeed = 0.02;
    const waveAmplitude = 100;
    let direction = 1;

    function animate() {
      const windowWidth = window.innerWidth;
      const divWidth = div.offsetWidth;

      horizontalPosition += horizontalSpeed * direction;
      if (horizontalPosition <= 0 || (horizontalPosition + divWidth) >= windowWidth) {
        direction *= -1;
      }

      wavePhase += waveSpeed;
      verticalPosition = 200 + waveAmplitude * Math.sin(wavePhase);

      div.style.left = `${horizontalPosition}px`;
      div.style.top = `${verticalPosition}px`;

      requestAnimationFrame(animate);
    }

    animate();
  });
}

