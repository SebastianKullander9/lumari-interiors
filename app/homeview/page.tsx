import Header from "../components/Header";
import HomeView2 from "../components/HomeView2";
import HomeView3 from "../components/HomeView3";

export default function HomeView() {
    return (
        <section>
            <Header />
            <div className="lg:hidden">
                <HomeView2 />
            </div>
            <div className="hidden lg:block">
                <HomeView3 />
            </div>
        </section>
    )
}