 const videos = [
    {
      src: "videos/boobs licking.mp4"
    },
    {
      src: "videos/cum on face shower.mp4"
    },
    {
      src: "videos/cum while massage.mp4"
    },
    {
      src: "videos/dick in pussy.mp4"
    },
    {
      src: "videos/fingring pussy.mp4"
    },
    {
      src: "videos/hard fuck shout cry.mp4"
    },
    {
      src: "videos/hard fucking video.mp4"
    },
    {
      src: "videos/amzon pos fuck.mp4"
    },
    {
      src: "videos/hard suck.mp4"
    },
     {
      src: "videos/hard suck pussy.mp4"
    },
     {
      src: "videos/rub dick on pussy.mp4"
    },
     {
      src: "videos/secret back fuck.mp4"
    },
    {
      src: "videos/hidden game fuck.mp4"
    },
    {
      src: "videos/hot girl sucking white dick.mp4"
    },
  ];

  const gallery = document.getElementById('videoGallery');

  const formatTitle = (path) => {
    const name = path.split('/').pop().replace(/\.[^/.]+$/, "");
    return name
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, c => c.toUpperCase());
  };

  gallery.innerHTML = videos.map((v, i) => `
    <div class="video-card">
      <div style="position:relative;">
        <video id="video${i}" controls preload="metadata">
          <source src="${v.src}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <span class="duration-overlay" id="dur${i}">--:--</span>
      </div>
      <div class="video-info">
        <h3>${formatTitle(v.src)}</h3>
      </div>
    </div>
  `).join('');

  // Auto-calculate durations
//   videos.forEach((v, i) => {
//     const videoEl = document.getElementById(`video${i}`);
//     const dur = document.getElementById(`dur${i}`);
//     videoEl.addEventListener('loadedmetadata', () => {
//       const totalSeconds = videoEl.duration;
//       const minutes = Math.floor(totalSeconds / 60);
//       const seconds = Math.floor(totalSeconds % 60);
//       dur.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//     });
//   });