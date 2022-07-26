import './App.css';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styles
import '@fontsource/roboto-slab';
import '@fontsource/raleway';
import theme from './theme';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Resume from './routes/Resume';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex
          direction='column'
          width='100wh'
          height='100vh'
        >
          <Navbar />
          <Box
            flex='1'
            as='main'
            px={0}
            pt={{ base: 6, lg: 10 }}
            pb={{ base: 20, lg: 28 }}>
            <Routes>
              <Route path='/' element={<Portfolio />} />
              <Route path='/about' element={<About />} />
              <Route path='/resume' element={<Resume />} />
            </Routes>
          </Box>
          <Footer
            position='fixed'
            left={0}
            bottom={0}
            w='100vw' />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
