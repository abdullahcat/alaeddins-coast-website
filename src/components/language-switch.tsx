"use client"
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Link from 'next/link';
import { FireTruck, Language } from '@mui/icons-material';
import { useTranslations } from 'next-intl';

export default function LanguageSwitch() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const switchTranslations = useTranslations('Language-Switch');

    return (
        <div  >
            <button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="flex items-center flex-row transition duration-200 ease-in-out  underline-animation"
            >
                {switchTranslations('current')}
            </button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                className='mt-2'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>

                    <Link href='/tr' className='flex justify-center items-center flex-row'>
                        <img src="/flag/tr.png" className='h-4   pr-1' alt="" />
                        Turkish </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <Link href='/en' className='flex justify-center items-center flex-row'>
                        <img src="/flag/en.png" className='h-4 pr-1' alt="" />
                        English
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>

                    <Link href='/ru' className='flex justify-center items-center flex-row'>
                        <img src="/flag/ru.png" className='h-4   pr-1' alt="" />
                        Russian
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
