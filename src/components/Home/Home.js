import React from "react";
import Vehicles from "../Vehicles/Vehicles";

const Home = () => {
    const style = {
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        height: "310px",
    };
    const vehicles = [
        {
            title: "BIKE",
            description: "",
            imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyispIW51B67V9rEb6Sr61K-q6WccEZ3FqXGz5JWDHeXAMXvrFOJWLfFUCr3pZYwy-eOQ&usqp=CAU",
            id: 1,
            capacity: 1,
            avatar: "S",
            price: 69,
        },
        {
            title: "CAR",
            description:
                "Superior Double Rooms are perfectly equipped for traveling couples or friends.",
            imgUrl:
                "https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png  ",
            id: 2,
            capacity: 3,
            avatar: "D",
            price: 49,
        },
        {
            title: "BUS",
            description:
                " Have lots of in-room facilities and are designed in open-concept living area.",
            imgUrl:
                " https://i.pinimg.com/originals/62/0c/a4/620ca40325918dee591c74383eefca30.png",
            id: 3,
            capacity: 35,
            avatar: "F",
            price: 20,
        },
        {
            title: "TRAIN",
            description: " ",
            imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsRbYD3tG_CfJLSA5pcdYwIysgVWhl3Rm3HWKdGqFKGCLDGSNXu85L1MV87f4QgalpB4&usqp=CAU",
            id: 4,
            capacity: 4,
            avatar: "F",
            price: 199,
        },
    ];
    return (
        <div className="container">
            <div style={style} className="row">
                {vehicles.map((vehicle) => (
                    <Vehicles key={vehicle.id} vehicle={vehicle}></Vehicles>
                ))}
            </div>
        </div>
    );
};

export default Home;
