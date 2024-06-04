import React from 'react';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from '@mui/material';
import './InfoBar.css'
import OptionBar from '../OptionBar/OptionBar.tsx';

function InfoBar() {
    return (
        <div className='icon'>
            <div className='infoIcon'>
                <PermIdentityOutlinedIcon/>    
                    <Button className='button' onClick={OptionBar}>
                        <MoreHorizOutlinedIcon/>
                    </Button>
            </div>
        </div>
    );
}

export default InfoBar;