import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import whey1 from "../photos/Whey1.jpg";
import whey2 from "../photos/whey2.webp";
import whey3 from "../photos/whey3.png";
import dopalacz from "../photos/dopalacz.webp";




function SecondBlockHomePage() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const buyWriting ={
        fontSize: '80px',
        fontWeight: 'bold',
    };

    const product ={
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        boxShadow: '0 0 9px rgba(0,0,0,.185)',
    };

    const productPhoto ={
        height: '45vh',
        width: '28vh',
        margin: '10px',
    };

    const price ={
        fontSize: '30px',
        margin: '10px',

    };

    const buttonStyle ={
        height: '100%',
        width: '60%',
        background: 'black',
        color: 'white',
        margin: '10px',
        '&:hover': {
            background: 'white',
        },
    };
    return (
        <>
            <p style={buyWriting}>Kup coś w naszym sklepie!</p>
            <div className="SecondBlockHomePage hidden">

                <Carousel responsive={responsive}>
                    <div style={product}>
                        <img style={productPhoto} src={whey1}/>
                        <h2>białko dla byków</h2>
                        <p style={price}> $20.99</p>
                        <p>
                            <button style={buttonStyle}>Add to Cart</button>
                        </p>
                    </div>
                    <div style={product}>
                        <img style={productPhoto} src={whey2}/>
                        <h2>białko dla profesjonalistów</h2>
                        <p style={price}> $40.99</p>
                        <p>
                            <button style={buttonStyle}>Add to Cart</button>
                        </p>
                    </div>
                    <div style={product}>
                        <img style={productPhoto} src={whey3}/>
                        <h2>białko dla studentów</h2>
                        <p style={price}> $10.99</p>
                        <p>
                            <button style={buttonStyle}>Add to Cart</button>
                        </p>
                    </div>
                    <div style={product}>
                        <img style={productPhoto} src={dopalacz}/>
                        <h2>Dopalacz z Indii</h2>
                        <p style={price}> $99.99</p>
                        <p>
                            <button style={buttonStyle}>Add to Cart</button>
                        </p>
                    </div>
                </Carousel>
            </div>
        </>
    );
}

export default SecondBlockHomePage;