// pages/index.js
import React, { Component } from 'react';
import DefaultLayout from '@layouts/default';
import ContactForm from "../_components/forms/contact";
import Link from 'next/link';
import { getConfig, getAllPosts } from '@api';
import styles from '../styles/Home.module.scss';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    // this.state = {}
  }

  render() {
    return (
      <DefaultLayout title='Contact' description='contact page description'>
        <div>
          <h1 className='page-title'>Contact</h1>
          <ContactForm />
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
