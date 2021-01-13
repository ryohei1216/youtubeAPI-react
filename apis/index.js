import axios from 'axios'

const KEY= 'AIzaSyB9nEGt15sQSOrXJ_QJm6Rb2dna_qVqdeI'

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
        params:{
            part: 'snippet',
            maxResults: 40,
            key:KEY,
            regionCode: 'jp',
            type: 'video',
            chart: 'mostPopular'
        }
    })
}