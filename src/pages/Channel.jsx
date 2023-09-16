import { FaTv } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../assets/fetchFromApi";
import VideoCard from "../components/VideoCard";

export default function Channel() {
  const { id } = useParams();
  const [videosData, setVideosData] = useState([]);
  const [title, setTitle] = useState("");
  const handleDefaultImg = (e) => {
    e.target.src = "/hero.jpg";
  };

  useEffect(() => {
    fetchFromApi(`channel?id=${id}`)
      .then((data) => {
        return data.json();
      })
      .then((videos) => {
        setVideosData(videos.contents);
        setTitle(videos.title);
        console.log(videos);
      })
      .catch((err) => {
        console.log("error loading videos");
      });
  }, []);
  return (
    <div>
      {/* hero section */}
      <div
        className={`h-[60vh] text-white text-center flex flex-col justify-center relative border-b border-white`}
      >
        {/* bg image */}
        <img
          src={`/gaming-hero.jpg`}
          onError={(e) => handleDefaultImg(e)}
          className="absolute w-full h-full object-cover"
        />
        {/* dark overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-black via-[rgba(0,0,0,0.3)] left-0 top-0"></div>

        <div className="relative z-20">
          {/* logo */}
          <section className="text-2xl font-bold flex flex-col items-center justify-center mb-5 gap-4 md:text-3xl">
            <FaTv />
            {title}
          </section>
        </div>
      </div>

      {/* Videos */}
      <div className="text-gray-800 p-4 flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
        {videosData &&
          videosData.map((video, index) => {
            return (
              <div key={index} className="md:w-[25%] lg:w-[15%]">
                {/* video.video to ensure no channel Details */}
                {video.video && <VideoCard video={video.video} />}
              </div>
            );
          })}
      </div>
    </div>
  );
}
