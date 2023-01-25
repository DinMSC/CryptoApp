import { Image } from 'react-native';
import SearchIcon from '../../../assets/search-bar-01.png';

const Searchbar = () => {
    return <Image source={SearchIcon} style={{ width: 45, height: 45 }} />;
};

export default Searchbar;
