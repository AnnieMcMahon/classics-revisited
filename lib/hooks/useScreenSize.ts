'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to check if the device is a mobile device
 *
 * This hook is used to determine if the user is currently accessing the application
 * from a mobile device or a desktop device. It uses the window.matchMedia API to
 * check the current screen size and updates the state accordingly.
 *
 * The hook returns an object with an isMobile property, which is set to true if the
 * device is a mobile device and false if the device is a desktop device.
 */
export function useScreenSize() {
  // State to track if the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  // This useEffect hook is used to check the current screen size and update the isMobile state accordingly.
  useEffect(() => {
    // Function to check screen size and set the isMobile state
    const checkScreenSize = () => {
      // Check if the screen width is less than or equal to 768px (NOTE: iPad Mini in portrait mode is 768px)
      // This is a common breakpoint used to determine if the device is a mobile device or a desktop device.
      // If the screen width is less than or equal to 768px, then we set the isMobile state to true, indicating that
      // the device is a mobile device.
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    // Perform an initial check when the component mounts
    // This is necessary to ensure that the isMobile state is set correctly when the component is first rendered.
    checkScreenSize();

    // Add event listener for window resize to update the state
    // This is necessary to ensure that the isMobile state is updated if the user resizes the window.
    window.addEventListener('resize', checkScreenSize);

    // Cleanup function to remove the event listener when the component unmounts
    // This is necessary to prevent memory leaks.
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return { isMobile };
}
