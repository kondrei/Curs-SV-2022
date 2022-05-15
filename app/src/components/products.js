import PropTypes from "prop-types";

const Product = (props) => {
    return (
        <>
            <div className="card" style={{ backgroundColor: props.color }}>
                <div className="image">
                    <img src={"https://loremflickr.com/200/150/food?random=" + Math.round(Math.random() * 5)} alt="" width={200} height={150} />
                </div>
                <div className="description">
                    {(props.denumire) ? <p><strong>Denumire </strong>{props.denumire}</p> : <p className="error">Denumire inexistenta</p>}
                    {(props.pret) ? <p><strong>Pret </strong>{props.pret}</p> : <p className="error">Pret inexistent</p>}
                    {(props.categorie) ? <p><strong>Categorie </strong>{props.categorie}</p> : <p className="error">Categorie inexistenta</p>}

                </div>
            </div>
        </>
    );
}

Product.propTypes = {
    denumire: PropTypes.string,
    pret: PropTypes.number,
    categorie: PropTypes.string,
};

Product.defaultProps = {
    color: "#ffe6e6"
};

export default Product;