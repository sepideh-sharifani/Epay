import styles from './styles.module.scss';
import linksData from './LinksData';
import Link from 'next/link';
import {
	AiOutlineTwitter,
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineLinkedin,
	AiOutlineYoutube,
} from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
function Links() {
	return (
		<>
			<div className={styles.footer__links}>
				{linksData.map((link, n) => (
					<ul>
						{n === 0 ? (
							<img src='/images/Epay_Logo.png' />
						) : (
							<b>{link.heading}</b>
						)}

						{link.links.map((link) => (
							<li>
								<Link href={link.link}>{link.name}</Link>
							</li>
						))}
					</ul>
				))}
			</div>
			<div className={styles.socialMedia}>
				<div className={styles.socialMedia__links}>
					<h4>Follow us on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h4>
					<CiTwitter />
					<AiOutlineInstagram />
					<AiOutlineFacebook />
					<AiOutlineYoutube />
					<AiOutlineLinkedin />
				</div>
				<span> ©2023 Epay ALL Rights Reserved</span>
			</div>
		</>
	);
}

export default Links;
