import headerImage from '../assets/horizon_header1.png'

const Header = () => {
    return (
        <header  
            className="w-full h-40 border-b border-gray-300 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${headerImage})` }}
        />
    );
  };
  
  export default Header;
  