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
                className="p-4 rounded-full border-2 hover:bg-orange-100 border-orange-100 cursor-pointer transition-colors duration-300"
            >
                <ArrowLeft />
            </button>
            <button
                onClick={onNext}
                className="p-4 rounded-full border-2 hover:bg-orange-100 border-orange-100 cursor-pointer transition-colors duration-300"
            >
                <ArrowRight />
            </button>
        </>
    );
}