import Image from "next/image";

const Avatar = ({ sectionData }) => {
  let classTransition = [
    "transition",
    "duration-1000",
    "ease-in-out",
    "transform",
  ].join(" ");
  return (
    <div className="md:px-24 lg:px-0">
      <div className="mask mask-squircle w-auto min-h-9 group">
        <Image
          src="/img/original.jpg"
          alt={sectionData.altFirstImageAvatar}
          className={`object-contain w-full h-full group-hover:opacity-0 ${classTransition}`}
          width={500}
          height={500}
          priority
        />
        <Image
          src="/img/reverse.jpg"
          alt={sectionData.altSecondImageAvatar}
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${classTransition}`}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Avatar;
