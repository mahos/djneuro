import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import Link from 'next/link';
import Layout from '../components/Layout.js';


function formatDate(date) {
    // console.log('inside formatDate');
    // 2017-06-12T19:33:20.000Z ...(date) 
    // 'Mon Jun 12 2017 14:33:20 GMT-0500 (CDT) ...(date.toString())
    // console.log(date, '(original)', date.toString(), '(postFormat)')
    return date.toString().split(' ').slice(1, 4).join(' ') //TODO: toString() by default displaces the date by +1 - fix to reflect actual date
}

class TopPostHeaderImage extends React.Component {
    render(img = this.props) {
        return (
            <div className="top-post-header">
                <div className="image-container">
                  <img className="header-image" src={img.src} alt={img.title} />
                </div>
                <style jsx>{`
                    .top-post-header .image-container {
                        box-shadow: 0px 2px 6px grey;
                        height: fit-content;
                        max-height: 400px;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        position: relative;
                        border-radius: 2px;
                        margin-bottom: 16px;
                        width: 50%;
                    }
                    .post-card-header img.header-image {
                        position: relative;
                        width: 100%;
                        display: block;
                    }
                `}</style>
            </div>
        )
    }
}

class TopPostText extends React.Component {
    render(paragraph=this.props) {
        return (
            <div>
                <div className="top-post-text-content">
                  {paragraph.children}
                </div>
                <style jsx>{`
                     .top-post-text-content {
                        position: relative;
                        display: block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 6;
                        -webkit-box-orient: vertical;
                        width: 90%;
                        margin-left: 10%;
                    }
                `}</style>
            </div>
        )
    }
}

class PostMissingImage extends React.Component {
    render(img = this.props) {
        return (
            <div className="hidden-post-image">
                <style jsx>{`
                    .hidden-post-image {
                        display: none;
                    }
                `}</style>
            </div>
        )
    }
  }

class PostHeaderImage extends React.Component {
  render(img = this.props) {
      return (
          <div className="post-card-header">
              <div className="image-container">
                <img className="header-image" src={img.src} alt={img.title} />
              </div>
              <style jsx>{`
                  .post-card-header .image-container {
                      // border: 1px solid lightgrey;
                      box-shadow: 0px 2px 6px grey;
                      height: 200px;
                      overflow: hidden;
                      display: flex;
                      align-items: center;
                      position: relative;
                      border-radius: 2px;
                      margin-bottom: 16px;
                  }
                  .post-card-header img.header-image {
                      position: relative;
                      width: 100%;
                      display: block;
                  }
              `}</style>
          </div>
      )
  }
}


class PostTitleCroppedText extends React.Component {
  render(paragraph=this.props) {
      return (
          <div>
              <div className="cropped-text-content">
                {paragraph.children}
              </div>
              <style jsx>{`
                   .cropped-text-content {
                      position: relative;
                      width: 100%;
                      display: block;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 4;
                      -webkit-box-orient: vertical;
                  }
              `}</style>
          </div>
      )
  }
}

class BlogIndex extends React.Component {
    constructor(props) {
        super(props)
    }
// export default class extends React.Component {
    static async getInitialProps() {
    // static async getStaticProps() {
        // Get contents from posts folder
        const posts = (items => {
            // console.log(items);
            const keys = items.keys();
            const values = keys.map(items);
            const data = keys.map((key, index) => {
                // Create slug from filename
                const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
                const value = values[index];
                // Parse document
                let document = matter(value.default);
                
                return {
                    document,
                    slug
                };
            });
            // console.log(data[0]);
            const sortedData = _.orderBy(data, ['document.data.date'], ['desc']);
            for (const post of sortedData) {
                post['document']['data']['dateOnly'] = formatDate(post['document']['data']['date']);
                // console.log(post.document.data.date, post.document.data.dateOnly);
            }
            // sortedData['document']['data']['date'].toString().split('T')[0];
            // console.log(sortedData[0].document);

            return sortedData;
        })(require.context('../markdowns', true, /\.md$/));
        return {
            posts
        };
    }

    contentParse(content) {
        // console.log('parsing content: ', content);
        let contentList = content.split('\n');
        let headerImage = ''
        let headerText = ''
        contentList.forEach(block => {
            if (block.length && block.startsWith('![](') && headerImage.length == 0) {
                headerImage = block;
            }

            if (block.length && !block.startsWith('![](') && headerText.length == 0) {
                headerText = block;
            }
        })

        let newContent = headerImage + '\n' + '' + '\n' + headerText;

        return newContent;
    }

    styleTopNews(content) {
        let newContent = this.contentParse(content);

        return (newContent.startsWith('![](/static/posts/') ? 

        <ReactMarkdown source={newContent} 
            escapeHtml={false}
            renderers={{
                image: props => (
                    <TopPostHeaderImage {...props} />
                ),
                paragraph: props => {
                    return (
                    <TopPostText {...props} />
                )}
            }}
        />
        :
        <div>
            <div className="top-post-missing-image">
                <div className="image-container">
                    <img src="/static/images/image-placeholder.svg" />
                </div>
                <ReactMarkdown source={newContent.substring(0, 400)} 
                    escapeHtml={false}
                    renderers={{
                        image: props => (
                            <PostMissingImage />
                        ),
                        paragraph: props => (
                            <TopPostText {...props} />
                        )
                    }}
                />
            </div>
            <style jsx>{`
                .top-post-missing-image {
                    display: flex;
                    align-items: center;
                }
                .top-post-missing-image .image-container {
                    box-shadow: 0px 2px 4px lightgrey;
                    max-height: 400px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    position: relative;
                    border-radius: 2px;
                }
                .top-post-missing-image .image-container img {
                    position: relative;
                    width: 100%;
                }
            `}</style>
        </div>
        )
    }

    styleNewsListing(content) {
        let newContent = this.contentParse(content);

        return (newContent.startsWith('![](/static/posts/') ? 

        <ReactMarkdown source={newContent} 
            escapeHtml={false}
            renderers={{
                image: props => (
                    <PostHeaderImage {...props} />
                ),
                paragraph: props => {
                    return (
                    <PostTitleCroppedText {...props} />
                )}
            }}
        />
        :
        <div>
            <div className="post-missing-image">
                <div className="image-container">
                    <img src="/static/images/image-placeholder.svg" />
                </div>
                <ReactMarkdown source={newContent.substring(0, 200)} 
                    escapeHtml={false}
                    renderers={{
                        image: props => (
                            <PostMissingImage />
                        ),
                        paragraph: props => (
                            <PostTitleCroppedText {...props} />
                        )
                    }}
                />
            </div>
            <style jsx>{`
                .image-container {
                    // border: 1px solid lightgrey;
                    box-shadow: 0px 2px 4px lightgrey;
                    height: 200px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    position: relative;
                    border-radius: 2px;
                    margin-bottom: 16px;
                }
                .post-missing-image .image-container img {
                    position: relative;
                    width: 100%;
                }
            `}</style>
        </div>
        )
    }

    render() {
        console.log('this.props.posts: ', this.props.posts)
        return (
            <Layout>
              <section className="top-news">
                {/* grabbing the most recent news for top */}
                {this.props.posts.slice(0,1).map(({ document: { data, content }, slug }) => {
                    return (
                        <div className="container">
                            <div className="top-news-wrapper">
                                <div className="top-post-header">
                                    <div className="top-post-date">{data.dateOnly}</div>
                                    <div className="top-post-title">{data.title}</div>
                                </div>
                                <div className="top-post-content-wrapper">
                                    <div className="MD-content">
                                        {/* {content = this.contentParse(content)} */}
                                        {this.styleTopNews(content)}
                                    </div>
                                
                                    <div className="read-more-area">
                                        <div className="read-more-link">
                                            <Link href={{ pathname: '/post/' + slug }} key={slug}><a>Read More &#x21c0;</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
              })}
              </section>
              <section className="news-listing">
                  <div className="container">
                    <div className="news-card-grid">
                        {/* all other news gets rendered in the card style */}
                      {this.props.posts.slice(1).map(({ document: { data, content }, slug }) => {
                        
                        return(     
                            
                        <div className="post-card" key={slug}>
                            {/* post date/title */}
                            <div className="post-header">
                                <div className="post-date">{data.dateOnly}</div>
                                <div className="post-title">{data.title}</div>
                            </div>
                            <div className="post-content-wrapper">
                            {/* then the post, if .md includes a starter image, then crop for first 320 letters in .md including the image...
                            and if post doesn't start with image, then crop for 200 letters...yes not being very smart here but 200-300
                            seems enough while css crops to 4 lines */}
                                <div className="MD-content">
                                    {/* {content = this.contentParse(content)} */}
                                    {this.styleNewsListing(content)}
                                </div>
                            
                                <div className="read-more-area">
                                    <div className="read-more-link">
                                        <Link href={{ pathname: '/post/' + slug }} key={slug}><a>Read More &#x21c0;</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )}
                      )}
                    </div>
                  </div>
                </section>
                <style jsx>{`
                    .top-news,
                    .news-listing {
                      width: 100%;
                      position: relative;
                    }

                    .top-news .container {
                        position: relative;
                        width: 80%;
                        margin: 0 auto;
                        padding: 10% 0 0 0;
                    }

                    .top-news-wrapper {
                        width: 100%;
                        border: 1px solid lightgrey;
                        padding: 24px;
                        border-radius: 2px;
                    }
                    .top-post-content-wrapper .MD-content {
                        display: flex;
                    }

                    .news-listing .container {
                      position: relative;
                      width: 80%;
                      margin: 0 auto;
                      padding: 5% 0;
                    }

                    .news-card-grid {
                      position: relative;
                      width: 100%;
                      display: grid;
                      grid-gap: 1.35vw;
                      grid-template-columns: 1fr 1fr 1fr;
                    }

                    .post-card {
                        position: relative;
                        border: 1px solid lightgrey;
                        border-radius: 2px;
                        width: 23vw;
                        margin: 0 auto;
                        padding: 24px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: space-between;
                    }

                    .post-header {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 16px;
                    }

                    .post-header .post-date,
                    .top-post-header .top-post-date {
                      font-size: 1rem;
                      margin-bottom: 8px;
                      color: slategrey;
                    }
                    .post-header .post-title,
                    .top-post-header .top-post-title {
                      font-weight: 600;
                    }

                    .top-post-title {
                        font-size: 1.4rem;
                        margin-bottom: 16px;
                    }

                    .post-content-wrapper {
                        position: relative;
                        width: 100%;
                    }
                    
                    .read-more-area {
                        text-align: right;
                    }
                    .read-more-link a {
                        text-decoration: none;
                        color: #3293F1;
                    }

                    .read-more-link a:hover {
                        color: #1CA9F9;
                    }
                    @media (max-width: 1440px) {
                
                    }
                    @media (max-width: 768px) {
                
                    }
                    @media (max-width: 480px) {
        
                        
                    }
                `}</style>
            </Layout>
        )
    }
}

export default BlogIndex;