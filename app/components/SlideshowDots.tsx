interface SlideshowDotsProps {
    images: string[];
    indexProp: number;
}

export default function SlideshowDots({ images, indexProp }: SlideshowDotsProps) {
    return (
        <div className="absolute bottom-0 p-5 w-full h-[40px] z-3 flex flex-row gap-2 items-center justify-center">
            {images.map((src, index) => (
                <div key={index} className={`border-1 border-white w-2 h-2 rounded-full ${index === indexProp ? "bg-white" : ""} transition-all duration-1000`}></div>
            ))}
        </div>
    );
}