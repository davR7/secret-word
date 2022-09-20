export const arrayRandomValue = arr => {
    try {
        if (!Array.isArray(arr)) throw new Error("only accept arrays")
        return Math.floor(Math.random() * arr.length)
    } catch(e) {
        console.error(e)
        return null
    }
}