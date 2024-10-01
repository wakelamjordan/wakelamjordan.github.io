import Image from "next/image";
const Card = ({ src, alt, title, link, content, badgeList, key }) => {
  console.log(src);
  return (
    <div
      className="card bg-primary rounded-t-lg max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
      key={key}
    >
      <a href={link}>
        <figure>
          <Image src={src} alt={alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>{content}</p>
          {
            <div className="card-actions justify-end">
              {badgeList.map((badge, key) => (
                <div className="badge badge-outline" key={key}>
                  {badge.name}
                </div>
              ))}
            </div>
          }
        </div>
      </a>
    </div>
  );
};

export default Card;
