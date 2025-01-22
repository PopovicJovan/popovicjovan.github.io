


const ProjectCardButton = ({type, url}) => {

    const handleClick = () => {
        if(url) window.open(url, "_blank");
    }
    const media = type === "gh" ? "Github" : "Website";

    return (<a onClick={handleClick} className="my-button">{media}</a>)

}

export default ProjectCardButton;