import { ArrowLeft, ArrowRight } from "iconoir-react";

interface NavButtonsProps {
    onPrev: () => void;
    onNext: () => void;
} 

export default function NavButtons({ onPrev, onNext }: NavButtonsProps ) {
    return (
        <>
            <button
                onClick={onPrev}
                className="p-2 rounded-full border-1 hover:bg-black/10 hover:scale-104 active:scale-93 transition-all animation-75 border-black cursor-pointer duration-300"
            >
                <ArrowLeft />
            </button>
            <button
                onClick={onNext}
                className="p-2 rounded-full border-1 hover:bg-black/10 hover:scale-104 active:scale-93 transition-all animation-75 border-black cursor-pointer duration-300"
            >
                <ArrowRight />
            </button>
        </>
    );
}