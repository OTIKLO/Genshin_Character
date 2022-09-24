import mora from "./icon/mora.png";
import expbook from "./icon/expbook.webp";
import { useState } from "react";

//캐릭터
import babaraart from "./cc/babara/babara_art.png";
import venti from "./cc/babara/venti.png";
import jean from "./cc/babara/jean.png";
import xiao from "./cc/babara/xiao.png";
import sucrose from "./cc/babara/sucrose.png";
import kazuha from "./cc/babara/kazuha.png";
import sayu from "./cc/babara/sayu.png";
import heizou from "./cc/babara/heizou.png";
import mona from "./cc/babara/mona.png";
import tartaglia from "./cc/babara/tartaglia.png";
import xingqiu from "./cc/babara/xingqiu.png";
import kokomi from "./cc/babara/kokomi.png";
import ayato from "./cc/babara/ayato.png";
import yelan from "./cc/babara/yelan.png";
import diluc from "./cc/babara/diluc.png";
import klee from "./cc/babara/klee.png";
import hutao from "./cc/babara/hutao.png";
import bennett from "./cc/babara/bennett.png";
import xiangling from "./cc/babara/xiangling.png";
import amber from "./cc/babara/amber.png";
import xinyan from "./cc/babara/xinyan.png";
import yanfei from "./cc/babara/yanfei.png";
import yoimiya from "./cc/babara/yoimiya.png";
import thoma from "./cc/babara/thoma.png";
import qiqi from "./cc/babara/qiqi.png";
import ganyu from "./cc/babara/ganyu.png";
import eula from "./cc/babara/eula.png";
import chongyun from "./cc/babara/chongyun.png";
import diona from "./cc/babara/diona.png";
import kaeya from "./cc/babara/kaeya.png";
import rosaria from "./cc/babara/rosaria.png";
import ayaka from "./cc/babara/ayaka.png";
import aloy from "./cc/babara/aloy.png";
import shenhe from "./cc/babara/shenhe.png";

//채집재료
import g_ph from "./icon/gathering/Philanemo.png";
import g_ce from "./icon/gathering/Cecilia.png";
import g_da from "./icon/gathering/Dandelion.png";
import g_Qi from "./icon/gathering/Qingxin.png";
import g_wi from "./icon/gathering/Windwheel.png";
import g_sg from "./icon/gathering/SeaGanoderma.png";
import g_cm from "./icon/gathering/CrystalMarrow.png";
import g_on from "./icon/gathering/Onikabuto.png";
import g_st from "./icon/gathering/Starconch.png";
import g_sf from "./icon/gathering/SilkFlower.png";
import g_sp from "./icon/gathering/SangoPearl.png";
import g_sb from "./icon/gathering/SakuraBloom.png";
import g_slg from "./icon/gathering/SmallLampGrass.png";
import g_jc from "./icon/gathering/JueyunChili.png";
import g_vi from "./icon/gathering/Violetgrass.png";
import g_nj from "./icon/gathering/NoctilucousJade.png";
import g_nw from "./icon/gathering/NakuWeed.png";
import g_ff from "./icon/gathering/FluorescentFungus.png";
import g_cl from "./icon/gathering/CorLapis.png";
import g_cal from "./icon/gathering/CallaLily.png";
import g_va from "./icon/gathering/Valberry.png";

//보스
import b_wa from "./icon/boss/boss_water1.png";
import b_wc from "./icon/boss/boss_windcube.png";
import b_dr from "./icon/boss/boss_dragon.png";
import b_ma from "./icon/boss/boss_Marionette.png";
import b_rf from "./icon/boss/boss_RunicFang.png";
import b_drp from "./icon/boss/boss_DewRepudiation.png";
import b_ef from "./icon/boss/boss_Everflame.png";
import b_sp from "./icon/boss/boss_SmolderingPearl.png";
import b_hc from "./icon/boss/boss_HoarfrostCore.png";
import b_cb from "./icon/boss/boss_CrystallineBloom.png";
import b_ph from "./icon/boss/boss_PerpetualHeart.png";
import b_dff from "./icon/boss/boss_DragonheirsFalseFin.png";

//재료
import scroll1 from "./icon/stuff/Scroll1.png";
import scroll2 from "./icon/stuff/Scroll2.png";
import scroll3 from "./icon/stuff/Scroll3.png";
import slime1 from "./icon/stuff/slime1.png";
import slime2 from "./icon/stuff/slime2.png";
import slime3 from "./icon/stuff/slime3.png";
import mask1 from "./icon/stuff/mask1.png";
import mask2 from "./icon/stuff/mask2.png";
import mask3 from "./icon/stuff/mask3.png";
import nectar1 from "./icon/stuff/Nectar1.png";
import nectar2 from "./icon/stuff/Nectar2.png";
import nectar3 from "./icon/stuff/Nectar3.png";
import insignia1 from "./icon/stuff/Insignia1.png";
import insignia2 from "./icon/stuff/Insignia2.png";
import insignia3 from "./icon/stuff/Insignia3.png";
import sinsignia1 from "./icon/stuff/sinsignia1.png";
import sinsignia2 from "./icon/stuff/sinsignia2.png";
import sinsignia3 from "./icon/stuff/sinsignia3.png";
import spectral1 from "./icon/stuff/Spectral1.png";
import spectral2 from "./icon/stuff/Spectral2.png";
import spectral3 from "./icon/stuff/Spectral3.png";
import handguard1 from "./icon/stuff/Handguard1.png";
import handguard2 from "./icon/stuff/Handguard2.png";
import handguard3 from "./icon/stuff/Handguard3.png";
import arrowhead1 from "./icon/stuff/Arrowhead1.png";
import arrowhead2 from "./icon/stuff/Arrowhead2.png";
import arrowhead3 from "./icon/stuff/Arrowhead3.png";

//보석
import water1 from "./icon/gem/water1.png"; //물
import water2 from "./icon/gem/water2.png";
import water3 from "./icon/gem/water3.png";
import water4 from "./icon/gem/water4.png";
import wind1 from "./icon/gem/wind1.png";   //바람
import wind2 from "./icon/gem/wind2.png";
import wind3 from "./icon/gem/wind3.png";
import wind4 from "./icon/gem/wind4.png";
import fire1 from "./icon/gem/fire1.png";   //불
import fire2 from "./icon/gem/fire2.png";
import fire3 from "./icon/gem/fire3.png";
import fire4 from "./icon/gem/fire4.png";
import ice1 from "./icon/gem/ice1.png";     //얼음
import ice2 from "./icon/gem/ice2.png";
import ice3 from "./icon/gem/ice3.png";
import ice4 from "./icon/gem/ice4.png";

// 사진 관련
let art = babaraart;
let gathering = g_ph;
let boss = b_wa;
let stuff1 = scroll1;
let stuff2 = scroll2;
let stuff3 = scroll3;
let gem1 = water1;
let gem2 = water2;
let gem3 = water3;
let gem4 = water4;

// 수치 관련
let nmora = 0;
let nexp = 0;
let nga = 0;
let nboss = 0;
let nstuff1 = 0;
let nstuff2 = 0;
let nstuff3 = 0;
let ngem1 = 0;
let ngem2 = 0;
let ngem3 = 0;
let ngem4 = 0;

let smora = 0;
let sexp = 0;
let sga = 0;
let sboss = 0;
let sstuff1 = 0;
let sstuff2 = 0;
let sstuff3 = 0;
let sgem1 = 0;
let sgem2 = 0;
let sgem3 = 0;
let sgem4 = 0;

let emora = 0;
let eexp = 0;
let ega = 0;
let eboss = 0;
let estuff1 = 0;
let estuff2 = 0;
let estuff3 = 0;
let egem1 = 0;
let egem2 = 0;
let egem3 = 0;
let egem4 = 0;

function s1_20() {
    sga = 0;
    sboss = 0;
    sstuff1 = 0;
    sstuff2 = 0;
    sstuff3 = 0;
    sgem1 = 0;
    sgem2 = 0;
    sgem3 = 0;
    sgem4 = 0;
};
function s21_40() {
    sga = 3;
    sboss = 0;
    sstuff1 = 3;
    sstuff2 = 0;
    sstuff3 = 0;
    sgem1 = 1;
    sgem2 = 0;
    sgem3 = 0;
    sgem4 = 0;
};
function s41_50() {
    sga = 13;
    sboss = 2;
    sstuff1 = 18;
    sstuff2 = 0;
    sstuff3 = 0;
    sgem1 = 1;
    sgem2 = 3;
    sgem3 = 0;
    sgem4 = 0;
};
function s51_60() {
    sga = 33;
    sboss = 6;
    sstuff1 = 18;
    sstuff2 = 12;
    sstuff3 = 0;
    sgem1 = 1;
    sgem2 = 9;
    sgem3 = 0;
    sgem4 = 0;
};
function s61_70() {
    sga = 63;
    sboss = 14;
    sstuff1 = 18;
    sstuff2 = 30;
    sstuff3 = 0;
    sgem1 = 1;
    sgem2 = 9;
    sgem3 = 3;
    sgem4 = 0;
};
function s71_80() {
    sga = 108;
    sboss = 26;
    sstuff1 = 18;
    sstuff2 = 30;
    sstuff3 = 12;
    sgem1 = 1;
    sgem2 = 9;
    sgem3 = 9;
    sgem4 = 0;
};
function s81_90() {
    sga = 168;
    sboss = 46;
    sstuff1 = 18;
    sstuff2 = 30;
    sstuff3 = 36;
    sgem1 = 1;
    sgem2 = 9;
    sgem3 = 9;
    sgem4 = 6;
};
function e1_20() {
    ega = 0;
    eboss = 0;
    estuff1 = 0;
    estuff2 = 0;
    estuff3 = 0;
    egem1 = 0;
    egem2 = 0;
    egem3 = 0;
    egem4 = 0;
};
function e21_40() {
    ega = 3;
    eboss = 0;
    estuff1 = 3;
    estuff2 = 0;
    estuff3 = 0;
    egem1 = 1;
    egem2 = 0;
    egem3 = 0;
    egem4 = 0;
};
function e41_50() {
    ega = 13;
    eboss = 2;
    estuff1 = 18;
    estuff2 = 0;
    estuff3 = 0;
    egem1 = 1;
    egem2 = 3;
    egem3 = 0;
    egem4 = 0;
};
function e51_60() {
    ega = 33;
    eboss = 6;
    estuff1 = 18;
    estuff2 = 12;
    estuff3 = 0;
    egem1 = 1;
    egem2 = 9;
    egem3 = 0;
    egem4 = 0;
};
function e61_70() {
    ega = 63;
    eboss = 14;
    estuff1 = 18;
    estuff2 = 30;
    estuff3 = 0;
    egem1 = 1;
    egem2 = 9;
    egem3 = 3;
    egem4 = 0;
};
function e71_80() {
    ega = 108;
    eboss = 26;
    estuff1 = 18;
    estuff2 = 30;
    estuff3 = 12;
    egem1 = 1;
    egem2 = 9;
    egem3 = 9;
    egem4 = 0;
};
function e81_90() {
    ega = 168;
    eboss = 46;
    estuff1 = 18;
    estuff2 = 30;
    estuff3 = 36;
    egem1 = 1;
    egem2 = 9;
    egem3 = 9;
    egem4 = 6;
};

function calculator(slv, elv) {
    if (slv >= 1 && slv <= 10) {
        smora = 200;
        sexp = 1;
        s1_20();
    } else if (slv === 11) {
        smora = 1340;
        sexp = 1;
        s1_20();
    } else if (slv === 12) {
        smora = 2630;
        sexp = 1;
        s1_20();
    } else if (slv === 13) {
        smora = 4075;
        sexp = 2;
        s1_20();
    } else if (slv === 14) {
        smora = 5685;
        sexp = 2;
        s1_20();
    } else if (slv === 15) {
        smora = 7470;
        sexp = 2;
        s1_20();
    } else if (slv === 16) {
        smora = 9435;
        sexp = 3;
        s1_20();
    } else if (slv === 17) {
        smora = 11585;
        sexp = 3;
        s1_20();
    } else if (slv === 18) {
        smora = 13930;
        sexp = 4;
        s1_20();
    } else if (slv === 19) {
        smora = 16475;
        sexp = 5;
        s1_20();
    } else if (slv === 20) {
        smora = 19495;
        sexp = 5;
        s1_20();
    } else if (slv === 21) {
        smora = 42470;
        sexp = 6;
        s21_40();
    } else if (slv === 22) {
        smora = 45830;
        sexp = 7;
        s21_40();
    } else if (slv === 23) {
        smora = 49430;
        sexp = 8;
        s21_40();
    } else if (slv === 24) {
        smora = 53280;
        sexp = 9;
        s21_40();
    } else if (slv === 25) {
        smora = 57390;
        sexp = 10;
        s21_40();
    } else if (slv === 26) {
        smora = 61765;
        sexp = 11;
        s21_40();
    } else if (slv === 27) {
        smora = 66415;
        sexp = 12;
        s21_40();
    } else if (slv === 28) {
        smora = 71345;
        sexp = 13;
        s21_40();
    } else if (slv === 29) {
        smora = 76565;
        sexp = 15;
        s21_40();
    } else if (slv === 30) {
        smora = 82420;
        sexp = 16;
        s21_40();
    } else if (slv === 31) {
        smora = 88240;
        sexp = 18;
        s21_40();
    } else if (slv === 32) {
        smora = 94370;
        sexp = 19;
        s21_40();
    } else if (slv === 33) {
        smora = 100820;
        sexp = 21;
        s21_40();
    } else if (slv === 34) {
        smora = 107595;
        sexp = 22;
        s21_40();
    } else if (slv === 35) {
        smora = 114705;
        sexp = 24;
        s21_40();
    } else if (slv === 36) {
        smora = 122155;
        sexp = 26;
        s21_40();
    } else if (slv === 37) {
        smora = 129950;
        sexp = 28;
        s21_40();
    } else if (slv === 38) {
        smora = 138100;
        sexp = 30;
        s21_40();
    } else if (slv === 39) {
        smora = 146615;
        sexp = 32;
        s21_40();
    } else if (slv === 40) {
        smora = 155930;
        sexp = 34;
        s21_40();
    } else if (slv === 41) {
        smora = 205190;
        sexp = 37;
        s41_50();
    } else if (slv === 42) {
        smora = 215315;
        sexp = 39;
        s41_50();
    } else if (slv === 43) {
        smora = 225855;
        sexp = 42;
        s41_50();
    } else if (slv === 44) {
        smora = 236810;
        sexp = 45;
        s41_50();
    } else if (slv === 45) {
        smora = 248190;
        sexp = 48;
        s41_50();
    } else if (slv === 46) {
        smora = 260005;
        sexp = 51;
        s41_50();
    } else if (slv === 47) {
        smora = 272260;
        sexp = 54;
        s41_50();
    } else if (slv === 48) {
        smora = 284965;
        sexp = 57;
        s41_50();
    } else if (slv === 49) {
        smora = 298125;
        sexp = 60;
        s41_50();
    } else if (slv === 50) {
        smora = 312275;
        sexp = 64;
        s41_50();
    } else if (slv === 51) {
        smora = 386370;
        sexp = 67;
        s51_60();
    } else if (slv === 52) {
        smora = 401670;
        sexp = 71;
        s51_60();
    } else if (slv === 53) {
        smora = 417480;
        sexp = 75;
        s51_60();
    } else if (slv === 54) {
        smora = 433810;
        sexp = 79;
        s51_60();
    } else if (slv === 55) {
        smora = 450665;
        sexp = 83;
        s51_60();
    } else if (slv === 56) {
        smora = 468055;
        sexp = 88;
        s51_60();
    } else if (slv === 57) {
        smora = 485985;
        sexp = 92;
        s51_60();
    } else if (slv === 58) {
        smora = 504465;
        sexp = 97;
        s51_60();
    } else if (slv === 59) {
        smora = 523500;
        sexp = 101;
        s51_60();
    } else if (slv === 60) {
        smora = 543730;
        sexp = 106;
        s51_60();
    } else if (slv === 61) {
        smora = 643905;
        sexp = 111;
        s61_70();
    } else if (slv === 62) {
        smora = 665695;
        sexp = 117;
        s61_70();
    } else if (slv === 63) {
        smora = 688105;
        sexp = 123;
        s61_70();
    } else if (slv === 64) {
        smora = 711140;
        sexp = 128;
        s61_70();
    } else if (slv === 65) {
        smora = 734805;
        sexp = 134;
        s61_70();
    } else if (slv === 66) {
        smora = 759110;
        sexp = 140;
        s61_70();
    } else if (slv === 67) {
        smora = 784065;
        sexp = 147;
        s61_70();
    } else if (slv === 68) {
        smora = 809680;
        sexp = 153;
        s61_70();
    } else if (slv === 69) {
        smora = 835960;
        sexp = 159;
        s61_70();
    } else if (slv === 70) {
        smora = 863660;
        sexp = 166;
        s61_70();
    } else if (slv === 71) {
        smora = 991295;
        sexp = 173;
        s71_80();
    } else if (slv === 72) {
        smora = 1021035;
        sexp = 181;
        s71_80();
    } else if (slv === 73) {
        smora = 1051510;
        sexp = 188;
        s71_80();
    } else if (slv === 74) {
        smora = 1082725;
        sexp = 196;
        s71_80();
    } else if (slv === 75) {
        smora = 1114690;
        sexp = 204;
        s71_80();
    } else if (slv === 76) {
        smora = 1147410;
        sexp = 212;
        s71_80();
    } else if (slv === 77) {
        smora = 1180895;
        sexp = 221;
        s71_80();
    } else if (slv === 78) {
        smora = 1215155;
        sexp = 229;
        s71_80();
    } else if (slv === 79) {
        smora = 1250200;
        sexp = 238;
        s71_80();
    } else if (slv === 80) {
        smora = 1286905;
        sexp = 247;
        s71_80();
    } else if (slv === 81) {
        smora = 1443540;
        sexp = 256;
        s81_90();
    } else if (slv === 82) {
        smora = 1486785;
        sexp = 267;
        s81_90();
    } else if (slv === 83) {
        smora = 1535390;
        sexp = 279;
        s81_90();
    } else if (slv === 84) {
        smora = 1590010;
        sexp = 293;
        s81_90();
    } else if (slv === 85) {
        smora = 1651370;
        sexp = 308;
        s81_90();
    } else if (slv === 86) {
        smora = 1720290;
        sexp = 326;
        s81_90();
    } else if (slv === 87) {
        smora = 1797680;
        sexp = 345;
        s81_90();
    } else if (slv === 88) {
        smora = 1884565;
        sexp = 367;
        s81_90();
    } else if (slv === 89) {
        smora = 1982090;
        sexp = 391;
        s81_90();
    } else if (slv === 90) {
        smora = 2092530;
        sexp = 419;
        s81_90();
    };
    if (elv >= 1 && elv <= 10) {
        emora = 200;
        eexp = 1;
        e1_20();
    } else if (elv === 11) {
        emora = 1340;
        eexp = 1;
        e1_20();
    } else if (elv === 12) {
        emora = 2630;
        eexp = 1;
        e1_20();
    } else if (elv === 12) {
        emora = 2630;
        eexp = 1;
        e1_20();
    } else if (elv === 13) {
        emora = 4075;
        eexp = 2;
        e1_20();
    } else if (elv === 14) {
        emora = 5685;
        eexp = 2;
        e1_20();
    } else if (elv === 15) {
        emora = 7470;
        eexp = 2;
        e1_20();
    } else if (elv === 16) {
        emora = 9435;
        eexp = 3;
        e1_20();
    } else if (elv === 17) {
        emora = 11585;
        eexp = 3;
        e1_20();
    } else if (elv === 18) {
        emora = 13930;
        eexp = 4;
        e1_20();
    } else if (elv === 19) {
        emora = 16475;
        eexp = 5;
        e1_20();
    } else if (elv === 20) {
        emora = 19495;
        eexp = 5;
        e1_20();
    } else if (elv === 21) {
        emora = 42470;
        eexp = 6;
        e21_40();
    } else if (elv === 22) {
        emora = 45830;
        eexp = 7;
        e21_40();
    } else if (elv === 23) {
        emora = 49430;
        eexp = 8;
        e21_40();
    } else if (elv === 24) {
        emora = 53280;
        eexp = 9;
        e21_40();
    } else if (elv === 25) {
        emora = 57390;
        eexp = 10;
        e21_40();
    } else if (elv === 26) {
        emora = 61765;
        eexp = 11;
        e21_40();
    } else if (elv === 27) {
        emora = 66415;
        eexp = 12;
        e21_40();
    } else if (elv === 28) {
        emora = 71345;
        eexp = 13;
        e21_40();
    } else if (elv === 29) {
        emora = 76565;
        eexp = 15;
        e21_40();
    } else if (elv === 30) {
        emora = 82420;
        eexp = 16;
        e21_40();
    } else if (elv === 31) {
        emora = 88240;
        eexp = 18;
        e21_40();
    } else if (elv === 32) {
        emora = 94370;
        eexp = 19;
        e21_40();
    } else if (elv === 33) {
        emora = 100820;
        eexp = 21;
        e21_40();
    } else if (elv === 34) {
        emora = 107595;
        eexp = 22;
        e21_40();
    } else if (elv === 35) {
        emora = 114705;
        eexp = 24;
        e21_40();
    } else if (elv === 36) {
        emora = 122155;
        eexp = 26;
        e21_40();
    } else if (elv === 37) {
        emora = 129950;
        eexp = 28;
        e21_40();
    } else if (elv === 38) {
        emora = 138100;
        eexp = 30;
        e21_40();
    } else if (elv === 39) {
        emora = 146615;
        eexp = 32;
        e21_40();
    } else if (elv === 40) {
        emora = 155930;
        eexp = 34;
        e21_40();
    } else if (elv === 41) {
        emora = 205190;
        eexp = 37;
        e41_50();
    } else if (elv === 42) {
        emora = 215315;
        eexp = 39;
        e41_50();
    } else if (elv === 43) {
        emora = 225855;
        eexp = 42;
        e41_50();
    } else if (elv === 44) {
        emora = 236810;
        eexp = 45;
        e41_50();
    } else if (elv === 45) {
        emora = 248190;
        eexp = 48;
        e41_50();
    } else if (elv === 46) {
        emora = 260005;
        eexp = 51;
        e41_50();
    } else if (elv === 47) {
        emora = 272260;
        eexp = 54;
        e41_50();
    } else if (elv === 48) {
        emora = 284965;
        eexp = 57;
        e41_50();
    } else if (elv === 49) {
        emora = 298125;
        eexp = 60;
        e41_50();
    } else if (elv === 50) {
        emora = 312275;
        eexp = 64;
        e41_50();
    } else if (elv === 51) {
        emora = 386370;
        eexp = 67;
        e51_60();
    } else if (elv === 52) {
        emora = 401670;
        eexp = 71;
        e51_60();
    } else if (elv === 53) {
        emora = 417480;
        eexp = 75;
        e51_60();
    } else if (elv === 54) {
        emora = 433810;
        eexp = 79;
        e51_60();
    } else if (elv === 55) {
        emora = 450665;
        eexp = 83;
        e51_60();
    } else if (elv === 56) {
        emora = 468055;
        eexp = 88;
        e51_60();
    } else if (elv === 57) {
        emora = 485985;
        eexp = 92;
        e51_60();
    } else if (elv === 58) {
        emora = 504465;
        eexp = 97;
        e51_60();
    } else if (elv === 59) {
        emora = 523500;
        eexp = 101;
        e51_60();
    } else if (elv === 60) {
        emora = 543730;
        eexp = 106;
        e51_60();
    } else if (elv === 61) {
        emora = 643905;
        eexp = 111;
        e61_70();
    } else if (elv === 62) {
        emora = 665695;
        eexp = 117;
        e61_70();
    } else if (elv === 63) {
        emora = 688105;
        eexp = 123;
        e61_70();
    } else if (elv === 64) {
        emora = 711140;
        eexp = 128;
        e61_70();
    } else if (elv === 65) {
        emora = 734805;
        eexp = 134;
        e61_70();
    } else if (elv === 66) {
        emora = 759110;
        eexp = 140;
        e61_70();
    } else if (elv === 67) {
        emora = 784065;
        eexp = 147;
        e61_70();
    } else if (elv === 68) {
        emora = 809680;
        eexp = 153;
        e61_70();
    } else if (elv === 69) {
        emora = 835960;
        eexp = 159;
        e61_70();
    } else if (elv === 70) {
        emora = 863660;
        eexp = 166;
        e61_70();
    } else if (elv === 71) {
        emora = 991295;
        eexp = 173;
        e71_80();
    } else if (elv === 72) {
        emora = 1021035;
        eexp = 181;
        e71_80();
    } else if (elv === 73) {
        emora = 1051510;
        eexp = 188;
        e71_80();
    } else if (elv === 74) {
        emora = 1082725;
        eexp = 196;
        e71_80();
    } else if (elv === 75) {
        emora = 1114690;
        eexp = 204;
        e71_80();
    } else if (elv === 76) {
        emora = 1147410;
        eexp = 212;
        e71_80();
    } else if (elv === 77) {
        emora = 1180895;
        eexp = 221;
        e71_80();
    } else if (elv === 78) {
        emora = 1215155;
        eexp = 229;
        e71_80();
    } else if (elv === 79) {
        emora = 1250200;
        eexp = 238;
        e71_80();
    } else if (elv === 80) {
        emora = 1286905;
        eexp = 247;
        e71_80();
    } else if (elv === 81) {
        emora = 1443540;
        eexp = 256;
        e81_90();
    } else if (elv === 82) {
        emora = 1486785;
        eexp = 267;
        e81_90();
    } else if (elv === 83) {
        emora = 1535390;
        eexp = 279;
        e81_90();
    } else if (elv === 84) {
        emora = 1590010;
        eexp = 293;
        e81_90();
    } else if (elv === 85) {
        emora = 1651370;
        eexp = 308;
        e81_90();
    } else if (elv === 86) {
        emora = 1720290;
        eexp = 326;
        e81_90();
    } else if (elv === 87) {
        emora = 1797680;
        eexp = 345;
        e81_90();
    } else if (elv === 88) {
        emora = 1884565;
        eexp = 367;
        e81_90();
    } else if (elv === 89) {
        emora = 1982090;
        eexp = 391;
        e81_90();
    } else if (elv === 90) {
        emora = 2092530;
        eexp = 419;
        e81_90();
    };

};

function gem_water() {
    gem1 = water1;
    gem2 = water2;
    gem3 = water3;
    gem4 = water4;
};
function gem_wind() {
    gem1 = wind1;
    gem2 = wind2;
    gem3 = wind3;
    gem4 = wind4;
};
function gem_fire() {
    gem1 = fire1;
    gem2 = fire2;
    gem3 = fire3;
    gem4 = fire4;
};
function gem_ice() {
    gem1 = ice1;
    gem2 = ice2;
    gem3 = ice3;
    gem4 = ice4;
};
function charchange(character){
    console.log(character);
    if (character === "바바라") {
        art = babaraart;
        gathering = g_ph;
        boss = b_wa;
        stuff1 = scroll1;
        stuff2 = scroll2;
        stuff3 = scroll3;
        gem_water();
    } else if (character === "벤티") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    }
    else if (character === "진") {
        art = jean;
        gathering = g_da;
        boss = b_wc;
        stuff1 = mask1;
        stuff2 = mask2;
        stuff3 = mask3;
        gem_wind();
    } else if (character === "소") {
        art = xiao;
        gathering = g_Qi;
        boss = b_dr;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "설탕") {
        art = sucrose;
        gathering = g_wi;
        boss = b_wc;
        stuff1 = nectar1;
        stuff2 = nectar2;
        stuff3 = nectar3;
        gem_wind();
    } else if (character === "카즈하") {
        art = kazuha;
        gathering = g_sg;
        boss = b_ma;
        stuff1 = insignia1;
        stuff2 = insignia2;
        stuff3 = insignia3;
        gem_wind();
    } else if (character === "사유") {
        art = sayu;
        gathering = g_cm;
        boss = b_ma;
        stuff1 = nectar1;
        stuff2 = nectar2;
        stuff3 = nectar3;
        gem_wind();
    } else if (character === "헤이조") {
        art = heizou;
        gathering = g_on;
        boss = b_rf;
        stuff1 = insignia1;
        stuff2 = insignia2;
        stuff3 = insignia3;
        gem_wind();
    } else if (character === "모나") {      //물
        art = mona;
        gathering = g_ph;
        boss = b_wa;
        stuff1 = nectar1;
        stuff2 = nectar2;
        stuff3 = nectar3;
        gem_water();
    } else if (character === "타르탈리아") {
            art = tartaglia;
            gathering = g_st;
            boss = b_wa;
            stuff1 = sinsignia1;
            stuff2 = sinsignia2;
            stuff3 = sinsignia3;
            gem_water();
    } else if (character === "행추") {
        art = xingqiu;
        gathering = g_sf;
        boss = b_wa;
        stuff1 = mask1;
        stuff2 = mask2;
        stuff3 = mask3;
        gem_water();
    } else if (character === "코코미") {
        art = kokomi;
        gathering = g_sp;
        boss = b_drp;
        stuff1 = spectral1;
        stuff2 = spectral2;
        stuff3 = spectral3;
        gem_water();
    } else if (character === "아야토") {
        art = ayato;
        gathering = g_sb;
        boss = b_drp;
        stuff1 = handguard1;
        stuff2 = handguard2;
        stuff3 = handguard3;
        gem_water();
    } else if (character === "야란") {
        art = yelan;
        gathering = g_st;
        boss = b_rf;
        stuff1 = sinsignia1;
        stuff2 = sinsignia2;
        stuff3 = sinsignia3;
        gem_water();
    } else if (character === "닐루") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_water();
    } else if (character === "캔디스") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_water();
    } else if (character === "다이루크") {  //불
        art = diluc;
        gathering = g_slg;
        boss = b_ef;
        stuff1 = sinsignia1;
        stuff2 = sinsignia2;
        stuff3 = sinsignia3;
        gem_fire();
    } else if (character === "클레") {
        art = klee;
        gathering = g_ph;
        boss = b_ef;
        stuff1 = scroll1;
        stuff2 = scroll2;
        stuff3 = scroll3;
        gem_fire();
    } else if (character === "호두") {
        art = hutao;
        gathering = g_sf;
        boss = b_dr;
        stuff1 = nectar1;
        stuff2 = nectar2;
        stuff3 = nectar3;
        gem_fire();
    } else if (character === "베넷") {
        art = bennett;
        gathering = g_wi;
        boss = b_ef;
        stuff1 = insignia1;
        stuff2 = insignia2;
        stuff3 = insignia3;
        gem_fire();
    } else if (character === "향릉") {
        art = xiangling;
        gathering = g_jc;
        boss = b_ef;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_fire();
    } else if (character === "엠버") {
        art = amber;
        gathering = g_slg;
        boss = b_ef;
        stuff1 = arrowhead1;
        stuff2 = arrowhead2;
        stuff3 = arrowhead3;
        gem_fire();
    } else if (character === "신염") {
        art = xinyan;
        gathering = g_vi;
        boss = b_ef;
        stuff1 = insignia1;
        stuff2 = insignia2;
        stuff3 = insignia3;
        gem_fire();
    } else if (character === "연비") {
        art = yanfei;
        gathering = g_nj;
        boss = b_ef;
        stuff1 = insignia1;
        stuff2 = insignia2;
        stuff3 = insignia3;
        gem_fire();
    } else if (character === "요이미야") {
        art = yoimiya;
        gathering = g_nw;
        boss = b_sp;
        stuff1 = scroll1;
        stuff2 = scroll2;
        stuff3 = scroll3;
        gem_fire();
    } else if (character === "토마") {
        art = thoma;
        gathering = g_ff;
        boss = b_sp;
        stuff1 = insignia1;
        stuff2 = insignia2;
        stuff3 = insignia3;
        gem_fire();
    } else if (character === "치치") {  //얼음
        art = qiqi;
        gathering = g_vi;
        boss = b_hc;
        stuff1 = scroll1;
        stuff2 = scroll2;
        stuff3 = scroll3;
        gem_ice();
    } else if (character === "감우") {
        art = ganyu;
        gathering = g_Qi;
        boss = b_hc;
        stuff1 = nectar1;
        stuff2 = nectar2;
        stuff3 = nectar3;
        gem_ice();
    } else if (character === "유라") {
        art = eula;
        gathering = g_da;
        boss = b_cb;
        stuff1 = mask1;
        stuff2 = mask2;
        stuff3 = mask3;
        gem_ice();
    } else if (character === "중운") {
        art = chongyun;
        gathering = g_cl;
        boss = b_hc;
        stuff1 = mask1;
        stuff2 = mask2;
        stuff3 = mask3;
        gem_ice();
    } else if (character === "디오나") {
        art = diona;
        gathering = g_cal;
        boss = b_hc;
        stuff1 = arrowhead1;
        stuff2 = arrowhead2;
        stuff3 = arrowhead3;
        gem_ice();
    } else if (character === "케이아") {
        art = kaeya;
        gathering = g_cal;
        boss = b_hc;
        stuff1 = insignia1;
        stuff2 = insignia2;
        stuff3 = insignia3;
        gem_ice();
    } else if (character === "로자리아") {
        art = rosaria;
        gathering = g_va;
        boss = b_hc;
        stuff1 = sinsignia1;
        stuff2 = sinsignia2;
        stuff3 = sinsignia3;
        gem_ice();
    } else if (character === "아야카") {
        art = ayaka;
        gathering = g_sb;
        boss = b_ph;
        stuff1 = handguard1;
        stuff2 = handguard2;
        stuff3 = handguard3;
        gem_ice();
    } else if (character === "에일로이") {
        art = aloy;
        gathering = g_cm;
        boss = b_cb;
        stuff1 = spectral1;
        stuff2 = spectral2;
        stuff3 = spectral3;
        gem_ice();
    } else if (character === "신학") {
        art = shenhe;
        gathering = g_Qi;
        boss = b_dff;
        stuff1 = nectar1;
        stuff2 = nectar2;
        stuff3 = nectar3;
        gem_ice();
    } else if (character === "각청") {      //번개
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "피슬") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "북두") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "레이저") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "리사") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "라이덴") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "사라") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "미코") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "시노부") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "도리") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "사이노") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "종려") {      //바위
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "알베도") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = scroll1;
        stuff2 = scroll2;
        stuff3 = scroll3;
        gem_wind();
    } else if (character === "응광") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "노엘") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "이토") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "고로") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "운근") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "타이나리") {      //풀
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    } else if (character === "콜레이") {
        art = venti;
        gathering = g_ce;
        boss = b_wc;
        stuff1 = slime1;
        stuff2 = slime2;
        stuff3 = slime3;
        gem_wind();
    }
}
function CharacterCal() {
    const [level, setLevel] = useState({
        startlevel: 1,
        endlevel: 90,
    });
    const [character, setCharacter] = useState("바바라");
    const handleSelectChange = (e) => {
        console.log(e.target.value);
        setCharacter(e.target.value);
        charchange(e.target.value);
    };
    const handleInputChange1 = (e) => {
        if (e.target.value >= 0 && e.target.value <= 90) {
            setLevel({ ...level, [e.target.name]: parseInt(e.target.value) });
            calculator(level.startlevel, level.endlevel);
            if (level.endlevel < level.startlevel) {
                nmora = 0;
                nexp = 0;
                nga = 0;
                nboss = 0;
                nstuff1 = 0;
                nstuff2 = 0;
                nstuff3 = 0;
                ngem1 = 0;
                ngem2 = 0;
                ngem3 = 0;
                ngem4 = 0;
            } else {
                nmora = emora - smora;
                nexp = eexp - sexp;
                nga = ega - sga;
                nboss = eboss - sboss;
                nstuff1 = estuff1 - sstuff1;
                nstuff2 = estuff2 - sstuff2;
                nstuff3 = estuff3 - sstuff3;
                ngem1 = egem1 - sgem1;
                ngem2 = egem2 - sgem2;
                ngem3 = egem3 - sgem3;
                ngem4 = egem4 - sgem4;
            }
        }
    };
    const handleInputChange2 = (e) => {
        if (e.target.value >= 0 && e.target.value <= 90) {
            setLevel({ ...level, [e.target.name]: parseFloat(e.target.value) });
            calculator(level.startlevel, level.endlevel);
            if (level.endlevel < level.startlevel) {
                nmora = 0;
                nexp = 0;
                nga = 0;
                nboss = 0;
                nstuff1 = 0;
                nstuff2 = 0;
                nstuff3 = 0;
                ngem1 = 0;
                ngem2 = 0;
                ngem3 = 0;
                ngem4 = 0;
            } else {
                nmora = emora - smora;
                nexp = eexp - sexp;
                nga = ega - sga;
                nboss = eboss - sboss;
                nstuff1 = estuff1 - sstuff1;
                nstuff2 = estuff2 - sstuff2;
                nstuff3 = estuff3 - sstuff3;
                ngem1 = egem1 - sgem1;
                ngem2 = egem2 - sgem2;
                ngem3 = egem3 - sgem3;
                ngem4 = egem4 - sgem4;
            }
        }
    };

    return (
        <div className="CCdiv">
            <div className="CCLeftdiv">
                <img src={art} className="CCimg" alt="img"></img>
            </div>
            <div className="CCRightdiv">
                <div>
                <h1 style={{ marginTop:"-5px", fontSize: "40px", color: "#B1B2FF" }}>육성 계산기</h1>
                    <select id="Char" onChange={handleSelectChange} value={character} className="ccselect">
                        <optgroup label="바람">
                            <option value="벤티">벤티</option>
                            <option value="진">진</option>
                            <option value="소">소</option>
                            <option value="설탕">설탕</option>
                            <option value="카즈하">카에데하라 카즈하</option>
                            <option value="사유">사유</option>
                            <option value="헤이조">시카노인 헤이조</option>
                        </optgroup>
                        <optgroup label="물">
                            <option value="타르탈리아">타르탈리아</option>
                            <option value="모나">모나</option>
                            <option value="행추">행추</option>
                            <option value="바바라">바바라</option>
                            <option value="코코미">산고노미야 코코미</option>
                            <option value="아야토">카미사토 아야토</option>
                            <option value="야란">야란</option>
                            <option value="닐루">닐루</option>
                            <option value="캔디스">캔디스</option>
                        </optgroup>
                        <optgroup label="불">
                            <option value="다이루크">다이루크</option>
                            <option value="클레">클레</option>
                            <option value="호두">호두</option>
                            <option value="베넷">베넷</option>
                            <option value="향릉">향릉</option>
                            <option value="엠버">엠버</option>
                            <option value="신염">신염</option>
                            <option value="연비">연비</option>
                            <option value="요이미야">요이미야</option>
                            <option value="토마">토마</option>
                        </optgroup>
                        <optgroup label="얼음">
                            <option value="치치">치치</option>
                            <option value="감우">감우</option>
                            <option value="유라">유라</option>
                            <option value="중운">중운</option>
                            <option value="디오나">디오나</option>
                            <option value="케이아">케이아</option>
                            <option value="로자리아">로자리아</option>
                            <option value="아야카">카미사토 아야카</option>
                            <option value="에일로이">에일로이</option>
                            <option value="신학">신학</option>
                        </optgroup>
                        <optgroup label="번개">
                            <option value="각청">각청</option>
                            <option value="피슬">피슬</option>
                            <option value="북두">북두</option>
                            <option value="레이저">레이저</option>
                            <option value="리사">리사</option>
                            <option value="라이덴">라이덴 쇼군</option>
                            <option value="사라">쿠죠 사라</option>
                            <option value="미코">야에 미코</option>
                            <option value="시노부">쿠키 시노부</option>
                            <option value="도리">도리</option>
                            <option value="사이노">사이노</option>
                        </optgroup>
                        <optgroup label="바위">
                            <option value="종려">종려</option>
                            <option value="알베도">알베도</option>
                            <option value="응광">응광</option>
                            <option value="노엘">노엘</option>
                            <option value="이토">아라타키 이토</option>
                            <option value="고로">고로</option>
                            <option value="운근">운근</option>
                        </optgroup>
                        <optgroup label="풀">
                            <option value="타이나리">타이나리</option>
                            <option value="콜레이">콜레이</option>
                        </optgroup>
                    </select>
                </div>
                <div className="CCLevels">
                    <p className="cccP">레벨: </p>
                    <input type='number' className="cclevel" name="startlevel" onChange={handleInputChange1} onKeyPress={handleInputChange1} value={level.startlevel} />
                    <p className="cccP"> - </p>
                    <input type='number' className="cclevel" name="endlevel" onChange={handleInputChange2} onKeyPress={handleInputChange2} value={level.endlevel} />
                </div>
                <div className="CCLevelup">
                    <div>
                        <img src={mora} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{nmora}</p>
                    </div>
                    <div>
                        <img src={expbook} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{nexp}</p>
                    </div>
                    <div>
                        <img src={gathering} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{nga}</p>
                    </div>
                    <div>
                        <img src={boss} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{nboss}</p>
                    </div>
                </div>
                <div className="CCLevelup">
                    <div>
                        <img src={gem1} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{ngem1}</p>
                    </div>
                    <div>
                        <img src={gem2} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{ngem2}</p>
                    </div>
                    <div>
                        <img src={gem3} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{ngem3}</p>
                    </div>
                    <div>
                        <img src={gem4} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{ngem4}</p>
                    </div>
                </div>
                <div className="CCLevelup">
                    <div>
                        <img src={stuff1} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{nstuff1}</p>
                    </div>
                    <div>
                        <img src={stuff2} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{nstuff2}</p>
                    </div>
                    <div>
                        <img src={stuff3} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{nstuff3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CharacterCal;