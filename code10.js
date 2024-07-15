gdjs.ConclusionCode = {};
gdjs.ConclusionCode.forEachCount0_3 = 0;

gdjs.ConclusionCode.forEachCount1_3 = 0;

gdjs.ConclusionCode.forEachCount2_3 = 0;

gdjs.ConclusionCode.forEachIndex3 = 0;

gdjs.ConclusionCode.forEachObjects3 = [];

gdjs.ConclusionCode.forEachTotalCount3 = 0;

gdjs.ConclusionCode.GDCongratsObjects1= [];
gdjs.ConclusionCode.GDCongratsObjects2= [];
gdjs.ConclusionCode.GDCongratsObjects3= [];
gdjs.ConclusionCode.GDWinTimeObjects1= [];
gdjs.ConclusionCode.GDWinTimeObjects2= [];
gdjs.ConclusionCode.GDWinTimeObjects3= [];
gdjs.ConclusionCode.GDNextStepsObjects1= [];
gdjs.ConclusionCode.GDNextStepsObjects2= [];
gdjs.ConclusionCode.GDNextStepsObjects3= [];
gdjs.ConclusionCode.GDFadeObjectObjects1= [];
gdjs.ConclusionCode.GDFadeObjectObjects2= [];
gdjs.ConclusionCode.GDFadeObjectObjects3= [];
gdjs.ConclusionCode.GDintroObjects1= [];
gdjs.ConclusionCode.GDintroObjects2= [];
gdjs.ConclusionCode.GDintroObjects3= [];
gdjs.ConclusionCode.GDskipObjects1= [];
gdjs.ConclusionCode.GDskipObjects2= [];
gdjs.ConclusionCode.GDskipObjects3= [];
gdjs.ConclusionCode.GDskipbuttonObjects1= [];
gdjs.ConclusionCode.GDskipbuttonObjects2= [];
gdjs.ConclusionCode.GDskipbuttonObjects3= [];


gdjs.ConclusionCode.eventsList0 = function(runtimeScene) {

};gdjs.ConclusionCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Congrats"), gdjs.ConclusionCode.GDCongratsObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextSteps"), gdjs.ConclusionCode.GDNextStepsObjects2);
gdjs.copyArray(runtimeScene.getObjects("WinTime"), gdjs.ConclusionCode.GDWinTimeObjects2);

gdjs.ConclusionCode.forEachTotalCount3 = 0;
gdjs.ConclusionCode.forEachObjects3.length = 0;
gdjs.ConclusionCode.forEachCount0_3 = gdjs.ConclusionCode.GDCongratsObjects2.length;
gdjs.ConclusionCode.forEachTotalCount3 += gdjs.ConclusionCode.forEachCount0_3;
gdjs.ConclusionCode.forEachObjects3.push.apply(gdjs.ConclusionCode.forEachObjects3,gdjs.ConclusionCode.GDCongratsObjects2);
gdjs.ConclusionCode.forEachCount1_3 = gdjs.ConclusionCode.GDWinTimeObjects2.length;
gdjs.ConclusionCode.forEachTotalCount3 += gdjs.ConclusionCode.forEachCount1_3;
gdjs.ConclusionCode.forEachObjects3.push.apply(gdjs.ConclusionCode.forEachObjects3,gdjs.ConclusionCode.GDWinTimeObjects2);
gdjs.ConclusionCode.forEachCount2_3 = gdjs.ConclusionCode.GDNextStepsObjects2.length;
gdjs.ConclusionCode.forEachTotalCount3 += gdjs.ConclusionCode.forEachCount2_3;
gdjs.ConclusionCode.forEachObjects3.push.apply(gdjs.ConclusionCode.forEachObjects3,gdjs.ConclusionCode.GDNextStepsObjects2);
for (gdjs.ConclusionCode.forEachIndex3 = 0;gdjs.ConclusionCode.forEachIndex3 < gdjs.ConclusionCode.forEachTotalCount3;++gdjs.ConclusionCode.forEachIndex3) {
gdjs.copyArray(gdjs.ConclusionCode.GDintroObjects1, gdjs.ConclusionCode.GDintroObjects3);

gdjs.ConclusionCode.GDCongratsObjects3.length = 0;

gdjs.ConclusionCode.GDNextStepsObjects3.length = 0;

gdjs.ConclusionCode.GDWinTimeObjects3.length = 0;


if (gdjs.ConclusionCode.forEachIndex3 < gdjs.ConclusionCode.forEachCount0_3) {
    gdjs.ConclusionCode.GDCongratsObjects3.push(gdjs.ConclusionCode.forEachObjects3[gdjs.ConclusionCode.forEachIndex3]);
}
else if (gdjs.ConclusionCode.forEachIndex3 < gdjs.ConclusionCode.forEachCount0_3+gdjs.ConclusionCode.forEachCount1_3) {
    gdjs.ConclusionCode.GDWinTimeObjects3.push(gdjs.ConclusionCode.forEachObjects3[gdjs.ConclusionCode.forEachIndex3]);
}
else if (gdjs.ConclusionCode.forEachIndex3 < gdjs.ConclusionCode.forEachCount0_3+gdjs.ConclusionCode.forEachCount1_3+gdjs.ConclusionCode.forEachCount2_3) {
    gdjs.ConclusionCode.GDNextStepsObjects3.push(gdjs.ConclusionCode.forEachObjects3[gdjs.ConclusionCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.ConclusionCode.GDintroObjects3.length ;i < len;++i) {
    gdjs.ConclusionCode.GDintroObjects3[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - ((( gdjs.ConclusionCode.GDNextStepsObjects3.length === 0 ) ? (( gdjs.ConclusionCode.GDWinTimeObjects3.length === 0 ) ? (( gdjs.ConclusionCode.GDCongratsObjects3.length === 0 ) ? 0 :gdjs.ConclusionCode.GDCongratsObjects3[0].getWidth()) :gdjs.ConclusionCode.GDWinTimeObjects3[0].getWidth()) :gdjs.ConclusionCode.GDNextStepsObjects3[0].getWidth()) / 2));
}
}}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.ConclusionCode.GDFadeObjectObjects2);
{for(var i = 0, len = gdjs.ConclusionCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.ConclusionCode.GDFadeObjectObjects2[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.ConclusionCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.ConclusionCode.GDFadeObjectObjects2[i].setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.ConclusionCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.ConclusionCode.GDFadeObjectObjects2[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.ConclusionCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.ConclusionCode.GDFadeObjectObjects2[i].getBehavior("Tween").addObjectOpacityTween("SceneFadeIn", 0, "linear", 500, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.ConclusionCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.ConclusionCode.GDintroObjects1);
gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.ConclusionCode.GDskipObjects1);
{for(var i = 0, len = gdjs.ConclusionCode.GDintroObjects1.length ;i < len;++i) {
    gdjs.ConclusionCode.GDintroObjects1[i].play();
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 100);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Conclusion & Credits.mp3", 88, false, 100, 1);
}{for(var i = 0, len = gdjs.ConclusionCode.GDskipObjects1.length ;i < len;++i) {
    gdjs.ConclusionCode.GDskipObjects1[i].hide();
}
}
{ //Subevents
gdjs.ConclusionCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.ConclusionCode.GDFadeObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.ConclusionCode.GDskipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConclusionCode.GDskipObjects1.length;i<l;++i) {
    if ( gdjs.ConclusionCode.GDskipObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ConclusionCode.GDskipObjects1[k] = gdjs.ConclusionCode.GDskipObjects1[i];
        ++k;
    }
}
gdjs.ConclusionCode.GDskipObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConclusionCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.ConclusionCode.GDFadeObjectObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ConclusionCode.GDFadeObjectObjects1[k] = gdjs.ConclusionCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.ConclusionCode.GDFadeObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ConclusionCode.GDFadeObjectObjects1 */
{for(var i = 0, len = gdjs.ConclusionCode.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.ConclusionCode.GDFadeObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 255, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.ConclusionCode.GDFadeObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.ConclusionCode.GDintroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConclusionCode.GDintroObjects1.length;i<l;++i) {
    if ( gdjs.ConclusionCode.GDintroObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.ConclusionCode.GDintroObjects1[k] = gdjs.ConclusionCode.GDintroObjects1[i];
        ++k;
    }
}
gdjs.ConclusionCode.GDintroObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConclusionCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.ConclusionCode.GDFadeObjectObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ConclusionCode.GDFadeObjectObjects1[k] = gdjs.ConclusionCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.ConclusionCode.GDFadeObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ConclusionCode.GDFadeObjectObjects1 */
{for(var i = 0, len = gdjs.ConclusionCode.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.ConclusionCode.GDFadeObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 255, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.ConclusionCode.GDFadeObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConclusionCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.ConclusionCode.GDFadeObjectObjects1[i].getBehavior("Tween").hasFinished("FadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.ConclusionCode.GDFadeObjectObjects1[k] = gdjs.ConclusionCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.ConclusionCode.GDFadeObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26319284);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}}

}


};

gdjs.ConclusionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConclusionCode.GDCongratsObjects1.length = 0;
gdjs.ConclusionCode.GDCongratsObjects2.length = 0;
gdjs.ConclusionCode.GDCongratsObjects3.length = 0;
gdjs.ConclusionCode.GDWinTimeObjects1.length = 0;
gdjs.ConclusionCode.GDWinTimeObjects2.length = 0;
gdjs.ConclusionCode.GDWinTimeObjects3.length = 0;
gdjs.ConclusionCode.GDNextStepsObjects1.length = 0;
gdjs.ConclusionCode.GDNextStepsObjects2.length = 0;
gdjs.ConclusionCode.GDNextStepsObjects3.length = 0;
gdjs.ConclusionCode.GDFadeObjectObjects1.length = 0;
gdjs.ConclusionCode.GDFadeObjectObjects2.length = 0;
gdjs.ConclusionCode.GDFadeObjectObjects3.length = 0;
gdjs.ConclusionCode.GDintroObjects1.length = 0;
gdjs.ConclusionCode.GDintroObjects2.length = 0;
gdjs.ConclusionCode.GDintroObjects3.length = 0;
gdjs.ConclusionCode.GDskipObjects1.length = 0;
gdjs.ConclusionCode.GDskipObjects2.length = 0;
gdjs.ConclusionCode.GDskipObjects3.length = 0;
gdjs.ConclusionCode.GDskipbuttonObjects1.length = 0;
gdjs.ConclusionCode.GDskipbuttonObjects2.length = 0;
gdjs.ConclusionCode.GDskipbuttonObjects3.length = 0;

gdjs.ConclusionCode.eventsList2(runtimeScene);

return;

}

gdjs['ConclusionCode'] = gdjs.ConclusionCode;
