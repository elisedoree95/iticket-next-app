const isValidInput = (pattern, value) => {
    return pattern.test(value)
}

const extractDate = (dateTimeString) => {
    const date = new Date(dateTimeString)

    let day = date.getDate()
    let month = date.getMonth() + 1
    if (day < 10) day = `0${day}`
    if (month < 10) month = `0${month}`

    return `${day}/${month}/${date.getFullYear()}`
}

const extractTime = (dateTimeString) => {
    const date = new Date(dateTimeString)

    let hours = date.getHours()
    let minutes = date.getMinutes()
    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`

    return `${hours}:${minutes}`
}



export {
    isValidInput,
    extractDate,
    extractTime
}
