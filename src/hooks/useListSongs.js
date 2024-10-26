import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useListSongs = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [songs, setSongs] = useState([])

    const fetchSongs = async () => {
        try {
            setLoading(true)
            setError(null)
            const { data } = await axios.get('https://cms.samespace.com/items/songs')
            console.log(data?.data, "response")
            setSongs(data?.data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchSongs()
    }, [])

    return { loading, error, songs }
}

export default useListSongs
