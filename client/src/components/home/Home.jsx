
//components
import Navbar from "./Navbar";
import Banner from "./Banner";

import { Box, styled } from "@mui/material";

const Component = styled(Box)`
    padding: 10px 10px;
    background : #F2F2F2;
`

const Home = () => {
    return(
        //jsx ke sath 2 components ko return nhi kr skte
        //div ab parent coomponent hai aur baki as child component return ho jaenge 
        //fragment k use se koi extra node create nhi hogi, also it is fast
        //isko likhne ki bhi jrurat nhi empty bhi chor skte h
        <> 
            <Navbar/>
            <Component>
                <Banner/>
            </Component>
        </>
    )
}

export default Home;