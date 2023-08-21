import React from 'react'
import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'
import {Wangimg128, windowsExplorerData} from '@react95/icons';

const FilesWrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;

const ExplorerIcon = () => (
    <img src={windowsExplorerData["32x32_1"].imageSrc} alt="Windows Explorer" />
);



function Adventure({ items, closeExplorer, openNotepad, isMobile }) {
    return (
        <Modal
            icon={<ExplorerIcon />}
            title=" Jeremy's Adventures "
            closeModal={closeExplorer}
            style={{
                left: isMobile ? '5%' : '15%',
                top: '30%',
                width: isMobile ? '90%' : 400,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] },
                { name: 'Help', list: [] },
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
            >
                <FilesWrapper>
                    {
                        <Wangimg128 />
                    }
                </FilesWrapper>
            </Frame>
        </Modal>
    )
}

export default Adventure
