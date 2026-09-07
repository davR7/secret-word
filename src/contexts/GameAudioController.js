import { useEffect } from 'react';

export const GameAudioController = ({ onStage }) => {
    useEffect(() => {
        const tagAudio = document
            .getElementById('playAudio')

        if (onStage === "game") {
            tagAudio.play()
        } else if (
            onStage === "start" &&
            tagAudio.currentTime > 0
        ) {
            tagAudio.pause()
            tagAudio.currentTime = 0
        }
    }, [onStage])

    return null
}
