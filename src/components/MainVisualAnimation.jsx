import React, { useEffect, createRef } from 'react';
import Lottie from 'lottie-web-light';

const MainVisualAnimation = () => {
    const animationContainer = createRef();

    useEffect(() => {
        const anim = Lottie.loadAnimation({
            container: animationContainer.current,
            loop: true,
            autoplay: true,
            path: "/animations/animation1.json",
            rendererSettings: {
                preserveAspectRatio: 'xMaxYMax slice'
            }
        });

        return () => anim.destroy();
    }, [animationContainer]);

    return (
        <div className='w-full h-screen absolute' ref={animationContainer} />
    );
};

export default MainVisualAnimation;

