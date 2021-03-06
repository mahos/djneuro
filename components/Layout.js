import Navigation from './Navigation';
import Head from './Head';
import Footer from './Footer';

const layoutStyle = {
    padding: '0',
    margin: '0',
    textAlign: 'center',
    height: 'fit-content',
    minHeight: '100vh',
    position: 'relative'
};

const generalStyle = {
    fontFamily: 'sans-serif'
}

const Layout = props => (
    <div style={generalStyle}>
        <Head />
        <Navigation />
        <div style={layoutStyle}>
            { props.children }
        </div>
        <Footer />
    </div>
)
export default Layout;