import Image from "next/image";
const Card = ({ src, alt, title, link, content, badgeList, key, empty }) => {
  return (
    <div
      className={`card bg-primary rounded-t-lg h-full w-full rounded overflow-hidden shadow-lg${
        !empty ? " hover:scale-105 hover:shadow-2xl " : null
      }transition-transform duration-300`}
      key={key}
    >
      {empty ? (
        <div className="bg-base-200 absolute h-full w-full"></div>
      ) : (
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
      )}
    </div>
  );
};

export default Card;
