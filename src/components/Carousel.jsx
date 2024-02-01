import "../index.css"
const Caraousel = () => {
    return (
        <>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{zIndex: "10"}}>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
            </div>
            <div className="carousel-item active">
            <img className="d-block w-100" src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/05/Cover-Image.jpg" style={{filter: "brightness(30%)"}} alt="First slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp" style={{filter: "brightness(30%)"}} alt="Second slide"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </button>
        </div>
        </>
    );
};

export default Caraousel;