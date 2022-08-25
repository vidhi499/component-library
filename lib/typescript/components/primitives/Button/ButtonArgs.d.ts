export declare const StorybookButtonArgs: {
    colorScheme: {
        name: string;
        type: {
            name: string;
            required: boolean;
        };
        defaultValue: string;
        options: string[];
        control: {
            type: string;
        };
    };
    variant: {
        name: string;
        type: {
            name: string;
            required: boolean;
        };
        defaultValue: string;
        options: string[];
        control: {
            type: string;
        };
    };
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
    isHovered: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    isDisabled: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    isLoading: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    isPressed: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    sizes: {
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
export declare const ButtonArgs: {
    pages: {
        type: string;
        section: string;
        row: string;
        component: string;
    };
    props: {
        variant: {
            name: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: string;
            options: string[];
            control: {
                type: string;
            };
        };
        colorScheme: {
            name: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: string;
            options: string[];
            control: {
                type: string;
            };
        };
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
        sizes: {
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
        states: ({
            default: {
                name: string;
            };
            isHovered?: undefined;
            isDisabled?: undefined;
            isPressed?: undefined;
        } | {
            isHovered: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            isDisabled?: undefined;
            isPressed?: undefined;
        } | {
            isDisabled: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            isHovered?: undefined;
            isPressed?: undefined;
        } | {
            isPressed: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            isHovered?: undefined;
            isDisabled?: undefined;
        })[];
    };
    metaData: {
        heading: string;
        "sub-heading": string;
        "other-info": {
            variants: ({
                Solid: string;
                Outlined?: undefined;
                Link?: undefined;
                Ghost?: undefined;
                Disabled?: undefined;
                Loading?: undefined;
                "Button with icon"?: undefined;
            } | {
                Outlined: string;
                Solid?: undefined;
                Link?: undefined;
                Ghost?: undefined;
                Disabled?: undefined;
                Loading?: undefined;
                "Button with icon"?: undefined;
            } | {
                Link: string;
                Solid?: undefined;
                Outlined?: undefined;
                Ghost?: undefined;
                Disabled?: undefined;
                Loading?: undefined;
                "Button with icon"?: undefined;
            } | {
                Ghost: string;
                Solid?: undefined;
                Outlined?: undefined;
                Link?: undefined;
                Disabled?: undefined;
                Loading?: undefined;
                "Button with icon"?: undefined;
            } | {
                Disabled: string;
                Solid?: undefined;
                Outlined?: undefined;
                Link?: undefined;
                Ghost?: undefined;
                Loading?: undefined;
                "Button with icon"?: undefined;
            } | {
                Loading: string;
                Solid?: undefined;
                Outlined?: undefined;
                Link?: undefined;
                Ghost?: undefined;
                Disabled?: undefined;
                "Button with icon"?: undefined;
            } | {
                "Button with icon": string;
                Solid?: undefined;
                Outlined?: undefined;
                Link?: undefined;
                Ghost?: undefined;
                Disabled?: undefined;
                Loading?: undefined;
            })[];
        };
    };
};
