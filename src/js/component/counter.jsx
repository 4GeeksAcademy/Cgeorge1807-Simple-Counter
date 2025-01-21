import React from "react";
import Card from "./card";

const Counter = ({ digito }) => {
    console.log(digito)
    return (
        <div>
            <h1 className="text-center">Contador</h1>
            <div className="d-flex justify-content-center">
                <div className="p-3 text-white card mb-3 bg-dark m-1" style={{ width: "6rem",height: "7rem" }}>
                    {/* <i className="fa fa-clock text-white text-center m-2 fs-1"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                </div>
                <Card digito={Math.floor(digito / 100000 % 10)} />
                <Card digito={Math.floor(digito / 10000 % 10)} />
                <Card digito={Math.floor(digito / 1000 % 10)} />
                <Card digito={Math.floor(digito / 100 % 10)} />
                <Card digito={Math.floor(digito / 10 % 10)} />
                <Card digito={digito % 10} />
            </div>
        </div>
    );
};

export default Counter