import strapiInstance from "./axios"

export const getAudio = async () => {
    try {
        return await strapiInstance.get('api/audio?populate=*')
    } catch (e) {
        console.log(`err: >> ${e}`)
        return null
    }
}


export const getCounter = async () => {
    try {
        return await strapiInstance.get('api/counter')
    } catch (e) {
        console.log(`err: >> ${e}`)
        return null
    }
}

export const updateCounter = async (streaming: number) => {
    try {
        return await strapiInstance.put('api/counter', {
            "data": {
                streaming
            }
        })
    } catch (e) {
        console.log(`err: >> ${e}`)
        return null
    }
}