import Header from "../components/Header";
import HomeView2 from "../components/HomeView2";
import HomeViewDesktop from "../components/HomeViewDesktop";

export default function HomeViewTest() {
    return (
        <section>
            <div className="lg:hidden">
                <HomeView2 />
            </div>
            <div className="hidden lg:block">
                <HomeViewDesktop />
            </div>
        </section>
    )
}