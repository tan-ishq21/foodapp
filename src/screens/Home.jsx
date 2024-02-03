import Card from "../components/Cards";
import Caraousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
const Home = () => {

    const [search , setSearch] = useState('')
    const [foodCat , setFoodCat] = useState([])
    const [foodItem , setFoodItem] = useState([])

    const loadData = async () => {
        const res = await fetch("http://localhost:5000/api/foodData" , {
            method:"POST", 
            headers:{
                "Content-Type": "application/json"
            }
        });
        const response = await res.json();
        // console.log(response);
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    }

    useEffect(() => {
        loadData();
    },[])

    return (
        <>
        <div><Navbar /></div>
        <div> 
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{zIndex: "10"}}>
            <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
            </div>
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
        </div>
        <div className="container">
            {
                (foodCat.length !== 0)
                ? foodCat.map((data) => {
                    return(
                        <div className="row mb-3">
                        <div key={data._id} className="m-3 fs-3">
                            {data.CategoryName}
                        </div>
                        <hr />
                        {
                            foodItem.length !== 0
                            ?
                            foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())) )
                            .map(filterItems => {
                                return(
                                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3" >
                                        <Card 
                                            foodItem = {filterItems}
                                            options = {filterItems.options[0]}
                                        />
                                    </div>
                                )
                            })
                            :
                            <div>No data Found</div>
                        }
                        </div>
                    )
                })
                :
                ""
            }
        </div>
        <div> <Footer /> </div>
        </>
    );
};

export default Home;