import React from "react";
import styles from "./Team.module.scss";
import Image from "next/image";
import { images } from "../../../public/images";

const Team: React.FC = () => {
	return (
		<div className={styles.teamContainer}>
			<div>
				<h4>Team</h4>
				<h2>Meet Our Core Team</h2>
			</div>

			<div className={styles.team}>
				<div className={styles.teamMember}>
					<Image src={images.teams.carol} width={200} height={200} alt={'Team member Carol'} />
					<h3>Caroline Mbura-Muhindo</h3>
					<p>Senior Administrator</p>
				</div>
				<div className={styles.teamMember}>
					<Image src={images.teams.dio} width={200} height={200} alt={'CEO Dave'} />
					<h3>David Ikhu-Omoregbe</h3>
					<p>Chief Executive Officer</p>
				</div>
				<div className={styles.teamMember}>
					<Image src={images.teams.tracy} width={200} height={200} alt={'Team member Tracy'} />
					<h3>Tracy Agbonghile</h3>
					<p>Head Faculty</p>
				</div>
				<div className={styles.teamMember}>
					<Image src={images.teams.dave} width={200} height={200} alt={'Team member Tracy'} />
					<h3>David Obanubi</h3>
					<p>Consultant Analytics and Statistics</p>
				</div>
			</div>
		</div>
	)
}

export default Team;
