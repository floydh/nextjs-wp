// pages/index.js
import React, { Component } from 'react';
import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'
import styles from '../styles/Blog.module.scss';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let postsurl = "https://headless.floydhartford.com/admin/wp-json/wp/v2/posts?_embed";
    fetch(postsurl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        posts: response
      })
    })
  }

  render() {
    let posts = this.state.posts.map((post, index) => {
      return (
        <div className={styles.posts__item} key={index}>
          <figure className={styles['posts__item-figure']}>
            <img src={post._embedded.['wp:featuredmedia'][0].source_url} alt="" className={styles['posts__item-img']} />
          </figure>
          <div className={styles['posts__item-body']}>
            <h3 className={styles['posts__item-title']}><Link href={{ pathname: 'article/' + post.slug }}><a>{post.title.rendered}</a></Link></h3>
          </div>
        </div>
      );
    });

    return (
      <DefaultLayout title='Home' description='the Home description'>
        <div id="posts" className={styles.posts}>{posts}</div>
      </DefaultLayout>
    )
  }
}
 
export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}
