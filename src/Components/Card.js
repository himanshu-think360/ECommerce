export default function Card(){
    return(
        <div className="cardcontainer">
            <div className="cardimage"></div>
                <div className="carddesc">
                    Coffee
                </div>
                <hr />
                <div className="cardbuttons">
                    <button>Add to cart</button>
                </div>
            </div>
    );
}