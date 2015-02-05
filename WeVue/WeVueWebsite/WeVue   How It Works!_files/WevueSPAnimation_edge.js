/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var basepath = 'http://wevue-dev.s3.amazonaws.com/';
var im= basepath+'www/ani/v2/images/';

var fonts = {};    fonts['Roboto, sans-serif']='<script type=\"text/javascript\">  WebFontConfig = {    google: { families: [ \'Roboto:400,100,700:latin\' ] }  };  (function() {    var wf = document.createElement(\'script\');    wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +      \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';    wf.type = \'text/javascript\';    wf.async = \'true\';    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(wf, s);  })(); </script>';
    fonts['Oswald, sans-serif']='<script type=\"text/javascript\">  WebFontConfig = {    google: { families: [ \'Oswald:400,300:latin\' ] }  };  (function() {    var wf = document.createElement(\'script\');    wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +      \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';    wf.type = \'text/javascript\';    wf.async = \'true\';    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(wf, s);  })(); </script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'white-stage',
                type: 'rect',
                rect: ['0px', '0px','1023px','768px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'bg-blur-rockyshore',
                display: 'block',
                type: 'image',
                rect: ['0', '0','1024px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg-blur-rockyshore.jpg",'0px','0px']
            },
            {
                id: 'grass-hill',
                display: 'none',
                type: 'rect',
                rect: ['0', '504','auto','auto','auto', 'auto']
            },
            {
                id: 'dim-sky',
                display: 'none',
                type: 'rect',
                rect: ['0px', '175px','1024px','595px','auto', 'auto'],
                fill: ["rgba(0,0,0,0.62)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'star1',
                display: 'none',
                type: 'image',
                rect: ['70px', '247px','57px','57px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"artwork_star_white.svg",'0px','0px']
            },
            {
                id: 'star3',
                display: 'none',
                type: 'image',
                rect: ['426px', '286px','57px','57px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"artwork_star_white.svg",'0px','0px']
            },
            {
                id: 'star2',
                display: 'none',
                type: 'image',
                rect: ['224px', '227px','36px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"artwork_star_white.svg",'0px','0px']
            },
            {
                id: 'star4',
                display: 'none',
                type: 'image',
                rect: ['954px', '245px','36px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"artwork_star_white.svg",'0px','0px']
            },
            {
                id: 'concert',
                display: 'none',
                type: 'rect',
                rect: ['522', '288','auto','auto','auto', 'auto']
            },
            {
                id: 'crowd-concert',
                display: 'none',
                type: 'rect',
                rect: ['-122', '484','auto','auto','auto', 'auto']
            },
            {
                id: 'party-pinnata-03-01',
                display: 'none',
                type: 'image',
                rect: ['459px', '768px','100px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"party-pinnata-03-01.svg",'0px','0px']
            },
            {
                id: 'wedding-couple-01',
                display: 'none',
                type: 'image',
                rect: ['459px', '754px','100px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wedding-couple-01.svg",'0px','0px']
            },
            {
                id: 'screen2',
                display: 'block',
                type: 'rect',
                rect: ['0px', '770px','1024px','768px','auto', 'auto'],
                fill: ["rgba(63,71,79,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],[],['1','0.23177']]
            },
            {
                id: 'screen3',
                display: 'none',
                type: 'rect',
                rect: ['0px', '170px','1024px','406px','auto', 'auto'],
                fill: ["rgba(24,106,134,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'screen4',
                display: 'block',
                type: 'rect',
                rect: ['0px', '-411px','1024px','588px','auto', 'auto'],
                fill: ["rgba(34,147,185,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'screen4-point',
                display: 'none',
                type: 'rect',
                rect: ['471px', '119px','100px','100px','auto', 'auto'],
                fill: ["rgba(34,147,185,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['45']]
            },
            {
                id: 'screen3-point2',
                display: 'none',
                type: 'rect',
                rect: ['472px', '178px','100px','100px','auto', 'auto'],
                fill: ["rgba(24,106,134,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['45']]
            },
            {
                id: 'screen2-point',
                display: 'block',
                type: 'rect',
                rect: ['440px', '98px','143px','143px','auto', 'auto'],
                borderRadius: ["0px 0px", "0px 0px", "0px 0px", "0px 0px"],
                fill: ["rgba(63,71,79,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['45'],[],['0.6993','0.6993']]
            },
            {
                id: 'txt_so-your-at',
                display: 'none',
                type: 'text',
                rect: ['281px', '36px','auto','auto','auto', 'auto'],
                text: "So you're at a...",
                align: "center",
                font: ['Roboto, sans-serif', 72, "rgba(255,255,255,1.00)", "100", "none", "normal"]
            },
            {
                id: 'txt_1',
                display: 'none',
                type: 'text',
                rect: ['503px', '157px','auto','auto','auto', 'auto'],
                text: "1",
                align: "center",
                font: ['Oswald, sans-serif', 48, "rgba(173,173,173,1.00)", "400", "none", "normal"]
            },
            {
                id: 'txt_create-album',
                display: 'none',
                type: 'text',
                rect: ['155px', '36px','auto','auto','auto', 'auto'],
                text: "Create a WeVue Album",
                align: "center",
                font: ['Roboto, sans-serif', 72, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'txt_invite-others',
                display: 'none',
                type: 'text',
                rect: ['179px', '46px','auto','auto','auto', 'auto'],
                text: "Invite Others",
                align: "center",
                font: ['Roboto, sans-serif', 72, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'txt_make-a-vue',
                display: 'none',
                type: 'text',
                rect: ['343px', '46px','auto','auto','auto', 'auto'],
                text: "Make a Vue",
                align: "center",
                font: ['Roboto, sans-serif', 72, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'txt_2',
                display: 'none',
                type: 'text',
                rect: ['511px', '150px','auto','auto','auto', 'auto'],
                text: "2",
                align: "center",
                font: ['Oswald, sans-serif', 48, "rgba(158,240,228,1.00)", "400", "none", "normal"]
            },
            {
                id: 'txt_3',
                display: 'none',
                type: 'text',
                rect: ['509px', '158px','auto','auto','auto', 'auto'],
                text: "3",
                align: "center",
                font: ['Oswald, sans-serif', 48, "rgba(224,224,224,1.00)", "400", "none", "normal"]
            },
            {
                id: 'figure_share1',
                display: 'none',
                type: 'image',
                rect: ['488px', '349px','165px','213px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"figure_blue-dk.svg",'0px','0px']
            },
            {
                id: 'figure_blue-dk-happy',
                display: 'none',
                type: 'image',
                rect: ['471px', '326px','181px','234px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"figure_blue-dk-happy.svg",'0px','0px']
            },
            {
                id: 'figure_share2',
                display: 'none',
                type: 'image',
                rect: ['488px', '349px','165px','213px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"figure_blue-dk.svg",'0px','0px']
            },
            {
                id: 'figure_blue-dk-happy2',
                display: 'none',
                type: 'image',
                rect: ['471px', '326px','181px','234px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"figure_blue-dk-happy.svg",'0px','0px']
            },
            {
                id: 'figure_share3',
                display: 'none',
                type: 'image',
                rect: ['488px', '349px','165px','213px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"figure_blue-dk.svg",'0px','0px']
            },
            {
                id: 'figure_blue-dk-happy3',
                display: 'none',
                type: 'image',
                rect: ['762px', '326px','181px','234px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"figure_blue-dk-happy.svg",'0px','0px']
            },
            {
                id: 'txt_add-photos',
                display: 'none',
                type: 'text',
                rect: ['522px', '256px','auto','auto','auto', 'auto'],
                text: "To Add Photos and Videos",
                align: "center",
                font: ['Oswald, sans-serif', 40, "rgba(255,97,87,1.00)", "400", "none", "normal"]
            },
            {
                id: 'txt_to-your-album',
                display: 'none',
                type: 'text',
                rect: ['543px', '599px','auto','auto','auto', 'auto'],
                text: "to your Concert Album",
                align: "center",
                font: ['Oswald, sans-serif', 40, "rgba(255,97,87,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_choose-photos',
                display: 'none',
                type: 'text',
                rect: ['528px', '247px','auto','auto','auto', 'auto'],
                text: "Choose Photos &amp; Videos",
                align: "center",
                font: ['Oswald, sans-serif', 40, "rgba(255,97,87,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_party',
                display: 'none',
                type: 'text',
                rect: ['350px', '298px','auto','auto','auto', 'auto'],
                text: "PARTY",
                align: "center",
                font: ['Oswald, sans-serif', 100, "rgba(255,97,87,1.00)", "400", "none", "normal"]
            },
            {
                id: 'txt_wedding',
                display: 'none',
                type: 'text',
                rect: ['350px', '298px','auto','auto','auto', 'auto'],
                text: "WEDDING",
                align: "center",
                font: ['Oswald, sans-serif', 100, "rgba(255,97,87,1.00)", "400", "none", "normal"]
            },
            {
                id: 'txt_concert',
                display: 'none',
                type: 'text',
                rect: ['350px', '388px','auto','auto','auto', 'auto'],
                text: "CONCERT",
                align: "center",
                font: ['Oswald, sans-serif', 100, "rgba(255,97,87,1.00)", "400", "none", "normal"]
            },
            {
                id: 'iPhone_Dark2',
                display: 'none',
                type: 'image',
                rect: ['202px', '362px','187px','399px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iPhone_Dark.svg",'0px','0px'],
                transform: [[],[],[],['1.34225','1.34226']]
            },
            {
                id: 'iPhone_White',
                display: 'none',
                type: 'image',
                rect: ['170', '294','251px','531px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iPhone_White.svg",'0px','0px']
            },
            {
                id: 'Vue-icon-white',
                display: 'none',
                type: 'image',
                rect: ['208', '488px','177px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Vue-icon-white.svg",'0px','0px']
            },
            {
                id: 'txt_enjoy-your-vue',
                display: 'none',
                type: 'text',
                rect: ['352px', '178px','auto','auto','auto', 'auto'],
                text: "Enjoy Your Vue!",
                align: "center",
                font: ['Oswald, sans-serif', 60, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'tap-ring',
                display: 'none',
                type: 'ellipse',
                rect: ['276px', '548px','45px','44px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(63,71,79,0.00)"],
                stroke: [10,"rgba(255,97,87,1.00)","solid"]
            },
            {
                id: 'txt_big-jam',
                display: 'none',
                type: 'text',
                rect: ['208px', '611px','auto','auto','auto', 'auto'],
                text: "BIG JAM",
                align: "center",
                font: ['Oswald, sans-serif', 55, "rgba(63,71,79,1.00)", "400", "none", "normal"]
            },
            {
                id: 'txt_add-music',
                display: 'none',
                type: 'text',
                rect: ['204px', '402px','190px','60px','auto', 'auto'],
                text: "Add Music",
                font: ['Oswald, sans-serif', 44, "rgba(63,71,79,1.00)", "normal", "none", ""]
            },
            {
                id: 'txt_create',
                display: 'none',
                type: 'text',
                rect: ['198px', '382px','199px','64px','auto', 'auto'],
                text: "Create",
                align: "center",
                font: ['Oswald, sans-serif', 44, "rgba(63,71,79,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_VUE',
                display: 'none',
                type: 'text',
                rect: ['197px', '437px','199px','82px','auto', 'auto'],
                text: "VUE",
                align: "center",
                font: ['Oswald, sans-serif', 60, "rgba(63,71,79,1)", "400", "none", "normal"]
            },
            {
                id: 'tap-ring2',
                display: 'none',
                type: 'ellipse',
                rect: ['276px', '548px','45px','44px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(63,71,79,0.00)"],
                stroke: [10,"rgba(255,97,87,1.00)","solid"]
            },
            {
                id: 'folder-light-back',
                display: 'none',
                type: 'image',
                rect: ['217px', '459px','155px','126px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"folder-light-back.svg",'0px','0px']
            },
            {
                id: 'photo2',
                display: 'none',
                type: 'image',
                rect: ['774px', '307px','57px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo.svg",'0px','0px']
            },
            {
                id: 'photo2b',
                display: 'none',
                type: 'image',
                rect: ['337px', '467px','57px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo.svg",'0px','0px'],
                transform: [[],['21']]
            },
            {
                id: 'photo1',
                display: 'none',
                type: 'image',
                rect: ['482px', '291px','57px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo.svg",'0px','0px']
            },
            {
                id: 'photo1b',
                display: 'none',
                type: 'image',
                rect: ['205px', '476px','57px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo.svg",'0px','0px'],
                transform: [[],['-23']]
            },
            {
                id: 'film',
                display: 'none',
                type: 'image',
                rect: ['639px', '286px','58px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"film.svg",'0px','0px']
            },
            {
                id: 'film2',
                display: 'none',
                type: 'image',
                rect: ['287px', '484px','58px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"film.svg",'0px','0px']
            },
            {
                id: 'music-note',
                display: 'none',
                type: 'image',
                rect: ['242px', '497px','106px','126px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"music-note.svg",'0px','0px']
            },
            {
                id: 'checkmark1',
                display: 'none',
                type: 'image',
                rect: ['535px', '356px','69px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"checkmark-green.svg",'0px','0px']
            },
            {
                id: 'checkmark2',
                display: 'none',
                type: 'image',
                rect: ['824', '356','69px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"checkmark-green.svg",'0px','0px']
            },
            {
                id: 'checkmark3',
                display: 'none',
                type: 'image',
                rect: ['677px', '548px','69px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"checkmark-green.svg",'0px','0px']
            },
            {
                id: 'checkmark4',
                display: 'none',
                type: 'image',
                rect: ['274px', '527px','69px','89px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"checkmark-green.svg",'0px','0px']
            },
            {
                id: 'Vue-icon',
                display: 'none',
                type: 'image',
                rect: ['202px', '539px','190px','154px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Vue-icon.svg",'0px','0px']
            },
            {
                id: 'gear2',
                display: 'none',
                type: 'image',
                rect: ['540px', '809px','176px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gear.svg",'0px','0px']
            },
            {
                id: 'gear2Copy',
                display: 'none',
                type: 'image',
                rect: ['717px', '776px','176px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gear.svg",'0px','0px']
            },
            {
                id: 'folder-light-front',
                display: 'none',
                type: 'image',
                rect: ['203px', '497px','181px','108px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"folder-light-front.svg",'0px','0px']
            },
            {
                id: 'WeVue-Icon2',
                display: 'none',
                type: 'image',
                rect: ['255px', '487px','79px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"WeVue-Icon2.svg",'0px','0px']
            },
            {
                id: 'user-anderson',
                display: 'none',
                type: 'rect',
                rect: ['198', '420','auto','auto','auto', 'auto']
            },
            {
                id: 'user-bonnie',
                display: 'none',
                type: 'rect',
                rect: ['198', '460','auto','auto','auto', 'auto']
            },
            {
                id: 'user-bruno',
                display: 'none',
                type: 'rect',
                rect: ['198', '500','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_contacts',
                display: 'none',
                type: 'text',
                rect: ['242px', '384px','auto','auto','auto', 'auto'],
                text: "MY CONTACTS",
                align: "center",
                font: ['Oswald, sans-serif', 20, "rgba(63,71,79,1)", "400", "none", "normal"]
            },
            {
                id: 'finger-point',
                display: 'none',
                type: 'image',
                rect: ['302px', '586px','100px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"finger-point-01.svg",'0px','0px']
            },
            {
                id: 'arrow-hand-drawn',
                display: 'none',
                type: 'image',
                rect: ['342px', '527px','199px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-hand-drawn.png",'0px','0px'],
                transform: [[],['-14'],[],['0.87761','0.84801']]
            },
            {
                id: 'txt_scene1-1a',
                display: 'block',
                type: 'text',
                rect: ['169px', '135px','auto','auto','auto', 'auto'],
                text: "CREATE",
                align: "center",
                font: ['Oswald, sans-serif', 36, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'txt_scene1-2a',
                display: 'block',
                type: 'text',
                rect: ['641px', '221px','auto','auto','auto', 'auto'],
                text: "GATHER EVERYONE'S",
                align: "right",
                font: ['Oswald, sans-serif', 36, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'txt_scene1-1b',
                display: 'block',
                type: 'text',
                rect: ['109px', '180px','auto','auto','auto', 'auto'],
                text: "shared albums",
                align: "center",
                font: ['Roboto, sans-serif', 65, "rgba(255,255,255,1.00)", "100", "none", "normal"]
            },
            {
                id: 'txt_scene1-2b',
                display: 'block',
                type: 'text',
                rect: ['495px', '180px','auto','auto','auto', 'auto'],
                text: "photos &amp; videos",
                align: "right",
                font: ['Roboto, sans-serif', 65, "rgba(255,255,255,1.00)", "100", "none", "normal"]
            },
            {
                id: 'txt_scene1-3a',
                display: 'block',
                type: 'text',
                rect: ['185px', '313px','auto','auto','auto', 'auto'],
                text: "MAKE",
                align: "center",
                font: ['Oswald, sans-serif', 36, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'txt_scene1-3b',
                display: 'block',
                type: 'text',
                rect: ['108px', '180px','auto','auto','auto', 'auto'],
                text: "home movies",
                align: "center",
                font: ['Roboto, sans-serif', 65, "rgba(255,255,255,1.00)", "100", "none", "normal"]
            },
            {
                id: 'txt_scroll-to-see',
                display: 'block',
                type: 'text',
                rect: ['462px', '403px','905px','auto','auto', 'auto'],
                text: "scroll to see how",
                align: "center",
                userClass: "scroll_message",
                font: ['Oswald, sans-serif', 24, "rgba(173,173,173,1.00)", "300", "none", "normal"]
            },
            {
                id: 'bouncing-down-arrow',
                display: 'block',
                type: 'rect',
                rect: ['497', '520px','auto','auto','auto', 'auto'],
                userClass: "nonTouchElement",
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'finger-swipe-left',
                display: 'block',
                type: 'rect',
                rect: ['466px', '478px','auto','auto','auto', 'auto'],
                userClass: "touchElement",
                transform: [[],[],[],['0.71','0.71']]
            },
            {
                id: 'screen5',
                display: 'none',
                type: 'rect',
                rect: ['-2px', '861px','1024px','677px','auto', 'auto'],
                fill: ["rgba(63,71,79,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'phone-scene1',
                display: 'block',
                type: 'rect',
                rect: ['355', '289','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_next',
                type: 'rect',
                rect: ['964', '409','auto','auto','auto', 'auto'],
                opacity: 1,
                userClass: "touchElement"
            },
            {
                id: 'btn_prev',
                type: 'rect',
                rect: ['-70px', '409','auto','auto','auto', 'auto'],
                opacity: 1,
                userClass: "touchElement"
            },
            {
                id: 'vue-thumb1',
                display: 'none',
                type: 'rect',
                rect: ['148', '590','auto','auto','auto', 'auto']
            },
            {
                id: 'vue-thumb2',
                display: 'none',
                type: 'rect',
                rect: ['426', '590','auto','auto','auto', 'auto']
            },
            {
                id: 'vue-thumb3',
                display: 'none',
                type: 'rect',
                rect: ['700', '591','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_check-out-other-vues',
                display: 'none',
                type: 'text',
                rect: ['253px', '496px','auto','auto','auto', 'auto'],
                text: "CHECK OUT OTHER VUES",
                align: "center",
                font: ['Roboto, sans-serif', 48, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'txt_last-1b',
                display: 'none',
                type: 'text',
                rect: ['277px', '608px','auto','auto','auto', 'auto'],
                text: "publicly or privately",
                align: "center",
                font: ['Roboto, sans-serif', 60, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'txt_last-1a',
                display: 'none',
                type: 'text',
                rect: ['483px', '565px','auto','auto','auto', 'auto'],
                text: "SHARE",
                align: "center",
                font: ['Oswald, sans-serif', 36, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_last-2a',
                display: 'none',
                type: 'text',
                rect: ['417px', '557px','auto','auto','auto', 'auto'],
                text: "START SHARING",
                align: "center",
                font: ['Oswald, sans-serif', 36, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_last-2b',
                display: 'none',
                type: 'text',
                rect: ['324px', '607px','auto','auto','auto', 'auto'],
                text: "your memories!",
                align: "center",
                font: ['Roboto, sans-serif', 60, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'mainVideo',
                display: 'none',
                type: 'rect',
                rect: ['330px', '152px','auto','auto','auto', 'auto']
            },
            {
                id: 'region-swipe-left',
                display: 'block',
                type: 'rect',
                rect: ['60px', '91px','905px','677px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                userClass: "touchElement"
            },
            {
                id: 'region-swipe-both',
                display: 'none',
                type: 'rect',
                rect: ['60px', '91px','905px','677px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                userClass: "touchElement"
            },
            {
                id: 'region-swipe-right',
                display: 'none',
                type: 'rect',
                rect: ['60px', '0px','905px','590px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                userClass: "touchElement"
            },
            {
                id: 'Header2',
                type: 'rect',
                rect: ['-1px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'get-the-app-now',
                display: 'none',
                type: 'image',
                rect: ['406px', '54px','266px','96px','auto', 'auto'],
                clip: ['rect(0px 266px 96px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"get-the-app-now.png",'0px','0px']
            },
            {
                id: 'arrow-l2r-red',
                display: 'none',
                type: 'image',
                rect: ['585px', '58px','294px','53px','auto', 'auto'],
                clip: ['rect(0px 294px 53px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"arrow-l2r-red.png",'0px','0px'],
                transform: [[],[],[],['0.90476']]
            }],
            symbolInstances: [
            {
                id: 'btn_prev',
                symbolName: 'btn_prev',
                autoPlay: {

                }
            },
            {
                id: 'Header2',
                symbolName: 'Header',
                autoPlay: {

                }
            },
            {
                id: 'user-bonnie',
                symbolName: 'user-bonnie',
                autoPlay: {

                }
            },
            {
                id: 'vue-thumb1',
                symbolName: 'vue-thumb1',
                autoPlay: {

                }
            },
            {
                id: 'user-anderson',
                symbolName: 'user-anderson',
                autoPlay: {

                }
            },
            {
                id: 'bouncing-down-arrow',
                symbolName: 'bouncing-down-arrow',
                autoPlay: {

                }
            },
            {
                id: 'finger-swipe-left',
                symbolName: 'finger-swipe-left',
                autoPlay: {

                }
            },
            {
                id: 'phone-scene1',
                symbolName: 'phone-scene1',
                autoPlay: {

                }
            },
            {
                id: 'mainVideo',
                symbolName: 'mainVideo',
                autoPlay: {

                }
            },
            {
                id: 'concert',
                symbolName: 'concert',
                autoPlay: {

                }
            },
            {
                id: 'vue-thumb2',
                symbolName: 'vue-thumb2',
                autoPlay: {

                }
            },
            {
                id: 'btn_next',
                symbolName: 'btn_next',
                autoPlay: {

                }
            },
            {
                id: 'crowd-concert',
                symbolName: 'crowd-concert',
                autoPlay: {

                }
            },
            {
                id: 'grass-hill',
                symbolName: 'grass-hill',
                autoPlay: {

                }
            },
            {
                id: 'vue-thumb3',
                symbolName: 'vue-thumb3',
                autoPlay: {

                }
            },
            {
                id: 'user-bruno',
                symbolName: 'user-bruno',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_txt_add-music}": [
                ["style", "top", '692px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["color", "color", 'rgba(63,71,79,1.00)'],
                ["style", "font-size", '44px']
            ],
            "${_txt_create}": [
                ["style", "top", '622px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "height", '64px']
            ],
            "${_dim-sky}": [
                ["style", "top", '175px'],
                ["color", "background-color", 'rgba(0,0,0,0.62)'],
                ["style", "height", '595px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_txt_so-your-at}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '281px'],
                ["style", "font-size", '72px'],
                ["style", "top", '142px'],
                ["transform", "scaleY", '1'],
                ["style", "opacity", '1'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "clip", [0,461,9.31640625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '85px']
            ],
            "${_star2}": [
                ["style", "top", '137px'],
                ["style", "height", '36px'],
                ["style", "display", 'none'],
                ["style", "left", '224px'],
                ["style", "width", '36px']
            ],
            "${_txt_create-album}": [
                ["style", "top", '146px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "left", '155px'],
                ["style", "clip", [0,713,11.984375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_txt_choose-photos}": [
                ["style", "top", '247px'],
                ["style", "opacity", '0'],
                ["style", "left", '528px'],
                ["style", "display", 'none']
            ],
            "${_star4}": [
                ["style", "top", '145px'],
                ["style", "height", '36px'],
                ["style", "display", 'none'],
                ["style", "left", '954px'],
                ["style", "width", '36px']
            ],
            "${_gear2Copy}": [
                ["style", "top", '776px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '176px'],
                ["style", "display", 'none'],
                ["style", "left", '717px'],
                ["style", "width", '176px']
            ],
            "${_checkmark2}": [
                ["style", "top", '356px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "height", '90px'],
                ["style", "width", '69px']
            ],
            "${_screen3-point2}": [
                ["color", "background-color", 'rgba(24,106,134,1.00)'],
                ["transform", "rotateZ", '45deg'],
                ["style", "display", 'none'],
                ["style", "left", '472px'],
                ["style", "top", '178px']
            ],
            "${_txt_wedding}": [
                ["style", "top", '298px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["color", "color", 'rgba(255,97,87,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1030px'],
                ["style", "font-size", '100px']
            ],
            "${_folder-light-back}": [
                ["style", "top", '459px'],
                ["style", "display", 'none'],
                ["style", "height", '126px'],
                ["style", "opacity", '0'],
                ["style", "left", '217px'],
                ["style", "width", '155px']
            ],
            "${_checkmark4}": [
                ["style", "top", '527px'],
                ["style", "display", 'none'],
                ["style", "height", '89px'],
                ["style", "opacity", '1'],
                ["style", "left", '254px'],
                ["style", "width", '69px']
            ],
            "${_gear2}": [
                ["style", "top", '809px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '176px'],
                ["style", "display", 'none'],
                ["style", "left", '540px'],
                ["style", "width", '176px']
            ],
            "${_txt_scroll-to-see}": [
                ["style", "top", '449px'],
                ["style", "font-size", '30px'],
                ["color", "color", 'rgba(173,173,173,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "left", '59px'],
                ["style", "width", '905px']
            ],
            "${_txt_contacts}": [
                ["style", "top", '384px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "left", '242px'],
                ["style", "font-size", '20px']
            ],
            "${_txt_enjoy-your-vue}": [
                ["style", "top", '178px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '352px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_music-note}": [
                ["style", "top", '647px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "height", '94px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '242px'],
                ["style", "width", '79px']
            ],
            "${_btn_prev}": [
                ["style", "left", '-70px'],
                ["style", "opacity", '1']
            ],
            "${_figure_share3}": [
                ["style", "top", '349px'],
                ["style", "display", 'none'],
                ["style", "height", '213px'],
                ["style", "opacity", '0'],
                ["style", "left", '518px'],
                ["style", "width", '165px']
            ],
            "${_bouncing-down-arrow}": [
                ["style", "display", 'block'],
                ["style", "top", '520px']
            ],
            "${_figure_blue-dk-happy}": [
                ["style", "top", '326px'],
                ["style", "height", '234px'],
                ["style", "display", 'none'],
                ["style", "left", '471px'],
                ["style", "width", '181px']
            ],
            "${_Vue-icon}": [
                ["style", "top", '539px'],
                ["transform", "scaleY", '0.3'],
                ["style", "height", '154px'],
                ["transform", "scaleX", '0.3'],
                ["style", "display", 'none'],
                ["style", "left", '202px'],
                ["style", "width", '190px']
            ],
            "${_txt_make-a-vue}": [
                ["style", "top", '126px'],
                ["transform", "scaleX", '1'],
                ["style", "clip", [0,370,11.76171875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '343px'],
                ["style", "display", 'none']
            ],
            "${_region-swipe-right}": [
                ["style", "height", '590px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "display", 'none']
            ],
            "${_screen4-point}": [
                ["style", "top", '369px'],
                ["style", "display", 'none'],
                ["style", "left", '471px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_tap-ring}": [
                ["color", "background-color", 'rgba(63,71,79,0.00)'],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '10px'],
                ["style", "width", '45px'],
                ["style", "top", '548px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '44px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,97,87,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '276px']
            ],
            "${_star1}": [
                ["style", "top", '47px'],
                ["style", "height", '57px'],
                ["style", "display", 'none'],
                ["style", "left", '70px'],
                ["style", "width", '57px']
            ],
            "${_figure_blue-dk-happy3}": [
                ["style", "top", '326px'],
                ["style", "height", '234px'],
                ["style", "display", 'none'],
                ["style", "left", '762px'],
                ["style", "width", '181px']
            ],
            "${_finger-swipe-left}": [
                ["style", "top", '478px'],
                ["transform", "scaleY", '0.71'],
                ["transform", "scaleX", '0.71'],
                ["style", "left", '466px'],
                ["style", "display", 'block']
            ],
            "${_user-bonnie}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_txt_scene1-2b}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '495px'],
                ["style", "font-size", '65px'],
                ["style", "top", '266px'],
                ["style", "text-align", 'right'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "opacity", '1']
            ],
            "${_txt_add-photos}": [
                ["style", "top", '256px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["color", "color", 'rgba(255,97,87,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '522px'],
                ["style", "font-size", '40px']
            ],
            "${_crowd-concert}": [
                ["style", "display", 'none'],
                ["style", "top", '754px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(63,71,79,1.00)'],
                ["style", "width", '1024px'],
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt_VUE}": [
                ["style", "top", '677px'],
                ["style", "display", 'none'],
                ["style", "height", '82px'],
                ["style", "opacity", '0'],
                ["style", "left", '197px'],
                ["style", "font-size", '60px']
            ],
            "${_screen4}": [
                ["style", "top", '769px'],
                ["style", "display", 'block'],
                ["color", "background-color", 'rgba(34,147,185,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '588px']
            ],
            "${_txt_last-1b}": [
                ["style", "top", '808px'],
                ["style", "opacity", '1'],
                ["style", "left", '277px'],
                ["style", "display", 'none']
            ],
            "${_concert}": [
                ["style", "display", 'none'],
                ["style", "top", '778px']
            ],
            "${_txt_last-2b}": [
                ["style", "top", '817px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '324px'],
                ["style", "font-size", '60px']
            ],
            "${_checkmark3}": [
                ["style", "top", '548px'],
                ["style", "height", '90px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '677px'],
                ["style", "width", '69px']
            ],
            "${_grass-hill}": [
                ["style", "display", 'none'],
                ["style", "top", '774px']
            ],
            "${_txt_scene1-3b}": [
                ["style", "top", '344px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '100'],
                ["style", "left", '108px'],
                ["style", "font-size", '65px']
            ],
            "${_iPhone_White}": [
                ["style", "top", '294px'],
                ["style", "height", '531px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '170px'],
                ["style", "width", '251px']
            ],
            "${_txt_1}": [
                ["style", "top", '157px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["color", "color", 'rgba(173,173,173,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '503px'],
                ["style", "font-size", '48px']
            ],
            "${_txt_3}": [
                ["style", "top", '158px'],
                ["color", "color", 'rgba(224,224,224,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '509px'],
                ["style", "display", 'none']
            ],
            "${_checkmark1}": [
                ["style", "top", '356px'],
                ["style", "height", '90px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '535px'],
                ["style", "width", '69px']
            ],
            "${_txt_invite-others}": [
                ["style", "top", '126px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1'],
                ["style", "left", '328px'],
                ["style", "clip", [0,399,5.79296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_txt_2}": [
                ["style", "top", '150px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["color", "color", 'rgba(158,240,228,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '511px'],
                ["style", "font-size", '48px']
            ],
            "${_txt_check-out-other-vues}": [
                ["style", "top", '496px'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '253px'],
                ["style", "font-size", '48px']
            ],
            "${_figure_blue-dk-happy2}": [
                ["style", "top", '326px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "left", '622px'],
                ["style", "width", '181px']
            ],
            "${_photo1}": [
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '482px'],
                ["style", "width", '57px'],
                ["style", "top", '291px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "height", '70px'],
                ["motion", "location", '510.5px 326px']
            ],
            "${_bg-blur-rockyshore}": [
                ["style", "top", '0px'],
                ["style", "display", 'block']
            ],
            "${_txt_scene1-2a}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '641px'],
                ["style", "font-size", '36px'],
                ["style", "top", '221px'],
                ["style", "text-align", 'right'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "opacity", '1']
            ],
            "${_photo1b}": [
                ["transform", "rotateZ", '-23deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '205px'],
                ["style", "width", '57px'],
                ["style", "top", '476px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '70px'],
                ["style", "display", 'none']
            ],
            "${_get-the-app-now}": [
                ["style", "display", 'none'],
                ["style", "left", '406px'],
                ["style", "clip", [0,0,96,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '54px']
            ],
            "${_mainVideo}": [
                ["style", "top", '152px'],
                ["style", "left", '330px'],
                ["style", "display", 'none']
            ],
            "${_screen2}": [
                ["style", "top", '770px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.23177'],
                ["style", "display", 'block'],
                ["style", "height", '768px'],
                ["color", "background-color", 'rgba(63,71,79,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_photo2}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '70px'],
                ["motion", "location", '802.5px 342px'],
                ["style", "width", '57px']
            ],
            "${_txt_party}": [
                ["style", "top", '298px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(255,97,87,1.00)'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "left", '1030px'],
                ["style", "font-size", '100px']
            ],
            "${_txt_last-1a}": [
                ["style", "top", '765px'],
                ["style", "opacity", '1'],
                ["style", "font-weight", '400'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "left", '483px'],
                ["style", "font-size", '36px']
            ],
            "${_star3}": [
                ["style", "top", '56px'],
                ["style", "height", '57px'],
                ["style", "display", 'none'],
                ["style", "left", '426px'],
                ["style", "width", '57px']
            ],
            "${_vue-thumb2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_photo2b}": [
                ["style", "top", '467px'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '21deg'],
                ["transform", "scaleX", '1'],
                ["style", "height", '70px'],
                ["style", "left", '337px'],
                ["style", "width", '57px']
            ],
            "${_txt_scene1-3a}": [
                ["style", "top", '313px'],
                ["style", "opacity", '1'],
                ["style", "display", 'block'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "left", '185px'],
                ["style", "font-size", '36px']
            ],
            "${_btn_next}": [
                ["style", "left", '964px'],
                ["style", "opacity", '1']
            ],
            "${_Vue-icon-white}": [
                ["style", "display", 'none'],
                ["style", "left", '208px'],
                ["style", "top", '488px']
            ],
            "${_Header2}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '-1px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${_WeVue-Icon2}": [
                ["style", "top", '484px'],
                ["style", "opacity", '0'],
                ["style", "left", '255px'],
                ["style", "display", 'none']
            ],
            "${_phone-scene1}": [
                ["style", "top", '569px'],
                ["style", "display", 'block']
            ],
            "${_folder-light-front}": [
                ["style", "top", '476px'],
                ["style", "height", '108px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '203px'],
                ["style", "width", '181px']
            ],
            "${_arrow-l2r-red}": [
                ["style", "top", '58px'],
                ["transform", "scaleX", '0.90476'],
                ["style", "display", 'none'],
                ["style", "left", '585px'],
                ["style", "clip", [0,0,53,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '294px']
            ],
            "${_txt_concert}": [
                ["style", "line-height", '111px'],
                ["color", "color", 'rgba(255,97,87,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1030px'],
                ["style", "font-size", '100px'],
                ["style", "top", '388px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "opacity", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_figure_share1}": [
                ["style", "top", '349px'],
                ["style", "display", 'none'],
                ["style", "height", '213px'],
                ["style", "opacity", '0'],
                ["style", "left", '518px'],
                ["style", "width", '165px']
            ],
            "${_arrow-hand-drawn}": [
                ["transform", "rotateZ", '-14deg'],
                ["transform", "scaleX", '0.87761'],
                ["style", "opacity", '0'],
                ["style", "left", '342px'],
                ["style", "width", '199px'],
                ["style", "top", '527px'],
                ["transform", "scaleY", '0.84801'],
                ["style", "height", '144px'],
                ["style", "display", 'none']
            ],
            "${_film2}": [
                ["style", "top", '484px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '80px'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '287px'],
                ["style", "width", '58px']
            ],
            "${_txt_scene1-1a}": [
                ["style", "top", '135px'],
                ["style", "opacity", '1'],
                ["style", "display", 'block'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "left", '169px'],
                ["style", "font-size", '36px']
            ],
            "${_txt_scene1-1b}": [
                ["style", "top", '166px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '100'],
                ["style", "left", '109px'],
                ["style", "font-size", '65px']
            ],
            "${_iPhone_Dark2}": [
                ["style", "top", '842px'],
                ["transform", "scaleX", '1.34225'],
                ["transform", "scaleY", '1.34226'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '399px'],
                ["style", "left", '202px'],
                ["style", "width", '187px']
            ],
            "${_finger-point}": [
                ["transform", "rotateZ", '-35deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '390px'],
                ["style", "width", '294px'],
                ["style", "top", '746px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '294px'],
                ["style", "display", 'none']
            ],
            "${_vue-thumb3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_region-swipe-left}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "display", 'block'],
                ["style", "height", '677px'],
                ["style", "top", '91px']
            ],
            "${_user-anderson}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_screen5}": [
                ["style", "top", '861px'],
                ["style", "height", '677px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_film}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["motion", "location", '668px 326px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "height", '80px'],
                ["style", "width", '58px']
            ],
            "${_txt_to-your-album}": [
                ["style", "top", '599px'],
                ["style", "opacity", '0'],
                ["style", "left", '543px'],
                ["style", "display", 'none']
            ],
            "${_user-bruno}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_txt_big-jam}": [
                ["style", "top", '611px'],
                ["color", "color", 'rgba(63,71,79,1.00)'],
                ["style", "clip", [0,31.8515625,82,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '208px'],
                ["style", "font-size", '55px']
            ],
            "${_screen2-point}": [
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.6993'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '768px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.6993'],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_party-pinnata-03-01}": [
                ["style", "top", '768px'],
                ["style", "display", 'none'],
                ["style", "height", '100px'],
                ["style", "left", '459px'],
                ["style", "width", '100px']
            ],
            "${_wedding-couple-01}": [
                ["style", "top", '754px'],
                ["style", "height", '100px'],
                ["style", "display", 'none'],
                ["style", "left", '459px'],
                ["style", "width", '100px']
            ],
            "${_tap-ring2}": [
                ["color", "background-color", 'rgba(63,71,79,0.00)'],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '10px'],
                ["style", "width", '45px'],
                ["style", "top", '548px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '276px'],
                ["style", "height", '44px'],
                ["color", "border-color", 'rgba(255,97,87,1.00)'],
                ["style", "opacity", '1'],
                ["style", "display", 'none']
            ],
            "${_txt_last-2a}": [
                ["style", "top", '767px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '400'],
                ["style", "left", '417px'],
                ["style", "font-size", '36px']
            ],
            "${_screen3}": [
                ["style", "top", '770px'],
                ["style", "display", 'none'],
                ["style", "height", '406px'],
                ["color", "background-color", 'rgba(24,106,134,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_region-swipe-both}": [
                ["style", "top", '91px'],
                ["style", "height", '677px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "display", 'none']
            ],
            "${_white-stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '768px'],
                ["style", "left", '0px'],
                ["style", "width", '1023px']
            ],
            "${_vue-thumb1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_figure_share2}": [
                ["style", "top", '349px'],
                ["style", "display", 'none'],
                ["style", "height", '213px'],
                ["style", "opacity", '0'],
                ["style", "left", '518px'],
                ["style", "width", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 58002,
            autoPlay: true,
            labels: {
                "at_concert": 8784,
                "create_album": 14356,
                "invite_others": 23750,
                "choose_media": 35594,
                "create_view": 43816,
                "end": 57000
            },
            timeline: [
                { id: "eid281", tween: [ "transform", "${_txt_concert}", "scaleY", '1', { fromValue: '1'}], position: 5872, duration: 0, easing: "easeOutBack" },
                { id: "eid73", tween: [ "transform", "${_txt_concert}", "scaleY", '0.57896', { fromValue: '1'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid536", tween: [ "style", "${_music-note}", "display", 'block', { fromValue: 'none'}], position: 33101, duration: 0, easing: "easeOutQuad" },
                { id: "eid644", tween: [ "style", "${_music-note}", "display", 'none', { fromValue: 'block'}], position: 40250, duration: 0, easing: "easeInBack" },
                { id: "eid932", tween: [ "style", "${_btn_next}", "left", '1034px', { fromValue: '964px'}], position: 100, duration: 509, easing: "easeOutQuad" },
                { id: "eid933", tween: [ "style", "${_btn_next}", "left", '964px', { fromValue: '1034px'}], position: 8339, duration: 445, easing: "easeOutQuad" },
                { id: "eid935", tween: [ "style", "${_btn_next}", "left", '1034px', { fromValue: '964px'}], position: 8784, duration: 466, easing: "easeOutQuad" },
                { id: "eid938", tween: [ "style", "${_btn_next}", "left", '964px', { fromValue: '1034px'}], position: 13903, duration: 453, easing: "easeOutQuad" },
                { id: "eid939", tween: [ "style", "${_btn_next}", "left", '1034px', { fromValue: '964px'}], position: 14356, duration: 462, easing: "easeOutQuad" },
                { id: "eid942", tween: [ "style", "${_btn_next}", "left", '964px', { fromValue: '1034px'}], position: 23325, duration: 425, easing: "easeOutQuad" },
                { id: "eid943", tween: [ "style", "${_btn_next}", "left", '1034px', { fromValue: '964px'}], position: 23750, duration: 399, easing: "easeOutQuad" },
                { id: "eid946", tween: [ "style", "${_btn_next}", "left", '964px', { fromValue: '1034px'}], position: 43367, duration: 449, easing: "easeOutQuad" },
                { id: "eid947", tween: [ "style", "${_btn_next}", "left", '1034px', { fromValue: '964px'}], position: 43816, duration: 434, easing: "easeOutQuad" },
                { id: "eid579", tween: [ "style", "${_checkmark2}", "display", 'block', { fromValue: 'none'}], position: 29462, duration: 0, easing: "easeOutBack" },
                { id: "eid621", tween: [ "style", "${_checkmark2}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0, easing: "easeOutBack" },
                { id: "eid237", tween: [ "style", "${_figure_blue-dk-happy}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0, easing: "easeOutQuad" },
                { id: "eid246", tween: [ "style", "${_figure_blue-dk-happy}", "display", 'none', { fromValue: 'block'}], position: 20750, duration: 0, easing: "easeOutQuad" },
                { id: "eid538", tween: [ "style", "${_music-note}", "opacity", '1', { fromValue: '0'}], position: 33101, duration: 502, easing: "easeOutQuad" },
                { id: "eid638", tween: [ "style", "${_music-note}", "opacity", '1', { fromValue: '1'}], position: 39120, duration: 0, easing: "easeOutBack" },
                { id: "eid642", tween: [ "style", "${_music-note}", "opacity", '1', { fromValue: '1'}], position: 40000, duration: 0, easing: "easeInBack" },
                { id: "eid643", tween: [ "style", "${_music-note}", "opacity", '1', { fromValue: '1'}], position: 40250, duration: 0, easing: "easeInBack" },
                { id: "eid389", tween: [ "style", "${_screen4}", "top", '-411px', { fromValue: '769px'}], position: 24000, duration: 2000, easing: "easeOutQuad" },
                { id: "eid721", tween: [ "style", "${_screen4}", "top", '-591px', { fromValue: '-411px'}], position: 43860, duration: 1008 },
                { id: "eid249", tween: [ "style", "${_figure_blue-dk-happy2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0, easing: "easeOutQuad" },
                { id: "eid250", tween: [ "style", "${_figure_blue-dk-happy2}", "display", 'none', { fromValue: 'block'}], position: 21750, duration: 0, easing: "easeOutQuad" },
                { id: "eid706", tween: [ "transform", "${_photo2}", "scaleX", '0.65', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid652", tween: [ "transform", "${_photo2}", "scaleX", '0.35227', { fromValue: '0.65'}], position: 40000, duration: 1008, easing: "easeOutBack" },
                { id: "eid311", tween: [ "style", "${_star1}", "display", 'block', { fromValue: 'none'}], position: 7418, duration: 0, easing: "easeOutBack" },
                { id: "eid344", tween: [ "style", "${_star1}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0, easing: "easeOutQuad" },
                { id: "eid695", tween: [ "transform", "${_film2}", "scaleX", '0.65', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid661", tween: [ "transform", "${_film2}", "scaleX", '0.40909', { fromValue: '0.65'}], position: 41008, duration: 1040, easing: "easeOutBack" },
                { id: "eid216", tween: [ "style", "${_txt_invite-others}", "left", '328px', { fromValue: '328px'}], position: 18000, duration: 0, easing: "easeOutQuad" },
                { id: "eid233", tween: [ "style", "${_figure_share3}", "left", '769px', { fromValue: '518px'}], position: 18464, duration: 400, easing: "easeOutQuad" },
                { id: "eid417", tween: [ "style", "${_figure_share3}", "left", '765px', { fromValue: '769px'}], position: 24590, duration: 416, easing: "easeInBack" },
                { id: "eid576", tween: [ "transform", "${_Vue-icon}", "scaleX", '1', { fromValue: '0.3'}], position: 36576, duration: 565, easing: "easeOutBack" },
                { id: "eid645", tween: [ "transform", "${_Vue-icon}", "scaleX", '1.2', { fromValue: '1'}], position: 40250, duration: 138, easing: "easeOutBack" },
                { id: "eid649", tween: [ "transform", "${_Vue-icon}", "scaleX", '1', { fromValue: '1.2'}], position: 40388, duration: 138, easing: "easeOutBack" },
                { id: "eid655", tween: [ "transform", "${_Vue-icon}", "scaleX", '1.2', { fromValue: '1'}], position: 41216, duration: 138, easing: "easeOutBack" },
                { id: "eid656", tween: [ "transform", "${_Vue-icon}", "scaleX", '1', { fromValue: '1.2'}], position: 41354, duration: 138, easing: "easeOutBack" },
                { id: "eid664", tween: [ "transform", "${_Vue-icon}", "scaleX", '1.2', { fromValue: '1'}], position: 42250, duration: 138, easing: "easeOutBack" },
                { id: "eid665", tween: [ "transform", "${_Vue-icon}", "scaleX", '1', { fromValue: '1.2'}], position: 42388, duration: 138, easing: "easeOutBack" },
                { id: "eid674", tween: [ "transform", "${_Vue-icon}", "scaleX", '1.2', { fromValue: '1'}], position: 43451, duration: 138, easing: "easeOutBack" },
                { id: "eid675", tween: [ "transform", "${_Vue-icon}", "scaleX", '1', { fromValue: '1.2'}], position: 43589, duration: 138, easing: "easeOutBack" },
                { id: "eid507", tween: [ "style", "${_checkmark3}", "display", 'block', { fromValue: 'none'}], position: 30404, duration: 0, easing: "easeOutQuad" },
                { id: "eid620", tween: [ "style", "${_checkmark3}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0, easing: "easeOutBack" },
                { id: "eid50", tween: [ "style", "${_txt_concert}", "left", '121px', { fromValue: '1030px'}], position: 5872, duration: 681, easing: "easeOutBack" },
                { id: "eid851", tween: [ "style", "${_txt_contacts}", "opacity", '1', { fromValue: '0'}], position: 16542, duration: 304, easing: "easeOutQuad" },
                { id: "eid840", tween: [ "style", "${_txt_contacts}", "opacity", '0', { fromValue: '1'}], position: 19051, duration: 504, easing: "easeOutQuad" },
                { id: "eid1028", tween: [ "style", "${_region-swipe-both}", "display", 'block', { fromValue: 'none'}], position: 157, duration: 0, easing: "easeOutExpo" },
                { id: "eid1029", tween: [ "style", "${_region-swipe-both}", "display", 'none', { fromValue: 'block'}], position: 56509, duration: 0, easing: "easeOutExpo" },
                { id: "eid891", tween: [ "style", "${_wedding-couple-01}", "top", '437px', { fromValue: '754px'}], position: 4438, duration: 500, easing: "easeOutBack" },
                { id: "eid895", tween: [ "style", "${_wedding-couple-01}", "top", '-143px', { fromValue: '437px'}], position: 5938, duration: 250, easing: "easeOutBack" },
                { id: "eid687", tween: [ "transform", "${_music-note}", "scaleY", '1', { fromValue: '1'}], position: 38000, duration: 0, easing: "easeOutBack" },
                { id: "eid636", tween: [ "transform", "${_music-note}", "scaleY", '0.38297', { fromValue: '1'}], position: 39120, duration: 880, easing: "easeOutBack" },
                { id: "eid312", tween: [ "style", "${_dim-sky}", "display", 'block', { fromValue: 'none'}], position: 7302, duration: 0, easing: "easeOutBack" },
                { id: "eid339", tween: [ "style", "${_dim-sky}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0, easing: "easeOutQuad" },
                { id: "eid219", tween: [ "style", "${_figure_share1}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 400, easing: "easeOutQuad" },
                { id: "eid457", tween: [ "style", "${_photo1b}", "width", '128px', { fromValue: '57px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid985", tween: [ "style", "${_txt_scene1-2b}", "top", '-61px', { fromValue: '266px'}], position: 100, duration: 285, easing: "easeOutQuad" },
                { id: "eid568", tween: [ "style", "${_txt_create}", "opacity", '1', { fromValue: '0'}], position: 35750, duration: 500, easing: "easeOutQuad" },
                { id: "eid391", tween: [ "style", "${_screen4-point}", "top", '119px', { fromValue: '369px'}], position: 24872, duration: 1128, easing: "easeOutQuad" },
                { id: "eid722", tween: [ "style", "${_screen4-point}", "top", '-131px', { fromValue: '119px'}], position: 43860, duration: 1008 },
                { id: "eid615", tween: [ "style", "${_checkmark3}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid306", tween: [ "style", "${_crowd-concert}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeOutBack" },
                { id: "eid353", tween: [ "style", "${_crowd-concert}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeOutQuad" },
                { id: "eid320", tween: [ "style", "${_crowd-concert}", "top", '484px', { fromValue: '754px'}], position: 6750, duration: 668, easing: "easeOutQuad" },
                { id: "eid331", tween: [ "style", "${_crowd-concert}", "top", '754px', { fromValue: '484px'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid422", tween: [ "style", "${_txt_3}", "opacity", '1', { fromValue: '0'}], position: 26250, duration: 250, easing: "easeOutQuad" },
                { id: "eid513", tween: [ "transform", "${_film}", "scaleY", '0.1875', { fromValue: '1'}], position: 31653, duration: 301, easing: "easeInBack" },
                { id: "eid164", tween: [ "style", "${_WeVue-Icon2}", "display", 'block', { fromValue: 'none'}], position: 12548, duration: 0, easing: "easeOutQuad" },
                { id: "eid532", tween: [ "style", "${_WeVue-Icon2}", "display", 'none', { fromValue: 'block'}], position: 33101, duration: 0, easing: "easeOutQuad" },
                { id: "eid447", tween: [ "style", "${_film}", "height", '177px', { fromValue: '80px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid999", tween: [ "style", "${_txt_last-1b}", "opacity", '0', { fromValue: '1'}], position: 48627, duration: 500, easing: "easeOutQuad" },
                { id: "eid1079", tween: [ "style", "${_txt_last-2a}", "opacity", '1', { fromValue: '0'}], position: 49500, duration: 500, easing: "easeOutBack" },
                { id: "eid1066", tween: [ "style", "${_txt_last-2a}", "opacity", '0', { fromValue: '1'}], position: 51661, duration: 339, easing: "easeOutBack" },
                { id: "eid256", tween: [ "motion", "${_film}", [[668, 326, 0, 0],[461.39, 301.29, -258.21, 105.82, -289.05, 118.46],[302, 476, 0, 0]]], position: 21000, duration: 750, easing: "easeOutQuad" },
                { id: "eid446", tween: [ "motion", "${_film}", [[302, 476, 0, 0],[562, 594.5, 0, 0]]], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid174", tween: [ "style", "${_folder-light-front}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid239", tween: [ "style", "${_folder-light-front}", "display", 'block', { fromValue: 'none'}], position: 20394, duration: 0, easing: "easeOutQuad" },
                { id: "eid533", tween: [ "style", "${_folder-light-front}", "display", 'none', { fromValue: 'block'}], position: 33101, duration: 0, easing: "easeOutQuad" },
                { id: "eid326", tween: [ "style", "${_star2}", "top", '207px', { fromValue: '137px'}], position: 7418, duration: 1082, easing: "easeOutQuad" },
                { id: "eid335", tween: [ "style", "${_star2}", "top", '377px', { fromValue: '207px'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid341", tween: [ "style", "${_star2}", "top", '117px', { fromValue: '377px'}], position: 14500, duration: 1500, easing: "easeOutQuad" },
                { id: "eid967", tween: [ "style", "${_txt_scene1-1b}", "display", 'none', { fromValue: 'block'}], position: 385, duration: 0, easing: "easeOutQuad" },
                { id: "eid989", tween: [ "style", "${_txt_scene1-3a}", "opacity", '0', { fromValue: '1'}], position: 100, duration: 285, easing: "easeOutQuad" },
                { id: "eid175", tween: [ "style", "${_txt_big-jam}", "display", 'block', { fromValue: 'none'}], position: 13088, duration: 0, easing: "easeOutQuad" },
                { id: "eid535", tween: [ "style", "${_txt_big-jam}", "display", 'none', { fromValue: 'block'}], position: 33101, duration: 0, easing: "easeOutQuad" },
                { id: "eid616", tween: [ "style", "${_checkmark4}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid202", tween: [ "style", "${_txt_invite-others}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0, easing: "easeOutQuad" },
                { id: "eid399", tween: [ "style", "${_txt_invite-others}", "display", 'none', { fromValue: 'block'}], position: 24829, duration: 0, easing: "easeOutQuad" },
                { id: "eid163", tween: [ "style", "${_folder-light-back}", "display", 'block', { fromValue: 'none'}], position: 12548, duration: 0, easing: "easeOutQuad" },
                { id: "eid534", tween: [ "style", "${_folder-light-back}", "display", 'none', { fromValue: 'block'}], position: 33101, duration: 0, easing: "easeOutQuad" },
                { id: "eid423", tween: [ "style", "${_txt_3}", "display", 'block', { fromValue: 'none'}], position: 26250, duration: 0, easing: "easeOutQuad" },
                { id: "eid724", tween: [ "style", "${_txt_3}", "display", 'none', { fromValue: 'block'}], position: 44868, duration: 0 },
                { id: "eid159", tween: [ "style", "${_finger-point}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0, easing: "easeOutQuad" },
                { id: "eid162", tween: [ "style", "${_finger-point}", "display", 'block', { fromValue: 'block'}], position: 12750, duration: 0, easing: "easeOutQuad" },
                { id: "eid362", tween: [ "style", "${_finger-point}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid364", tween: [ "style", "${_finger-point}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0, easing: "easeOutQuad" },
                { id: "eid387", tween: [ "style", "${_finger-point}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0, easing: "easeOutQuad" },
                { id: "eid463", tween: [ "style", "${_finger-point}", "display", 'block', { fromValue: 'none'}], position: 27865, duration: 0, easing: "easeOutQuad" },
                { id: "eid504", tween: [ "style", "${_finger-point}", "display", 'none', { fromValue: 'block'}], position: 31082, duration: 0, easing: "easeOutQuad" },
                { id: "eid541", tween: [ "style", "${_finger-point}", "display", 'block', { fromValue: 'none'}], position: 33603, duration: 0, easing: "easeOutQuad" },
                { id: "eid508", tween: [ "transform", "${_photo1}", "scaleX", '0.24218', { fromValue: '1'}], position: 31352, duration: 301, easing: "easeInBack" },
                { id: "eid1081", tween: [ "style", "${_get-the-app-now}", "clip", [0,266,96,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,96,0]}], position: 52000, duration: 1548 },
                { id: "eid416", tween: [ "style", "${_figure_share3}", "top", '-218px', { fromValue: '349px'}], position: 24590, duration: 416, easing: "easeInBack" },
                { id: "eid739", tween: [ "style", "${_screen5}", "left", '0px', { fromValue: '0px'}], position: 43860, duration: 0, easing: "easeInOutQuad" },
                { id: "eid740", tween: [ "style", "${_screen5}", "left", '0px', { fromValue: '0px'}], position: 44868, duration: 0, easing: "easeInOutQuad" },
                { id: "eid564", tween: [ "style", "${_txt_create}", "display", 'block', { fromValue: 'none'}], position: 35750, duration: 0, easing: "easeOutQuad" },
                { id: "eid747", tween: [ "style", "${_txt_create}", "display", 'none', { fromValue: 'block'}], position: 44535, duration: 0, easing: "easeOutQuad" },
                { id: "eid723", tween: [ "style", "${_txt_3}", "top", '-92px', { fromValue: '158px'}], position: 43860, duration: 1008 },
                { id: "eid505", tween: [ "style", "${_checkmark1}", "display", 'block', { fromValue: 'none'}], position: 28573, duration: 0, easing: "easeOutQuad" },
                { id: "eid619", tween: [ "style", "${_checkmark1}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0, easing: "easeOutBack" },
                { id: "eid22", tween: [ "style", "${_phone-scene1}", "top", '-671px', { fromValue: '569px'}], position: 152, duration: 1098, easing: "easeOutQuad" },
                { id: "eid451", tween: [ "style", "${_film2}", "height", '176px', { fromValue: '80px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid822", tween: [ "style", "${_user-anderson}", "opacity", '1', { fromValue: '0'}], position: 16542, duration: 304, easing: "easeOutQuad" },
                { id: "eid838", tween: [ "style", "${_user-anderson}", "opacity", '0', { fromValue: '1'}], position: 19051, duration: 504, easing: "easeOutQuad" },
                { id: "eid450", tween: [ "style", "${_film2}", "top", '506px', { fromValue: '484px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid521", tween: [ "style", "${_film2}", "top", '324px', { fromValue: '506px'}], position: 31954, duration: 296, easing: "easeOutQuad" },
                { id: "eid607", tween: [ "style", "${_film2}", "top", '184px', { fromValue: '324px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid659", tween: [ "style", "${_film2}", "top", '555px', { fromValue: '184px'}], position: 41008, duration: 1040, easing: "easeOutBack" },
                { id: "eid152", tween: [ "transform", "${_tap-ring}", "scaleY", '1.96706', { fromValue: '1'}], position: 12250, duration: 149, easing: "easeOutQuad" },
                { id: "eid679", tween: [ "style", "${_checkmark4}", "top", '527px', { fromValue: '527px'}], position: 34953, duration: 0, easing: "easeOutBack" },
                { id: "eid680", tween: [ "style", "${_checkmark4}", "top", '527px', { fromValue: '527px'}], position: 35351, duration: 0, easing: "easeOutBack" },
                { id: "eid610", tween: [ "style", "${_checkmark4}", "top", '407px', { fromValue: '527px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid884", tween: [ "style", "${_party-pinnata-03-01}", "top", '419px', { fromValue: '768px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid888", tween: [ "style", "${_party-pinnata-03-01}", "top", '-115px', { fromValue: '419px'}], position: 4438, duration: 312 },
                { id: "eid562", tween: [ "style", "${_txt_create}", "top", '382px', { fromValue: '622px'}], position: 35750, duration: 500, easing: "easeOutQuad" },
                { id: "eid530", tween: [ "style", "${_folder-light-front}", "opacity", '0', { fromValue: '1'}], position: 32602, duration: 499, easing: "easeOutQuad" },
                { id: "eid916", tween: [ "style", "${_mainVideo}", "display", 'block', { fromValue: 'none'}], position: 52000, duration: 0, easing: "easeOutQuad" },
                { id: "eid445", tween: [ "style", "${_photo1}", "width", '128px', { fromValue: '57px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid552", tween: [ "style", "${_checkmark4}", "display", 'block', { fromValue: 'none'}], position: 34332, duration: 0, easing: "easeOutQuad" },
                { id: "eid622", tween: [ "style", "${_checkmark4}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0, easing: "easeOutBack" },
                { id: "eid395", tween: [ "style", "${_screen2}", "display", 'none', { fromValue: 'block'}], position: 17043, duration: 0, easing: "easeOutQuad" },
                { id: "eid412", tween: [ "style", "${_figure_share1}", "top", '-218px', { fromValue: '349px'}], position: 24000, duration: 436, easing: "easeInBack" },
                { id: "eid691", tween: [ "transform", "${_photo2b}", "scaleX", '0.65', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid692", tween: [ "transform", "${_photo2b}", "scaleX", '0.65', { fromValue: '0.65'}], position: 39000, duration: 0, easing: "easeOutBack" },
                { id: "eid670", tween: [ "transform", "${_photo2b}", "scaleX", '0.40909', { fromValue: '0.65'}], position: 42250, duration: 1000, easing: "easeOutBack" },
                { id: "eid518", tween: [ "style", "${_photo1b}", "opacity", '0', { fromValue: '1'}], position: 31500, duration: 301, easing: "easeInBack" },
                { id: "eid811", tween: [ "style", "${_folder-light-back}", "top", '549px', { fromValue: '459px'}], position: 16542, duration: 501, easing: "easeOutQuad" },
                { id: "eid845", tween: [ "style", "${_folder-light-back}", "top", '459px', { fromValue: '549px'}], position: 19649, duration: 351, easing: "easeOutQuad" },
                { id: "eid527", tween: [ "style", "${_folder-light-back}", "top", '379px', { fromValue: '459px'}], position: 32602, duration: 499, easing: "easeOutQuad" },
                { id: "eid631", tween: [ "style", "${_music-note}", "height", '94px', { fromValue: '94px'}], position: 39000, duration: 0, easing: "easeOutBack" },
                { id: "eid109", tween: [ "style", "${_txt_create-album}", "top", '66px', { fromValue: '146px'}], position: 11000, duration: 500, easing: "easeOutQuad" },
                { id: "eid196", tween: [ "style", "${_txt_create-album}", "top", '-94px', { fromValue: '66px'}], position: 15148, duration: 664, easing: "easeOutQuad" },
                { id: "eid828", tween: [ "style", "${_user-bruno}", "display", 'block', { fromValue: 'none'}], position: 16846, duration: 0, easing: "easeOutQuad" },
                { id: "eid841", tween: [ "style", "${_user-bruno}", "display", 'none', { fromValue: 'block'}], position: 19555, duration: 0, easing: "easeOutQuad" },
                { id: "eid455", tween: [ "transform", "${_photo1b}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid318", tween: [ "style", "${_concert}", "top", '288px', { fromValue: '778px'}], position: 6250, duration: 750, easing: "easeOutQuad" },
                { id: "eid332", tween: [ "style", "${_concert}", "top", '358px', { fromValue: '288px'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid349", tween: [ "style", "${_concert}", "top", '468px', { fromValue: '358px'}], position: 14500, duration: 500, easing: "easeOutQuad" },
                { id: "eid431", tween: [ "style", "${_photo2b}", "left", '792px', { fromValue: '337px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid623", tween: [ "style", "${_photo2b}", "left", '712px', { fromValue: '792px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid668", tween: [ "style", "${_photo2b}", "left", '665px', { fromValue: '712px'}], position: 42250, duration: 1000, easing: "easeOutBack" },
                { id: "eid673", tween: [ "style", "${_photo2b}", "left", '285px', { fromValue: '665px'}], position: 43250, duration: 201, easing: "easeInBack" },
                { id: "eid458", tween: [ "style", "${_photo1b}", "top", '476px', { fromValue: '476px'}], position: 27000, duration: 0, easing: "easeOutQuad" },
                { id: "eid459", tween: [ "style", "${_photo1b}", "top", '506px', { fromValue: '476px'}], position: 27500, duration: 0, easing: "easeOutQuad" },
                { id: "eid414", tween: [ "style", "${_figure_share2}", "top", '-218px', { fromValue: '349px'}], position: 24342, duration: 408, easing: "easeInBack" },
                { id: "eid392", tween: [ "style", "${_screen4-point}", "display", 'block', { fromValue: 'none'}], position: 24872, duration: 0, easing: "easeOutQuad" },
                { id: "eid725", tween: [ "style", "${_screen4-point}", "display", 'none', { fromValue: 'block'}], position: 44868, duration: 0 },
                { id: "eid618", tween: [ "style", "${_checkmark2}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid798", tween: [ "style", "${_bg-blur-rockyshore}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid799", tween: [ "style", "${_bg-blur-rockyshore}", "display", 'block', { fromValue: 'none'}], position: 44865, duration: 0, easing: "easeOutQuad" },
                { id: "eid226", tween: [ "style", "${_figure_share2}", "display", 'block', { fromValue: 'none'}], position: 18250, duration: 0, easing: "easeOutQuad" },
                { id: "eid253", tween: [ "style", "${_figure_share2}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeOutQuad" },
                { id: "eid257", tween: [ "style", "${_figure_share2}", "display", 'block', { fromValue: 'none'}], position: 21750, duration: 0, easing: "easeOutQuad" },
                { id: "eid713", tween: [ "style", "${_figure_share2}", "display", 'none', { fromValue: 'block'}], position: 25006, duration: 0, easing: "easeOutBack" },
                { id: "eid617", tween: [ "style", "${_checkmark1}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid1007", tween: [ "style", "${_txt_last-2b}", "display", 'block', { fromValue: 'none'}], position: 49500, duration: 0, easing: "easeOutBack" },
                { id: "eid1067", tween: [ "style", "${_txt_last-2b}", "display", 'none', { fromValue: 'block'}], position: 52000, duration: 0, easing: "easeOutBack" },
                { id: "eid765", tween: [ "style", "${_Vue-icon-white}", "left", '439px', { fromValue: '208px'}], position: 45852, duration: 966, easing: "easeOutQuad" },
                { id: "eid802", tween: [ "style", "${_bg-blur-rockyshore}", "top", '-755px', { fromValue: '0px'}], position: 152, duration: 1848, easing: "easeOutQuad" },
                { id: "eid872", tween: [ "style", "${_bg-blur-rockyshore}", "top", '0px', { fromValue: '-755px'}], position: 2000, duration: 42865, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_txt_party}", "left", '388px', { fromValue: '1030px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid39", tween: [ "style", "${_txt_party}", "left", '-254px', { fromValue: '388px'}], position: 4500, duration: 250, easing: "easeOutBack" },
                { id: "eid825", tween: [ "style", "${_user-bonnie}", "opacity", '1', { fromValue: '0'}], position: 16700, duration: 300, easing: "easeOutQuad" },
                { id: "eid837", tween: [ "style", "${_user-bonnie}", "opacity", '0', { fromValue: '1'}], position: 19051, duration: 504, easing: "easeOutQuad" },
                { id: "eid1", tween: [ "style", "${_screen2}", "top", '0px', { fromValue: '770px'}], position: 100, duration: 1900, easing: "easeOutQuad" },
                { id: "eid761", tween: [ "style", "${_iPhone_White}", "left", '350px', { fromValue: '170px'}], position: 45852, duration: 966, easing: "easeOutQuad" },
                { id: "eid157", tween: [ "transform", "${_tap-ring2}", "scaleY", '1.96706', { fromValue: '1'}], position: 12399, duration: 149, easing: "easeOutQuad" },
                { id: "eid310", tween: [ "style", "${_star3}", "display", 'block', { fromValue: 'none'}], position: 7418, duration: 0, easing: "easeOutBack" },
                { id: "eid345", tween: [ "style", "${_star3}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1069", tween: [ "style", "${_get-the-app-now}", "display", 'block', { fromValue: 'none'}], position: 52000, duration: 0, easing: "easeOutBack" },
                { id: "eid146", tween: [ "style", "${_txt_create-album}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0, easing: "easeOutQuad" },
                { id: "eid197", tween: [ "style", "${_txt_create-album}", "display", 'none', { fromValue: 'block'}], position: 15812, duration: 0, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "style", "${_phone-scene1}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0, easing: "easeOutBack" },
                { id: "eid441", tween: [ "style", "${_photo2b}", "width", '128px', { fromValue: '57px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid1006", tween: [ "style", "${_txt_last-2a}", "display", 'block', { fromValue: 'none'}], position: 49500, duration: 0, easing: "easeOutBack" },
                { id: "eid1068", tween: [ "style", "${_txt_last-2a}", "display", 'none', { fromValue: 'block'}], position: 52000, duration: 0, easing: "easeOutBack" },
                { id: "eid456", tween: [ "style", "${_photo1b}", "height", '157px', { fromValue: '70px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid770", tween: [ "style", "${_txt_enjoy-your-vue}", "display", 'block', { fromValue: 'none'}], position: 46818, duration: 0, easing: "easeOutQuad" },
                { id: "eid151", tween: [ "transform", "${_tap-ring}", "scaleX", '1.96706', { fromValue: '1'}], position: 12250, duration: 149, easing: "easeOutQuad" },
                { id: "eid328", tween: [ "style", "${_star3}", "top", '306px', { fromValue: '56px'}], position: 7418, duration: 1082, easing: "easeOutQuad" },
                { id: "eid336", tween: [ "style", "${_star3}", "top", '556px', { fromValue: '306px'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid342", tween: [ "style", "${_star3}", "top", '0px', { fromValue: '556px'}], position: 14500, duration: 1500, easing: "easeOutQuad" },
                { id: "eid309", tween: [ "style", "${_star2}", "display", 'block', { fromValue: 'none'}], position: 7418, duration: 0, easing: "easeOutBack" },
                { id: "eid347", tween: [ "style", "${_star2}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0, easing: "easeOutQuad" },
                { id: "eid553", tween: [ "style", "${_checkmark4}", "left", '664px', { fromValue: '254px'}], position: 34953, duration: 398, easing: "easeOutQuad" },
                { id: "eid426", tween: [ "style", "${_photo2b}", "display", 'block', { fromValue: 'none'}], position: 22905, duration: 0, easing: "easeOutQuad" },
                { id: "eid703", tween: [ "style", "${_photo2b}", "display", 'none', { fromValue: 'block'}], position: 43451, duration: 0, easing: "easeOutBack" },
                { id: "eid324", tween: [ "style", "${_star1}", "top", '247px', { fromValue: '47px'}], position: 7418, duration: 1082, easing: "easeOutQuad" },
                { id: "eid334", tween: [ "style", "${_star1}", "top", '497px', { fromValue: '247px'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid340", tween: [ "style", "${_star1}", "top", '67px', { fromValue: '497px'}], position: 14500, duration: 1500, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt_scroll-to-see}", "display", 'none', { fromValue: 'block'}], position: 152, duration: 0, easing: "easeOutQuad" },
                { id: "eid966", tween: [ "style", "${_txt_scene1-1b}", "top", '-61px', { fromValue: '166px'}], position: 100, duration: 285, easing: "easeOutQuad" },
                { id: "eid934", tween: [ "style", "${_btn_prev}", "left", '0px', { fromValue: '-70px'}], position: 8339, duration: 445, easing: "easeOutQuad" },
                { id: "eid936", tween: [ "style", "${_btn_prev}", "left", '-70px', { fromValue: '0px'}], position: 8784, duration: 466, easing: "easeOutQuad" },
                { id: "eid937", tween: [ "style", "${_btn_prev}", "left", '0px', { fromValue: '-70px'}], position: 13903, duration: 453, easing: "easeOutQuad" },
                { id: "eid940", tween: [ "style", "${_btn_prev}", "left", '-70px', { fromValue: '0px'}], position: 14356, duration: 462, easing: "easeOutQuad" },
                { id: "eid941", tween: [ "style", "${_btn_prev}", "left", '0px', { fromValue: '-70px'}], position: 23325, duration: 425, easing: "easeOutQuad" },
                { id: "eid944", tween: [ "style", "${_btn_prev}", "left", '-70px', { fromValue: '0px'}], position: 23750, duration: 399, easing: "easeOutQuad" },
                { id: "eid945", tween: [ "style", "${_btn_prev}", "left", '0px', { fromValue: '-70px'}], position: 43367, duration: 449, easing: "easeOutQuad" },
                { id: "eid948", tween: [ "style", "${_btn_prev}", "left", '-70px', { fromValue: '0px'}], position: 43816, duration: 434, easing: "easeOutQuad" },
                { id: "eid949", tween: [ "style", "${_btn_prev}", "left", '0px', { fromValue: '-70px'}], position: 55602, duration: 513, easing: "easeOutQuad" },
                { id: "eid549", tween: [ "style", "${_txt_add-music}", "top", '402px', { fromValue: '692px'}], position: 33101, duration: 502, easing: "easeOutQuad" },
                { id: "eid168", tween: [ "style", "${_WeVue-Icon2}", "opacity", '1', { fromValue: '0'}], position: 12548, duration: 202, easing: "easeOutQuad" },
                { id: "eid528", tween: [ "style", "${_WeVue-Icon2}", "opacity", '0', { fromValue: '1'}], position: 32602, duration: 499, easing: "easeOutQuad" },
                { id: "eid746", tween: [ "style", "${_screen5}", "display", 'block', { fromValue: 'none'}], position: 43860, duration: 0 },
                { id: "eid745", tween: [ "style", "${_screen5}", "display", 'none', { fromValue: 'block'}], position: 45852, duration: 0 },
                { id: "eid760", tween: [ "transform", "${_iPhone_White}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 45852, duration: 966, easing: "easeOutQuad" },
                { id: "eid921", tween: [ "style", "${_vue-thumb1}", "opacity", '1', { fromValue: '0'}], position: 54500, duration: 500, easing: "easeOutQuad" },
                { id: "eid263", tween: [ "motion", "${_photo2}", [[802.5, 342, 0, 0],[554.98, 283.73, -317.82, 98.29, -345.52, 106.85],[359.5, 479, 0, 0]]], position: 22155, duration: 750, easing: "easeOutQuad" },
                { id: "eid424", tween: [ "motion", "${_photo2}", [[359.5, 479, 0, 0],[565, 411.5, 0, 0]]], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid609", tween: [ "motion", "${_photo2}", [[565, 411.5, 0, 0],[645, 271.5, 0, 0]]], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid651", tween: [ "motion", "${_photo2}", [[645, 271.5, 0, 0],[717.32, 453.67, 65.82, 240.64, 73.28, 267.89],[727.5, 622.39, 0, 0]]], position: 40000, duration: 1008, easing: "easeOutBack" },
                { id: "eid654", tween: [ "motion", "${_photo2}", [[727.5, 622.39, 0, 0],[358, 622.39, 0, 0]]], position: 41008, duration: 208, easing: "easeInQuad" },
                { id: "eid808", tween: [ "style", "${_iPhone_White}", "opacity", '0.32952235772358', { fromValue: '1'}], position: 52000, duration: 500 },
                { id: "eid926", tween: [ "style", "${_vue-thumb2}", "display", 'block', { fromValue: 'none'}], position: 54815, duration: 0, easing: "easeOutQuad" },
                { id: "eid244", tween: [ "transform", "${_photo1}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 20000, duration: 750, easing: "easeOutQuad" },
                { id: "eid430", tween: [ "transform", "${_photo1}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid693", tween: [ "transform", "${_photo2b}", "scaleY", '0.65', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid694", tween: [ "transform", "${_photo2b}", "scaleY", '0.65', { fromValue: '0.65'}], position: 39000, duration: 0, easing: "easeOutBack" },
                { id: "eid671", tween: [ "transform", "${_photo2b}", "scaleY", '0.40909', { fromValue: '0.65'}], position: 42250, duration: 1000, easing: "easeOutBack" },
                { id: "eid813", tween: [ "style", "${_txt_big-jam}", "top", '671px', { fromValue: '611px'}], position: 16542, duration: 501, easing: "easeOutQuad" },
                { id: "eid849", tween: [ "style", "${_txt_big-jam}", "top", '611px', { fromValue: '671px'}], position: 19649, duration: 351, easing: "easeOutQuad" },
                { id: "eid525", tween: [ "style", "${_txt_big-jam}", "top", '531px', { fromValue: '611px'}], position: 32602, duration: 499, easing: "easeOutQuad" },
                { id: "eid227", tween: [ "style", "${_figure_share2}", "opacity", '1', { fromValue: '0'}], position: 18250, duration: 400, easing: "easeOutQuad" },
                { id: "eid927", tween: [ "style", "${_vue-thumb3}", "display", 'block', { fromValue: 'none'}], position: 55102, duration: 0, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${_txt_so-your-at}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_txt_so-your-at}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "style", "${_txt_so-your-at}", "display", 'none', { fromValue: 'block'}], position: 10750, duration: 0, easing: "easeOutQuad" },
                { id: "eid356", tween: [ "style", "${_txt_to-your-album}", "display", 'block', { fromValue: 'none'}], position: 22905, duration: 0, easing: "easeOutQuad" },
                { id: "eid418", tween: [ "style", "${_txt_to-your-album}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0, easing: "easeInBack" },
                { id: "eid461", tween: [ "style", "${_txt_choose-photos}", "opacity", '1', { fromValue: '0'}], position: 27500, duration: 365, easing: "easeOutQuad" },
                { id: "eid580", tween: [ "style", "${_txt_choose-photos}", "opacity", '0', { fromValue: '1'}], position: 37387, duration: 363, easing: "easeOutBack" },
                { id: "eid448", tween: [ "style", "${_film}", "width", '128px', { fromValue: '58px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid604", tween: [ "style", "${_checkmark2}", "top", '216px', { fromValue: '356px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid199", tween: [ "style", "${_txt_invite-others}", "top", '76px', { fromValue: '126px'}], position: 17500, duration: 500, easing: "easeOutQuad" },
                { id: "eid398", tween: [ "style", "${_txt_invite-others}", "top", '-84px', { fromValue: '76px'}], position: 24590, duration: 239, easing: "easeOutQuad" },
                { id: "eid993", tween: [ "style", "${_txt_last-1b}", "top", '608px', { fromValue: '808px'}], position: 46686, duration: 867, easing: "easeOutQuad" },
                { id: "eid997", tween: [ "style", "${_txt_last-1b}", "top", '388px', { fromValue: '608px'}], position: 48627, duration: 500, easing: "easeOutQuad" },
                { id: "eid166", tween: [ "style", "${_folder-light-back}", "opacity", '1', { fromValue: '0'}], position: 12548, duration: 202, easing: "easeOutQuad" },
                { id: "eid531", tween: [ "style", "${_folder-light-back}", "opacity", '0', { fromValue: '1'}], position: 32602, duration: 499, easing: "easeOutQuad" },
                { id: "eid277", tween: [ "style", "${_txt_so-your-at}", "clip", [0,461,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,461,9.31640625,0]}], position: 2000, duration: 500, easing: "easeOutQuad" },
                { id: "eid885", tween: [ "style", "${_party-pinnata-03-01}", "width", '300px', { fromValue: '100px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid462", tween: [ "style", "${_txt_choose-photos}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0, easing: "easeOutQuad" },
                { id: "eid581", tween: [ "style", "${_txt_choose-photos}", "display", 'none', { fromValue: 'block'}], position: 37750, duration: 0, easing: "easeOutBack" },
                { id: "eid279", tween: [ "transform", "${_txt_concert}", "scaleX", '1', { fromValue: '1'}], position: 5872, duration: 0, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "transform", "${_txt_concert}", "scaleX", '0.57896', { fromValue: '1'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_txt_wedding}", "display", 'block', { fromValue: 'none'}], position: 4438, duration: 0, easing: "easeOutBack" },
                { id: "eid47", tween: [ "style", "${_txt_wedding}", "display", 'none', { fromValue: 'block'}], position: 6188, duration: 0, easing: "easeOutBack" },
                { id: "eid184", tween: [ "style", "${_screen3}", "top", '180px', { fromValue: '770px'}], position: 14500, duration: 1500, easing: "easeOutQuad" },
                { id: "eid187", tween: [ "style", "${_screen3}", "top", '-230px', { fromValue: '180px'}], position: 16000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid205", tween: [ "style", "${_txt_2}", "opacity", '1', { fromValue: '0'}], position: 17369, duration: 131, easing: "easeOutQuad" },
                { id: "eid405", tween: [ "style", "${_txt_make-a-vue}", "top", '76px', { fromValue: '126px'}], position: 26000, duration: 500, easing: "easeOutQuad" },
                { id: "eid719", tween: [ "style", "${_txt_make-a-vue}", "top", '136px', { fromValue: '76px'}], position: 43860, duration: 390 },
                { id: "eid991", tween: [ "style", "${_txt_last-1a}", "top", '565px', { fromValue: '765px'}], position: 46686, duration: 867, easing: "easeOutQuad" },
                { id: "eid996", tween: [ "style", "${_txt_last-1a}", "top", '345px', { fromValue: '565px'}], position: 48627, duration: 500, easing: "easeOutQuad" },
                { id: "eid910", tween: [ "style", "${_txt_check-out-other-vues}", "display", 'block', { fromValue: 'none'}], position: 54500, duration: 0, easing: "easeOutQuad" },
                { id: "eid245", tween: [ "style", "${_photo1}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0, easing: "easeOutQuad" },
                { id: "eid511", tween: [ "style", "${_photo1}", "display", 'none', { fromValue: 'block'}], position: 31653, duration: 0, easing: "easeOutQuad" },
                { id: "eid139", tween: [ "style", "${_finger-point}", "left", '242px', { fromValue: '390px'}], position: 11500, duration: 538, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "style", "${_finger-point}", "left", '355px', { fromValue: '242px'}], position: 12462, duration: 288, easing: "easeOutQuad" },
                { id: "eid176", tween: [ "style", "${_finger-point}", "left", '134px', { fromValue: '355px'}], position: 12913, duration: 175, easing: "easeOutQuad" },
                { id: "eid178", tween: [ "style", "${_finger-point}", "left", '307px', { fromValue: '134px'}], position: 13088, duration: 745, easing: "easeOutQuad" },
                { id: "eid179", tween: [ "style", "${_finger-point}", "left", '386px', { fromValue: '307px'}], position: 13833, duration: 348, easing: "easeOutQuad" },
                { id: "eid371", tween: [ "style", "${_finger-point}", "left", '275px', { fromValue: '391px'}], position: 17500, duration: 538, easing: "easeOutQuad" },
                { id: "eid831", tween: [ "style", "${_finger-point}", "left", '291px', { fromValue: '275px'}], position: 18038, duration: 212, easing: "easeOutQuad" },
                { id: "eid832", tween: [ "style", "${_finger-point}", "left", '282px', { fromValue: '291px'}], position: 18250, duration: 212, easing: "easeOutQuad" },
                { id: "eid835", tween: [ "style", "${_finger-point}", "left", '279px', { fromValue: '282px'}], position: 18462, duration: 250, easing: "easeOutQuad" },
                { id: "eid372", tween: [ "style", "${_finger-point}", "left", '355px', { fromValue: '279px'}], position: 18712, duration: 288, easing: "easeOutQuad" },
                { id: "eid464", tween: [ "style", "${_finger-point}", "left", '477px', { fromValue: '355px'}], position: 27865, duration: 496, easing: "easeOutQuad" },
                { id: "eid467", tween: [ "style", "${_finger-point}", "left", '758px', { fromValue: '477px'}], position: 28750, duration: 500, easing: "easeOutQuad" },
                { id: "eid500", tween: [ "style", "${_finger-point}", "left", '634px', { fromValue: '758px'}], position: 29693, duration: 499, easing: "easeOutQuad" },
                { id: "eid502", tween: [ "style", "${_finger-point}", "left", '546px', { fromValue: '634px'}], position: 30577, duration: 505, easing: "easeOutQuad" },
                { id: "eid542", tween: [ "style", "${_finger-point}", "left", '208px', { fromValue: '546px'}], position: 33603, duration: 517, easing: "easeOutQuad" },
                { id: "eid545", tween: [ "style", "${_finger-point}", "left", '348px', { fromValue: '208px'}], position: 34332, duration: 375, easing: "easeOutQuad" },
                { id: "eid569", tween: [ "style", "${_finger-point}", "left", '238px', { fromValue: '348px'}], position: 36250, duration: 326, easing: "easeOutQuad" },
                { id: "eid572", tween: [ "style", "${_finger-point}", "left", '348px', { fromValue: '238px'}], position: 36788, duration: 353, easing: "easeOutQuad" },
                { id: "eid887", tween: [ "style", "${_party-pinnata-03-01}", "left", '361px', { fromValue: '459px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid889", tween: [ "style", "${_party-pinnata-03-01}", "left", '362px', { fromValue: '361px'}], position: 4438, duration: 312 },
                { id: "eid975", tween: [ "style", "${_region-swipe-left}", "display", 'none', { fromValue: 'block'}], position: 152, duration: 0, easing: "easeOutQuad" },
                { id: "eid440", tween: [ "style", "${_photo2b}", "height", '157px', { fromValue: '70px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid603", tween: [ "style", "${_gear2}", "top", '389px', { fromValue: '809px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid715", tween: [ "style", "${_gear2}", "top", '-191px', { fromValue: '389px'}], position: 43860, duration: 1008 },
                { id: "eid510", tween: [ "style", "${_photo1}", "opacity", '0', { fromValue: '1'}], position: 31352, duration: 301, easing: "easeInBack" },
                { id: "eid893", tween: [ "style", "${_wedding-couple-01}", "width", '300px', { fromValue: '100px'}], position: 4438, duration: 500, easing: "easeOutBack" },
                { id: "eid563", tween: [ "style", "${_txt_VUE}", "display", 'block', { fromValue: 'none'}], position: 35750, duration: 0, easing: "easeOutQuad" },
                { id: "eid748", tween: [ "style", "${_txt_VUE}", "display", 'none', { fromValue: 'block'}], position: 44535, duration: 0, easing: "easeOutQuad" },
                { id: "eid210", tween: [ "style", "${_txt_1}", "opacity", '1', { fromValue: '0'}], position: 10838, duration: 162, easing: "easeOutQuad" },
                { id: "eid589", tween: [ "style", "${_gear2}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0, easing: "easeOutBack" },
                { id: "eid717", tween: [ "style", "${_gear2}", "display", 'none', { fromValue: 'block'}], position: 44868, duration: 0 },
                { id: "eid212", tween: [ "style", "${_txt_1}", "top", '-73px', { fromValue: '157px'}], position: 15250, duration: 412, easing: "easeOutQuad" },
                { id: "eid313", tween: [ "style", "${_grass-hill}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeOutBack" },
                { id: "eid350", tween: [ "style", "${_grass-hill}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0, easing: "easeOutQuad" },
                { id: "eid330", tween: [ "style", "${_star4}", "top", '245px', { fromValue: '145px'}], position: 7418, duration: 1082, easing: "easeOutQuad" },
                { id: "eid337", tween: [ "style", "${_star4}", "top", '415px', { fromValue: '245px'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid343", tween: [ "style", "${_star4}", "top", '155px', { fromValue: '415px'}], position: 14500, duration: 1500, easing: "easeOutQuad" },
                { id: "eid208", tween: [ "style", "${_txt_create-album}", "clip", [0,728.37890625,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,713,11.984375,0]}], position: 11000, duration: 500, easing: "easeOutQuad" },
                { id: "eid243", tween: [ "motion", "${_photo1}", [[510.5, 326, 0, 0],[346.27, 294.99, -183.8, 102.75, -223.33, 124.85],[236.5, 479.18, 0, 0]]], position: 20000, duration: 750, easing: "easeOutQuad" },
                { id: "eid429", tween: [ "motion", "${_photo1}", [[236.5, 479.18, 0, 0],[711, 411.5, 0, 0]]], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "style", "${_txt_concert}", "display", 'block', { fromValue: 'none'}], position: 5872, duration: 0, easing: "easeOutBack" },
                { id: "eid195", tween: [ "style", "${_txt_concert}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0, easing: "easeOutQuad" },
                { id: "eid449", tween: [ "style", "${_film2}", "left", '647px', { fromValue: '287px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid660", tween: [ "style", "${_film2}", "left", '675px', { fromValue: '657px'}], position: 41008, duration: 1040, easing: "easeOutBack" },
                { id: "eid663", tween: [ "style", "${_film2}", "left", '285px', { fromValue: '675px'}], position: 42048, duration: 202, easing: "easeInBack" },
                { id: "eid763", tween: [ "style", "${_iPhone_White}", "height", '745px', { fromValue: '531px'}], position: 45852, duration: 966, easing: "easeOutQuad" },
                { id: "eid632", tween: [ "style", "${_music-note}", "width", '79px', { fromValue: '79px'}], position: 39000, duration: 0, easing: "easeOutBack" },
                { id: "eid48", tween: [ "style", "${_txt_wedding}", "left", '328px', { fromValue: '1030px'}], position: 4438, duration: 500, easing: "easeOutBack" },
                { id: "eid49", tween: [ "style", "${_txt_wedding}", "left", '-254px', { fromValue: '328px'}], position: 5938, duration: 250, easing: "easeOutBack" },
                { id: "eid232", tween: [ "style", "${_figure_share3}", "opacity", '1', { fromValue: '0'}], position: 18464, duration: 400, easing: "easeOutQuad" },
                { id: "eid529", tween: [ "style", "${_txt_big-jam}", "opacity", '0', { fromValue: '1'}], position: 32602, duration: 499, easing: "easeOutQuad" },
                { id: "eid307", tween: [ "style", "${_concert}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeOutBack" },
                { id: "eid351", tween: [ "style", "${_concert}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0, easing: "easeOutQuad" },
                { id: "eid358", tween: [ "style", "${_txt_to-your-album}", "opacity", '1', { fromValue: '0'}], position: 22905, duration: 300, easing: "easeOutQuad" },
                { id: "eid512", tween: [ "transform", "${_film}", "scaleX", '0.1875', { fromValue: '1'}], position: 31653, duration: 301, easing: "easeInBack" },
                { id: "eid883", tween: [ "style", "${_party-pinnata-03-01}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid881", tween: [ "style", "${_party-pinnata-03-01}", "display", 'none', { fromValue: 'block'}], position: 4827, duration: 0, easing: "easeOutQuad" },
                { id: "eid308", tween: [ "style", "${_star4}", "display", 'block', { fromValue: 'none'}], position: 7418, duration: 0, easing: "easeOutBack" },
                { id: "eid346", tween: [ "style", "${_star4}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0, easing: "easeOutQuad" },
                { id: "eid711", tween: [ "transform", "${_gear2Copy}", "rotateZ", '-1200deg', { fromValue: '0deg'}], position: 39120, duration: 4607 },
                { id: "eid950", tween: [ "style", "${_txt_scene1-2a}", "display", 'none', { fromValue: 'block'}], position: 385, duration: 0, easing: "easeOutQuad" },
                { id: "eid743", tween: [ "style", "${_screen5}", "top", '91px', { fromValue: '861px'}], position: 43860, duration: 1008 },
                { id: "eid744", tween: [ "style", "${_screen5}", "top", '-579px', { fromValue: '91px'}], position: 44868, duration: 984 },
                { id: "eid264", tween: [ "transform", "${_photo2}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 22155, duration: 750, easing: "easeOutQuad" },
                { id: "eid425", tween: [ "transform", "${_photo2}", "rotateZ", '0deg', { fromValue: '21deg'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid560", tween: [ "style", "${_txt_VUE}", "top", '437px', { fromValue: '677px'}], position: 35750, duration: 500, easing: "easeOutQuad" },
                { id: "eid453", tween: [ "style", "${_photo1b}", "left", '792px', { fromValue: '205px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid566", tween: [ "style", "${_txt_VUE}", "opacity", '1', { fromValue: '0'}], position: 35750, duration: 500, easing: "easeOutQuad" },
                { id: "eid248", tween: [ "style", "${_film}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0, easing: "easeOutQuad" },
                { id: "eid515", tween: [ "style", "${_film}", "display", 'none', { fromValue: 'block'}], position: 31954, duration: 0, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_tap-ring}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 149, easing: "easeOutQuad" },
                { id: "eid269", tween: [ "style", "${_WeVue-Icon2}", "top", '484px', { fromValue: '484px'}], position: 12548, duration: 0, easing: "easeOutQuad" },
                { id: "eid818", tween: [ "style", "${_WeVue-Icon2}", "top", '574px', { fromValue: '484px'}], position: 16542, duration: 501, easing: "easeOutQuad" },
                { id: "eid847", tween: [ "style", "${_WeVue-Icon2}", "top", '484px', { fromValue: '574px'}], position: 19649, duration: 351, easing: "easeOutQuad" },
                { id: "eid861", tween: [ "style", "${_WeVue-Icon2}", "top", '504px', { fromValue: '484px'}], position: 20000, duration: 431, easing: "easeOutQuad" },
                { id: "eid524", tween: [ "style", "${_WeVue-Icon2}", "top", '432px', { fromValue: '504px'}], position: 32602, duration: 499, easing: "easeOutQuad" },
                { id: "eid688", tween: [ "transform", "${_music-note}", "scaleX", '1', { fromValue: '1'}], position: 38000, duration: 0, easing: "easeOutBack" },
                { id: "eid635", tween: [ "transform", "${_music-note}", "scaleX", '0.3924', { fromValue: '1'}], position: 39120, duration: 880, easing: "easeOutBack" },
                { id: "eid428", tween: [ "style", "${_film2}", "display", 'block', { fromValue: 'none'}], position: 22905, duration: 0, easing: "easeOutQuad" },
                { id: "eid701", tween: [ "style", "${_film2}", "display", 'none', { fromValue: 'block'}], position: 42250, duration: 0, easing: "easeOutBack" },
                { id: "eid890", tween: [ "style", "${_wedding-couple-01}", "display", 'block', { fromValue: 'none'}], position: 4438, duration: 0, easing: "easeOutBack" },
                { id: "eid896", tween: [ "style", "${_wedding-couple-01}", "display", 'none', { fromValue: 'block'}], position: 6188, duration: 0, easing: "easeOutBack" },
                { id: "eid322", tween: [ "style", "${_dim-sky}", "opacity", '1', { fromValue: '0'}], position: 7302, duration: 1198, easing: "easeOutQuad" },
                { id: "eid338", tween: [ "style", "${_dim-sky}", "opacity", '0', { fromValue: '1'}], position: 15180, duration: 820, easing: "easeOutQuad" },
                { id: "eid433", tween: [ "transform", "${_photo2b}", "rotateZ", '0deg', { fromValue: '21deg'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid672", tween: [ "transform", "${_photo2b}", "rotateZ", '49deg', { fromValue: '0deg'}], position: 42250, duration: 87, easing: "easeOutBack" },
                { id: "eid678", tween: [ "transform", "${_photo2b}", "rotateZ", '0deg', { fromValue: '49deg'}], position: 42337, duration: 913, easing: "easeOutBack" },
                { id: "eid820", tween: [ "style", "${_user-anderson}", "display", 'block', { fromValue: 'none'}], position: 16542, duration: 0, easing: "easeOutQuad" },
                { id: "eid843", tween: [ "style", "${_user-anderson}", "display", 'none', { fromValue: 'block'}], position: 19555, duration: 0, easing: "easeOutQuad" },
                { id: "eid853", tween: [ "style", "${_txt_contacts}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid852", tween: [ "style", "${_txt_contacts}", "display", 'block', { fromValue: 'none'}], position: 16542, duration: 0, easing: "easeOutQuad" },
                { id: "eid844", tween: [ "style", "${_txt_contacts}", "display", 'none', { fromValue: 'block'}], position: 19555, duration: 0, easing: "easeOutQuad" },
                { id: "eid361", tween: [ "style", "${_arrow-hand-drawn}", "opacity", '1', { fromValue: '0'}], position: 23205, duration: 295, easing: "easeOutQuad" },
                { id: "eid442", tween: [ "style", "${_photo2}", "height", '157px', { fromValue: '70px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid762", tween: [ "style", "${_iPhone_White}", "top", '-74px', { fromValue: '294px'}], position: 45852, duration: 966, easing: "easeOutQuad" },
                { id: "eid71", tween: [ "style", "${_txt_concert}", "top", '178px', { fromValue: '388px'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid194", tween: [ "style", "${_txt_concert}", "top", '-92px', { fromValue: '178px'}], position: 15376, duration: 624, easing: "easeOutQuad" },
                { id: "eid978", tween: [ "style", "${_region-swipe-right}", "display", 'block', { fromValue: 'none'}], position: 56115, duration: 0, easing: "easeOutQuad" },
                { id: "eid452", tween: [ "style", "${_film2}", "width", '128px', { fromValue: '58px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid206", tween: [ "style", "${_txt_2}", "display", 'block', { fromValue: 'none'}], position: 17369, duration: 0, easing: "easeOutQuad" },
                { id: "eid401", tween: [ "style", "${_txt_2}", "display", 'none', { fromValue: 'block'}], position: 24829, duration: 0, easing: "easeOutQuad" },
                { id: "eid547", tween: [ "style", "${_txt_add-music}", "display", 'block', { fromValue: 'none'}], position: 33101, duration: 0, easing: "easeOutQuad" },
                { id: "eid558", tween: [ "style", "${_txt_add-music}", "display", 'none', { fromValue: 'block'}], position: 35351, duration: 0, easing: "easeOutQuad" },
                { id: "eid231", tween: [ "style", "${_figure_share3}", "display", 'block', { fromValue: 'none'}], position: 18464, duration: 0, easing: "easeOutQuad" },
                { id: "eid261", tween: [ "style", "${_figure_share3}", "display", 'none', { fromValue: 'block'}], position: 22155, duration: 0, easing: "easeOutQuad" },
                { id: "eid262", tween: [ "style", "${_figure_share3}", "display", 'block', { fromValue: 'none'}], position: 22905, duration: 0, easing: "easeOutQuad" },
                { id: "eid714", tween: [ "style", "${_figure_share3}", "display", 'none', { fromValue: 'block'}], position: 25006, duration: 0, easing: "easeOutBack" },
                { id: "eid443", tween: [ "style", "${_photo2}", "width", '128px', { fromValue: '57px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid79", tween: [ "style", "${_iPhone_Dark2}", "top", '362px', { fromValue: '842px'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid155", tween: [ "style", "${_tap-ring2}", "display", 'block', { fromValue: 'none'}], position: 12399, duration: 0, easing: "easeOutQuad" },
                { id: "eid161", tween: [ "style", "${_tap-ring2}", "display", 'none', { fromValue: 'block'}], position: 12548, duration: 0, easing: "easeOutQuad" },
                { id: "eid411", tween: [ "style", "${_txt_make-a-vue}", "display", 'block', { fromValue: 'none'}], position: 26000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1105", tween: [ "style", "${_txt_make-a-vue}", "display", 'none', { fromValue: 'block'}], position: 44250, duration: 0 },
                { id: "eid191", tween: [ "style", "${_screen3-point2}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0, easing: "easeOutQuad" },
                { id: "eid397", tween: [ "style", "${_screen3-point2}", "display", 'none', { fromValue: 'block'}], position: 24933, duration: 0, easing: "easeOutQuad" },
                { id: "eid394", tween: [ "style", "${_screen3-point2}", "display", 'none', { fromValue: 'none'}], position: 26000, duration: 0, easing: "easeOutQuad" },
                { id: "eid19", tween: [ "style", "${_txt_scene1-1a}", "display", 'none', { fromValue: 'block'}], position: 385, duration: 0, easing: "easeOutQuad" },
                { id: "eid955", tween: [ "style", "${_txt_scroll-to-see}", "font-size", '30px', { fromValue: '30px'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid509", tween: [ "transform", "${_photo1}", "scaleY", '0.24218', { fromValue: '1'}], position: 31352, duration: 301, easing: "easeInBack" },
                { id: "eid235", tween: [ "style", "${_txt_add-photos}", "opacity", '1', { fromValue: '0'}], position: 19250, duration: 250, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt_scene1-1a}", "opacity", '0', { fromValue: '1'}], position: 100, duration: 285, easing: "easeOutQuad" },
                { id: "eid574", tween: [ "style", "${_Vue-icon}", "display", 'block', { fromValue: 'none'}], position: 36576, duration: 0, easing: "easeOutQuad" },
                { id: "eid756", tween: [ "style", "${_Vue-icon}", "display", 'none', { fromValue: 'block'}], position: 44535, duration: 0, easing: "easeOutBack" },
                { id: "eid156", tween: [ "style", "${_tap-ring2}", "opacity", '0', { fromValue: '1'}], position: 12399, duration: 149, easing: "easeOutQuad" },
                { id: "eid410", tween: [ "style", "${_txt_make-a-vue}", "clip", [0,370.34375,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,370,11.76171875,0]}], position: 26000, duration: 500, easing: "easeOutQuad" },
                { id: "eid720", tween: [ "style", "${_txt_make-a-vue}", "clip", [0,370.34375,4.86328125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,370.34375,85,0]}], position: 43860, duration: 390 },
                { id: "eid1005", tween: [ "style", "${_txt_last-2b}", "top", '607px', { fromValue: '817px'}], position: 49500, duration: 500, easing: "easeOutBack" },
                { id: "eid1063", tween: [ "style", "${_txt_last-2b}", "top", '527px', { fromValue: '607px'}], position: 51661, duration: 339, easing: "easeOutBack" },
                { id: "eid315", tween: [ "style", "${_grass-hill}", "top", '504px', { fromValue: '774px'}], position: 6250, duration: 1052, easing: "easeOutQuad" },
                { id: "eid333", tween: [ "style", "${_grass-hill}", "top", '564px', { fromValue: '504px'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid348", tween: [ "style", "${_grass-hill}", "top", '674px', { fromValue: '564px'}], position: 14500, duration: 500, easing: "easeOutQuad" },
                { id: "eid929", tween: [ "style", "${_vue-thumb2}", "opacity", '1', { fromValue: '0'}], position: 54815, duration: 500, easing: "easeOutQuad" },
                { id: "eid823", tween: [ "style", "${_user-bonnie}", "display", 'block', { fromValue: 'none'}], position: 16700, duration: 0, easing: "easeOutQuad" },
                { id: "eid842", tween: [ "style", "${_user-bonnie}", "display", 'none', { fromValue: 'block'}], position: 19555, duration: 0, easing: "easeOutQuad" },
                { id: "eid766", tween: [ "style", "${_Vue-icon-white}", "top", '286px', { fromValue: '488px'}], position: 45852, duration: 966, easing: "easeOutQuad" },
                { id: "eid998", tween: [ "style", "${_txt_last-1a}", "opacity", '0', { fromValue: '1'}], position: 48627, duration: 500, easing: "easeOutQuad" },
                { id: "eid1082", tween: [ "style", "${_arrow-l2r-red}", "display", 'block', { fromValue: 'none'}], position: 53250, duration: 0, easing: "easeOutBack" },
                { id: "eid578", tween: [ "transform", "${_Vue-icon}", "scaleY", '1', { fromValue: '0.3'}], position: 36576, duration: 565, easing: "easeOutBack" },
                { id: "eid646", tween: [ "transform", "${_Vue-icon}", "scaleY", '1.2', { fromValue: '1'}], position: 40250, duration: 138, easing: "easeOutBack" },
                { id: "eid650", tween: [ "transform", "${_Vue-icon}", "scaleY", '1', { fromValue: '1.2'}], position: 40388, duration: 138, easing: "easeOutBack" },
                { id: "eid657", tween: [ "transform", "${_Vue-icon}", "scaleY", '1.2', { fromValue: '1'}], position: 41216, duration: 138, easing: "easeOutBack" },
                { id: "eid658", tween: [ "transform", "${_Vue-icon}", "scaleY", '1', { fromValue: '1.2'}], position: 41354, duration: 138, easing: "easeOutBack" },
                { id: "eid666", tween: [ "transform", "${_Vue-icon}", "scaleY", '1.2', { fromValue: '1'}], position: 42250, duration: 138, easing: "easeOutBack" },
                { id: "eid667", tween: [ "transform", "${_Vue-icon}", "scaleY", '1', { fromValue: '1.2'}], position: 42388, duration: 138, easing: "easeOutBack" },
                { id: "eid676", tween: [ "transform", "${_Vue-icon}", "scaleY", '1.2', { fromValue: '1'}], position: 43451, duration: 138, easing: "easeOutBack" },
                { id: "eid677", tween: [ "transform", "${_Vue-icon}", "scaleY", '1', { fromValue: '1.2'}], position: 43589, duration: 138, easing: "easeOutBack" },
                { id: "eid517", tween: [ "transform", "${_photo1b}", "scaleY", '0.22929', { fromValue: '1'}], position: 31500, duration: 301, easing: "easeInBack" },
                { id: "eid265", tween: [ "style", "${_photo2}", "display", 'block', { fromValue: 'none'}], position: 22155, duration: 0, easing: "easeOutQuad" },
                { id: "eid702", tween: [ "style", "${_photo2}", "display", 'none', { fromValue: 'block'}], position: 41216, duration: 0, easing: "easeOutBack" },
                { id: "eid892", tween: [ "style", "${_wedding-couple-01}", "left", '361px', { fromValue: '459px'}], position: 4438, duration: 500, easing: "easeOutBack" },
                { id: "eid959", tween: [ "style", "${_txt_scroll-to-see}", "left", '59px', { fromValue: '59px'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid988", tween: [ "style", "${_txt_scene1-3a}", "display", 'none', { fromValue: 'block'}], position: 385, duration: 0, easing: "easeOutQuad" },
                { id: "eid611", tween: [ "style", "${_checkmark1}", "top", '216px', { fromValue: '356px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid710", tween: [ "transform", "${_gear2}", "rotateZ", '1200deg', { fromValue: '0deg'}], position: 39120, duration: 4607 },
                { id: "eid551", tween: [ "style", "${_txt_add-music}", "opacity", '1', { fromValue: '0'}], position: 33101, duration: 502, easing: "easeOutQuad" },
                { id: "eid557", tween: [ "style", "${_txt_add-music}", "opacity", '0', { fromValue: '1'}], position: 34953, duration: 398, easing: "easeOutQuad" },
                { id: "eid427", tween: [ "style", "${_photo1b}", "display", 'block', { fromValue: 'none'}], position: 22905, duration: 0, easing: "easeOutQuad" },
                { id: "eid519", tween: [ "style", "${_photo1b}", "display", 'none', { fromValue: 'block'}], position: 31801, duration: 0, easing: "easeOutQuad" },
                { id: "eid613", tween: [ "style", "${_checkmark1}", "left", '535px', { fromValue: '535px'}], position: 38000, duration: 0, easing: "easeOutBack" },
                { id: "eid614", tween: [ "style", "${_checkmark1}", "left", '535px', { fromValue: '535px'}], position: 39000, duration: 0, easing: "easeOutBack" },
                { id: "eid21", tween: [ "style", "${_bouncing-down-arrow}", "display", 'none', { fromValue: 'block'}], position: 152, duration: 0, easing: "easeOutQuad" },
                { id: "eid894", tween: [ "style", "${_wedding-couple-01}", "height", '300px', { fromValue: '100px'}], position: 4438, duration: 500, easing: "easeOutBack" },
                { id: "eid359", tween: [ "style", "${_arrow-hand-drawn}", "display", 'block', { fromValue: 'none'}], position: 23205, duration: 0, easing: "easeOutQuad" },
                { id: "eid420", tween: [ "style", "${_arrow-hand-drawn}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0, easing: "easeInBack" },
                { id: "eid259", tween: [ "style", "${_figure_blue-dk-happy3}", "display", 'block', { fromValue: 'none'}], position: 22155, duration: 0, easing: "easeOutQuad" },
                { id: "eid260", tween: [ "style", "${_figure_blue-dk-happy3}", "display", 'none', { fromValue: 'block'}], position: 22905, duration: 0, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_tap-ring}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0, easing: "easeOutQuad" },
                { id: "eid160", tween: [ "style", "${_tap-ring}", "display", 'none', { fromValue: 'block'}], position: 12399, duration: 0, easing: "easeOutQuad" },
                { id: "eid994", tween: [ "style", "${_txt_last-1a}", "display", 'block', { fromValue: 'none'}], position: 46686, duration: 0, easing: "easeOutBack" },
                { id: "eid1000", tween: [ "style", "${_txt_last-1a}", "display", 'none', { fromValue: 'block'}], position: 49127, duration: 0, easing: "easeOutQuad" },
                { id: "eid228", tween: [ "style", "${_figure_share2}", "left", '629px', { fromValue: '518px'}], position: 18250, duration: 400, easing: "easeOutQuad" },
                { id: "eid415", tween: [ "style", "${_figure_share2}", "left", '625px', { fromValue: '629px'}], position: 24342, duration: 408, easing: "easeInBack" },
                { id: "eid987", tween: [ "style", "${_txt_scene1-3b}", "display", 'none', { fromValue: 'block'}], position: 385, duration: 0, easing: "easeOutQuad" },
                { id: "eid170", tween: [ "style", "${_txt_big-jam}", "clip", [0,174,82,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,31.8515625,82,0]}], position: 13088, duration: 696, easing: "easeOutQuad" },
                { id: "eid186", tween: [ "style", "${_screen3}", "display", 'block', { fromValue: 'none'}], position: 14500, duration: 0, easing: "easeOutQuad" },
                { id: "eid393", tween: [ "style", "${_screen3}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0, easing: "easeOutQuad" },
                { id: "eid917", tween: [ "style", "${_vue-thumb1}", "display", 'block', { fromValue: 'none'}], position: 54500, duration: 0, easing: "easeOutQuad" },
                { id: "eid201", tween: [ "style", "${_txt_invite-others}", "clip", [0,398.7734375,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,399,5.79296875,0]}], position: 17500, duration: 500, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "transform", "${_tap-ring2}", "scaleX", '1.96706', { fromValue: '1'}], position: 12399, duration: 149, easing: "easeOutQuad" },
                { id: "eid995", tween: [ "style", "${_txt_last-1b}", "display", 'block', { fromValue: 'none'}], position: 46686, duration: 0, easing: "easeOutBack" },
                { id: "eid1001", tween: [ "style", "${_txt_last-1b}", "display", 'none', { fromValue: 'block'}], position: 49127, duration: 0, easing: "easeOutQuad" },
                { id: "eid236", tween: [ "style", "${_txt_add-photos}", "display", 'block', { fromValue: 'none'}], position: 19250, duration: 0, easing: "easeOutQuad" },
                { id: "eid419", tween: [ "style", "${_txt_add-photos}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0, easing: "easeInBack" },
                { id: "eid984", tween: [ "style", "${_txt_scene1-2b}", "display", 'none', { fromValue: 'block'}], position: 385, duration: 0, easing: "easeOutQuad" },
                { id: "eid25", tween: [ "style", "${_screen2-point}", "top", '98px', { fromValue: '768px'}], position: 100, duration: 1900, easing: "easeOutQuad" },
                { id: "eid188", tween: [ "style", "${_screen2-point}", "top", '-142px', { fromValue: '98px'}], position: 16000, duration: 250 },
                { id: "eid217", tween: [ "style", "${_figure_share1}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0, easing: "easeOutQuad" },
                { id: "eid238", tween: [ "style", "${_figure_share1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0, easing: "easeOutQuad" },
                { id: "eid247", tween: [ "style", "${_figure_share1}", "display", 'block', { fromValue: 'none'}], position: 20750, duration: 0, easing: "easeOutQuad" },
                { id: "eid712", tween: [ "style", "${_figure_share1}", "display", 'none', { fromValue: 'block'}], position: 25006, duration: 0, easing: "easeOutBack" },
                { id: "eid772", tween: [ "style", "${_txt_enjoy-your-vue}", "opacity", '1', { fromValue: '0'}], position: 46818, duration: 313, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "style", "${_txt_party}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutBack" },
                { id: "eid40", tween: [ "style", "${_txt_party}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "easeOutBack" },
                { id: "eid514", tween: [ "style", "${_film}", "opacity", '0', { fromValue: '1'}], position: 31653, duration: 301, easing: "easeInBack" },
                { id: "eid588", tween: [ "style", "${_gear2Copy}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0, easing: "easeOutBack" },
                { id: "eid718", tween: [ "style", "${_gear2Copy}", "display", 'none', { fromValue: 'block'}], position: 44868, duration: 0 },
                { id: "eid827", tween: [ "style", "${_user-bruno}", "opacity", '1', { fromValue: '0'}], position: 16846, duration: 302, easing: "easeOutQuad" },
                { id: "eid839", tween: [ "style", "${_user-bruno}", "opacity", '0', { fromValue: '1'}], position: 19051, duration: 504, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_txt_1}", "display", 'block', { fromValue: 'none'}], position: 10838, duration: 0, easing: "easeOutQuad" },
                { id: "eid213", tween: [ "style", "${_txt_1}", "display", 'none', { fromValue: 'block'}], position: 15662, duration: 0, easing: "easeOutQuad" },
                { id: "eid963", tween: [ "style", "${_txt_scroll-to-see}", "top", '449px', { fromValue: '449px'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid282", tween: [ "style", "${_iPhone_Dark2}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeOutBack" },
                { id: "eid757", tween: [ "style", "${_iPhone_Dark2}", "display", 'none', { fromValue: 'block'}], position: 44535, duration: 0, easing: "easeOutBack" },
                { id: "eid602", tween: [ "style", "${_gear2Copy}", "top", '356px', { fromValue: '776px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid716", tween: [ "style", "${_gear2Copy}", "top", '-224px', { fromValue: '356px'}], position: 43860, duration: 1008 },
                { id: "eid516", tween: [ "transform", "${_photo1b}", "scaleX", '0.22929', { fromValue: '1'}], position: 31500, duration: 301, easing: "easeInBack" },
                { id: "eid1003", tween: [ "style", "${_txt_last-2a}", "top", '557px', { fromValue: '767px'}], position: 49500, duration: 500, easing: "easeOutBack" },
                { id: "eid1064", tween: [ "style", "${_txt_last-2a}", "top", '477px', { fromValue: '557px'}], position: 51661, duration: 339, easing: "easeOutBack" },
                { id: "eid974", tween: [ "style", "${_finger-swipe-left}", "display", 'none', { fromValue: 'block'}], position: 152, duration: 0, easing: "easeOutQuad" },
                { id: "eid520", tween: [ "style", "${_checkmark3}", "top", '366px', { fromValue: '548px'}], position: 31954, duration: 296, easing: "easeOutQuad" },
                { id: "eid605", tween: [ "style", "${_checkmark3}", "top", '226px', { fromValue: '366px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid82", tween: [ "style", "${_txt_so-your-at}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 500, easing: "easeOutQuad" },
                { id: "eid141", tween: [ "style", "${_finger-point}", "top", '529px', { fromValue: '746px'}], position: 11500, duration: 538, easing: "easeOutQuad" },
                { id: "eid145", tween: [ "style", "${_finger-point}", "top", '773px', { fromValue: '529px'}], position: 12462, duration: 288, easing: "easeOutQuad" },
                { id: "eid177", tween: [ "style", "${_finger-point}", "top", '621px', { fromValue: '773px'}], position: 12913, duration: 175, easing: "easeOutQuad" },
                { id: "eid180", tween: [ "style", "${_finger-point}", "top", '760px', { fromValue: '621px'}], position: 13833, duration: 348, easing: "easeOutQuad" },
                { id: "eid367", tween: [ "style", "${_finger-point}", "top", '389px', { fromValue: '745px'}], position: 17500, duration: 538, easing: "easeOutQuad" },
                { id: "eid833", tween: [ "style", "${_finger-point}", "top", '430px', { fromValue: '389px'}], position: 18038, duration: 212, easing: "easeOutQuad" },
                { id: "eid834", tween: [ "style", "${_finger-point}", "top", '469px', { fromValue: '430px'}], position: 18250, duration: 212, easing: "easeOutQuad" },
                { id: "eid836", tween: [ "style", "${_finger-point}", "top", '499px', { fromValue: '469px'}], position: 18462, duration: 250, easing: "easeOutQuad" },
                { id: "eid368", tween: [ "style", "${_finger-point}", "top", '773px', { fromValue: '499px'}], position: 18712, duration: 288, easing: "easeOutQuad" },
                { id: "eid465", tween: [ "style", "${_finger-point}", "top", '366px', { fromValue: '773px'}], position: 27865, duration: 496, easing: "easeOutQuad" },
                { id: "eid468", tween: [ "style", "${_finger-point}", "top", '375px', { fromValue: '366px'}], position: 28750, duration: 500, easing: "easeOutQuad" },
                { id: "eid499", tween: [ "style", "${_finger-point}", "top", '548px', { fromValue: '375px'}], position: 29693, duration: 499, easing: "easeOutQuad" },
                { id: "eid503", tween: [ "style", "${_finger-point}", "top", '773px', { fromValue: '548px'}], position: 30577, duration: 505, easing: "easeOutQuad" },
                { id: "eid543", tween: [ "style", "${_finger-point}", "top", '548px', { fromValue: '773px'}], position: 33603, duration: 517, easing: "easeOutQuad" },
                { id: "eid546", tween: [ "style", "${_finger-point}", "top", '766px', { fromValue: '548px'}], position: 34332, duration: 375, easing: "easeOutQuad" },
                { id: "eid570", tween: [ "style", "${_finger-point}", "top", '558px', { fromValue: '766px'}], position: 36250, duration: 326, easing: "easeOutQuad" },
                { id: "eid573", tween: [ "style", "${_finger-point}", "top", '773px', { fromValue: '558px'}], position: 36788, duration: 353, easing: "easeOutQuad" },
                { id: "eid221", tween: [ "style", "${_figure_share1}", "left", '479px', { fromValue: '518px'}], position: 18000, duration: 400, easing: "easeOutQuad" },
                { id: "eid413", tween: [ "style", "${_figure_share1}", "left", '475px', { fromValue: '479px'}], position: 24000, duration: 436, easing: "easeInBack" },
                { id: "eid273", tween: [ "style", "${_folder-light-front}", "top", '497px', { fromValue: '476px'}], position: 20394, duration: 37, easing: "easeOutQuad" },
                { id: "eid526", tween: [ "style", "${_folder-light-front}", "top", '417px', { fromValue: '497px'}], position: 32602, duration: 499, easing: "easeOutQuad" },
                { id: "eid400", tween: [ "style", "${_txt_2}", "top", '-80px', { fromValue: '150px'}], position: 24590, duration: 239, easing: "easeOutQuad" },
                { id: "eid432", tween: [ "style", "${_photo2b}", "top", '332px', { fromValue: '467px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid606", tween: [ "style", "${_photo2b}", "top", '198px', { fromValue: '332px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid669", tween: [ "style", "${_photo2b}", "top", '557px', { fromValue: '198px'}], position: 42250, duration: 1000, easing: "easeOutBack" },
                { id: "eid931", tween: [ "style", "${_vue-thumb3}", "opacity", '1', { fromValue: '0'}], position: 55102, duration: 500, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "style", "${_screen3-point2}", "top", '118px', { fromValue: '178px'}], position: 16500, duration: 500, easing: "easeOutQuad" },
                { id: "eid396", tween: [ "style", "${_screen3-point2}", "top", '-132px', { fromValue: '118px'}], position: 24590, duration: 343, easing: "easeOutQuad" },
                { id: "eid1084", tween: [ "style", "${_arrow-l2r-red}", "clip", [0,294,53,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,53,0]}], position: 53250, duration: 1000 },
                { id: "eid555", tween: [ "style", "${_music-note}", "left", '652px', { fromValue: '242px'}], position: 34953, duration: 398, easing: "easeOutQuad" },
                { id: "eid634", tween: [ "style", "${_music-note}", "left", '682px', { fromValue: '652px'}], position: 39120, duration: 880, easing: "easeOutBack" },
                { id: "eid640", tween: [ "style", "${_music-note}", "left", '332px', { fromValue: '682px'}], position: 40000, duration: 250, easing: "easeInBack" },
                { id: "eid759", tween: [ "style", "${_iPhone_White}", "display", 'block', { fromValue: 'none'}], position: 44535, duration: 0, easing: "easeOutQuad" },
                { id: "eid726", tween: [ "style", "${_screen4}", "display", 'none', { fromValue: 'block'}], position: 44868, duration: 0 },
                { id: "eid697", tween: [ "transform", "${_film2}", "scaleY", '0.65', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid662", tween: [ "transform", "${_film2}", "scaleY", '0.40909', { fromValue: '0.65'}], position: 41008, duration: 1040, easing: "easeOutBack" },
                { id: "eid540", tween: [ "style", "${_music-note}", "top", '497px', { fromValue: '647px'}], position: 33101, duration: 502, easing: "easeOutQuad" },
                { id: "eid556", tween: [ "style", "${_music-note}", "top", '517px', { fromValue: '497px'}], position: 34953, duration: 398, easing: "easeOutQuad" },
                { id: "eid608", tween: [ "style", "${_music-note}", "top", '277px', { fromValue: '517px'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid633", tween: [ "style", "${_music-note}", "top", '567px', { fromValue: '277px'}], position: 39120, duration: 880, easing: "easeOutBack" },
                { id: "eid986", tween: [ "style", "${_txt_scene1-3b}", "top", '-61px', { fromValue: '344px'}], position: 100, duration: 285, easing: "easeOutQuad" },
                { id: "eid886", tween: [ "style", "${_party-pinnata-03-01}", "height", '300px', { fromValue: '100px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid912", tween: [ "style", "${_txt_check-out-other-vues}", "opacity", '1', { fromValue: '0'}], position: 54500, duration: 500, easing: "easeOutQuad" },
                { id: "eid914", tween: [ "style", "${_txt_check-out-other-vues}", "opacity", '1', { fromValue: '1'}], position: 55000, duration: 0, easing: "easeOutQuad" },
                { id: "eid915", tween: [ "style", "${_txt_check-out-other-vues}", "opacity", '1', { fromValue: '1'}], position: 58002, duration: 0, easing: "easeOutQuad" },
                { id: "eid1076", tween: [ "style", "${_txt_last-2b}", "opacity", '1', { fromValue: '0'}], position: 49500, duration: 500, easing: "easeOutBack" },
                { id: "eid1065", tween: [ "style", "${_txt_last-2b}", "opacity", '0', { fromValue: '1'}], position: 51661, duration: 339, easing: "easeOutBack" },
                { id: "eid190", tween: [ "style", "${_screen2-point}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0, easing: "easeOutQuad" },
                { id: "eid764", tween: [ "style", "${_iPhone_White}", "width", '352px', { fromValue: '251px'}], position: 45852, duration: 966, easing: "easeOutQuad" },
                { id: "eid444", tween: [ "style", "${_photo1}", "height", '157px', { fromValue: '70px'}], position: 27000, duration: 500, easing: "easeOutQuad" },
                { id: "eid252", tween: [ "style", "${_figure_blue-dk-happy2}", "left", '622px', { fromValue: '622px'}], position: 21000, duration: 0, easing: "easeOutQuad" },
                { id: "eid758", tween: [ "style", "${_Vue-icon-white}", "display", 'block', { fromValue: 'none'}], position: 44535, duration: 0, easing: "easeOutQuad" },
                { id: "eid142", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 12038, duration: 212, easing: "easeOutQuad" },
                { id: "eid143", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 12250, duration: 212, easing: "easeOutQuad" },
                { id: "eid376", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 18038, duration: 212, easing: "easeOutQuad" },
                { id: "eid377", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 18250, duration: 212, easing: "easeOutQuad" },
                { id: "eid385", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 18462, duration: 212, easing: "easeOutQuad" },
                { id: "eid466", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 28361, duration: 212, easing: "easeOutQuad" },
                { id: "eid498", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 29250, duration: 212, easing: "easeOutQuad" },
                { id: "eid501", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 30192, duration: 212, easing: "easeOutQuad" },
                { id: "eid544", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 34120, duration: 212, easing: "easeOutQuad" },
                { id: "eid571", tween: [ "transform", "${_finger-point}", "skewX", '-14.84deg', { fromValue: '0deg'}], position: 36576, duration: 212, easing: "easeOutQuad" },
                { id: "eid951", tween: [ "style", "${_txt_scene1-2a}", "opacity", '0', { fromValue: '1'}], position: 100, duration: 285, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_txt_so-your-at}", "top", '66px', { fromValue: '142px'}], position: 2000, duration: 500, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_txt_so-your-at}", "top", '-44px', { fromValue: '66px'}], position: 10250, duration: 500, easing: "easeOutQuad" },
                { id: "eid708", tween: [ "transform", "${_photo2}", "scaleY", '0.65', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutBack" },
                { id: "eid653", tween: [ "transform", "${_photo2}", "scaleY", '0.35227', { fromValue: '0.65'}], position: 40000, duration: 1008, easing: "easeOutBack" }            ]
        }
    }
},
"widget_download": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'badge-drawer',
                    type: 'rect',
                    rect: ['1px', '50', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn_download',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'badge-drawer',
                symbolName: 'badge-drawer',
                autoPlay: {

               }
            },
            {
                id: 'btn_download',
                symbolName: 'btn_download',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_badge-drawer}": [
                ["style", "top", '-151px'],
                ["style", "clip", [153.59765625,222,205.59765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '224px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1307,
            autoPlay: true,
            timeline: [
                { id: "eid1052", tween: [ "style", "${_badge-drawer}", "top", '39px', { fromValue: '-151px'}], position: 250, duration: 307, easing: "easeOutBack" },
                { id: "eid1057", tween: [ "style", "${_badge-drawer}", "top", '-151px', { fromValue: '39px'}], position: 1000, duration: 307, easing: "easeOutExpo" },
                { id: "eid1050", tween: [ "style", "${_badge-drawer}", "clip", [153.59765625,222,207.3623046875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [153.59765625,222,205.59765625,0]}], position: 250, duration: 0, easing: "easeOutBack" },
                { id: "eid1051", tween: [ "style", "${_badge-drawer}", "clip", [0,222,220,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [153.59765625,222,207.3623046875,0]}], position: 250, duration: 307, easing: "easeOutBack" },
                { id: "eid1059", tween: [ "style", "${_badge-drawer}", "clip", [153.59765625,222,207.3623046875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,222,220,0]}], position: 1000, duration: 307, easing: "easeOutExpo" },
                { id: "eid1058", tween: [ "style", "${_badge-drawer}", "clip", [153.59765625,222,205.59765625,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [153.59765625,222,207.3623046875,0]}], position: 1307, duration: 0, easing: "easeOutExpo" }            ]
        }
    }
},
"Header": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100%', '120px', 'auto', 'auto'],
                    id: 'Header',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(45,45,45,1.00)']
                },
                {
                    rect: ['306px', '46px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Roboto, sans-serif', 16, 'rgba(119,119,119,1.00)', '300', 'none', ''],
                    id: 'Text',
                    text: 'HOME',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['376px', '46px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Roboto, sans-serif', 16, 'rgba(119,119,119,1.00)', '300', 'none', ''],
                    id: 'TextCopy',
                    text: 'EXAMPLES',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['480px', '46px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Roboto, sans-serif', 16, 'rgba(119,119,119,1.00)', '300', 'none', ''],
                    id: 'TextCopy2',
                    text: 'TEAM',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['545px', '46px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Roboto, sans-serif', 16, 'rgba(119,119,119,1.00)', '300', 'none', ''],
                    id: 'TextCopy3',
                    text: 'CONTACT',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['637px', '46px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Roboto, sans-serif', 16, 'rgba(84,141,181,1.00)', '300', 'none', ''],
                    id: 'TextCopy4',
                    text: 'HOW IT WORKS',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['638px', '75px', '114px', '2px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(84,141,181,1.00)']
                },
                {
                    id: 'widget_download',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['783px', '29px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo01-2',
                    type: 'image',
                    rect: ['26px', '27px', '224px', '70px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'logo01-2.png', '0px', '0px', '100%', '100%']
                }
            ],
            symbolInstances: [
            {
                id: 'widget_download',
                symbolName: 'widget_download',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["style", "top", '46px'],
                ["style", "font-weight", '300'],
                ["style", "cursor", 'pointer'],
                ["color", "color", 'rgba(84,141,181,1.00)'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "left", '637px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '46px'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "left", '545px'],
                ["color", "color", 'rgba(119,119,119,1)'],
                ["style", "font-weight", '300'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '16px']
            ],
            "${_widget_download}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '783px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle2}": [
                ["style", "height", '2px'],
                ["style", "top", '75px'],
                ["color", "background-color", 'rgba(84,141,181,1.00)']
            ],
            "${_Header}": [
                ["color", "background-color", 'rgba(45,45,45,1.00)'],
                ["style", "height", '120px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_Text}": [
                ["style", "top", '46px'],
                ["style", "font-weight", '300'],
                ["style", "cursor", 'pointer'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "left", '306px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '1024px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '46px'],
                ["style", "font-weight", '300'],
                ["style", "cursor", 'pointer'],
                ["color", "color", 'rgba(119,119,119,1)'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "left", '480px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy}": [
                ["style", "top", '46px'],
                ["style", "font-family", 'Roboto, sans-serif'],
                ["style", "left", '376px'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '16px']
            ],
            "${_logo01-2}": [
                ["style", "top", '27px'],
                ["style", "height", '70px'],
                ["style", "left", '26px'],
                ["style", "width", '224px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1848,
            autoPlay: true,
            timeline: [
                { id: "eid1094", tween: [ "style", "${_TextCopy4}", "top", '22px', { fromValue: '46px'}], position: 500, duration: 1348 },
                { id: "eid1093", tween: [ "style", "${_TextCopy3}", "top", '22px', { fromValue: '46px'}], position: 500, duration: 1348 },
                { id: "eid1098", tween: [ "style", "${_TextCopy}", "top", '22px', { fromValue: '46px'}], position: 500, duration: 1348 },
                { id: "eid1095", tween: [ "style", "${_Rectangle2}", "top", '51px', { fromValue: '75px'}], position: 500, duration: 1348 },
                { id: "eid1100", tween: [ "transform", "${_widget_download}", "scaleY", '0.66667', { fromValue: '1'}], position: 500, duration: 1348 },
                { id: "eid1099", tween: [ "transform", "${_widget_download}", "scaleX", '0.66667', { fromValue: '1'}], position: 500, duration: 1348 },
                { id: "eid1090", tween: [ "style", "${_logo01-2}", "width", '128px', { fromValue: '224px'}], position: 500, duration: 1348 },
                { id: "eid1096", tween: [ "style", "${_Text}", "top", '22px', { fromValue: '46px'}], position: 500, duration: 1348 },
                { id: "eid1097", tween: [ "style", "${_TextCopy2}", "top", '22px', { fromValue: '46px'}], position: 500, duration: 1348 },
                { id: "eid1102", tween: [ "style", "${_widget_download}", "top", '0px', { fromValue: '29px'}], position: 500, duration: 1348 },
                { id: "eid1101", tween: [ "style", "${_widget_download}", "left", '825px', { fromValue: '783px'}], position: 500, duration: 1348 },
                { id: "eid1089", tween: [ "style", "${_logo01-2}", "height", '40px', { fromValue: '70px'}], position: 500, duration: 1348 },
                { id: "eid1092", tween: [ "style", "${_logo01-2}", "left", '27px', { fromValue: '26px'}], position: 500, duration: 1348 },
                { id: "eid1088", tween: [ "style", "${_Header}", "height", '59px', { fromValue: '120px'}], position: 500, duration: 1348 },
                { id: "eid1091", tween: [ "style", "${_logo01-2}", "top", '10px', { fromValue: '27px'}], position: 500, duration: 1348 }            ]
        }
    }
},
"btn_play": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['1.36161', '1.36161']],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    rect: ['11px', '5px', '63px', '30px', 'auto', 'auto'],
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,97,87,1.00)']
                },
                {
                    transform: [[0, 0], ['-90'], [], ['0.32797', '0.32797']],
                    filter: [1, 0, 2, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'arrow-down',
                    rect: ['8px', '-12px', '75px', '65px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', im + 'arrow-down.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arrow-down}": [
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0.32797'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.32797'],
                ["subproperty", "filter.invert", '1'],
                ["style", "left", '8px'],
                ["subproperty", "filter.contrast", '2']
            ],
            "${symbolSelector}": [
                ["style", "height", '41px'],
                ["style", "width", '86px']
            ],
            "${_RoundRect2}": [
                ["color", "background-color", 'rgba(255,97,87,1.00)'],
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1.36161'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '5px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1.36161'],
                ["style", "left", '11px']
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
            ]
        }
    }
},
"phone-scene1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['1.36161', '1.36161']],
                    id: 'iPhone_White',
                    type: 'image',
                    rect: ['41px', '88px', '230px', '487px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'iPhone_White.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.36161', '1.36161']],
                    id: 'wevue-logo',
                    type: 'image',
                    rect: ['67px', '130px', '178px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'logo01-2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.36161', '1.36161']],
                    id: 'scuba',
                    type: 'image',
                    rect: ['66px', '279px', '180px', '180px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'scuba.jpg', '0px', '0px']
                },
                {
                    id: 'btn_play',
                    type: 'rect',
                    rect: ['111px', '387px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn_play',
                symbolName: 'btn_play',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_iPhone_White}": [
                ["style", "top", '88px'],
                ["transform", "scaleY", '1.36161'],
                ["transform", "scaleX", '1.36161'],
                ["style", "height", '487px'],
                ["style", "left", '41px'],
                ["style", "width", '230px']
            ],
            "${_wevue-logo}": [
                ["style", "top", '130px'],
                ["transform", "scaleY", '1.36161'],
                ["style", "height", '56px'],
                ["transform", "scaleX", '1.36161'],
                ["style", "left", '67px'],
                ["style", "width", '178px']
            ],
            "${_scuba}": [
                ["style", "top", '279px'],
                ["transform", "scaleY", '1.36161'],
                ["style", "height", '180px'],
                ["transform", "scaleX", '1.36161'],
                ["style", "left", '66px'],
                ["style", "width", '180px']
            ],
            "${symbolSelector}": [
                ["style", "height", '663px'],
                ["style", "width", '313px']
            ],
            "${_btn_play}": [
                ["style", "top", '387px'],
                ["style", "left", '111px']
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
            ]
        }
    }
},
"bouncing-down-arrow": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'down-triangle',
                    type: 'image',
                    rect: ['-9px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'down-triangle.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_down-triangle}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["style", "left", '-9px'],
                ["style", "width", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '27px'],
                ["style", "width", '31px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid952", tween: [ "style", "${_down-triangle}", "top", '-10px', { fromValue: '0px'}], position: 250, duration: 371, easing: "easeOutQuad" },
                { id: "eid953", tween: [ "style", "${_down-triangle}", "top", '0px', { fromValue: '-10px'}], position: 621, duration: 379, easing: "easeOutBounce" }            ]
        }
    }
},
"grass-hill": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                    id: 'grass',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '86px', '1024px', '178px', 'auto', 'auto'],
                    fill: ['rgba(139,183,96,1.00)']
                },
                {
                    rect: ['122px', '41px', '1024px', '491px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'hill1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(139,183,96,1)']
                },
                {
                    rect: ['451px', '0px', '1024px', '491px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'hill2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(139,183,96,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_grass}": [
                ["style", "top", '86px'],
                ["color", "background-color", 'rgba(139,183,96,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '178px']
            ],
            "${_hill1}": [
                ["style", "top", '91px'],
                ["style", "left", '122px']
            ],
            "${_hill2}": [
                ["style", "left", '451px'],
                ["style", "top", '90px']
            ],
            "${symbolSelector}": [
                ["style", "height", '532px'],
                ["style", "width", '1475px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid286", tween: [ "style", "${_hill2}", "top", '0px', { fromValue: '90px'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid284", tween: [ "style", "${_hill1}", "top", '41px', { fromValue: '91px'}], position: 0, duration: 1000, easing: "easeOutQuad" }            ]
        }
    }
},
"crowd-concert": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'person1',
                    type: 'image',
                    rect: ['0px', '29px', '512px', '663px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'figure_blue-dk.svg', '0px', '0px']
                },
                {
                    id: 'person2',
                    type: 'image',
                    rect: ['227px', '0px', '612px', '792px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'figure_blue-dk-happy.svg', '0px', '0px']
                },
                {
                    id: 'person3',
                    type: 'image',
                    rect: ['539px', '29px', '512px', '663px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'figure_blue-dk.svg', '0px', '0px']
                },
                {
                    id: 'person4',
                    type: 'image',
                    rect: ['757px', '0px', '612px', '792px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'figure_blue-dk-happy.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_person4}": [
                ["style", "left", '757px'],
                ["style", "top", '0px']
            ],
            "${_person1}": [
                ["style", "top", '29px'],
                ["style", "height", '663px'],
                ["style", "left", '0px'],
                ["style", "width", '512px']
            ],
            "${symbolSelector}": [
                ["style", "height", '792px'],
                ["style", "width", '1369px']
            ],
            "${_person2}": [
                ["style", "left", '227px'],
                ["style", "top", '0px']
            ],
            "${_person3}": [
                ["style", "height", '663px'],
                ["style", "top", '29px'],
                ["style", "left", '539px'],
                ["style", "width", '512px']
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
            ]
        }
    }
},
"concert": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '378px', '382px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'concert-blue',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', im + 'concert-blue.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['30'], ['22'], ['0.46533', '0.87864'], ['50%', '0%']],
                    rect: ['233px', '68px', '80px', '243px', 'auto', 'auto'],
                    id: 'light1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(248,118,118,0.62)']
                },
                {
                    transform: [[0, 0], ['-49'], ['26'], [], ['49.9999%', '-0.0001%']],
                    rect: ['98px', '64px', '37px', '230px', 'auto', 'auto'],
                    id: 'light2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(248,237,118,0.62)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_light1}": [
                ["color", "background-color", 'rgba(248,118,118,0.62)'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.87864'],
                ["transform", "rotateZ", '30deg'],
                ["transform", "scaleX", '0.46533'],
                ["transform", "skewX", '21.97deg'],
                ["style", "left", '233px'],
                ["style", "top", '68px']
            ],
            "${_light2}": [
                ["color", "background-color", 'rgba(248,237,118,0.62)'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '26.37deg'],
                ["transform", "rotateZ", '-49deg'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '98px'],
                ["style", "top", '64px']
            ],
            "${_concert-blue}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "height", '382px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '378px']
            ],
            "${symbolSelector}": [
                ["style", "height", '382px'],
                ["style", "width", '378px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid293", tween: [ "transform", "${_light2}", "scaleY", '0.7122', { fromValue: '1'}], position: 364, duration: 332, easing: "easeOutBack" },
                { id: "eid296", tween: [ "transform", "${_light2}", "scaleY", '1', { fromValue: '0.7122'}], position: 696, duration: 332, easing: "easeOutBack" },
                { id: "eid288", tween: [ "transform", "${_light1}", "skewX", '-30.88deg', { fromValue: '21.97deg'}], position: 500, duration: 618, easing: "easeOutBack" },
                { id: "eid290", tween: [ "transform", "${_light1}", "skewX", '21.97deg', { fromValue: '-30.88deg'}], position: 1118, duration: 618, easing: "easeOutBack" },
                { id: "eid301", tween: [ "transform", "${_light1}", "skewX", '-30.88deg', { fromValue: '21.97deg'}], position: 1736, duration: 485, easing: "easeOutBack" },
                { id: "eid305", tween: [ "transform", "${_light1}", "skewX", '21.97deg', { fromValue: '-30.88deg'}], position: 2221, duration: 279, easing: "easeOutBack" },
                { id: "eid291", tween: [ "transform", "${_light2}", "skewX", '-21.37deg', { fromValue: '26.37deg'}], position: 0, duration: 364, easing: "easeOutBack" },
                { id: "eid292", tween: [ "transform", "${_light2}", "skewX", '-45.3deg', { fromValue: '-21.37deg'}], position: 364, duration: 332, easing: "easeOutBack" },
                { id: "eid297", tween: [ "transform", "${_light2}", "skewX", '-21.37deg', { fromValue: '-45.3deg'}], position: 696, duration: 332, easing: "easeOutBack" },
                { id: "eid299", tween: [ "transform", "${_light2}", "skewX", '26.37deg', { fromValue: '-21.37deg'}], position: 1028, duration: 364, easing: "easeOutBack" }            ]
        }
    }
},
"btn_next": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '60px', '50px', 'auto', 'auto'],
                    borderRadius: ['12px 12px', '0px 0px', '0px 0px', '12px 12px'],
                    id: 'RoundRect3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,71,79,0.51)']
                },
                {
                    id: 'artwork_arrow_next',
                    type: 'image',
                    rect: ['15px', '10px', '30px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'artwork_arrow_next.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_artwork_arrow_next}": [
                ["style", "left", '15px'],
                ["style", "top", '10px']
            ],
            "${_RoundRect3}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [12,12], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "background-color", 'rgba(63,71,79,0.51)'],
                ["style", "height", '50px'],
                ["style", "border-top-left-radius", [12,12], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '60px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '60px']
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
            ]
        }
    }
},
"btn_prev": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '60px', '50px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '12px 12px', '12px 12px', '0px 0px'],
                    id: 'RoundRect4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,71,79,0.50)']
                },
                {
                    id: 'artwork_arrow_prev',
                    type: 'image',
                    rect: ['15px', '10px', '30px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'artwork_arrow_prev.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '60px']
            ],
            "${_artwork_arrow_prev}": [
                ["style", "left", '15px'],
                ["style", "top", '10px']
            ],
            "${_RoundRect4}": [
                ["color", "background-color", 'rgba(63,71,79,0.50)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '0px'],
                ["style", "border-bottom-right-radius", [12,12], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [12,12], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '60px']
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
            ]
        }
    }
},
"user-circled": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'user-circle',
                    stroke: [2, 'rgba(63,71,79,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(63,71,79,0.00)']
                },
                {
                    id: 'user1',
                    type: 'image',
                    rect: ['5px', '3px', '24px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'user.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_user-circle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(63,71,79,0.00)'],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgba(63,71,79,1.00)'],
                ["style", "height", '30px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '30px']
            ],
            "${_user1}": [
                ["style", "height", '30px'],
                ["style", "top", '3px'],
                ["style", "left", '5px'],
                ["style", "width", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '34px']
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
            ]
        }
    }
},
"user-bruno": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Oswald, sans-serif', 16, 'rgba(63,71,79,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text6Copy2',
                    text: 'Bruno Raite',
                    align: 'center',
                    rect: ['44px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'user-circledCopy2',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'user-circledCopy2',
                symbolName: 'user-circled'
            }            ]
        },
    states: {
        "Base State": {
            "${_user-circledCopy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text6Copy2}": [
                ["style", "top", '5px'],
                ["style", "left", '44px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '116px']
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
            ]
        }
    }
},
"user-bonnie": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Oswald, sans-serif', 16, 'rgba(63,71,79,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text6Copy',
                    text: 'Bonnie Mars',
                    align: 'center',
                    rect: ['44px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'user-circledCopy',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'user-circledCopy',
                symbolName: 'user-circled'
            }            ]
        },
    states: {
        "Base State": {
            "${_Text6Copy}": [
                ["style", "top", '5px'],
                ["style", "left", '44px'],
                ["style", "font-size", '16px']
            ],
            "${_user-circledCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '121px']
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
            ]
        }
    }
},
"user-anderson": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'user-circled',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Oswald, sans-serif', 16, 'rgba(63,71,79,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text6',
                    text: 'Michael Anderson',
                    align: 'center',
                    rect: ['44px', '5px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'user-circled',
                symbolName: 'user-circled'
            }            ]
        },
    states: {
        "Base State": {
            "${_Text6}": [
                ["style", "top", '5px'],
                ["style", "left", '44px'],
                ["style", "font-size", '16px']
            ],
            "${_user-circled}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '154px']
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
            ]
        }
    }
},
"mainVideo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1px', '1px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '294px'],
                ["style", "width", '392px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '1px']
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
            ]
        }
    }
},
"vue-thumb1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                    id: 'box',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['1px', '0px', '200px', '150px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1)']
                },
                {
                    id: 'wedding',
                    type: 'image',
                    rect: ['5%', '5%', '90%', '90%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'wedding.jpg', '50%', '50%', '180px', '135px']
                },
                {
                    id: 'btn_play',
                    type: 'rect',
                    rect: ['58px', '57px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.82758', '0.82758']]
                }
            ],
            symbolInstances: [
            {
                id: 'btn_play',
                symbolName: 'btn_play',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_wedding}": [
                ["style", "top", '5%'],
                ["style", "height", '90%'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '5%'],
                ["style", "width", '90%']
            ],
            "${_btn_play}": [
                ["transform", "scaleX", '0.82758'],
                ["style", "top", '57px'],
                ["style", "left", '58px'],
                ["transform", "scaleY", '0.82758']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '200px']
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
            ]
        }
    }
},
"vue-thumb2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '200px', '150px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1)']
                },
                {
                    id: 'soccer',
                    type: 'image',
                    rect: ['5%', '5%', '90%', '90%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'soccer.jpg', '0px', '0px']
                },
                {
                    id: 'btn_playCopy',
                    type: 'rect',
                    rect: ['58px', '57px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.82758', '0.82758']]
                }
            ],
            symbolInstances: [
            {
                id: 'btn_playCopy',
                symbolName: 'btn_play',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_soccer}": [
                ["style", "height", '90%'],
                ["style", "top", '5%'],
                ["style", "left", '5%'],
                ["style", "width", '90%']
            ],
            "${_Rectangle3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btn_playCopy}": [
                ["style", "top", '57px'],
                ["transform", "scaleY", '0.82758'],
                ["style", "left", '58px'],
                ["transform", "scaleX", '0.82758']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"vue-thumb3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '200px', '150px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1)']
                },
                {
                    id: 'tampa',
                    type: 'image',
                    rect: ['5%', '5%', '90%', '90.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'tampa.jpg', '0px', '0px']
                },
                {
                    id: 'btn_playCopy2',
                    type: 'rect',
                    rect: ['58px', '57px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.82758', '0.82758']]
                }
            ],
            symbolInstances: [
            {
                id: 'btn_playCopy2',
                symbolName: 'btn_play'
            }            ]
        },
    states: {
        "Base State": {
            "${_btn_playCopy2}": [
                ["style", "top", '57px'],
                ["transform", "scaleX", '0.82758'],
                ["transform", "scaleY", '0.82758'],
                ["style", "left", '58px']
            ],
            "${_tampa}": [
                ["style", "top", '5%'],
                ["style", "height", '90.09%'],
                ["style", "left", '5%'],
                ["style", "width", '90%']
            ],
            "${_Rectangle4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"finger-swipe-left": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'arrow-swipe-left',
                    type: 'image',
                    rect: ['-25px', '-20px', '150px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'arrow-swipe-left.png', '0px', '0px']
                },
                {
                    id: 'finger-point-01',
                    type: 'image',
                    rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'finger-point-01.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_finger-point-01}": [
                ["style", "-webkit-transform-origin", [58.36,91.76], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [58.36,91.76],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [58.36,91.76],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [58.36,91.76],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [58.36,91.76],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [58.36,91.76],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_arrow-swipe-left}": [
                ["style", "left", '-25px'],
                ["style", "top", '-20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid971", tween: [ "transform", "${_finger-point-01}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 500, duration: 750, easing: "easeOutQuad" },
                { id: "eid972", tween: [ "transform", "${_finger-point-01}", "rotateZ", '-35deg', { fromValue: '40deg'}], position: 1250, duration: 250, easing: "easeOutQuad" },
                { id: "eid973", tween: [ "transform", "${_finger-point-01}", "rotateZ", '0deg', { fromValue: '-35deg'}], position: 1500, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"badge-drawer": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '222px', '220px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'drawer',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'image',
                    id: 'google-play-badge-200x68',
                    opacity: 0.33,
                    rect: ['11px', '127px', '200px', '62px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'google-play-badge-200x68.png', '0px', '0px']
                },
                {
                    rect: ['87px', '189px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Oswald, sans-serif', 18, 'rgba(129,129,129,1.00)', '100', 'none', 'normal'],
                    id: 'Text2',
                    text: 'coming...',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'appStoreBadge_200x62',
                    type: 'image',
                    rect: ['11px', '42px', '200px', '62px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'appStoreBadge_200x62.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_drawer}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '222px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '220px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '222px']
            ],
            "${_Text2}": [
                ["style", "top", '189px'],
                ["color", "color", 'rgba(129,129,129,1.00)'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "left", '87px'],
                ["style", "font-size", '18px']
            ],
            "${_appStoreBadge_200x62}": [
                ["style", "left", '11px'],
                ["style", "top", '42px']
            ],
            "${_google-play-badge-200x68}": [
                ["style", "height", '62px'],
                ["style", "opacity", '0.33'],
                ["style", "left", '11px'],
                ["style", "top", '127px']
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
            ]
        }
    }
},
"btn_download": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '224px', '60px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'button',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(235,114,96,1.00)']
                },
                {
                    rect: ['9px', '14px', '205px', '36px', 'auto', 'auto'],
                    font: ['Oswald, sans-serif', 22, 'rgba(34,34,34,1.00)', '300', 'none', ''],
                    id: 'Text',
                    text: 'DOWNLOAD NOW!',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_button}": [
                ["color", "background-color", 'rgba(235,114,96,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '60px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(34,34,34,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '9px'],
                ["style", "width", '205px'],
                ["style", "top", '14px'],
                ["style", "text-align", 'center'],
                ["style", "height", '36px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '224px']
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
            ]
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
})(jQuery, AdobeEdge, "WevueSPA");
