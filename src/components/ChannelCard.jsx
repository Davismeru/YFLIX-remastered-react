import { FaTv } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ChannelCard(channel) {
  // default image if thumnail doesn't exist
  const handleDefaultImg = (e) => {
    e.target.src = "/thumbnail.png";
  };
  return (
    <Link
      to={`/channel/${channel?.channel?.channelId}`}
      className="relative h-48 bg-gray-800 flex flex-col items-center justify-center rounded-lg text-white text-center"
    >
      <p className="flex items-center gap-3">
        <FaTv /> Channel
      </p>
      <img
        src={channel?.channel?.thumbnails[1]?.url}
        alt="thumbnail"
        onError={(e) => handleDefaultImg(e)}
        className="rounded-full my-3 w-16 h-16"
      />
      <p>{channel?.channel?.title}</p>
    </Link>
  );
}
