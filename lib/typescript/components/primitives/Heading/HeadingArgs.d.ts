export declare const StorybookHeadingArgs: {
    children: {
        name: string;
        type: {
            name: string;
            required: boolean;
        };
        defaultValue: string;
        control: {
            type: string;
        };
    };
    size: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: string;
        control: {
            type: string;
        };
        options: string[];
    };
};
export declare const HeadingArgs: {
    pages: {
        type: string;
        section: string;
        row: string;
        component: string;
    };
    props: {
        children: {
            name: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: string;
            control: {
                type: string;
            };
        };
        size: {
            name: string;
            type: {
                name: string;
            };
            defaultValue: string;
            control: {
                type: string;
            };
            options: string[];
        };
        states: {
            default: {
                name: string;
            };
        }[];
    };
    metaData: {
        heading: string;
        "sub-heading": string;
    };
};
