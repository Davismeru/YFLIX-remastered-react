import { Link } from "react-router-dom";

export default function VideoCard(video) {
  return (
    <Link
      to={`/playing/${video?.video?.videoId}`}
      className="text-[14px] font-semibold text-gray-800 relative"
    >
      <div className="relative">
        {/* dark overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.1)] left-0 top-0 rounded-lg"></div>
        <img
          src={video?.video?.thumbnails[1]?.url}
          alt="thumbnail"
          onError={(e) => (e.target.src = `/hero.jpg`)}
          className="rounded-lg mb- w-full h-full"
        />
        {/* video statistics */}
        <div className="absolute bottom-1 left-1 right-2 text-white text-[12px] font-normal flex justify-between w-[95%]">
          <p>{video?.video?.lengthText}</p>
          <p>{video?.video?.viewCountText}</p>
        </div>
      </div>
      {/* video title */}
      <p>{video?.video?.title}</p>
      <section className="flex justify-between text-gray-400 shadow-sm p-1">
        <p>{video?.video?.channelName}</p>
        <p>{video?.video?.publishedTimeText}</p>
      </section>
    </Link>
  );
}
