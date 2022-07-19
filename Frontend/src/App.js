import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Library from './pages/Library';
import Diets from './pages/Diets';
import Plan from './pages/Plan';
import Food from './pages/Food';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/library" element={<Library />} />
          <Route path="/diets" element={<Diets />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/food" element={<Food />} />
          
        </Routes>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
