export const uniqueValues = arr => {
    try {
        if (!Array.isArray(arr)) throw new Error("only accept arrays")
        
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i] + ""] = true;
        }
        
        var newArr = [];
        for (var chave in obj) {
            !Number(chave) ? newArr.push(chave) : 
                newArr.push(+chave)
        }

        return [...newArr];
    } catch(e) {
        console.error(e)
        return null
    }
}