export declare const testCase: {
    background: string;
    navLinksColors: string;
    navActions: {
        label: string;
        onClick: () => void;
    }[];
    navLinks: {
        label: string;
        toUrl: string;
    }[];
};
export declare const testDesktop: (canvasElement: HTMLElement) => Promise<void>;
export declare const testMobile: (canvasElement: HTMLElement) => Promise<void>;
