type LiteYouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function LiteYouTubeEmbed({
  videoId,
  title,
  className = "",
}: LiteYouTubeEmbedProps) {
  const escapedTitle = escapeHtml(title);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const srcDoc = `<!doctype html><html lang="en"><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}html,body{height:100%;margin:0}body{background:#141e24;color:white;font-family:Arial,sans-serif}a{align-items:center;background-image:linear-gradient(rgba(20,30,36,.18),rgba(20,30,36,.5)),url('${thumbnailUrl}');background-position:center;background-size:cover;color:inherit;display:flex;height:100%;justify-content:center;text-decoration:none;width:100%}a:focus-visible{outline:4px solid white;outline-offset:-6px}.play{align-items:center;background:#ffffff;box-shadow:0 10px 30px rgba(0,0,0,.25);border-radius:999px;display:flex;height:68px;justify-content:center;width:68px}.play:before{border-bottom:14px solid transparent;border-left:22px solid #141e24;border-top:14px solid transparent;content:"";margin-left:5px}</style><title>${escapedTitle}</title></head><body><a href="${embedUrl}" aria-label="Play ${escapedTitle}"><span class="play"></span></a></body></html>`;

  return (
    <iframe
      className={className}
      title={title}
      srcDoc={srcDoc}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
