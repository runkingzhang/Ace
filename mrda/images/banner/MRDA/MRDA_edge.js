/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'pic12Copy2',
                type: 'image',
                rect: ['0%', '0%','99.6%','95.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic1.png",'0%','0%','15.37%','14.75%']
            },
            {
                id: 'member',
                type: 'image',
                rect: ['0%', '0%','99.6%','95.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"member2.jpg",'0%','0%','auto','95.58%']
            },
            {
                id: 'pic72',
                type: 'image',
                rect: ['0%', '0%','99.6%','95.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic7.jpg",'0%','0%','15.37%','14.75%']
            },
            {
                id: 'pic62',
                type: 'image',
                rect: ['0%', '0%','99.6%','95.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic6.jpg",'0%','0%','15.37%','14.75%']
            },
            {
                id: 'pic52',
                type: 'image',
                rect: ['0%', '0%','99.6%','95.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic5.jpg",'0%','0%','15.37%','14.75%']
            },
            {
                id: 'pic42',
                type: 'image',
                rect: ['0%', '0%','99.6%','95.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic4.jpg",'0%','0%','15.37%','14.75%']
            },
            {
                id: 'pic32',
                type: 'image',
                rect: ['0%', '0%','99.6%','95.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic3.jpg",'0%','0%','15.37%','14.75%']
            },
            {
                id: 'pic22',
                type: 'image',
                rect: ['0%', '0%','99.6%','95.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2.png",'0%','0%','15.37%','14.75%']
            },
            {
                id: 'pic12',
                type: 'image',
                rect: ['0%', '0%','99.6%','95.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic1.jpg",'0%','0%','15.35%','14.75%']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['1px', '1px','350px','100%','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'menu',
                type: 'image',
                tag: 'img',
                rect: ['0', '0','19.8%','auto','auto', 'auto'],
                sizeRange: ['270px','270px','',''],
                fill: ["rgba(0,0,0,0)",im+"menu.png",'0px','0px','270px','180px']
            },
            {
                id: 'note',
                type: 'rect',
                rect: ['0%', 'auto','auto','auto','auto', '2.8%']
            }],
            symbolInstances: [
            {
                id: 'note',
                symbolName: 'note',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_pic22}": [
                ["style", "background-size", [104.20338983051,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '100%']
            ],
            "${_pic12}": [
                ["style", "background-size", [104.0677991964,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '100%'],
                ["transform", "scaleY", '1'],
                ["style", "overflow", 'visible'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '100.11%']
            ],
            "${_pic62}": [
                ["style", "background-size", [104.20338983051,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '100%']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.color", 'rgba(221,221,221,1.00)'],
                ["style", "opacity", '0.50216211972198'],
                ["style", "left", '0px'],
                ["style", "width", '320px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '1px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${_pic52}": [
                ["style", "background-size", [104.20338983051,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '100%']
            ],
            "${_pic72}": [
                ["style", "background-size", [104.20338983051,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '100%']
            ],
            "${_member}": [
                ["style", "background-size", ['auto',100], {valueTemplate:'@@0@@ @@1@@%'} ],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '100%']
            ],
            "${_pic12Copy2}": [
                ["transform", "scaleX", '1'],
                ["style", "background-size", [104.20338983051,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1'],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '100%']
            ],
            "${_note}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '2.8%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '0px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_menu}": [
                ["style", "top", '55px'],
                ["style", "min-width", '270.06px'],
                ["style", "max-width", '270px'],
                ["style", "height", 'auto'],
                ["style", "left", '23px'],
                ["style", "-webkit-transform-origin", [50,49], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,49],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,49],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,49],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,49],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_pic42}": [
                ["style", "background-size", [104.20338983051,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '100%']
            ],
            "${_pic32}": [
                ["style", "background-size", [104.20338983051,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 53534,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid141", tween: [ "style", "${_pic32}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Rectangle}", "width", '320px', { fromValue: '320px'}], position: 0, duration: 0 },
                { id: "eid145", tween: [ "style", "${_pic72}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid543", tween: [ "style", "${_pic12Copy2}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
                { id: "eid544", tween: [ "style", "${_pic12Copy2}", "width", '100%', { fromValue: '100%'}], position: 53534, duration: 0 },
                { id: "eid71", tween: [ "style", "${_menu}", "left", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "subproperty", "${_Rectangle}", "boxShadow.blur", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid747", tween: [ "style", "${_pic62}", "background-size", [104.20338983051,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [104.20338983051,100]}], position: 0, duration: 0 },
                { id: "eid748", tween: [ "style", "${_pic42}", "background-size", [104.20338983051,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [104.20338983051,100]}], position: 0, duration: 0 },
                { id: "eid788", tween: [ "subproperty", "${_Rectangle}", "boxShadow.color", 'rgba(221,221,221,1.00)', { fromValue: 'rgba(221,221,221,1.00)'}], position: 2000, duration: 0 },
                { id: "eid55", tween: [ "subproperty", "${_Rectangle}", "boxShadow.offsetH", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid742", tween: [ "style", "${_pic22}", "background-size", [104.20338983051,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [104.20338983051,100]}], position: 0, duration: 0 },
                { id: "eid732", tween: [ "style", "${_pic12}", "background-size", [104.0677991964,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [104.0677991964,100]}], position: 0, duration: 0 },
                { id: "eid143", tween: [ "style", "${_pic52}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid207", tween: [ "style", "${_Rectangle}", "opacity", '0.50216211972198', { fromValue: '0.50216211972198'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_pic12}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 2034 },
                { id: "eid38", tween: [ "style", "${_pic72}", "opacity", '0', { fromValue: '1'}], position: 44000, duration: 2034 },
                { id: "eid139", tween: [ "style", "${_pic12}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid746", tween: [ "style", "${_pic72}", "background-size", [104.20338983051,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [104.20338983051,100]}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Rectangle}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_pic22}", "opacity", '0', { fromValue: '1'}], position: 9966, duration: 2034 },
                { id: "eid745", tween: [ "style", "${_pic32}", "background-size", [104.20338983051,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [104.20338983051,100]}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_pic32}", "opacity", '0', { fromValue: '1'}], position: 16000, duration: 2034 },
                { id: "eid142", tween: [ "style", "${_pic42}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_pic62}", "opacity", '0', { fromValue: '1'}], position: 36500, duration: 2034 },
                { id: "eid539", tween: [ "style", "${_pic12Copy2}", "height", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_menu}", "-webkit-transform-origin", [50,49], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,49]}], position: 0, duration: 0 },
                { id: "eid875", tween: [ "style", "${_menu}", "-moz-transform-origin", [50,49], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,49]}], position: 0, duration: 0 },
                { id: "eid876", tween: [ "style", "${_menu}", "-ms-transform-origin", [50,49], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,49]}], position: 0, duration: 0 },
                { id: "eid877", tween: [ "style", "${_menu}", "msTransformOrigin", [50,49], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,49]}], position: 0, duration: 0 },
                { id: "eid878", tween: [ "style", "${_menu}", "-o-transform-origin", [50,49], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,49]}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "subproperty", "${_Rectangle}", "boxShadow.offsetV", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid144", tween: [ "style", "${_pic62}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid743", tween: [ "style", "${_pic52}", "background-size", [104.20338983051,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [104.20338983051,100]}], position: 0, duration: 0 },
                { id: "eid741", tween: [ "style", "${_pic12Copy2}", "background-size", [104.20338983051,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [104.20338983051,100]}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_menu}", "top", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_pic52}", "opacity", '0', { fromValue: '1'}], position: 29500, duration: 2034 },
                { id: "eid32", tween: [ "style", "${_pic42}", "opacity", '0', { fromValue: '1'}], position: 22500, duration: 2034 },
                { id: "eid538", tween: [ "transform", "${_pic12Copy2}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid537", tween: [ "style", "${_member}", "opacity", '0', { fromValue: '1'}], position: 51500, duration: 2034 },
                { id: "eid541", tween: [ "style", "${_pic12Copy2}", "opacity", '0', { fromValue: '1'}], position: 51500, duration: 2034 },
                { id: "eid542", tween: [ "style", "${_pic12Copy2}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Rectangle}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid540", tween: [ "transform", "${_pic12Copy2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 }            ]
        }
    }
},
"note": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['37px', '0px', '178.5%', '26px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    rect: ['44px', '13px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Website is under constuction...',
                    type: 'text',
                    tag: 'p'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100.03%']
            ],
            "${_Text}": [
                ["style", "top", '6px'],
                ["color", "color", 'rgba(153,153,153,1.00)'],
                ["style", "left", '10px'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '186px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid226", tween: [ "style", "${_Text}", "font-size", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
                { id: "eid229", tween: [ "color", "${_Text}", "color", 'rgba(153,153,153,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(153,153,153,1.00)'}], position: 0, duration: 0 },
                { id: "eid260", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid263", tween: [ "style", "${_Text}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_Rectangle2}", "width", '100.03%', { fromValue: '100.03%'}], position: 0, duration: 0 },
                { id: "eid228", tween: [ "style", "${_Text}", "top", '6px', { fromValue: '6px'}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-88919355");
