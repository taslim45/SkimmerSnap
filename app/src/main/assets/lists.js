// let containerIdList = [
//     "journaltitleId","wherePublishedId","","","abstract_para1","","sec1_main","sec1_main_para1","","sec1_main_para2","","sec1_main_para3","","sec1_main_para4","","sec1_main_para5","","sec1_main_para6","","sec1_main_para7","","sec2_main","sec2_main_para1","","sec2_sub1","sec2_sub1_para1","","sec2_sub1_para2","","sec2_sub1_para3","","sec2_sub1_para4","","sec2_sub1_para5","","sec2_sub2","sec2_sub2_para1","","sec2_sub2_para2","","sec2_sub2_para3","","sec2_sub2_para4","","sec2_sub2_para5","","sec2_sub3","sec2_sub3_para1","","sec2_sub3_para2","","sec2_sub3_para3","","sec3_main","sec3_main_para1","","sec3_sub1","sec3_sub1_para1","","sec3_sub1_para2","","sec3_sub2","sec3_sub2_para1","","sec3_sub2_para2","","sec3_sub2_para3","","sec3_sub2_para4","","sec3_sub2_para5","","sec3_sub2_para6","","sec3_sub2_para7","","sec3_sub2_para8","","sec3_sub3","sec3_sub3_para1","","sec3_sub3_para2","","sec3_sub3_para3","","sec3_sub3_para4","","sec4_main","sec4_main_para1","","sec5_main","sec5_main_para1","","sec5_sub1","sec5_sub1_para1","","sec5_sub1_para2","","sec5_sub1_para3","","sec5_sub1_para4","","sec5_sub2","sec5_sub2_para1","","sec5_sub2_para2","","sec5_sub2_para3","","sec5_sub2_para4","","sec5_sub2_para5","","sec5_sub2_para6","","sec5_sub2_para7","","sec5_sub2_para8","","sec5_sub3","sec5_sub3_para1","","sec5_sub3_para2","","sec5_sub3_para3","","sec5_sub3_para4","","sec5_sub3_para5","","sec5_sub4","sec5_sub4_para1","","sec5_sub4_para2","","sec5_sub4_para3","","sec5_sub4_para4","","sec5_sub4_para5","","sec5_sub5","sec5_sub5_para1","","sec5_sub5_para2","","sec5_sub5_para3","","sec5_sub5_para4","","sec5_sub5_para5","","sec5_sub6","sec5_sub6_para1","","sec5_sub6_para2","","sec5_sub6_para3","","sec5_sub6_para4","","sec5_sub6_para5","","sec5_sub6_para6","","sec5_sub6_para7","","sec6_main","sec6_main_para1","","sec6_sub1","sec6_sub1_para1","","sec6_sub2","sec6_sub2_para1","","sec6_sub2_para2","","sec6_sub3","sec6_sub3_para1","","sec6_sub3_para2","","sec6_sub3_para3","","sec6_sub3_para4","","sec6_sub3_para5","","sec6_sub3_para6","","sec6_sub3_para7","","sec7_main","sec7_main_para1"
// ];

// let jsonVarObj = {
//     "0":journaltitleIdJSON,"1":wherePublishedIdJSON,"2":null,"3":null,"4":abstract_para1JSON,"5":null,"6":sec1_mainJSON,"7":sec1_main_para1JSON,"8":null,"9":sec1_main_para2JSON,"10":null,"11":sec1_main_para3JSON,"12":null,"13":sec1_main_para4JSON,"14":null,"15":sec1_main_para5JSON,"16":null,"17":sec1_main_para6JSON,"18":null,"19":sec1_main_para7JSON,"20":null,"21":sec2_mainJSON,"22":sec2_main_para1JSON,"23":null,"24":sec2_sub1JSON,"25":sec2_sub1_para1JSON,"26":null,"27":sec2_sub1_para2JSON,"28":null,"29":sec2_sub1_para3JSON,"30":null,"31":sec2_sub1_para4JSON,"32":null,"33":sec2_sub1_para5JSON,"34":null,"35":sec2_sub2JSON,"36":sec2_sub2_para1JSON,"37":null,"38":sec2_sub2_para2JSON,"39":null,"40":sec2_sub2_para3JSON,"41":null,"42":sec2_sub2_para4JSON,"43":null,"44":sec2_sub2_para5JSON,"45":null,"46":sec2_sub3JSON,"47":sec2_sub3_para1JSON,"48":null,"49":sec2_sub3_para2JSON,"50":null,"51":sec2_sub3_para3JSON,"52":null,"53":sec3_mainJSON,"54":sec3_main_para1JSON,"55":null,"56":sec3_sub1JSON,"57":sec3_sub1_para1JSON,"58":null,"59":sec3_sub1_para2JSON,"60":null,"61":sec3_sub2JSON,"62":sec3_sub2_para1JSON,"63":null,"64":sec3_sub2_para2JSON,"65":null,"66":sec3_sub2_para3JSON,"67":null,"68":sec3_sub2_para4JSON,"69":null,"70":sec3_sub2_para5JSON,"71":null,"72":sec3_sub2_para6JSON,"73":null,"74":sec3_sub2_para7JSON,"75":null,"76":sec3_sub2_para8JSON,"77":null,"78":sec3_sub3JSON,"79":sec3_sub3_para1JSON,"80":null,"81":sec3_sub3_para2JSON,"82":null,"83":sec3_sub3_para3JSON,"84":null,"85":sec3_sub3_para4JSON,"86":null,"87":sec4_mainJSON,"88":sec4_main_para1JSON,"89":null,"90":sec5_mainJSON,"91":sec5_main_para1JSON,"92":null,"93":sec5_sub1JSON,"94":sec5_sub1_para1JSON,"95":null,"96":sec5_sub1_para2JSON,"97":null,"98":sec5_sub1_para3JSON,"99":null,"100":sec5_sub1_para4JSON,"101":null,"102":sec5_sub2JSON,"103":sec5_sub2_para1JSON,"104":null,"105":sec5_sub2_para2JSON,"106":null,"107":sec5_sub2_para3JSON,"108":null,"109":sec5_sub2_para4JSON,"110":null,"111":sec5_sub2_para5JSON,"112":null,"113":sec5_sub2_para6JSON,"114":null,"115":sec5_sub2_para7JSON,"116":null,"117":sec5_sub2_para8JSON,"118":null,"119":sec5_sub3JSON,"120":sec5_sub3_para1JSON,"121":null,"122":sec5_sub3_para2JSON,"123":null,"124":sec5_sub3_para3JSON,"125":null,"126":sec5_sub3_para4JSON,"127":null,"128":sec5_sub3_para5JSON,"129":null,"130":sec5_sub4JSON,"131":sec5_sub4_para1JSON,"132":null,"133":sec5_sub4_para2JSON,"134":null,"135":sec5_sub4_para3JSON,"136":null,"137":sec5_sub4_para4JSON,"138":null,"139":sec5_sub4_para5JSON,"140":null,"141":sec5_sub5JSON,"142":sec5_sub5_para1JSON,"143":null,"144":sec5_sub5_para2JSON,"145":null,"146":sec5_sub5_para3JSON,"147":null,"148":sec5_sub5_para4JSON,"149":null,"150":sec5_sub5_para5JSON,"151":null,"152":sec5_sub6JSON,"153":sec5_sub6_para1JSON,"154":null,"155":sec5_sub6_para2JSON,"156":null,"157":sec5_sub6_para3JSON,"158":null,"159":sec5_sub6_para4JSON,"160":null,"161":sec5_sub6_para5JSON,"162":null,"163":sec5_sub6_para6JSON,"164":null,"165":sec5_sub6_para7JSON,"166":null,"167":sec6_mainJSON,"168":sec6_main_para1JSON,"169":null,"170":sec6_sub1JSON,"171":sec6_sub1_para1JSON,"172":null,"173":sec6_sub2JSON,"174":sec6_sub2_para1JSON,"175":null,"176":sec6_sub2_para2JSON,"177":null,"178":sec6_sub3JSON,"179":sec6_sub3_para1JSON,"180":null,"181":sec6_sub3_para2JSON,"182":null,"183":sec6_sub3_para3JSON,"184":null,"185":sec6_sub3_para4JSON,"186":null,"187":sec6_sub3_para5JSON,"188":null,"189":sec6_sub3_para6JSON,"190":null,"191":sec6_sub3_para7JSON,"192":null,"193":sec7_mainJSON,"194":sec7_main_para1JSON
// };

let earcons = ["", "audio/sentence.ogg", "audio/paragraph.ogg", "audio/section.ogg", "audio/open.ogg", "audio/select.ogg", "audio/tick.ogg", "audio/tick_snd.ogg", "audio/tock_snd.ogg", "audio/readingnow.mp3", "audio/open-ended-trial.mp3", "audio/viz-notifier.mp3"];

// let textDecorationBegin = [
//     '<span class="title">','','','','<small>','','<span class="section-number">1</span>','','','','','','','','','','','','','','','<span class="section-number">2</span>','','','<span class="section-number">2.1</span>','','','','','','','','','','','<span class="section-number">2.2</span>','','','','','','','','','','','<span class="section-number">2.3</span>','','','','','','','<span class="section-number">3</span>','','','<span class="section-number">3.1</span>','','','','','<span class="section-number">3.2</span>','','','','','','','','','','','','','','','','','<span class="section-number">3.3</span>','','','','','','','','','<span class="section-number">4</span>','','','<span class="section-number">5</span>','','','<span class="section-number">5.1</span>','','','','','','','','','<span class="section-number">5.2</span>','','','','','','','','','','','','','','','','','<span class="section-number">5.3</span>','','','','','','','','','','','<span class="section-number">5.4</span>','','','','','','','','','','','<span class="section-number">5.5</span>','','','','','','','','','','','<span class="section-number">5.6</span>','','','','','','','','','','','','','','','<span class="section-number">6</span>','','','<span class="section-number">6.1</span>','','','<span class="section-number">6.2</span>','','','','','<span class="section-number">6.3</span>','','','','','','','','','','','','','','','',''
// ];

// let textDecorationEnd = [
//     '</span>','','','','</small>','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''
// ];

// let isTextDecorated = [
//     true,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false
// ];

// let playContentType = [
//     MAIN,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN
// ];

// let audioFiles = [
//     "journaltitleId.mp3","wherePublishedId.mp3",earcons[SECTION_DELIM],"abstract_main.mp3","abstract_para1.mp3",earcons[SECTION_DELIM],"sec1_main.mp3","sec1_main_para1.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec1_main_para2.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec1_main_para3.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec1_main_para4.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec1_main_para5.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec1_main_para6.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec1_main_para7.mp3",earcons[SECTION_DELIM],"sec2_main.mp3","sec2_main_para1.mp3",earcons[SECTION_DELIM],"sec2_sub1.mp3","sec2_sub1_para1.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec2_sub1_para2.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec2_sub1_para3.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec2_sub1_para4.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec2_sub1_para5.mp3",earcons[SECTION_DELIM],"sec2_sub2.mp3","sec2_sub2_para1.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec2_sub2_para2.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec2_sub2_para3.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec2_sub2_para4.mp3",earcons[PARAGRAPH_DELIM_DELIM],"sec2_sub2_para5.mp3",earcons[SECTION_DELIM],"sec2_sub3.mp3","sec2_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec2_sub3_para2.mp3",earcons[PARAGRAPH_DELIM],"sec2_sub3_para3.mp3",earcons[SECTION_DELIM],"sec3_main.mp3","sec3_main_para1.mp3",earcons[SECTION_DELIM],"sec3_sub1.mp3","sec3_sub1_para1.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub1_para2.mp3",earcons[SECTION_DELIM],"sec3_sub2.mp3","sec3_sub2_para1.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para2.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para3.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para4.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para5.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para6.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para7.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub2_para8.mp3",earcons[SECTION_DELIM],"sec3_sub3.mp3","sec3_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub3_para2.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub3_para3.mp3",earcons[PARAGRAPH_DELIM],"sec3_sub3_para4.mp3",earcons[SECTION_DELIM],"sec4_main.mp3","sec4_main_para1.mp3",earcons[SECTION_DELIM],"sec5_main.mp3","sec5_main_para1.mp3",earcons[SECTION_DELIM],"sec5_sub1.mp3","sec5_sub1_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub1_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub1_para3.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub1_para4.mp3",earcons[SECTION_DELIM],"sec5_sub2.mp3","sec5_sub2_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para3.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para4.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para5.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para6.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para7.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub2_para8.mp3",earcons[SECTION_DELIM],"sec5_sub3.mp3","sec5_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub3_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub3_para3.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub3_para4.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub3_para5.mp3",earcons[SECTION_DELIM],"sec5_sub4.mp3","sec5_sub4_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub4_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub4_para3.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub4_para4.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub4_para5.mp3",earcons[SECTION_DELIM],"sec5_sub5.mp3","sec5_sub5_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub5_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub5_para3.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub5_para4.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub5_para5.mp3",earcons[SECTION_DELIM],"sec5_sub6.mp3","sec5_sub6_para1.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para2.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para3.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para4.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para5.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para6.mp3",earcons[PARAGRAPH_DELIM],"sec5_sub6_para7.mp3",earcons[SECTION_DELIM],"sec6_main.mp3","sec6_main_para1.mp3",earcons[SECTION_DELIM],"sec6_sub1.mp3","sec6_sub1_para1.mp3",earcons[SECTION_DELIM],"sec6_sub2.mp3","sec6_sub2_para1.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub2_para2.mp3",earcons[SECTION_DELIM],"sec6_sub3.mp3","sec6_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para2.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para3.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para4.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para5.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para6.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para7.mp3",earcons[SECTION_DELIM],"sec7_main.mp3","sec7_main_para1.mp3"
// ];

let speechRateVariants = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];

let audioFiles = [
    "journaltitleId.mp3","wherePublishedId.mp3",earcons[SECTION_DELIM],"audio/abstract_main.mp3","abstract_para1.mp3",earcons[SECTION_DELIM],"sec1_main.mp3","sec1_main_para1.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para2.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para3.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para4.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para5.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para6.mp3",earcons[PARAGRAPH_DELIM],"sec1_main_para7.mp3",earcons[SECTION_DELIM],"sec6_main.mp3","sec6_main_para1.mp3",earcons[SECTION_DELIM],"sec6_sub1.mp3","sec6_sub1_para1.mp3",earcons[SECTION_DELIM],"sec6_sub2.mp3","sec6_sub2_para1.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub2_para2.mp3",earcons[SECTION_DELIM],"sec6_sub3.mp3","sec6_sub3_para1.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para2.mp3",earcons[PARAGRAPH_DELIM],"sec6_sub3_para3.mp3","sec7_main.mp3","sec7_main_para1.mp3"
];

let containerIdList = [
    "journaltitleId","wherePublishedId","","","abstract_para1","","sec1_main","sec1_main_para1","","sec1_main_para2","","sec1_main_para3","","sec1_main_para4","","sec1_main_para5","","sec1_main_para6","","sec1_main_para7","","sec6_main","sec6_main_para1","","sec6_sub1","sec6_sub1_para1","","sec6_sub2","sec6_sub2_para1","","sec6_sub2_para2","","sec6_sub3","sec6_sub3_para1","","sec6_sub3_para2","","sec6_sub3_para3","sec7_main","sec7_main_para1"
];

let jsonVarObj = {
    "0":journaltitleIdJSON,"1":wherePublishedIdJSON,"2":null,"3":null,"4":abstract_para1JSON,"5":null,"6":sec1_mainJSON,"7":sec1_main_para1JSON,"8":null,"9":sec1_main_para2JSON,"10":null,"11":sec1_main_para3JSON,"12":null,"13":sec1_main_para4JSON,"14":null,"15":sec1_main_para5JSON,"16":null,"17":sec1_main_para6JSON,"18":null,"19":sec1_main_para7JSON,"20":null,"21":sec6_mainJSON,"22":sec6_main_para1JSON,"23":null,"24":sec6_sub1JSON,"25":sec6_sub1_para1JSON,"26":null,"27":sec6_sub2JSON,"28":sec6_sub2_para1JSON,"29":null,"30":sec6_sub2_para2JSON,"31":null,"32":sec6_sub3JSON,"33":sec6_sub3_para1JSON,"34":null,"35":sec6_sub3_para2JSON,"36":null,"37":sec6_sub3_para3JSON,"38":sec7_mainJSON,"39":sec7_main_para1JSON
};

let textDecorationBegin = [
    '<span class="title">','','','','<small>','','<span class="section-number">1</span>','','','','','','','','','','','','','','','<span class="section-number">6</span>','','','<span class="section-number">6.1</span>','','','<span class="section-number">6.2</span>','','','','','<span class="section-number">6.3</span>','','','','','','<span class="section-number">7</span>',''
];

let textDecorationEnd = [
    '</span>','','','','</small>','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''
];

let isTextDecorated = [
    true,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false,false,true,false,false,false,false,false,true,false
];

let playContentType = [
    MAIN,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,ANNOUNCEMENT,MAIN,EARCON,MAIN,EARCON,MAIN,ANNOUNCEMENT,MAIN
];

let playListMax = audioFiles.length;

let visualIds = [
    "fig1"
];

let visualNickNames = [
    "Figure 1"
]

let visualType = [
    "IMAGE"
];

let visualAnnouncementAudio = [
    "audio/fig1announceId.mp3"
];
let visualCaptionAudio = [
    "audio/fig1captionId.mp3"
];


let figAnnouncementJSONs = {
    "0": fig1announceIdJSON
};

let figCaptionJSONs = {
    "0": fig1captionIdJSON
};

let figAnnouncementContainerList = [
    "fig1announceId"
];

let figCaptionContainerList = [
    "fig1captionId"
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