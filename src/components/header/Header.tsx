import AddPost from '../../assets/AddPost.svg';
import SignInOrUpButton from '../../assets/SignInUpButton.svg';
import Logo from '../../assets/LOGO_KDRBLOG.svg';

import './Header.css';

export default function Header() {
    return (
        <>
        <div className="rootHeader">
            <div className="logoHeader">
                <img src={Logo} alt="" />
            </div>
            <div className="signinupHeader">
                <img className="button" src={SignInOrUpButton} alt="" />
            </div>
            <div className="addpostHeader">
                <img className="button" src={AddPost} alt="" />
            </div>
        </div>
        </>
    )
}