const Card = ({ title, children }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="font-semibold">{title}</h2>
            {children}
        </div>
    );
};

export default Card;
