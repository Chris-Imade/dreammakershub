import React from 'react';
import styles from "./styles.module.scss";

const Index: React.FC = () => {
	return (
		<section className={styles.entry} id="entry-requirements">
			<h3>
				Entry Requirements
			</h3>
			<h5>Academic Requirement</h5>
			<p>We are not aware of any specific GRE, GMAT or GPA grading score requirements for this programme.</p>
			<h5>Language Requirement</h5>
			<ul>
				<li>Spoken & Written English</li>
				{/* <li><hr /><span>Or</span><hr /></li>
				<li>Spoken & Written German</li> */}
			</ul>
		</section>
	)
}

export default Index;
