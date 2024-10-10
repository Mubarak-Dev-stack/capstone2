const getRandomTimes = () => {
    const result = []
    const random = Math.random

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(`${i}:00`)
        }
        if (random() < 0.5) {
            result.push(`${i}:30`)
        }
    }

    return result
}

/**
 * This is a custom hook that can be used to submit a form and simulate an API call.
 */
const fetchTimes = (data) => {
    return {
        type: 'success',
        data: getRandomTimes()
    }
}

export default fetchTimes
