

const TehnologyBox = ({name, list}) => {

    return (
        <div className="tehnology-box-size">
            <h3 className="text-white text-center">{name}</h3>
            <ul id="tehnology-list">
                {list.map((item, index) => <li key={index} className="me-1"><h5 className="text-white">{item}</h5></li>)}
            </ul>
        </div>
    )

}

export default TehnologyBox;