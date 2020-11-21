// pages/index.js
import React, { Component } from 'react';
import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'
import styles from '../styles/Home.module.scss';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    // this.state = {}
  }

  render() {
    return (
      <DefaultLayout title='Home' description='the Home description'>
        <div>
          <h1 className='page-title'>Portfolio</h1>
          <p>Floyd Hartford is a website developer from Maine. He built this website using NextJS and WordPress to create a headless experience. You might have arrived here from <Link href="https://floydhartford.com"><a>floydhartford.com</a></Link>...</p>
          <p>Deserunt consequatur yet est. Explicabo exercitation for autem. Velitesse sint, quam so aliquip nulla for si ex. Aliquip cillum rem. Duis. Dolorem quo so eaque aliquam or si officia. Est. Laboris natus but quaerat culpa. Unde iste quaerat. Eius proident ab modi. Amet elit tempor quasi magni nor quia velit. Nequeporro sequi or elit aliqua minima. Eaque. Magni. Numquam. Perspiciatis. Ratione sit nor minima nor exercitationem but quo nor ullamco architecto. Rem velitesse so eum for perspiciatis or quasi irure. Dolores illum. Non est. Amet ab, yet laudantium but est illo deserunt, reprehenderit. Nostrum laboris or inventore. Duis quia.</p>

          <p>Inventore accusantium nemo so ad. Nostrum reprehenderit so exercitation for nulla. Veniam elit but corporis et fugit, and aliquid. Mollit. Eius tempor ratione and exercitation so voluptas omnis quaerat. Sit eum lorem for veniam quae. Architecto. Ut. Est numquam non but quisquam or eum. Sint tempor nor ea. Proident culpa for laboriosam. Exercitation corporis nemo. Eos minima. Ullamco id. Odit omnis so elit labore, nor aliquid consequuntur laboris. Aute et but nesciunt for aliquam amet. Sint ipsum so inventore or quo nor veritatis id.</p>
        </div>
      </DefaultLayout>
    )
  }
}
 
export async function getStaticProps() {
  const config = await getConfig()
  return {
    props: {
      title: config.title,
      description: config.description
    }
  }
}
