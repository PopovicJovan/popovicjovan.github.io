import LinkButton from "../Components/LinkButton";

const ContactPage = () => {
    const name = {
        fontFamily: 'Space Mono, monospace',
        fontSize: 'clamp(1rem, 5vw, 5rem)',
        color: 'white',
        whiteSpace: 'nowrap',
        borderRadius: 'clamp(0.4rem, 0.75vw, 1rem)'

    };
    return (
        <div className="vh-100 w-100  d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: "rgba(23, 37, 84, 1)"}}>
            <h1 className="mb-4" style={name}>Popović Jovan</h1>
            <div id="Buttons" className="h-50 w-75 d-flex flex-column justify-content-between">
                <LinkButton url="mailto:jovan6.p@gmail.com" icon="email"></LinkButton>
                <LinkButton url="https://www.github.com/PopovicJovan" icon="github"></LinkButton>
                <LinkButton url="https://www.linkedin.com/in/pjovan6" icon="linkedin"></LinkButton>
                <LinkButton url="https://www.instagram.com/jovan_0610" icon="instagram"></LinkButton>
                <LinkButton url="https://discord.com/users/popovicjovan06" icon="discord"></LinkButton>
                <LinkButton url="https://jovan.popovic.pro" icon="chrome"></LinkButton>
            </div>
        </div>

    )
}

export default ContactPage;
