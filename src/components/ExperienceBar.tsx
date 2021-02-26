import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = (currentExperience * 100) / experienceToNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div> 
                <div style={{ width: `${percentToNextLevel}%`}} />
                <span className={styles.currentExperienceBar} style={{ left: `${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    );
}