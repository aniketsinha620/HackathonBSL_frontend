import React, { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./Card.css"
import { Link } from 'react-router-dom'

export default function Card(props) {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
    return (
        <div>
            {
                loading ?

                    <div className="cards">
                        <SkeletonTheme color="#202020" highlightColor='#444'>
                            <Skeleton height={300} duration={2}></Skeleton>
                        </SkeletonTheme>
                    </div>
                    :
                    <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${props.id}`} >
                        <div className="cardbody">
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/original${props && props.backdrop_path}`} />

                                <div class="card-Detail">




                                    <h1 class="cardtitle">{props ? props.original_title : ""}</h1>
                                    <p class="cardinfo">{props ? props.overview : ""}</p>

                                    <button class="cardbtn">book tours</button>
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </div>
    )
}
