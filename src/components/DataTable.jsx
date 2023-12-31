import { useEffect, useState } from "react"
import axios from "axios"

export const DataTable = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState('https://rickandmortyapi.com/api/character')
    const [prevPage, setPrevPage] = useState('')
    const [nextPage, setNextPage] = useState('')    
    
    const nextPageHandler = () => {
        if (nextPage !== null) {
            setPage(nextPage)
            
        }
    }

    const prevPageHandler = () => {
        if (prevPage !== null) {
            setPage(prevPage)            
        }
    }

    useEffect(() => {
        axios.get(page)
            .then(res => {
                setData(res.data.results)
                setPrevPage(res.data.info.prev)
                setNextPage(res.data.info.next)                
            })
    }, [page])

   

    return (
        <>
            
            <table className="ui celled table">
                <thead>
                    <tr><th>Name</th>
                        <th className="center aligned">Status</th>
                        <th className="center aligned">Species</th>
                        <th className="center aligned">Gender</th>
                    </tr></thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td >{item.name}</td>
                                    <td className="center aligned">{
                                        item.status === 'Alive' ? <i className="heartbeat icon green"></i> :
                                            item.status === 'Dead' ? <i className="thumbs down icon gray"></i> :
                                                <i className="question icon blue"></i>
                                    }</td>
                                    <td className="center aligned">{item.species}</td>
                                    <td className="center aligned">{
                                        item.gender == 'Male' ? <i className="mars icon blue"></i> : <i className="venus icon pink"></i>
                                    }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="ui animated button right floated" onClick={nextPageHandler} >
                <div className="visible content">Next</div>
                <div className="hidden content">
                    <i className="right arrow icon"></i>
                </div>
            </div>
            <div className="ui animated button right floated" onClick={prevPageHandler} >
                <div className="visible content">Prev</div>
                <div className="hidden content">
                    <i className="left arrow icon"></i>
                </div>
            </div> 
        </>
    )
}
