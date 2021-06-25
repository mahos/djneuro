import Navigation from './Navigation';
import Head from './Head';
import Footer from './Footer';

const layoutStyle = {
    padding: '0',
    margin: '0',
    height: 'fit-content',
    minHeight: '100vh',
    position: 'relative',
    fontSize: '14pts'
};

const generalStyle = {
    fontFamily: 'sans-serif',
    backgroundColor: '#FCFCFC',
    color: '#1A1A1A',
    lineHeight: '1.6rem'
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