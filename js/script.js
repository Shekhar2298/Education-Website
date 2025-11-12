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
      src: "videos/hard suck.mp4"
    },
    {
      src: "videos/hidden game fuck.mp4"
    },
    {
      src: "videos/hot girl sucking white dick.mp4"
    },
  ];
    // Helper: generate title from filename
  const formatTitle = (path) => {
    const name = path.split('/').pop().replace(/\.[^/.]+$/, "");
    return name
      .replace(/[_-]+/g, ' ')
      .trim()
      .replace(/\b\w/g, c => c.toUpperCase());
  };

  const gallery = document.getElementById('videoGallery');
  gallery.innerHTML = videos.map((v, i) => `
    <div class="video-card" data-src="${v.src}">
      <div class="video-info">
        <h3>${formatTitle(v.src)}</h3>
      </div>
    </div>
  `).join('');

  // When a title is clicked → replace with playable video
  gallery.querySelectorAll('.video-card').forEach(card => {
    const src = card.dataset.src;
    card.addEventListener('click', () => {
      card.innerHTML = `
        <video controls autoplay style="width:100%;border-radius:14px">
          <source src="${src}" type="video/mp4">
        </video>`;
    });
  });