import Link from 'next/link';
import ActiveLink from './ActiveLink';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu() {
        this.state.menuOpen = !this.state.menuOpen;
    }
    render() {
        // console.log('props? ', this.state.param);
        return (
            <div>
                <nav>
                    <div className="navLeft">
                        <Link href="/">
                            <a className="linkHomeStyle">
                                 <img className="linkLogoStyle" src="/static/images/logo/djneuroLogo.png" />
                            </a>
                        </Link>
                    </div>
                    <div className={`navRight ${this.state.menuOpen ? 'visible': 'test'}`} onClick={() => this.setState({menuOpen: !this.state.menuOpen})}>
                        <div className="linkWrap">
                            <ActiveLink href="/about">About</ActiveLink>
                        </div>
                        <div className="linkWrap">
                            <ActiveLink href="/services">SciOps</ActiveLink>
                        </div>
                        <div className="linkWrap">
                            <ActiveLink href="/resources">Resources</ActiveLink>
                        </div>
                        <div className="linkWrap">
                            <ActiveLink href="/news">News</ActiveLink>
                        </div>
                    </div>
                </nav>
                <style jsx>{`
                    nav {
                        position: relative;
                        display: inline-block;
                        width: 100%;
                        background: linear-gradient(#0f040f, #0f040f, #001226);
                        padding: 0;
                    }
                   .navLeft {
                       position: relative;
                       float: left;
                   }
                   .navRight {
                       position: relative;
                       float: right;
                       top: 42px;
                       display: flex;
                       flex-direction: row;
                   }
                   .linkHomeStyle {
                       border-bottom: none;
                       padding-bottom: 0;
                   }
                   .linkLogoStyle {
                       height: 65px;
                       display: inline-block;
                   }
                    // a {
                    //     color: #DDD;
                    //     text-decoration: none;
                    //     padding: 15px 10px 9px 10px;
                    // }

                    // a.linkStyle {
                    //     margin-right: 8px;
                    // }

                    a.inView {
                        border-bottom: solid 4px #1CA9F9; // lightest shade of revamped dj logo
                        position: relative;
                        z-index: 100;
                    }
                    .linkWrap {
                        padding: 15px 0px 9px 7px;
                        margin-top: -15px;
                    }

                    .linkWrap:hover { 
                        border-bottom: solid 4px #1CA9F9; // lightest shade of revamped dj logo
                    }

                    @media(max-width: 768px) {
                        .navRight .linkWrap {
                            display: none;
                        }
                        .navRight:before {
                            content: "\u2261";
                            font-size: 50px;
                            color: white;
                            position: relative;
                            margin: 0 15px;
                            transform: translateY(-60%);
                        }
                        .navRight.visible {
                            display: block;
                            position: absolute;
                            z-index: 500;
                            flex-direction: column;
                            content: '';
                            background-color: #0f040f;
                            right: 0;
                            width: 66%;
                            text-align: center;
                            padding-left: 25px;
                        }
                        .navRight.visible .linkWrap {
                            display: block;
                            float: bottom;
                            padding: 20px 0;
                        }
                        .navRight.visible .linkWrap:hover {
                            border-bottom: none;
                            border-left: 10px solid #0f040f;
                        }
                    }
                `}</style>
            </div>
        );
    }
}
export default Navigation;

// export default NaviTest;