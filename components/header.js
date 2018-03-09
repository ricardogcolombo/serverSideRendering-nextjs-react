import AppBar from 'material-ui/AppBar';

const Header = ({
        title = 'Next.js bloggin app'
    }) =>
    <AppBar title={title} showMenuIconButton = {false}/>


export default Header;
