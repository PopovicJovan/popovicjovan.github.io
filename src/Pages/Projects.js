import NavBar from "../Components/NavBar";
import ProjectCard from "../Components/ProjectCard";
import {useSwipeable} from "react-swipeable";
import {useState} from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";


const Projects = () => {
    const [projectId, setProjectId] = useState(1);


    const projects = [
        {
            id: 1,
            title: 'Rent a Car platform',
            description: "A backend developed using Laravel, easily integratable with a frontend, allowing users to quickly rent a car.",
            ghUrl: "https://github.com/PopovicJovan/Rent-a-Car",
            wsUrl: undefined,
            tehnologies: ["Laravel", "PHP", "MySQL"]
        },
        {
            id: 2,
            title: 'Blog platform',
            description: "A backend developed using Django, allowing users to create profiles where they can post blogs.",
            ghUrl: "https://github.com/PopovicJovan/FinalProject-Backend",
            wsUrl: undefined,
            tehnologies: ["Django", "Python", "MySQL"]
        },
        {
            id: 3,
            title: 'Movie search platform',
            description: "A backend developed using Laravel, enabling users to search for movies and interact with related data.",
            ghUrl: "https://github.com/PopovicJovan/praksa-laravel",
            wsUrl: undefined,
            tehnologies: ["Laravel", "PHP", "MySQL"]
        },
        {
            id: 4,
            title: 'Yacht rent and sale platform',
            description: "A backend developed using FastAPI, allowing users to rent or buy yachts efficiently.",
            ghUrl: "https://github.com/PopovicJovan/devlab-final-fapi",
            wsUrl: undefined,
            tehnologies: ["FastAPI", "Python", "MySQL"]
        }
    ];


    const handlers = useSwipeable({
        onSwipedLeft: () => {
            const y = projectId === projects.length ? 1 : projectId + 1;
            setProjectId(y);
        },
        onSwipedRight: () => {
            const y = projectId === 1 ? projects.length : projectId - 1;
            setProjectId(y);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });
    return (
        <>
            <h1 className="text-center text-white mb-3">MY PROJECTS</h1>
            <div className="d-none d-sm-flex flex-wrap justify-content-around">
                {projects.map(project => <ProjectCard key={projectId} project={project}/>)}
            </div>
            <div className="d-flex d-sm-none justify-content-center align-items-center" {...handlers}>
                <FaLongArrowAltLeft color="white"/>
                {projects[projectId - 1] && (<ProjectCard key={projectId} project={projects[projectId - 1]}/>)}
                <FaLongArrowAltRight color="white" />
            </div>
        </>
    )
}

export default Projects;