import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../assets/fetchFromApi";
import { FaDownload } from "react-icons/fa";
import VideoCard from "../components/VideoCard";
import Nav from "../components/Nav";
export default function PlayVideo() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  //   destructured playing video's data
  const { title, author, viewCount, shortDescription } = videoData;
  useEffect(() => {
    fetchFromApi(`video?id=${id}`)
      .then((data) => {
        return data.json();
      })
      .then((video) => {
        setVideoData(video.videoDetails);
      })
      .catch((err) => {
        console.log("error loading videos");
      });

    // fetch related videos
    fetchFromApi(`video/related?id=${id}`)
      .then((data) => {
        return data.json();
      })
      .then((related) => {
        setRelatedVideos(related.contents);
      })
      .catch((err) => {
        console.log("error loading videos");
      });
  }, []);
  return (
    <>
      <div className="">
        <Nav />
      </div>
      <div className="px-2 flex flex-col md:flex-row">
        {/* video player and video details */}
        <section className="lg:w-[50%]">
          {/*player container */}
          <div className="rounded-lg overflow-hidden mt-5">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              controls={true}
              playing={true}
            />
          </div>
          {/* video details */}
          <div className="text-sm mt-5">
            <p className="font-semibold">{title}</p>
            <section className="flex justify-between text-[14px] my-2">
              <p>{author}</p>
              <p>{parseInt(viewCount).toLocaleString()} views</p>
            </section>
            <a
              href={`https://www.y2mate.com/youtube/${id}`}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <FaDownload /> Download video
            </a>
            <section className="mt-2 bg-gray-100 text-[14px] p-1 rounded-md overflow-x-scroll">
              <h1 className="text-lg font-bold text-gray-500">
                Video description
              </h1>
              <p>{shortDescription}</p>
            </section>
          </div>
        </section>

        {/* related videos section */}
        <section className="flex flex-col mt-5 py-2 md:mt-0 lg:w-[50%] lg:text-center">
          <p className="text-lg font-bold text-gray-500 mb-2">Related Videos</p>
          <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-5">
            {relatedVideos &&
              relatedVideos.map((video, index) => {
                return (
                  <div className="md:w-56" key={index}>
                    {video.video && <VideoCard video={video.video} />}
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
}
