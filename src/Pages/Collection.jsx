import CollectionsList from './Collections/CollectionsList';
import styled from 'styled-components'


const Container = styled.div`
    background: #ECECEC;

`   

const Collection = () => {

    return (
        <Container>
            <CollectionsList/>
        </Container>
    );
};

export default Collection;