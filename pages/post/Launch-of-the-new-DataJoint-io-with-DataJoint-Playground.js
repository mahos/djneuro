import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout.js';

function formatDate(date) {
    return date.toString().split(' ').slice(1, 4).join(' ') //TODO: toString() by default displaces the date by +1 - fix to reflect actual date
}
class PostImage extends React.Component {
    render(img = this.props) {
        return (
            <div className="postImageContainer">
                <img src={img.src} alt={img.title} />
                <style jsx>{`
                    .postImageContainer img {
                        max-width: 500px;
                    }
                    @media (max-width: 768px) {
                        .postImageContainer img {
                            max-width: 90%;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default class extends React.Component {

    static async getInitialProps(props) {
    // static async getStaticProps(props) {
        const fileName = props.asPath.split('/')[2]
        // console.log('filename is: ', fileName)
        const post = await import(`../../markdowns/${fileName}.md`);

        const document = matter(post.default);
        if (document) {
            const formattedDate = formatDate(document.data.date)
            document.data['dateOnly'] = formattedDate;
            // document['data']['dateOnly'] = formatDate(post['document']['data']['date']);
        }

        return {
            ...document
        };
    }
    render() {
        if (this.props.content) {
            return (
                <Layout>
                    <section className="post">
                      <div className="post-container">
                          <div className="post-date">{`${this.props.data.dateOnly}`}</div>
                          <div className="post-title">{this.props.data.title}</div>
                          {/* <i>{`${this.props.data.dateOnly} | Tags: ${this.props.data.tags} | Categories: ${this.props.data.categories}`}</i> */}
                          
                          <div className="post-content-wrapper">
                              <ReactMarkdown source={this.props.content}
                                  escapeHtml={false}
                                  renderers={{
                                      image: props => (
                                          <PostImage {...props} />
                                      )
                                  }} 
                              />
                          </div>
                      </div>
                    </section>
                    <style jsx>{`
                    section.post {
                        width: 100%;
                        position: relative;
                    }

                    .post-container {
                        width: 80%;
                        margin: 0 auto;
                        padding: 10% 0 5%;
                    }

                    .post-date {
                      font-size: 1rem;
                      margin-bottom: 8px;
                      color: slategrey;
                    }
                    .post-title {
                      font-weight: 600;
                      font-size: 1.4rem;
                      margin-bottom: 16px;
                    }

                    @media (max-width: 1024px) {
                        
                    }
                    @media (max-width: 768px) {
                        
                        
                    }
                    @media (max-width: 480px) {
                        
                    }
=
                `}</style>
                </Layout>
            )
        } else {
            return (
                <Layout>
                    <div className="post-container">
                        <h3>Under Construction</h3>

                    </div>
                    <style jsx>{`
                        .post-container {
                            width: 80%;
                            position: relative;
                            margin: 0 auto;
                            padding-top: 10%;
                        }

    =
                    `}</style>
                </Layout>
            )
        }
    }
}