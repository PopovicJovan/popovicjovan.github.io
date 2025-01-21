import NavBar from '../Components/NavBar';
const MainPage = () => {
    return (
        <div className="main-page-color w-100">
            <NavBar/>
            <div className="d-flex flex-column justify-content-center align-items-center" id="main-page-content">
                <div className="image-div">
                    <div className="my-image"></div>
                </div>
                <div id="about-me">
                    <p id="about-head">ABOUT ME</p>
                    <p id="about-content">
                        <p id="hi" className="p-1 m-0">Hi there! 👋</p>
                        <p className="p-1 m-0">
                            I am Jovan Popovic, based in Podgorica, Montenegro and currently high school student.
                        </p>
                        <p className="p-1 m-0">
                            I’m  web developer with a strong focus on backend programming, but with  experience  in frontend development, which allows me to create fully functional  websites from start to finish. My goal is to build efficient, scalable, and well-structured solutions that provide seamless user experiences.
                        </p>
                        <p className="p-1 m-0">
                            As a tech enthusiast, I’m deeply passionate about programming and science, constantly exploring new tools, technologies, and methodologies to improve my craft. My experience spans a wide range of technologies, including FastAPI, MySQL, Django and Laravel, as well as frontend frameworks like React and  knowledge of HTML, CSS, and JavaScript.
                        </p>
                        <p className="p-1 m-0">
                            I’m also comfortable working in Linux environments and have experience deploying projects. Beyond coding, I enjoy digging deep into different concepts, whether it’s economy based topics or exploring advanced topics like neural networks and their real-world applications.
                        </p>
                        <p className="p-1 m-0">
                            When I’m not immersed in programming, I like to develop my knowledge about entrepreneurship, business or economy. My drive to learn and innovate keeps me motivated to tackle challenging projects, whether solo or as part of a team.
                        </p>
                        <p className="p-1 m-0">
                            If you’re looking for someone who combines technical expertise with creativity and a problem-solving mindset, feel free to reach out. Let’s build something amazing together!
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainPage;