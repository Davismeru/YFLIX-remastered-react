import { Link } from "react-router-dom";
import { categories } from "../assets/constants";

export default function Categories() {
  return (
    <section className="text-white relative p-4">
      {/* dark overlay */}
      <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-black to-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.9)]"></div>

      {/* top categories */}
      <p className="mb-5 relative z-20 font-bold text-lg">Top Categories</p>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => {
          return (
            <Link
              to={`/videos/${category.name}`}
              className="w-full h-32 rounded-md shadow-sm relative z-20 overflow-hidden md:basis-[24%]"
              key={index}
            >
              <img
                src={category.imgSrc}
                alt="img"
                className="w-full h-full rounded-[inherit] object-cover"
              />
              <p className="absolute bottom-1 left-2 font-semibold z-20">
                {category.name}
              </p>
              {/* dark overlay */}
              <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.2)] left-0 top-0"></div>
            </Link>
          );
        })}
      </div>

      {/* music genres */}
      <p className="my-5 relative z-20 font-bold text-lg">Top music Genres</p>
      <div className="flex flex-wrap gap-2">
        {categories[1].genres.map((genre, index) => {
          return (
            <Link
              to={`/videos/${genre.genre}`}
              className="w-full h-32 rounded-md shadow-sm relative z-20 overflow-hidden md:basis-[24%]"
              key={index}
            >
              <img
                src={genre.imgSrc}
                alt="img"
                className="w-full h-full rounded-[inherit] object-cover"
              />
              <p className="absolute bottom-1 left-2 font-semibold z-20">
                {genre.genre}
              </p>
              {/* dark overlay */}
              <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.2)] left-0 top-0"></div>
            </Link>
          );
        })}
      </div>

      {/* sports categories */}
      <p className="my-5 relative z-20 font-bold text-lg">Games and Sports</p>
      <div className="flex flex-wrap gap-2">
        {categories[4].sportCategories.map((category, index) => {
          return (
            <Link
              to={`/videos/${category.name}`}
              className="w-full h-32 rounded-md shadow-sm relative z-20 overflow-hidden md:basis-[24%]"
              key={index}
            >
              <img
                src={category.imgSrc}
                alt="img"
                className="w-full h-full rounded-[inherit] object-cover"
              />
              <p className="absolute bottom-1 left-2 font-semibold z-20">
                {category.name}
              </p>
              {/* dark overlay */}
              <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.2)] left-0 top-0"></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
