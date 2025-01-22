import TehnologyBox from "../Components/TehnologyBox";

const Tehnologies = () => {
    const tehnologies = [
        {
            id: 1,
            name: "FRONTEND",
            value: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"]
        },
        {
            id: 2,
            name: "BACKEND",
            value: ["PYTHON", "PHP", "LARAVEL", "FASTAPI", "DJANGO"]
        },
        {
            id: 3,
            name: "QA TOOLS",
            value: ["POSTMAN"]
        },
        {
            id: 4,
            name: "DATABASES",
            value: ["MYSQL"]
        }
    ]



    return (
        <>
            <h1 className="text-center text-white mb-3">TEHNOLOGIES</h1>
            <div className="w-100 d-flex flex-wrap">
                {tehnologies.map((tehnology, index) => <TehnologyBox key={index} name={tehnology.name} list={tehnology.value}/>)}
            </div>
        </>
    )
}

export default Tehnologies;