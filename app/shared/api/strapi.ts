import strapiInstance from "./axios"

export const getAudio = async () => {
    try {
        return await strapiInstance.get('api/audio?populate=*')
    } catch(e) {
        console.log(`err: >> ${e}`)
        return null
    }
}
