import { BiSolidPlaylist } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function PlaylistCard(playlist) {
  const handleDefaultImg = (e) => {
    e.target.src = "/thumbnail.png";
  };
  return (
    <Link
      to={`/playlist/${playlist?.playlist?.playlistId}`}
      className="relative flex flex-col items-center justify-center rounded-lg text-white overflow-hidden"
    >
      {/* dark overlay */}
      <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.8)] left-0 top-0"></div>
      <div className="absolute text-center font-semibold">
        <p className="flex items-center gap-2">
          <BiSolidPlaylist /> Playlist
        </p>
        <p>{playlist?.playlist?.videoCount} videos</p>
      </div>

      <img
        src={playlist?.playlist?.thumbnails[3]?.url}
        alt="thumbnail"
        onError={(e) => handleDefaultImg(e)}
      />

      <p className="z-20 absolute bottom-1 text-[14px]">
        {playlist?.playlist?.title}
      </p>
    </Link>
  );
}
