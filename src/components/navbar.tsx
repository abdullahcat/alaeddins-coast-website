"use client"; // This is a client component 👈🏽
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowForward, ArrowRight, Close, Menu } from '@mui/icons-material';
import LanguageSwitch from './language-switch';
/* eslint-disable @next/next/no-img-element */

import DropMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function Navbar() {
    const translations = useTranslations('Navbar');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const switchTranslations = useTranslations('Language-Switch');

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state of the menu
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <header className={`fixed w-full z-50 transition-all ease-in-out   duration-200 ${isScrolled ? " shadow-lg bg-white text-black" : "       "}  `}>
            <div className="  w-full bg-black  z-50 px-4 py-3 text-white">
                <p className="text-center z-100 text-sm  font-medium">
                    {translations('banner')}
                    <a rel="noopener noreferrer" target="_blank"
                        href="http://tinyhouse.alaeddinscoast.com" className="inline-block  px-1 underline">{translations('banner-cta')}   </a>
                </p>
            </div>
            <div className="container    flex  py-2 mx-auto w-full max-w-screen-xl px-4   justify-between ">
                <div className="items-center space-x-5 flex-shrink-0 hidden lg:flex">
                    <Link
                        rel="noopener noreferrer"
                        href="/our-properties"
                        className="  items-center flex flex-row transition duration-200 ease-in-out  underline-animation"
                    >
                        {translations('our-properties')}
                    </Link>
                    <Link
                        rel="noopener noreferrer"
                        href="/offices"
                        className="  items-center flex flex-row transition duration-200 ease-in-out     underline-animation"
                    >
                        {translations('offices')}
                    </Link>



                </div>
                <div className="items-center    flex-shrink-0   lg:flex ">
                    <Link href='/'>
                        {isScrolled ?
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-14 transition duration-200 ease-in-out w-auto' width="700" zoomAndPan="magnify" viewBox="0 0 525 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="6a51f3b11d"><path d="M 189 54.609375 L 233 54.609375 L 233 196 L 189 196 Z M 189 54.609375 " clip-rule="nonzero" /></clipPath><clipPath id="ac5cb252b1"><path d="M 383.179688 243 L 524.429688 243 L 524.429688 287 L 383.179688 287 Z M 383.179688 243 " clip-rule="nonzero" /></clipPath><clipPath id="ca9bed8c13"><path d="M 292 54.609375 L 336 54.609375 L 336 196 L 292 196 Z M 292 54.609375 " clip-rule="nonzero" /></clipPath><clipPath id="45909d7946"><path d="M 27 313.351562 L 103 313.351562 L 103 320.109375 L 27 320.109375 Z M 27 313.351562 " clip-rule="nonzero" /></clipPath><clipPath id="d8a7b5d977"><path d="M 152.765625 212.386719 L 372.515625 212.386719 L 372.515625 320.386719 L 152.765625 320.386719 Z M 152.765625 212.386719 " clip-rule="nonzero" /></clipPath></defs><g clip-path="url(#6a51f3b11d)"><path fill="#000000" d="M 192.292969 55.113281 C 190.472656 55.605469 189.308594 57.507812 189.804688 59.332031 L 225.976562 193.445312 C 226.464844 195.265625 228.335938 195.960938 230.152344 195.472656 L 230.203125 195.457031 C 232.027344 194.96875 233.289062 193.425781 232.796875 191.605469 L 196.628906 57.492188 C 196.132812 55.667969 194.167969 54.605469 192.292969 55.113281 " fill-opacity="1" fill-rule="nonzero" /></g><path fill="#000000" d="M 75.898438 125.375 C 74.613281 124.089844 72.421875 124.011719 71.019531 125.417969 C 69.683594 126.753906 69.691406 128.925781 71.027344 130.261719 L 169.410156 228.3125 C 170.277344 229.175781 171.546875 229.515625 172.726562 229.195312 C 173.296875 229.042969 173.832031 228.734375 174.292969 228.269531 C 175.621094 226.933594 175.621094 224.761719 174.285156 223.429688 L 75.898438 125.375 " fill-opacity="1" fill-rule="nonzero" /><path fill="#000000" d="M 3.570312 251.125 L 137.804688 286.855469 C 138.386719 287.007812 139 287.007812 139.574219 286.855469 C 140.753906 286.539062 141.679688 285.605469 142.007812 284.375 C 142.242188 283.496094 142.117188 282.570312 141.65625 281.777344 C 141.203125 280.992188 140.460938 280.425781 139.574219 280.191406 L 5.351562 244.457031 C 4.765625 244.308594 4.15625 244.308594 3.578125 244.464844 C 2.398438 244.777344 1.472656 245.710938 1.148438 246.9375 C 0.660156 248.761719 1.746094 250.644531 3.570312 251.125 " fill-opacity="1" fill-rule="nonzero" /><g clip-path="url(#ac5cb252b1)"><path fill="#000000" d="M 520.082031 243.523438 L 385.96875 279.695312 C 384.148438 280.191406 383.082031 282.152344 383.589844 284.027344 C 384.082031 285.847656 385.984375 287.015625 387.808594 286.519531 L 521.921875 250.347656 C 523.746094 249.859375 524.808594 247.894531 524.300781 246.019531 C 523.808594 244.195312 521.90625 243.035156 520.082031 243.523438 " fill-opacity="1" fill-rule="nonzero" /></g><path fill="#000000" d="M 350.101562 225.558594 C 350.101562 226.472656 350.460938 227.332031 351.140625 228.011719 C 352.011719 228.875 353.277344 229.210938 354.457031 228.898438 C 355.03125 228.738281 355.5625 228.429688 355.984375 228.003906 L 454.039062 129.621094 C 455.375 128.285156 455.371094 126.113281 453.996094 124.746094 C 453.132812 123.878906 451.863281 123.542969 450.683594 123.863281 C 450.105469 124.019531 449.578125 124.324219 449.160156 124.75 L 351.101562 223.132812 C 350.457031 223.785156 350.097656 224.644531 350.101562 225.558594 " fill-opacity="1" fill-rule="nonzero" /><g clip-path="url(#ca9bed8c13)"><path fill="#000000" d="M 295.039062 195.730469 C 295.617188 195.882812 296.226562 195.882812 296.804688 195.726562 C 297.984375 195.410156 298.910156 194.480469 299.222656 193.300781 L 334.957031 59.070312 C 335.4375 57.246094 334.347656 55.363281 332.476562 54.867188 C 331.898438 54.714844 331.285156 54.714844 330.707031 54.871094 C 329.527344 55.183594 328.601562 56.117188 328.28125 57.296875 L 292.558594 191.527344 C 292.074219 193.351562 293.164062 195.230469 295.039062 195.730469 " fill-opacity="1" fill-rule="nonzero" /></g><path fill="#000000" d="M 264.902344 82.160156 C 264.257812 81.523438 263.390625 81.164062 262.425781 81.167969 C 262.128906 81.167969 261.828125 81.207031 261.539062 81.285156 C 260.046875 81.683594 259.007812 83.046875 259.007812 84.597656 L 259.121094 152.691406 C 259.128906 154.582031 260.664062 156.117188 262.605469 156.109375 C 262.902344 156.109375 263.207031 156.070312 263.492188 155.992188 C 264.984375 155.589844 266.023438 154.230469 266.023438 152.679688 L 265.90625 84.585938 C 265.90625 83.671875 265.554688 82.8125 264.902344 82.160156 " fill-opacity="1" fill-rule="nonzero" /><path fill="#000000" d="M 147.425781 112.539062 C 146.539062 112.304688 145.621094 112.425781 144.785156 112.914062 C 144.527344 113.066406 144.285156 113.246094 144.070312 113.460938 C 142.984375 114.554688 142.765625 116.253906 143.539062 117.589844 L 177.6875 176.507812 C 178.628906 178.144531 180.734375 178.703125 182.410156 177.726562 C 182.671875 177.574219 182.90625 177.394531 183.121094 177.183594 C 184.207031 176.089844 184.433594 174.386719 183.652344 173.050781 L 149.507812 114.132812 C 149.050781 113.339844 148.308594 112.773438 147.425781 112.539062 " fill-opacity="1" fill-rule="nonzero" /><path fill="#000000" d="M 60.875 197.589844 C 59.992188 197.824219 59.253906 198.390625 58.777344 199.226562 C 58.625 199.492188 58.507812 199.765625 58.433594 200.058594 C 58.035156 201.550781 58.691406 203.132812 60.03125 203.902344 L 119.066406 237.855469 C 120.703125 238.796875 122.800781 238.230469 123.765625 236.546875 C 123.914062 236.289062 124.03125 236.007812 124.109375 235.722656 C 124.507812 234.226562 123.847656 232.644531 122.503906 231.871094 L 63.472656 197.925781 C 62.679688 197.46875 61.761719 197.347656 60.875 197.589844 " fill-opacity="1" fill-rule="nonzero" /><g clip-path="url(#45909d7946)"><path fill="#000000" d="M 28.441406 314.511719 C 27.796875 315.15625 27.445312 316.023438 27.445312 316.988281 C 27.445312 317.285156 27.484375 317.582031 27.5625 317.875 C 27.964844 319.367188 29.324219 320.40625 30.871094 320.40625 L 98.96875 320.289062 C 100.859375 320.289062 102.390625 318.75 102.386719 316.808594 C 102.386719 316.511719 102.347656 316.207031 102.273438 315.921875 C 101.871094 314.429688 100.507812 313.390625 98.957031 313.390625 L 30.863281 313.503906 C 29.945312 313.507812 29.089844 313.863281 28.441406 314.511719 " fill-opacity="1" fill-rule="nonzero" /></g><path fill="#000000" d="M 497.246094 318.625 C 497.894531 317.976562 498.25 317.117188 498.246094 316.152344 C 498.246094 315.847656 498.207031 315.550781 498.128906 315.265625 C 497.730469 313.773438 496.367188 312.726562 494.816406 312.734375 L 426.722656 312.847656 C 424.832031 312.851562 423.296875 314.390625 423.304688 316.324219 C 423.304688 316.628906 423.34375 316.925781 423.421875 317.21875 C 423.820312 318.703125 425.183594 319.75 426.734375 319.742188 L 494.828125 319.628906 C 495.742188 319.628906 496.601562 319.273438 497.246094 318.625 " fill-opacity="1" fill-rule="nonzero" /><path fill="#000000" d="M 466.875 201.144531 C 467.109375 200.265625 466.988281 199.339844 466.5 198.507812 C 466.347656 198.246094 466.167969 198.007812 465.957031 197.796875 C 464.859375 196.707031 463.160156 196.484375 461.820312 197.261719 L 402.90625 231.40625 C 401.273438 232.355469 400.710938 234.453125 401.6875 236.128906 C 401.839844 236.394531 402.019531 236.628906 402.230469 236.84375 C 403.324219 237.933594 405.027344 238.152344 406.367188 237.375 L 465.28125 203.226562 C 466.074219 202.773438 466.640625 202.03125 466.875 201.144531 " fill-opacity="1" fill-rule="nonzero" /><path fill="#000000" d="M 381.828125 114.597656 C 381.589844 113.710938 381.023438 112.976562 380.183594 112.496094 C 379.925781 112.347656 379.644531 112.230469 379.355469 112.152344 C 377.863281 111.757812 376.28125 112.414062 375.507812 113.757812 L 341.5625 172.789062 C 340.617188 174.425781 341.183594 176.519531 342.867188 177.484375 C 343.125 177.636719 343.40625 177.753906 343.695312 177.828125 C 345.1875 178.226562 346.769531 177.570312 347.542969 176.230469 L 381.488281 117.195312 C 381.949219 116.40625 382.066406 115.480469 381.828125 114.597656 " fill-opacity="1" fill-rule="nonzero" /><g clip-path="url(#d8a7b5d977)"><path fill="#000000" d="M 152.789062 320.386719 C 153.828125 260.574219 202.597656 212.425781 262.652344 212.425781 C 322.636719 212.425781 371.40625 260.574219 372.445312 320.386719 Z M 152.789062 320.386719 " fill-opacity="1" fill-rule="nonzero" /></g></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-14 transition duration-200 ease-in-out w-auto' width="700" zoomAndPan="magnify" viewBox="0 0 525 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="e5aab4985e"><path d="M 189 54.609375 L 233 54.609375 L 233 196 L 189 196 Z M 189 54.609375 " clip-rule="nonzero" /></clipPath><clipPath id="2cbe59ad1e"><path d="M 383.179688 243 L 524.429688 243 L 524.429688 287 L 383.179688 287 Z M 383.179688 243 " clip-rule="nonzero" /></clipPath><clipPath id="75ea47250f"><path d="M 292 54.609375 L 336 54.609375 L 336 196 L 292 196 Z M 292 54.609375 " clip-rule="nonzero" /></clipPath><clipPath id="b387231e9c"><path d="M 27 313.351562 L 103 313.351562 L 103 320.40625 L 27 320.40625 Z M 27 313.351562 " clip-rule="nonzero" /></clipPath><clipPath id="a3fe7c4064"><path d="M 152.023438 212.753906 L 372.523438 212.753906 L 372.523438 320.378906 L 152.023438 320.378906 Z M 152.023438 212.753906 " clip-rule="nonzero" /></clipPath></defs><g clip-path="url(#e5aab4985e)"><path fill="#fffff0" d="M 192.292969 55.113281 C 190.472656 55.605469 189.308594 57.507812 189.804688 59.332031 L 225.976562 193.445312 C 226.464844 195.265625 228.335938 195.960938 230.152344 195.472656 L 230.203125 195.457031 C 232.027344 194.96875 233.289062 193.425781 232.796875 191.605469 L 196.628906 57.492188 C 196.132812 55.667969 194.167969 54.605469 192.292969 55.113281 " fill-opacity="1" fill-rule="nonzero" /></g><path fill="#fffff0" d="M 75.898438 125.375 C 74.613281 124.089844 72.421875 124.011719 71.019531 125.417969 C 69.683594 126.753906 69.691406 128.925781 71.027344 130.261719 L 169.410156 228.3125 C 170.277344 229.175781 171.546875 229.515625 172.726562 229.195312 C 173.296875 229.042969 173.832031 228.734375 174.292969 228.269531 C 175.621094 226.933594 175.621094 224.761719 174.285156 223.429688 L 75.898438 125.375 " fill-opacity="1" fill-rule="nonzero" /><path fill="#fffff0" d="M 3.570312 251.125 L 137.804688 286.855469 C 138.386719 287.007812 139 287.007812 139.574219 286.855469 C 140.753906 286.539062 141.679688 285.605469 142.007812 284.375 C 142.242188 283.496094 142.117188 282.570312 141.65625 281.777344 C 141.203125 280.992188 140.460938 280.425781 139.574219 280.191406 L 5.351562 244.457031 C 4.765625 244.308594 4.15625 244.308594 3.578125 244.464844 C 2.398438 244.777344 1.472656 245.710938 1.148438 246.9375 C 0.660156 248.761719 1.746094 250.644531 3.570312 251.125 " fill-opacity="1" fill-rule="nonzero" /><g clip-path="url(#2cbe59ad1e)"><path fill="#fffff0" d="M 520.082031 243.523438 L 385.96875 279.695312 C 384.148438 280.191406 383.082031 282.152344 383.589844 284.027344 C 384.082031 285.847656 385.984375 287.015625 387.808594 286.519531 L 521.921875 250.347656 C 523.746094 249.859375 524.808594 247.894531 524.300781 246.019531 C 523.808594 244.195312 521.90625 243.035156 520.082031 243.523438 " fill-opacity="1" fill-rule="nonzero" /></g><path fill="#fffff0" d="M 350.101562 225.558594 C 350.101562 226.472656 350.460938 227.332031 351.140625 228.011719 C 352.011719 228.875 353.277344 229.210938 354.457031 228.898438 C 355.03125 228.738281 355.5625 228.429688 355.984375 228.003906 L 454.039062 129.621094 C 455.375 128.285156 455.371094 126.113281 453.996094 124.746094 C 453.132812 123.878906 451.863281 123.542969 450.683594 123.863281 C 450.105469 124.019531 449.578125 124.324219 449.160156 124.75 L 351.101562 223.132812 C 350.457031 223.785156 350.097656 224.644531 350.101562 225.558594 " fill-opacity="1" fill-rule="nonzero" /><g clip-path="url(#75ea47250f)"><path fill="#fffff0" d="M 295.039062 195.730469 C 295.617188 195.882812 296.226562 195.882812 296.804688 195.726562 C 297.984375 195.410156 298.910156 194.480469 299.222656 193.300781 L 334.957031 59.070312 C 335.4375 57.246094 334.347656 55.363281 332.476562 54.867188 C 331.898438 54.714844 331.285156 54.714844 330.707031 54.871094 C 329.527344 55.183594 328.601562 56.117188 328.28125 57.296875 L 292.558594 191.527344 C 292.074219 193.351562 293.164062 195.230469 295.039062 195.730469 " fill-opacity="1" fill-rule="nonzero" /></g><path fill="#fffff0" d="M 264.902344 82.160156 C 264.257812 81.523438 263.390625 81.164062 262.425781 81.167969 C 262.128906 81.167969 261.828125 81.207031 261.539062 81.285156 C 260.046875 81.683594 259.007812 83.046875 259.007812 84.597656 L 259.121094 152.691406 C 259.128906 154.582031 260.664062 156.117188 262.605469 156.109375 C 262.902344 156.109375 263.207031 156.070312 263.492188 155.992188 C 264.984375 155.589844 266.023438 154.230469 266.023438 152.679688 L 265.90625 84.585938 C 265.90625 83.671875 265.554688 82.8125 264.902344 82.160156 " fill-opacity="1" fill-rule="nonzero" /><path fill="#fffff0" d="M 147.425781 112.539062 C 146.539062 112.304688 145.621094 112.425781 144.785156 112.914062 C 144.527344 113.066406 144.285156 113.246094 144.070312 113.460938 C 142.984375 114.554688 142.765625 116.253906 143.539062 117.589844 L 177.6875 176.507812 C 178.628906 178.144531 180.734375 178.703125 182.410156 177.726562 C 182.671875 177.574219 182.90625 177.394531 183.121094 177.183594 C 184.207031 176.089844 184.433594 174.386719 183.652344 173.050781 L 149.507812 114.132812 C 149.050781 113.339844 148.308594 112.773438 147.425781 112.539062 " fill-opacity="1" fill-rule="nonzero" /><path fill="#fffff0" d="M 60.875 197.589844 C 59.992188 197.824219 59.253906 198.390625 58.777344 199.226562 C 58.625 199.492188 58.507812 199.765625 58.433594 200.058594 C 58.035156 201.550781 58.691406 203.132812 60.03125 203.902344 L 119.066406 237.855469 C 120.703125 238.796875 122.800781 238.230469 123.765625 236.546875 C 123.914062 236.289062 124.03125 236.007812 124.109375 235.722656 C 124.507812 234.226562 123.847656 232.644531 122.503906 231.871094 L 63.472656 197.925781 C 62.679688 197.46875 61.761719 197.347656 60.875 197.589844 " fill-opacity="1" fill-rule="nonzero" /><g clip-path="url(#b387231e9c)"><path fill="#fffff0" d="M 28.441406 314.511719 C 27.796875 315.15625 27.445312 316.023438 27.445312 316.988281 C 27.445312 317.285156 27.484375 317.582031 27.5625 317.875 C 27.964844 319.367188 29.324219 320.40625 30.871094 320.40625 L 98.96875 320.289062 C 100.859375 320.289062 102.390625 318.75 102.386719 316.808594 C 102.386719 316.511719 102.347656 316.207031 102.273438 315.921875 C 101.871094 314.429688 100.507812 313.390625 98.957031 313.390625 L 30.863281 313.503906 C 29.945312 313.507812 29.089844 313.863281 28.441406 314.511719 " fill-opacity="1" fill-rule="nonzero" /></g><path fill="#fffff0" d="M 497.246094 318.625 C 497.894531 317.976562 498.25 317.117188 498.246094 316.152344 C 498.246094 315.847656 498.207031 315.550781 498.128906 315.265625 C 497.730469 313.773438 496.367188 312.726562 494.816406 312.734375 L 426.722656 312.847656 C 424.832031 312.851562 423.296875 314.390625 423.304688 316.324219 C 423.304688 316.628906 423.34375 316.925781 423.421875 317.21875 C 423.820312 318.703125 425.183594 319.75 426.734375 319.742188 L 494.828125 319.628906 C 495.742188 319.628906 496.601562 319.273438 497.246094 318.625 " fill-opacity="1" fill-rule="nonzero" /><path fill="#fffff0" d="M 466.875 201.144531 C 467.109375 200.265625 466.988281 199.339844 466.5 198.507812 C 466.347656 198.246094 466.167969 198.007812 465.957031 197.796875 C 464.859375 196.707031 463.160156 196.484375 461.820312 197.261719 L 402.90625 231.40625 C 401.273438 232.355469 400.710938 234.453125 401.6875 236.128906 C 401.839844 236.394531 402.019531 236.628906 402.230469 236.84375 C 403.324219 237.933594 405.027344 238.152344 406.367188 237.375 L 465.28125 203.226562 C 466.074219 202.773438 466.640625 202.03125 466.875 201.144531 " fill-opacity="1" fill-rule="nonzero" /><path fill="#fffff0" d="M 381.828125 114.597656 C 381.589844 113.710938 381.023438 112.976562 380.183594 112.496094 C 379.925781 112.347656 379.644531 112.230469 379.355469 112.152344 C 377.863281 111.757812 376.28125 112.414062 375.507812 113.757812 L 341.5625 172.789062 C 340.617188 174.425781 341.183594 176.519531 342.867188 177.484375 C 343.125 177.636719 343.40625 177.753906 343.695312 177.828125 C 345.1875 178.226562 346.769531 177.570312 347.542969 176.230469 L 381.488281 117.195312 C 381.949219 116.40625 382.066406 115.480469 381.828125 114.597656 " fill-opacity="1" fill-rule="nonzero" /><g clip-path="url(#a3fe7c4064)"><path fill="#fffff0" d="M 152.507812 320.378906 C 153.550781 260.558594 202.378906 212.402344 262.507812 212.402344 C 322.570312 212.402344 371.398438 260.558594 372.4375 320.378906 Z M 152.507812 320.378906 " fill-opacity="1" fill-rule="nonzero" /></g></svg>
                        }
                    </Link>


                </div>
                <div className="items-center space-x-5 flex-shrink-0 hidden lg:flex">


                    <Link
                        rel="noopener noreferrer"
                        href="tel:505-147-29-90"
                        className="flex items-center         flex-row transition duration-200 ease-in-out  underline-animation"
                    >
                        505.147.29.90
                    </Link>



                    <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href="mailto:info@alaeddinscoast.com"
                        className="transition duration-200 ease-in-out  underline-animation"
                    >
                        {translations('contact')}

                    </Link>





                </div>

                <div className='items-center flex space-x-4  order-last lg:flex lg:hidden    '>
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
                        <DropMenu
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
                        </DropMenu>
                    </div>
                    {isMenuOpen ?
                        <button onClick={toggleMenu} className="  ">
                            <Close />
                        </button> :
                        <button onClick={toggleMenu} className="   ">
                            <Menu />
                        </button>
                    }
                </div>
            </div>

            {isMenuOpen && (
                <div className="h-screen transition bg-black left-0 w-full bg-standy-black ease-in-out duration-300 shadow-lg lg:hidden">
                    <ul>
                        <Link onClick={() => setIsMenuOpen(false)} href="/our-properties">
                            <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                                <p> {translations('our-properties')}</p>
                                <ArrowForward></ArrowForward>
                            </li>
                        </Link>
                        <Link onClick={() => setIsMenuOpen(false)} href="/offices">
                            <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                                <p>   {translations('offices')}</p>
                                <ArrowForward></ArrowForward>
                            </li>
                        </Link>
                        <Link onClick={() => setIsMenuOpen(false)} href="tel:505-147-29-90">
                            <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                                <p>505.147.29.90</p>
                                <ArrowForward></ArrowForward>
                            </li>
                        </Link>
                        <Link target='_blank' onClick={() => setIsMenuOpen(false)} href="mailto:info@alaeddinscoast.com">
                            <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                                <p>  {translations('contact')}</p>
                                <ArrowForward></ArrowForward>
                            </li>
                        </Link>
                    </ul>
                </div>
            )}
        </header>
    );
}
