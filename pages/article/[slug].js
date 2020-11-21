import React from 'react';
import Head from 'next/head';
import DefaultLayout from '@layouts/default';
import { getConfig } from '@api';
import styles from '../../styles/Post.module.scss';

function Article(props) {
	const articles = props.dataset.map((post, index) => {
		return (
			<div className={styles.post__item} key={index}>
				<figure className={styles["post__item-figure"]}>
					<img src={post._embedded.['wp:featuredmedia'][0].source_url} alt={post.title.rendered} className={styles['post__item-figure-img']} />
				</figure>
				<h1 className={styles['post__item-title']}>{post.title.rendered}</h1>
				<div className={styles['post__item-content']} dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
			</div>
		);
	});

	return (
		<>
    	<DefaultLayout title='title' description='the post description'>
				<Head>
					<title>{props.title}</title>
					<meta name='description' content={props.description}/>
				</Head>
				<div id="post" className={styles.post}>
					{articles}
				</div>
			</DefaultLayout>
		</>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch("http://headless.floydhartford.com/admin/wp-json/wp/v2/posts?_embed&per_page=1&slug=" + context.params.slug);
	const dataset = await res.json();
	const config = await getConfig();

	console.warn(dataset);

  return {
    props: {
			dataset,
			title: dataset[0].title.rendered,
      description: dataset[0].excerpt.rendered,
		},
  }
}

export default Article;
