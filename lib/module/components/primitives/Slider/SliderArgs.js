Object.defineProperty(exports,"__esModule",{value:true});exports.StorybookSliderArgs=void 0;var _theme=require("../../../theme");var StorybookSliderArgs={colorScheme:{name:"colorScheme",type:{name:"string",required:true},defaultValue:"primary",options:["primary","secondary","tertiary"],control:{type:"select"}},size:{name:"size",type:{name:"string"},defaultValue:"md",control:{type:"select"},options:Object.keys(_theme.myTheme.components.Slider.sizes)},isDisabled:{name:"isDisabled",type:{name:"boolean"},defaultValue:false,control:{type:"boolean"}}};exports.StorybookSliderArgs=StorybookSliderArgs;
//# sourceMappingURL=SliderArgs.js.map