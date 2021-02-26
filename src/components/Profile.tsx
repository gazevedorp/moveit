import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/gazevedorp.png" alt="Gabriel Azevedo" />
            <div>
                <strong>Gabriel Azevedo</strong>
                <p>
                    <img src="Icons/level.svg" alt="Level" />
                    Level {level}
                    </p>
            </div>
        </div>
    )
}