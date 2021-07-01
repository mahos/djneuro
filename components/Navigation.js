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
                    <div className="nav-left">
                        <Link href="/">
                            <a className="link-home">
                                 <img className="home-logo" src="/static/images/logo/datajoint-logo-white.png" />
                            </a>
                        </Link>
                    </div>
                    <div className={`nav-right ${this.state.menuOpen ? 'visible': 'invisible'}`} onClick={() => this.setState({menuOpen: !this.state.menuOpen})}>
                        <div className="link-wrap">
                            <ActiveLink href="/about">About</ActiveLink>
                        </div>
                        <div className="link-wrap">
                            <ActiveLink href="/services">SciOps</ActiveLink>
                        </div>
                        <div className="link-wrap">
                            <ActiveLink href="/resources">Resources</ActiveLink>
                        </div>
                        <div className="link-wrap">
                            <ActiveLink href="/news">News</ActiveLink>
                        </div>
                    </div>
                </nav>
                <style jsx>{`
                    nav {
                        position: fixed;
                        display: inline-block;
                        width: 100%;
                        background: linear-gradient(to right bottom, #1A1A1A, #050E27 30%, rgba(15, 53, 149, 0.8) 90%);
                        padding: 4px 2.5%;
                        box-sizing: border-box;
                        height: 64px;
                        z-index: 999;
                    }
                   .nav-left {
                       position: relative;
                       float: left;
                   }
                   .nav-right {
                       position: relative;
                       display: flex;
                       float: right;
                       margin-top: 16px;
                   }
                   .link-home {
                       border-bottom: none;
                       padding-bottom: 0;
                   }
                   .home-logo {
                      position: relative;
                      height: 46px;
                      margin-top: 4px;
                   }

                    .link-wrap {
                        //border: 1px solid red;
                    }

                    .link-wrap:hover { 
                        border-bottom: solid 4px #1CA9F9; // lightest shade of revamped dj logo
                    }

                    @media(max-width: 768px) {
                        .nav-right .link-wrap {
                            display: none;
                        }
                        .nav-right:before {
                            content: "\u2261";
                            font-size: 50px;
                            color: white;
                            position: relative;
                            margin: 0 15px;
                            transform: translateY(-25%);
                        }
                        .nav-right.visible {
                            display: block;
                            position: absolute;
                            z-index: 500;
                            flex-direction: column;
                            content: '';
                            background-color: #0f040f;
                            right: 0;
                            margin-top: 0;
                            width: 66%;
                            text-align: center;
                            padding-left: 12px 12px 24px;
                        }
                        .nav-right.visible .link-wrap {
                            display: block;
                            float: bottom;
                            padding: 20px 0;
                        }
                        .nav-right.visible .link-wrap:hover {
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