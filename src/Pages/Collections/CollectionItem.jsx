import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router'
import CardItem from '../../Components/Card'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReactPaginate from 'react-paginate';

const CollectionItem = () => {  
    const params = useParams()
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)
    const dataPerPage = 5
    const pagesVisited = pageNumber * dataPerPage

    const getCollections = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/storage/${params.id}`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }
    useEffect(() => {
        getCollections()    
    }, [])

    console.log(data.data)

    const displayData = (data.data) ? data.data
        .slice(pagesVisited, pagesVisited + dataPerPage)
        .map((item) => {
            return (
                <CardItem item={item} key={item.id}/>
            )
        }) : <div>oops</div>
    
    const pageCount = Math.ceil(data?.data?.length / dataPerPage)
    console.log(pageCount)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
        
    return (
        <Wrapper>
            <Collection style={{ margin:'32px 0 18px 30px'}}>{data.collection}</Collection> 
            <Container>
                {displayData}
            </Container>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'prevBttn'}
                nextLinkClassName={'nextBttn'}
                activeClassName={'paginationActive'}
            />
        </Wrapper>
    );
};
export default CollectionItem;


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #393939;
`
const Collection = styled.h2`
    font-weight: 500;
    font-size: 24px;
`
const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    background:#ECECEC;
    padding: 22px 99px;
`
