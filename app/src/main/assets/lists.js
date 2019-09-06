
let containerIdList = [
    "journaltitleId","wherePublishedId","","","abstract_para1","","sec1_main","sec1_main_para1","","sec1_main_para2","","sec1_main_para3","","sec1_main_para4","","sec1_main_para5","","sec1_main_para6","","sec1_main_para7","","sec2_main","sec2_main_para1","","sec2_sub1","sec2_sub1_para1","","sec2_sub1_para2","","sec2_sub1_para5","","sec2_sub2","sec2_sub2_para1","","sec2_sub2_para2","","sec2_sub2_para5","","sec2_sub3","sec2_sub3_para1","","sec2_sub3_para3","","sec3_main","sec3_main_para1","","sec3_sub1","sec3_sub1_para1","","sec3_sub1_para2","","sec3_sub2","sec3_sub2_para1","","sec3_sub2_para2","","sec3_sub2_para3","","sec3_sub2_para4","","sec3_sub2_para5","","sec3_sub2_para6","","sec3_sub2_para7","","sec3_sub2_para8","","sec3_sub3","sec3_sub3_para1","","sec3_sub3_para2","","sec3_sub3_para3","","sec3_sub3_para4","","sec4_main","sec4_main_para1","","sec5_main","sec5_main_para1","","sec5_sub1","sec5_sub1_para1","","sec5_sub1_para2","","sec5_sub1_para3","","sec5_sub2","sec5_sub2_para1","","sec5_sub2_para2","","sec5_sub2_para3","","sec5_sub2_para6","","sec5_sub2_para8","","sec5_sub3","sec5_sub3_para1","","sec5_sub3_para2","","sec5_sub3_para3","","sec5_sub3_para4","","sec5_sub3_para5","","sec5_sub4","sec5_sub4_para1","","sec5_sub4_para2","","sec5_sub4_para4","","sec5_sub4_para5","","sec5_sub5","sec5_sub5_para1","","sec5_sub5_para2","","sec5_sub5_para3","","sec5_sub5_para5","","sec5_sub6","sec5_sub6_para1","","sec5_sub6_para2","","sec5_sub6_para4","","sec5_sub6_para6","","sec5_sub6_para7","","sec6_main","sec6_main_para1","","sec6_sub1","sec6_sub1_para1","","sec6_sub2","sec6_sub2_para1","","sec6_sub2_para2","","sec6_sub3","sec6_sub3_para1","","sec6_sub3_para2","","sec6_sub3_para3","","sec6_sub3_para5","","sec6_sub3_para6","","sec6_sub3_para7","","sec7_main","sec7_main_para1"
];

let jsonVarObj = {
    "0":journaltitleIdJSON,"1":wherePublishedIdJSON,"2":null,"3":null,"4":abstract_para1JSON,"5":null,"6":sec1_mainJSON,"7":sec1_main_para1JSON,"8":null,"9":sec1_main_para2JSON,"10":null,"11":sec1_main_para3JSON,"12":null,"13":sec1_main_para4JSON,"14":null,"15":sec1_main_para5JSON,"16":null,"17":sec1_main_para6JSON,"18":null,"19":sec1_main_para7JSON,"20":null,"21":sec2_mainJSON,"22":sec2_main_para1JSON,"23":null,"24":sec2_sub1JSON,"25":sec2_sub1_para1JSON,"26":null,"27":sec2_sub1_para2JSON,"28":null,"29":sec2_sub1_para5JSON,"30":null,"31":sec2_sub2JSON,"32":sec2_sub2_para1JSON,"33":null,"34":sec2_sub2_para2JSON,"35":null,"36":sec2_sub2_para5JSON,"37":null,"38":sec2_sub3JSON,"39":sec2_sub3_para1JSON,"40":null,"41":sec2_sub3_para3JSON,"42":null,"43":sec3_mainJSON,"44":sec3_main_para1JSON,"45":null,"46":sec3_sub1JSON,"47":sec3_sub1_para1JSON,"48":null,"49":sec3_sub1_para2JSON,"50":null,"51":sec3_sub2JSON,"52":sec3_sub2_para1JSON,"53":null,"54":sec3_sub2_para2JSON,"55":null,"56":sec3_sub2_para3JSON,"57":null,"58":sec3_sub2_para4JSON,"59":null,"60":sec3_sub2_para5JSON,"61":null,"62":sec3_sub2_para6JSON,"63":null,"64":sec3_sub2_para7JSON,"65":null,"66":sec3_sub2_para8JSON,"67":null,"68":sec3_sub3JSON,"69":sec3_sub3_para1JSON,"70":null,"71":sec3_sub3_para2JSON,"72":null,"73":sec3_sub3_para3JSON,"74":null,"75":sec3_sub3_para4JSON,"76":null,"77":sec4_mainJSON,"78":sec4_main_para1JSON,"79":null,"80":sec5_mainJSON,"81":sec5_main_para1JSON,"82":null,"83":sec5_sub1JSON,"84":sec5_sub1_para1JSON,"85":null,"86":sec5_sub1_para2JSON,"87":null,"88":sec5_sub1_para3JSON,"89":null,"90":sec5_sub2JSON,"91":sec5_sub2_para1JSON,"92":null,"93":sec5_sub2_para2JSON,"94":null,"95":sec5_sub2_para3JSON,"96":null,"97":sec5_sub2_para6JSON,"98":null,"99":sec5_sub2_para8JSON,"100":null,"101":sec5_sub3JSON,"102":sec5_sub3_para1JSON,"103":null,"104":sec5_sub3_para2JSON,"105":null,"106":sec5_sub3_para3JSON,"107":null,"108":sec5_sub3_para4JSON,"109":null,"110":sec5_sub3_para5JSON,"111":null,"112":sec5_sub4JSON,"113":sec5_sub4_para1JSON,"114":null,"115":sec5_sub4_para2JSON,"116":null,"117":sec5_sub4_para4JSON,"118":null,"119":sec5_sub4_para5JSON,"120":null,"121":sec5_sub5JSON,"122":sec5_sub5_para1JSON,"123":null,"124":sec5_sub5_para2JSON,"125":null,"126":sec5_sub5_para3JSON,"127":null,"128":sec5_sub5_para5JSON,"129":null,"130":sec5_sub6JSON,"131":sec5_sub6_para1JSON,"132":null,"133":sec5_sub6_para2JSON,"134":null,"135":sec5_sub6_para4JSON,"136":null,"137":sec5_sub6_para6JSON,"138":null,"139":sec5_sub6_para7JSON,"140":null,"141":sec6_mainJSON,"142":sec6_main_para1JSON,"143":null,"144":sec6_sub1JSON,"145":sec6_sub1_para1JSON,"146":null,"147":sec6_sub2JSON,"148":sec6_sub2_para1JSON,"149":null,"150":sec6_sub2_para2JSON,"151":null,"152":sec6_sub3JSON,"153":sec6_sub3_para1JSON,"154":null,"155":sec6_sub3_para2JSON,"156":null,"157":sec6_sub3_para3JSON,"158":null,"159":sec6_sub3_para5JSON,"160":null,"161":sec6_sub3_para6JSON,"162":null,"163":sec6_sub3_para7JSON,"164":null,"165":sec7_mainJSON,"166":sec7_main_para1JSON
};

let earcons = ["", "audio/sentence.ogg", "audio/paragraph.ogg", "audio/section.ogg", "audio/open.ogg", "audio/select.ogg", "audio/tick.ogg", "audio/tick_snd.ogg", "audio/tock_snd.ogg", "audio/readingnow.mp3", "audio/open-ended-trial.mp3", "audio/viz-notifier.mp3", "audio/bubbling-up.mp3", "audio/ann_section.mp3", "audio/ann_subsection.mp3", "audio/human_breathing.ogg", "audio/warm_evening.ogg"];


let audioFiles = [
    "journaltitleId.mp3","wherePublishedId.mp3",earcons[SECTION_DELIM],"audio/abstract_main.mp3","abstract_para1.mp3",earcons[SECTION_DELIM],"sec1_main.mp3","sec1_main_para1.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para2.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para3.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para4.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para5.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para6.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para7.mp3",earcons[SECTION_DELIM],"sec2_main.mp3","sec2_main_para1.mp3",earcons[SECTION_DELIM],"sec2_sub1.mp3","sec2_sub1_para1.mp3",earcons[PARAGRAPH_DELIM],"sec2_sub1_para2.mp3",earcons[PARAGRAPH_DELIM],"sec2_sub1_para5.mp3",earcons[SECTION_DELIM],"sec2_sub2.mp3","sec2_sub2_para1.mp3",earcons[PARAGRAPH_DELIM],"sec2_sub2_para2.mp3",earcons[PARAGRAPH_DELIM],"sec2_sub2_para5.mp3",earcons[SECTION_DELIM],"sec2_sub3.mp3","sec2_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec2_sub3_para3.mp3",earcons[SECTION_DELIM],"sec3_main.mp3","sec3_main_para1.mp3",earcons[SECTION_DELIM],"sec3_sub1.mp3","sec3_sub1_para1.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub1_para2.mp3",earcons[SECTION_DELIM],"sec3_sub2.mp3","sec3_sub2_para1.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para2.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para3.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para4.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para5.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para6.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para7.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para8.mp3",earcons[SECTION_DELIM],"sec3_sub3.mp3","sec3_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub3_para2.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub3_para3.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub3_para4.mp3",earcons[SECTION_DELIM],"sec4_main.mp3","sec4_main_para1.mp3",earcons[SECTION_DELIM],"sec5_main.mp3","sec5_main_para1.mp3",earcons[SECTION_DELIM],"sec5_sub1.mp3","sec5_sub1_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub1_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub1_para3.mp3",earcons[SECTION_DELIM],"sec5_sub2.mp3","sec5_sub2_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para3.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para6.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para8.mp3",earcons[SECTION_DELIM],"sec5_sub3.mp3","sec5_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub3_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub3_para3.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub3_para4.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub3_para5.mp3",earcons[SECTION_DELIM],"sec5_sub4.mp3","sec5_sub4_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub4_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub4_para4.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub4_para5.mp3",earcons[SECTION_DELIM],"sec5_sub5.mp3","sec5_sub5_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub5_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub5_para3.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub5_para5.mp3",earcons[SECTION_DELIM],"sec5_sub6.mp3","sec5_sub6_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para4.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para6.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para7.mp3",earcons[SECTION_DELIM],"sec6_main.mp3","sec6_main_para1.mp3",earcons[SECTION_DELIM],"sec6_sub1.mp3","sec6_sub1_para1.mp3",earcons[SECTION_DELIM],"sec6_sub2.mp3","sec6_sub2_para1.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub2_para2.mp3",earcons[SECTION_DELIM],"sec6_sub3.mp3","sec6_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para2.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para3.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para5.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para6.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para7.mp3",earcons[SECTION_DELIM],"sec7_main.mp3","sec7_main_para1.mp3"
];

let speechRateVariants = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];

// let audioFiles = [
//     "journaltitleId.mp3","wherePublishedId.mp3",earcons[SECTION_DELIM],"audio/abstract_main.mp3","abstract_para1.mp3",earcons[SECTION_DELIM],"sec1_main.mp3","sec1_main_para1.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para2.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para3.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para4.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para5.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para6.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para7.mp3",earcons[SECTION_DELIM],"sec6_main.mp3","sec6_main_para1.mp3",earcons[SECTION_DELIM],"sec6_sub1.mp3","sec6_sub1_para1.mp3",earcons[SECTION_DELIM],"sec6_sub2.mp3","sec6_sub2_para1.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub2_para2.mp3",earcons[SECTION_DELIM],"sec6_sub3.mp3","sec6_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para2.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para3.mp3","sec7_main.mp3","sec7_main_para1.mp3"
// ];

// let containerIdList = [
//     "journaltitleId","wherePublishedId","","","abstract_para1","","sec1_main","sec1_main_para1","","sec1_main_para2","","sec1_main_para3","","sec1_main_para4","","sec1_main_para5","","sec1_main_para6","","sec1_main_para7","","sec6_main","sec6_main_para1","","sec6_sub1","sec6_sub1_para1","","sec6_sub2","sec6_sub2_para1","","sec6_sub2_para2","","sec6_sub3","sec6_sub3_para1","","sec6_sub3_para2","","sec6_sub3_para3","sec7_main","sec7_main_para1"
// ];

// let jsonVarObj = {
//     "0":journaltitleIdJSON,"1":wherePublishedIdJSON,"2":null,"3":null,"4":abstract_para1JSON,"5":null,"6":sec1_mainJSON,"7":sec1_main_para1JSON,"8":null,"9":sec1_main_para2JSON,"10":null,"11":sec1_main_para3JSON,"12":null,"13":sec1_main_para4JSON,"14":null,"15":sec1_main_para5JSON,"16":null,"17":sec1_main_para6JSON,"18":null,"19":sec1_main_para7JSON,"20":null,"21":sec6_mainJSON,"22":sec6_main_para1JSON,"23":null,"24":sec6_sub1JSON,"25":sec6_sub1_para1JSON,"26":null,"27":sec6_sub2JSON,"28":sec6_sub2_para1JSON,"29":null,"30":sec6_sub2_para2JSON,"31":null,"32":sec6_sub3JSON,"33":sec6_sub3_para1JSON,"34":null,"35":sec6_sub3_para2JSON,"36":null,"37":sec6_sub3_para3JSON,"38":sec7_mainJSON,"39":sec7_main_para1JSON
// };

let textDecorationBegin = [
    '<span class="title">','','','','<small>','','<span class="section-number">1</span>','','','','','','','','','','','','','','','<span class="section-number">2</span>','','','<span class="section-number">2.1</span>','','','','','','','<span class="section-number">2.2</span>','','','','','','','<span class="section-number">2.3</span>','','','','','<span class="section-number">3</span>','','','<span class="section-number">3.1</span>','','','','','<span class="section-number">3.2</span>','','','','','','','','','','','','','','','','','<span class="section-number">3.3</span>','','','','','','','','','<span class="section-number">4</span>','','','<span class="section-number">5</span>','','','<span class="section-number">5.1</span>','','','','','','','<span class="section-number">5.2</span>','','','','','','','','','','','<span class="section-number">5.3</span>','','','','','','','','','','','<span class="section-number">5.4</span>','','','','','','','','','<span class="section-number">5.5</span>','','','','','','','','','<span class="section-number">5.6</span>','','','','','','','','','','','<span class="section-number">6</span>','','','<span class="section-number">6.1</span>','','','<span class="section-number">6.2</span>','','','','','<span class="section-number">6.3</span>','','','','','','','','','','','','','<span class="section-number">7</span>',''
];

let textDecorationEnd = [
    '</span>','','','','</small>','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''
];

let isTextDecorated = [
    true,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,true,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false
];

let playContentType = [
    MAIN,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN
];

let playListMax = audioFiles.length;

let visualIds = [
    "fig1",
    "fig2",
    "tab1",
    "tab2",
    "tab3",
    "tab4",
    "tab5"
];

let visualNickNames = [
    "Figure 1",
    "Figure 2",
    "Table 1",
    "Table 2",
    "Table 3",
    "Table 4",
    "Table 5"
]

let visualType = [
    "IMAGE",
    "IMAGE",
    "TABLE",
    "TABLE",
    "TABLE",
    "TABLE",
    "TABLE"
];

let visualAnnouncementAudio = [
    "audio/fig1announceId.mp3",
    "audio/fig2announceId.mp3",
    "audio/tab1announceId.mp3",
    "audio/tab2announceId.mp3",
    "audio/tab3announceId.mp3",
    "audio/tab4announceId.mp3",
    "audio/tab5announceId.mp3"
];
let visualCaptionAudio = [
    "audio/fig1captionId.mp3",
    "audio/fig2captionId.mp3",
    "audio/tab1captionId.mp3",
    "audio/tab2captionId.mp3",
    "audio/tab3captionId.mp3",
    "audio/tab4captionId.mp3",
    "audio/tab5captionId.mp3"
];


let figAnnouncementJSONs = {
    "0": fig1announceIdJSON,
    "1": fig2announceIdJSON,
    "2": tab1announceIdJSON,
    "3": tab2announceIdJSON,
    "4": tab3announceIdJSON,
    "5": tab4announceIdJSON,
    "6": tab5announceIdJSON
};

let figCaptionJSONs = {
    "0": fig1captionIdJSON,
    "1": fig2captionIdJSON,
    "2": tab1captionIdJSON,
    "3": tab2captionIdJSON,
    "4": tab3captionIdJSON,
    "5": tab4captionIdJSON,
    "6": tab5captionIdJSON
};

let figAnnouncementContainerList = [
    "fig1announceId",
    "fig2announceId",
    "tab1announceId",
    "tab2announceId",
    "tab3announceId",
    "tab4announceId",
    "tab5announceId"
];

let figCaptionContainerList = [
    "fig1captionId",
    "fig2captionId",
    "tab1captionId",
    "tab2captionId",
    "tab3captionId",
    "tab4captionId",
    "tab5captionId"
];

let overviewContainerIds = [
    "overviewhighlight",
    "abstract_main",
    "sec1_main",
    "sec2_main",
    "sec2_sub1",
    "sec2_sub2",
    "sec2_sub3",
    "sec3_main",
    "sec3_sub1",
    "sec3_sub2",
    "sec3_sub3",
    "sec4_main",
    "sec5_main",
    "sec5_sub1",
    "sec5_sub2",
    "sec5_sub3",
    "sec5_sub4",
    "sec5_sub5",
    "sec5_sub6",
    "sec6_main",
    "sec6_sub1",
    "sec6_sub2",
    "sec6_sub3",
    "sec7_main",
];