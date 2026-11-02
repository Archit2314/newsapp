const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        return (
          <div className="card" key={index}>

            {/* IMAGE */}
            <div className="imageBox">
              {curItem.image_url ? (
                <img
                  src={curItem.image_url}
                  alt={curItem.title}
                />
              ) : (
                <div className="noImage">
                  No Image
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="cardContent">

              <span className="category">
                NEWS
              </span>

              <h2>
                {curItem.title}
              </h2>

              <p>
                {curItem.description ||
                  "No description available."}
              </p>

              <a
                href={curItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Article →
              </a>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Card;