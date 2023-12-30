import {useState} from "react";

function FirstBlockHomePage({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "90vh",
        width: "100vw",
        // position: "relative",
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`

    }

    const leftArrowStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: "1",
        cursor: "pointer",
        textShadow: "2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000, 1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000",
    }

    const rightArrowStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: "1",
        cursor: "pointer",
        textShadow: "2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000, 1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000",
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        console.log(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        console.log(newIndex);
    }

    return (
        <>
            <div style={sliderStyles}>
                <div style={leftArrowStyle} onClick={goToPrevious}>{String.fromCharCode(8592)}</div>
                <div style={rightArrowStyle} onClick={goToNext}>{String.fromCharCode(8594)}</div>
                <div style={slideStyles}></div>
            </div>
        </>
    );
}

export default FirstBlockHomePage;