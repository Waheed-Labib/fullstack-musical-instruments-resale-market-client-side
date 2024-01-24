import React, { useContext, useEffect, useState } from 'react';
import './CustomCursor.css';
import { ThemeContext } from 'setup/contexts/ThemeProvider/ThemeProvider';

const CustomCursor = () => {

    const { mode } = useContext(ThemeContext)

    const [deviceType, setDeviceType] = useState('');
    const [isClicking, setIsClicking] = useState(false);

    // check if it is a touch device
    const isTouchDevice = () => {
        try {
            document.createEvent('TouchEvent');
            setDeviceType('touch');
            return true;
        } catch (e) {
            setDeviceType('mouse');
            return false;
        }
    };

    // ‘handleMouseDown’ and ‘handleMouseUp’ functions manage the clicking state
    const handleMouseDown = () => {
        setIsClicking(true);
    };

    const handleMouseUp = () => {
        setIsClicking(false);
    };

    // The use­Effect hook serves the­ purpose of incorporating and removing eve­nt listeners for both mouse and touch e­vents. Its functionality ensures that the­ cursor’s position is continuously updated.
    useEffect(() => {
        // move function tracks the cursor's movement
        const move = (e) => {
            const touchEvent = e.touches ? e.touches[0] : null;
            const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
            const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

            // Set the cursor's position directly
            const cursor = document.getElementById('cursor');
            if (cursor) {
                cursor.style.left = `${x}px`;
                cursor.style.top = `${y}px`;
            }
        };

        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div>
            <div
                id='cursor'
                className={`${deviceType === 'touch' && 'hidden'} custom-cursor-${mode}-mode ${isClicking && 'custom-cursor-clicking'}`}
            ></div>
        </div >
    );
};

export default CustomCursor;