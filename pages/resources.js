import Layout from '../components/Layout.js';
import PipelinePage from './pipelines.js';

export default function Resources() {
    return (
        <Layout>
            <div className="resourceSection">
                <h3>Free Resources</h3>
                <p className="subtitle">DataJoint Neuro is the principal contributor to the free, community-oriented, open-source tools comprising the DataJoint ecosystem:</p>
                <ul className="resourcesListRow">
                    <li className="resourcePanel">DataJoint Reference <span>Documentation</span>
                        <a href="https://docs.datajoint.io" target="_blank"><img src="/static/images/icons/news-pin" /></a></li>
                    
                </ul>
            </div>
            <PipelinePage></PipelinePage>
            <style jsx>{` {
                h3 {
                    margin: 0;
                }

                img {
                    height: 70px;
                }

                a {
                    display: block;
                    margin-top: 13px;
                }

                .resourceSection {
                    background-image: url("/static/images/artwork/blue-cherry-flicker.gif");
                    background-size: cover;
                    background-attachment: fixed;
                    background-repeat: no-repeat;
                    background-position: top right;
                    color: #DDD;
                    padding: 80px 0 60px;
                    // background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.7));
                }
                .subtitle {
                    line-height: 0.8;
                    font-size: 0.85em;
                    padding: 5px 5%;
                    text-align: center;
                }

                .resourcePanel {
                    width: 17%;
                    border-radius: 4px;
                    border: 1px solid transparent;
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 20px 8px;
                    margin: 5px;
                }
                .resourcePanel:hover {
                    border: 1px solid white;
                    // background-color: rgba(100, 0, 126, 0.6);
                    background-color: rgba(0, 0, 0, 0.75);
                }

                .resourcePanel span {
                    display: block;
                }

                .resourcesListRow {
                    display: flex;
                    flex-direction: row;
                    list-style: none;
                }
                @media (max-width: 1024px) {
                    .subtitle {
                        line-height: 1.2;
                        font-size: 0.84em;
                    }
                    .resourcesListRow {
                        padding-left: 0.2%;
                    }
                    .resourcePanel {
                        font-size: 86%;
                        margin-left: 2px;
                        margin-right: 2px;
                    }
                    img {
                        height: 60px;
                    }
                }
               
                @media (max-width: 768px) {
                    .resourcesListRow {
                        margin-left: 10%;
                        display: inline-block;
                    }
                    .resourcePanel {
                        font-size: 82%;
                        width: 120px;
                        height: 100px;
                        float: left;
                    }
                    .subtitle {
                        line-height: 1.1;
                        font-size: 0.82em;
                    }

                    img {
                        height: 50px;
                    }

                        
                }

                @media (max-width: 480px) {
                    .resourcesListRow {
                        margin-left: 10px;
                        width: 100%;
                        text-align: center;
                    }
                    .resourcePanel {
                        font-size: 82%;
                        min-width: 40%;
                        max-width: 45%;
                        // height: 100px;
                        float: left;
                        margin: 1px;
                    }
                }
            }
            `}</style>
        </Layout>
    );
}

