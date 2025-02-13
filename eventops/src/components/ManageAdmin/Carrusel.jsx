const Carrusel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={
              'https://blogs.elespectador.com/wp-content/uploads/2014/09/PARA-BANNER-DEL-STREAMING-01.jpg'
            }
            className="d-block w-100"
            alt="concierto gianmarco"
          />
        </div>
        <div className="carousel-item">
          <img
            src={'https://i.ytimg.com/vi/rL5p3dXYaCU/maxresdefault.jpg'}
            className="d-block w-100"
            alt="concierto B"
          />
        </div>
        <div className="carousel-item">
          <img
            src={
              'https://tecinformamos.com/wp-content/uploads/2021/12/Coldplay2022_Peru_JPG.jpg'
            }
            className="d-block w-100"
            alt="concierto C"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
