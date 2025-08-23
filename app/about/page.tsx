import About from "../components/About";
import Footer from "../components/Footer";
import HeaderBlack from "../components/HeaderBlack";

export default function AboutPage() {
    return (
        <>
            <HeaderBlack />
            <About animate={true}/>
            <Footer />
        </>
    );
}