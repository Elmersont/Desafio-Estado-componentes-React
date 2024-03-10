import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

const SocialButton = (props) => {
    let icon;
    if (props.type === 'facebook') {
      icon = faFacebook;
    } else if (props.type === 'github') {
      icon = faGithub;
    } else {
      icon = faLinkedin;
    }
  
    return (
        
                <FontAwesomeIcon icon={icon} size='2xl'/>
                       
        );
    }

export default SocialButton;