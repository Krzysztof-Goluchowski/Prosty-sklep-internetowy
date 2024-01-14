import React from "react";

function ThirdBlockHomePage() {
    const mainWriting ={
        fontWeight: 'bold',
        fontSize: '80px',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const plansSpace ={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        height: '100%',
        width: '100%',
    };

    const plan ={
        height: '70%',
        width: '20%',
        background: 'black',
        margin: 'auto',
        padding: '2em',
    };

    const nameOfPlan ={
        fontSize: '2em',
        color: 'white',
    };

    const price ={
        color: 'white',
        fontSize: '3em',
    };
    const monthly ={
        fontSize: '20px',
    };
    const hrLine ={
        color: 'white',
    };
    const listOfBenefits ={
        listStyleType: 'none',
    };
    const itemFromList ={
        fontSize: '1.75em',
        color: 'white',
    };
    const buttonStyle ={
        height: '100%',
        width: '60%',
        background: 'white',
        color: 'black',
        margin: '20px',
    };
    const bestSeller ={
        background: 'green',
        fontSize: '1.4rem',
        padding: '0.4em',
        position: 'absolute',
        // right: '50%',
        textAlign: 'center',
        // top: '10px',
        transform: 'rotate(35deg)',
        width: '200px',
    };
    return (
        <>
            <div className="ThirdBlockHomePage">
                <p style={mainWriting}>Wybierz plan idealny dla Ciebie!</p>
                <div style={plansSpace}>
                    <div style={plan}>
                        <h3 style={nameOfPlan}>Beginner</h3>
                        <p style={price}>$29 <span style={monthly}> /miesięcznie</span></p>
                        <hr style={hrLine}/>

                        <ul style={listOfBenefits}>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>
                                Łazienka
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>

                                Czyste Szatnie
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>

                                Zajęcia grupowe
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="red" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" className="pricing__icon  pricing__icon--close" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg></span>

                                Strefa SPA
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="red" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" className="pricing__icon  pricing__icon--close" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg></span>

                                Trener personalny
                            </li>
                        </ul>
                        <p>
                            <button style={buttonStyle}>Add to Cart</button>
                        </p>
                    </div>
                    <div style={plan}>
                        {/*<span style={bestSeller}>Best Seller!</span>*/}
                        <h3 style={nameOfPlan}>Regular</h3>
                        <p style={price}>$49 <span style={monthly}> /miesięcznie</span></p>
                        <hr style={hrLine}/>

                        <ul style={listOfBenefits}>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>
                                Łazienka
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>

                                Czyste szatnie
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>

                                Zajęcia grupowe
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>

                                Strefa SPA
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="red" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" className="pricing__icon  pricing__icon--close" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg></span>

                                Trener personalny
                            </li>
                        </ul>
                        <p>
                            <button style={buttonStyle}>Add to Cart</button>
                        </p>
                    </div>
                    <div style={plan}>
                        <h3 style={nameOfPlan}>Professional</h3>
                        <p style={price}>$89 <span style={monthly}> /miesięcznie</span></p>
                        <hr style={hrLine}/>

                        <ul style={listOfBenefits}>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>
                                Łazienka
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>

                                Czyste szatnie
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>

                                Zajęcia grupowe
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>

                                Strefa SPA
                            </li>
                            <li style={itemFromList}>
                                <span><svg stroke="currentColor" color="green" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pricing__icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span>

                                Trener personalny
                            </li>
                        </ul>
                        <p>
                            <button style={buttonStyle}>Add to Cart</button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThirdBlockHomePage;