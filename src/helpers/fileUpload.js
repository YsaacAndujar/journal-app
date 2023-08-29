const cloudUrl = 'https://api.cloudinary.com/v1_1/dsbgyr6fg'

export const fileUpload = async (file) => {
    console.log('a');
    const formData = new FormData()
    formData.append('upload_preset', 'react-journal')
    formData.append('file', file)
    try {
        const resp = await fetch(cloudUrl + '/upload', {
            method: 'POST',
            body: formData
        })
        if (resp.ok) {
            const cloudResp = await resp.json()
            return cloudResp.secure_url
        }
        throw await resp.json()
    } catch (e) {
        console.log(e);
    }

}