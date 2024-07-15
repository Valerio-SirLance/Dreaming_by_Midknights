gdjs.IntroductionCode = {};
gdjs.IntroductionCode.forEachCount0_3 = 0;

gdjs.IntroductionCode.forEachCount1_3 = 0;

gdjs.IntroductionCode.forEachCount2_3 = 0;

gdjs.IntroductionCode.forEachIndex3 = 0;

gdjs.IntroductionCode.forEachObjects3 = [];

gdjs.IntroductionCode.forEachTotalCount3 = 0;

gdjs.IntroductionCode.GDCongratsObjects1= [];
gdjs.IntroductionCode.GDCongratsObjects2= [];
gdjs.IntroductionCode.GDCongratsObjects3= [];
gdjs.IntroductionCode.GDWinTimeObjects1= [];
gdjs.IntroductionCode.GDWinTimeObjects2= [];
gdjs.IntroductionCode.GDWinTimeObjects3= [];
gdjs.IntroductionCode.GDNextStepsObjects1= [];
gdjs.IntroductionCode.GDNextStepsObjects2= [];
gdjs.IntroductionCode.GDNextStepsObjects3= [];
gdjs.IntroductionCode.GDFadeObjectObjects1= [];
gdjs.IntroductionCode.GDFadeObjectObjects2= [];
gdjs.IntroductionCode.GDFadeObjectObjects3= [];
gdjs.IntroductionCode.GDintroObjects1= [];
gdjs.IntroductionCode.GDintroObjects2= [];
gdjs.IntroductionCode.GDintroObjects3= [];
gdjs.IntroductionCode.GDskipObjects1= [];
gdjs.IntroductionCode.GDskipObjects2= [];
gdjs.IntroductionCode.GDskipObjects3= [];
gdjs.IntroductionCode.GDskipbuttonObjects1= [];
gdjs.IntroductionCode.GDskipbuttonObjects2= [];
gdjs.IntroductionCode.GDskipbuttonObjects3= [];


gdjs.IntroductionCode.eventsList0 = function(runtimeScene) {

};gdjs.IntroductionCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Congrats"), gdjs.IntroductionCode.GDCongratsObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextSteps"), gdjs.IntroductionCode.GDNextStepsObjects2);
gdjs.copyArray(runtimeScene.getObjects("WinTime"), gdjs.IntroductionCode.GDWinTimeObjects2);

gdjs.IntroductionCode.forEachTotalCount3 = 0;
gdjs.IntroductionCode.forEachObjects3.length = 0;
gdjs.IntroductionCode.forEachCount0_3 = gdjs.IntroductionCode.GDCongratsObjects2.length;
gdjs.IntroductionCode.forEachTotalCount3 += gdjs.IntroductionCode.forEachCount0_3;
gdjs.IntroductionCode.forEachObjects3.push.apply(gdjs.IntroductionCode.forEachObjects3,gdjs.IntroductionCode.GDCongratsObjects2);
gdjs.IntroductionCode.forEachCount1_3 = gdjs.IntroductionCode.GDWinTimeObjects2.length;
gdjs.IntroductionCode.forEachTotalCount3 += gdjs.IntroductionCode.forEachCount1_3;
gdjs.IntroductionCode.forEachObjects3.push.apply(gdjs.IntroductionCode.forEachObjects3,gdjs.IntroductionCode.GDWinTimeObjects2);
gdjs.IntroductionCode.forEachCount2_3 = gdjs.IntroductionCode.GDNextStepsObjects2.length;
gdjs.IntroductionCode.forEachTotalCount3 += gdjs.IntroductionCode.forEachCount2_3;
gdjs.IntroductionCode.forEachObjects3.push.apply(gdjs.IntroductionCode.forEachObjects3,gdjs.IntroductionCode.GDNextStepsObjects2);
for (gdjs.IntroductionCode.forEachIndex3 = 0;gdjs.IntroductionCode.forEachIndex3 < gdjs.IntroductionCode.forEachTotalCount3;++gdjs.IntroductionCode.forEachIndex3) {
gdjs.copyArray(gdjs.IntroductionCode.GDintroObjects1, gdjs.IntroductionCode.GDintroObjects3);

gdjs.IntroductionCode.GDCongratsObjects3.length = 0;

gdjs.IntroductionCode.GDNextStepsObjects3.length = 0;

gdjs.IntroductionCode.GDWinTimeObjects3.length = 0;


if (gdjs.IntroductionCode.forEachIndex3 < gdjs.IntroductionCode.forEachCount0_3) {
    gdjs.IntroductionCode.GDCongratsObjects3.push(gdjs.IntroductionCode.forEachObjects3[gdjs.IntroductionCode.forEachIndex3]);
}
else if (gdjs.IntroductionCode.forEachIndex3 < gdjs.IntroductionCode.forEachCount0_3+gdjs.IntroductionCode.forEachCount1_3) {
    gdjs.IntroductionCode.GDWinTimeObjects3.push(gdjs.IntroductionCode.forEachObjects3[gdjs.IntroductionCode.forEachIndex3]);
}
else if (gdjs.IntroductionCode.forEachIndex3 < gdjs.IntroductionCode.forEachCount0_3+gdjs.IntroductionCode.forEachCount1_3+gdjs.IntroductionCode.forEachCount2_3) {
    gdjs.IntroductionCode.GDNextStepsObjects3.push(gdjs.IntroductionCode.forEachObjects3[gdjs.IntroductionCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.IntroductionCode.GDintroObjects3.length ;i < len;++i) {
    gdjs.IntroductionCode.GDintroObjects3[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - ((( gdjs.IntroductionCode.GDNextStepsObjects3.length === 0 ) ? (( gdjs.IntroductionCode.GDWinTimeObjects3.length === 0 ) ? (( gdjs.IntroductionCode.GDCongratsObjects3.length === 0 ) ? 0 :gdjs.IntroductionCode.GDCongratsObjects3[0].getWidth()) :gdjs.IntroductionCode.GDWinTimeObjects3[0].getWidth()) :gdjs.IntroductionCode.GDNextStepsObjects3[0].getWidth()) / 2));
}
}}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.IntroductionCode.GDFadeObjectObjects2);
{for(var i = 0, len = gdjs.IntroductionCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.IntroductionCode.GDFadeObjectObjects2[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.IntroductionCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.IntroductionCode.GDFadeObjectObjects2[i].setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.IntroductionCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.IntroductionCode.GDFadeObjectObjects2[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.IntroductionCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.IntroductionCode.GDFadeObjectObjects2[i].getBehavior("Tween").addObjectOpacityTween("SceneFadeIn", 0, "linear", 500, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.IntroductionCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.IntroductionCode.GDintroObjects1);
gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.IntroductionCode.GDskipObjects1);
{for(var i = 0, len = gdjs.IntroductionCode.GDintroObjects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDintroObjects1[i].play();
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 100);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Starting Screen & Story Introduction.mp3", 88, false, 100, 1);
}{for(var i = 0, len = gdjs.IntroductionCode.GDskipObjects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDskipObjects1[i].hide();
}
}
{ //Subevents
gdjs.IntroductionCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.IntroductionCode.GDFadeObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.IntroductionCode.GDskipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroductionCode.GDskipObjects1.length;i<l;++i) {
    if ( gdjs.IntroductionCode.GDskipObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroductionCode.GDskipObjects1[k] = gdjs.IntroductionCode.GDskipObjects1[i];
        ++k;
    }
}
gdjs.IntroductionCode.GDskipObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroductionCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.IntroductionCode.GDFadeObjectObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.IntroductionCode.GDFadeObjectObjects1[k] = gdjs.IntroductionCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.IntroductionCode.GDFadeObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroductionCode.GDFadeObjectObjects1 */
{for(var i = 0, len = gdjs.IntroductionCode.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDFadeObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 255, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.IntroductionCode.GDFadeObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.IntroductionCode.GDintroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroductionCode.GDintroObjects1.length;i<l;++i) {
    if ( gdjs.IntroductionCode.GDintroObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.IntroductionCode.GDintroObjects1[k] = gdjs.IntroductionCode.GDintroObjects1[i];
        ++k;
    }
}
gdjs.IntroductionCode.GDintroObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroductionCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.IntroductionCode.GDFadeObjectObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.IntroductionCode.GDFadeObjectObjects1[k] = gdjs.IntroductionCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.IntroductionCode.GDFadeObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroductionCode.GDFadeObjectObjects1 */
{for(var i = 0, len = gdjs.IntroductionCode.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDFadeObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 255, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.IntroductionCode.GDFadeObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroductionCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.IntroductionCode.GDFadeObjectObjects1[i].getBehavior("Tween").hasFinished("FadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.IntroductionCode.GDFadeObjectObjects1[k] = gdjs.IntroductionCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.IntroductionCode.GDFadeObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24433892);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleCard1", false);
}}

}


};

gdjs.IntroductionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroductionCode.GDCongratsObjects1.length = 0;
gdjs.IntroductionCode.GDCongratsObjects2.length = 0;
gdjs.IntroductionCode.GDCongratsObjects3.length = 0;
gdjs.IntroductionCode.GDWinTimeObjects1.length = 0;
gdjs.IntroductionCode.GDWinTimeObjects2.length = 0;
gdjs.IntroductionCode.GDWinTimeObjects3.length = 0;
gdjs.IntroductionCode.GDNextStepsObjects1.length = 0;
gdjs.IntroductionCode.GDNextStepsObjects2.length = 0;
gdjs.IntroductionCode.GDNextStepsObjects3.length = 0;
gdjs.IntroductionCode.GDFadeObjectObjects1.length = 0;
gdjs.IntroductionCode.GDFadeObjectObjects2.length = 0;
gdjs.IntroductionCode.GDFadeObjectObjects3.length = 0;
gdjs.IntroductionCode.GDintroObjects1.length = 0;
gdjs.IntroductionCode.GDintroObjects2.length = 0;
gdjs.IntroductionCode.GDintroObjects3.length = 0;
gdjs.IntroductionCode.GDskipObjects1.length = 0;
gdjs.IntroductionCode.GDskipObjects2.length = 0;
gdjs.IntroductionCode.GDskipObjects3.length = 0;
gdjs.IntroductionCode.GDskipbuttonObjects1.length = 0;
gdjs.IntroductionCode.GDskipbuttonObjects2.length = 0;
gdjs.IntroductionCode.GDskipbuttonObjects3.length = 0;

gdjs.IntroductionCode.eventsList2(runtimeScene);

return;

}

gdjs['IntroductionCode'] = gdjs.IntroductionCode;
