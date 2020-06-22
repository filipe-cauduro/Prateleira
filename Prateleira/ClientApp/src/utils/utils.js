function formataDateParaData(data) {
    const [year, month, day] = data.substring(0,10).split("-")
    return `${day}/${month}/${year}`
}

function formataDataParaDate (data) {
    const [year, month, day] = data.substring(0,10).split("-")
    return `${year}-${month}-${day}T00:00:00`
}

function formataDateTimeParaDate (data) {
    const [year, month, day] = data.substring(0,10).split("-")
    return `${year}-${month}-${day}`
}

export { formataDateParaData, formataDataParaDate, formataDateTimeParaDate }