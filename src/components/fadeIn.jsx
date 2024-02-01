/** フェードインでポップアップ */
export const fadeInScaleUp1 = {
    offscreen: {
        opacity: 0, 
        scale: 0.7
    },
    onscreen: {
        opacity: 1, 
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.5
        },
    },
}

export const fadeInScaleUp2 = {
    offscreen: {
        opacity: 0,
        scale: 0.7
    },
    onscreen: {
        opacity: 1, 
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 1.0
        },
    },
}

export const fadeInImageUp = {
    offscreen: {
        scale: 0.7,
        opacity: 0,
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.7,
        },
    },
};

export const fadeInImageUp2 = {
    offscreen: {
        scale: 0.5,
        opacity: 0,
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};

export const fadeInUp = {
    offscreen: {
        y: 30,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
        },
    },
};

export const fadeInUp2 = {
    offscreen: {
        y: 30,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: 0.5,
        },
    },
};

export const fadeInUpX = {
    offscreen: {
        x: 20,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.5,
        },
    },
}

export const fadeInUpX2 = {
    offscreen: {
        x: -20,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
}