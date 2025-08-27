import Header from "./Header";
import HomeViewMobile from "./HomeViewMobile";
import HomeViewDesktop from "./HomeViewDesktop";

export default function HomeViewTest() {
    return (
        <section>
            <div className="lg:hidden">
                <HomeViewMobile />
            </div>
            <div className="hidden lg:block">
                <HomeViewDesktop />
            </div>
        </section>
    )
}