import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompleteChallenges.module.css'

export function CompletedChallenges() {

    const { challengesCompleted } = useContext(ChallengesContext)

    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafio Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}