const PipelinePage = () => (
    <div>
        <div className="pipelinePageContainer">
            <h2>Coming Soon...</h2>
            <h3>The DataJoint Pipelines</h3>
            {/* <p className="pipelineNotice">In collaboration with Karel Svoboda's Lab and Lawrence Berkeley Lab, DataJoint Neuro is preparing a set of "Canonical Data
                Pipelines for Neurophysiology" to be presented at the <a className="inlineLink" href="https://www.sfn.org/Meetings/Neuroscience-2019">Society for
                Neuroscience Conference</a> in October of 2019.
            </p> */}
            <p className="pipelineNotice">In collaboration with Karel Svoboda's Lab, DataJoint Neuro is preparing a set of "Canonical Data
                Pipelines for Neurophysiology" to be presented at the <a className="inlineLink" href="https://www.sfn.org/Meetings/Neuroscience-2019">Society for
                Neuroscience Conference</a> in 2019 - poster DD27 on October 21st (Mon), 1-5PM.
            </p>
            <p className="pipelineNotice">Example pipelines utilizing the canonical pipelines can be found <a className="inlineLink" target="_blank" href="https://github.com/vathes/DataJoint-NWB-showcase">here</a>.
            <br /> Other datajoint pipeline examples can be found in this <a className="inlineLink" target="_blank" href="https://catalog.datajoint.io/">catalog</a>.
            </p>
        </div>
        <style jsx>{`
            h2, h3 {
                text-align: center;
            }
            h2 {
                color: blueviolet;
            }
            .pipelinePageContainer {
                // backgroundImage: url("");
                background: linear-gradient(#0f040f, #0f040f, #001226);
                background-size: cover;
                background-repeat: no-repeat;
                // color: #E1EBF7;
                color: #DDD;
                padding: 12% 14% 17%;
                line-height: 1.4em;
                text-align: left;
            }
            p.pipelineNotice {
                line-height: 1.5;
                font-size: 1.0em;
                padding: 5px 2%;
                text-align: left;
            }
            a.inlineLink {
                text-decoration: none;
                color: #CAE7FF; // light bluish grey
            }

            a.inlineLink:hover {
                color: #41B0F7; // muted blue
            }

        `}</style>
    </div>
);

export default PipelinePage;