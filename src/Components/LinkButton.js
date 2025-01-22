import Button from '@mui/material/Button';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons';
const LinkButton = ({url, icon}) => {
    const handleClick = (url) => window.open(url, '_blank');
    const iconStyle = {
        width: '43px',
        height: '43px',
    };
    if (icon === 'chrome') url = 'http://localhost:3000/';
    return (
        <Button variant="contained" className="w-100 d-flex justify-content-center align-items-center"
                onClick={() => handleClick(url)}>
            <SocialIcon url={`www.${icon}.com`} className="me-2" style={iconStyle}/>
            <span className="flex-grow-1 text-center me-3">{icon}</span>
        </Button>
    )
}

export default LinkButton;