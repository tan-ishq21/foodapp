import Card from "../components/Cards";
import Caraousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
        <div><Navbar /></div>
        <div> <Caraousel /> </div>
        <div className="m-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div> <Footer /> </div>
        </>
    );
};

export default Home;