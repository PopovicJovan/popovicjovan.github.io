import noImage from "../Images/no-image.jpg"
import ProjectCardButton from "./ProjectCardButton";

const ProjectCard = ({project}) => {
    return (
        <div className="card card-size">
            <img className="card-img-top card-img-size card-img-darkness" src={project?.image ?? noImage} alt="Card image"/>
            <div className="card-body bg-black">
                <h5 className="card-title text-white text-justify">{project?.title ?? 'Card title'}</h5>
                <p className="card-text text-white card-body-text-size">{project?.description ??
                    'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}
                </p>
                <div className="p-0 m-0">
                    <h3 className="text-center text-white">Tehnologies</h3>
                    <div className="w-100 d-flex justify-content-around align-items-center">
                        {
                            project?.tehnologies?.map((tehnology, index) =>
                                <span key={index} className="badge bg-secondary me-1">{tehnology}</span>)
                        }
                    </div>
                </div>
                <div className="d-flex w-100 justify-content-around align-items-center pt-3">
                    <ProjectCardButton type="gh" url={project?.ghUrl} />
                    <ProjectCardButton type="ws" url={project?.wsURl}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;