import HomeView from "./components/HomeView";
import Header from "./components/Header";

export default function Home() {
    return (
        <div>
			<Header />
            <HomeView />
			<div className="test h-screen w-screen"></div>
        </div>
    );
}
