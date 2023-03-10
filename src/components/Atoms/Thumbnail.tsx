import { FC } from "react";

interface ThumbnailProps {
  src: string;
}

const Thumbnail: FC<ThumbnailProps> = ({ src }) => {
  return (
    <div className="overflow-hidden rounded-xl cursor-pointer">
      <img className="w-full h-52 object-cover" src={src} alt="thumbnail" />
    </div>
  );
};

export default Thumbnail;
