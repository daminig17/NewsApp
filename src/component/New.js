import React, { useState } from 'react';
import { useEffect } from 'react';
import NewItems from './NewItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const New = (props) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResult, setTotalResult] = useState(0)






    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        setLoading(true)
        let parseData = await data.json();
        props.setProgress(40)
        setArticles(parseData.articles)
        setTotalResult(parseData.totalResult)
        setLoading(false)
        props.setProgress(100);

    }

    useEffect(() => {
        document.title = `NewsApp - ${capitalizeFirstLetter(props.category)}`
        updateNews()
    }, [])


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResult(parseData.totalResult)
    };

    return (
        <div className="container my-3">
            <h1 style={{ textAlign: 'center', marginTop: "4rem" }}>NewsApp - Top {props.category}  Headling</h1>
            {loading && <Spinner />}
            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResult} loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
                                <NewItems title={element.title ? element.title.slice(0, 25) : " "} description={element.description ? element.description.slice(0, 80) : " "} urlToImage={element.urlToImage ? element.urlToImage : "https://images.barrons.com/im-412915/social"} url={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </div>
    )
}

export default New;
New.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: "general"
}

New.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}