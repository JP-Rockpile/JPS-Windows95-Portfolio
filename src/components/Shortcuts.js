import React from 'react'
import styled from 'styled-components'
import { Folder, Awfxcg321303, mediaCdData, Mapi32801, MystifyYourMind100 } from '@react95/icons';

const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center;
    cursor: pointer;
  * {
    cursor: pointer;
  }
`;

function Shortcuts({ openExplorer }) {
    return (
        <div>
            <StyledShorcut>
                <Folder alt="File Explorer" onClick={() => openExplorer()} />

                <div onClick={() => openExplorer()}>File Explorer</div>
            </StyledShorcut>
            <StyledShorcut>
                <Awfxcg321303 onClick={() => window.open('https://www.linkedin.com/in/jeremy-steinhafel/', '_blank')} />
                <div onClick={() => window.open('https://www.linkedin.com/in/jeremy-steinhafel/', '_blank')}>LinkedIn</div>
            </StyledShorcut>
            <StyledShorcut>
                <MystifyYourMind100 onClick={() => window.open('https://github.com/JP-Rockpile', '_blank')} />
                <div onClick={() => window.open('https://github.com/JP-Rockpile', '_blank')}>GitHub</div>
            </StyledShorcut>
            <StyledShorcut>
                <Mapi32801 onClick={() => window.open('https://www.instagram.com/glamourshotsbyj/?hl=en', '_blank')}/>
                <div onClick={() => window.open('https://www.instagram.com/glamourshotsbyj/?hl=en', '_blank')}>Adventures</div>
            </StyledShorcut>
            <StyledShorcut>
                <img src={mediaCdData["32x32_4"].imageSrc} alt="Spotify" onClick={() => window.open('https://open.spotify.com/user/jpsteinhafel?si=2228ab22da284232', '_blank')}/>
                <div onClick={() => window.open('https://open.spotify.com/user/jpsteinhafel?si=2228ab22da284232', '_blank')}>Spotify</div>
            </StyledShorcut>
        </div>
    )
}

export default Shortcuts
