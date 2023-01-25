import { Image } from 'react-native';
import MyLogo from '../../assets/MyLogo.png';

const Logo = () => {
    return <Image source={MyLogo} style={{ width: 237, height: 90 }} />;
};

export default Logo;
