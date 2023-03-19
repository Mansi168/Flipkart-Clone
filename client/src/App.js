

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';

import {Box} from '@mui/material';

function App() {
  return (
    //dataprovider se wrap krdiya taki jo bhi states h dataprovider m unko baki  m use kr pau
    <DataProvider>   
      <Header/>
      <Box style={{marginTop: 54}}>
        <Home/>
      </Box>
      
    </DataProvider>
  );
}

export default App;
