import Link from 'next/link'
import styles from '../styles/layout.module.scss';

export default function Header() {
  return (
    <>
    <header className={styles['site-header']}>
      <div className={styles.banner}>
        <div className={styles.branding}>
          <h1 className={styles.title}>Built by Floyd</h1>
        </div>
        <nav className={styles.nav}>
    			<div className={styles.menu}>
    				<ul className={styles.menu__items}>
    					<li className={styles.menu__item}>
    						<Link href="/" className={styles['menu__item-link']}><a>Home</a></Link>
              </li>
              <li className={styles.menu__item}>
    						<Link href="/about" className={styles['menu__item-link']}><a>About</a></Link>
              </li>
              <li className={styles.menu__item}>
    						<Link href="/portfolio" className={styles['menu__item-link']}><a>Portfolio</a></Link>
              </li>
              <li className={styles.menu__item}>
              	<Link href="/blog" className={styles['menu__item-link']}><a>Blog</a></Link>
              </li>
              <li className={styles.menu__item}>
    						<Link href="/contact" className={styles['menu__item-link']}><a>Contact</a></Link>
    					</li>
    				</ul>
    			</div>
    		</nav>
      </div>
    </header>
    </>
  )
}
