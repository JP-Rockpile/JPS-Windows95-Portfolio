import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from './services/dataService';
import DataContext from './contexts/dataContext';
import Taskbar from './components/Taskbar';
import Desktop from './components/Desktop';
import '@react95/icons/icons.css';
import styled from 'styled-components';
import jpsBackgroundLogo from './images/jpslarger.png';


const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;


const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  justify-content: flex-start;  
  background-image: url(${jpsBackgroundLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;


const App = () => (
    <DataContext.Provider value={dataService}>
        <ThemeProvider>
            <GlobalStyle />
            <BodyFontSizeOverride />
            <AppWrapper>
                <Desktop />
                <Taskbar />
            </AppWrapper>
        </ThemeProvider>
    </DataContext.Provider>
);
export default App;
