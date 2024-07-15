gdjs.TitleCard2Code = {};
gdjs.TitleCard2Code.GDBitmapTitleObjects1= [];
gdjs.TitleCard2Code.GDBitmapTitleObjects2= [];
gdjs.TitleCard2Code.GDBitmapTitleObjects3= [];
gdjs.TitleCard2Code.GDBitmapMenuExitObjects1= [];
gdjs.TitleCard2Code.GDBitmapMenuExitObjects2= [];
gdjs.TitleCard2Code.GDBitmapMenuExitObjects3= [];
gdjs.TitleCard2Code.GDBitmapMenuCreditsObjects1= [];
gdjs.TitleCard2Code.GDBitmapMenuCreditsObjects2= [];
gdjs.TitleCard2Code.GDBitmapMenuCreditsObjects3= [];
gdjs.TitleCard2Code.GDBitmapMenuStartObjects1= [];
gdjs.TitleCard2Code.GDBitmapMenuStartObjects2= [];
gdjs.TitleCard2Code.GDBitmapMenuStartObjects3= [];
gdjs.TitleCard2Code.GDMenuBorderObjects1= [];
gdjs.TitleCard2Code.GDMenuBorderObjects2= [];
gdjs.TitleCard2Code.GDMenuBorderObjects3= [];
gdjs.TitleCard2Code.GDMenuSelectorObjects1= [];
gdjs.TitleCard2Code.GDMenuSelectorObjects2= [];
gdjs.TitleCard2Code.GDMenuSelectorObjects3= [];
gdjs.TitleCard2Code.GDTitleBG1Objects1= [];
gdjs.TitleCard2Code.GDTitleBG1Objects2= [];
gdjs.TitleCard2Code.GDTitleBG1Objects3= [];
gdjs.TitleCard2Code.GDFadeObjectObjects1= [];
gdjs.TitleCard2Code.GDFadeObjectObjects2= [];
gdjs.TitleCard2Code.GDFadeObjectObjects3= [];
gdjs.TitleCard2Code.GDKeyboardControlsObjects1= [];
gdjs.TitleCard2Code.GDKeyboardControlsObjects2= [];
gdjs.TitleCard2Code.GDKeyboardControlsObjects3= [];
gdjs.TitleCard2Code.GDGamepadControlsObjects1= [];
gdjs.TitleCard2Code.GDGamepadControlsObjects2= [];
gdjs.TitleCard2Code.GDGamepadControlsObjects3= [];
gdjs.TitleCard2Code.GDJumpAttackObjects1= [];
gdjs.TitleCard2Code.GDJumpAttackObjects2= [];
gdjs.TitleCard2Code.GDJumpAttackObjects3= [];
gdjs.TitleCard2Code.GDBGupObjects1= [];
gdjs.TitleCard2Code.GDBGupObjects2= [];
gdjs.TitleCard2Code.GDBGupObjects3= [];
gdjs.TitleCard2Code.GDgroundObjects1= [];
gdjs.TitleCard2Code.GDgroundObjects2= [];
gdjs.TitleCard2Code.GDgroundObjects3= [];
gdjs.TitleCard2Code.GDfirefliesaboveObjects1= [];
gdjs.TitleCard2Code.GDfirefliesaboveObjects2= [];
gdjs.TitleCard2Code.GDfirefliesaboveObjects3= [];
gdjs.TitleCard2Code.GDfirefliesbelowObjects1= [];
gdjs.TitleCard2Code.GDfirefliesbelowObjects2= [];
gdjs.TitleCard2Code.GDfirefliesbelowObjects3= [];
gdjs.TitleCard2Code.GDBGbelowObjects1= [];
gdjs.TitleCard2Code.GDBGbelowObjects2= [];
gdjs.TitleCard2Code.GDBGbelowObjects3= [];
gdjs.TitleCard2Code.GDLOGOObjects1= [];
gdjs.TitleCard2Code.GDLOGOObjects2= [];
gdjs.TitleCard2Code.GDLOGOObjects3= [];
gdjs.TitleCard2Code.GDwordObjects1= [];
gdjs.TitleCard2Code.GDwordObjects2= [];
gdjs.TitleCard2Code.GDwordObjects3= [];
gdjs.TitleCard2Code.GDStartBObjects1= [];
gdjs.TitleCard2Code.GDStartBObjects2= [];
gdjs.TitleCard2Code.GDStartBObjects3= [];
gdjs.TitleCard2Code.GDOptionsBObjects1= [];
gdjs.TitleCard2Code.GDOptionsBObjects2= [];
gdjs.TitleCard2Code.GDOptionsBObjects3= [];
gdjs.TitleCard2Code.GDExitBObjects1= [];
gdjs.TitleCard2Code.GDExitBObjects2= [];
gdjs.TitleCard2Code.GDExitBObjects3= [];
gdjs.TitleCard2Code.GDTitleCard1Objects1= [];
gdjs.TitleCard2Code.GDTitleCard1Objects2= [];
gdjs.TitleCard2Code.GDTitleCard1Objects3= [];


gdjs.TitleCard2Code.eventsList0 = function(runtimeScene) {

};gdjs.TitleCard2Code.eventsList1 = function(runtimeScene) {

{


gdjs.TitleCard2Code.eventsList0(runtimeScene);
}


};gdjs.TitleCard2Code.eventsList2 = function(runtimeScene) {

{



}


{



}


{



}


};gdjs.TitleCard2Code.eventsList3 = function(runtimeScene) {

{



}


{



}


};gdjs.TitleCard2Code.eventsList4 = function(runtimeScene) {

{


gdjs.TitleCard2Code.eventsList2(runtimeScene);
}


{


gdjs.TitleCard2Code.eventsList3(runtimeScene);
}


};gdjs.TitleCard2Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BGbelow"), gdjs.TitleCard2Code.GDBGbelowObjects1);
gdjs.copyArray(runtimeScene.getObjects("BGup"), gdjs.TitleCard2Code.GDBGupObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefliesabove"), gdjs.TitleCard2Code.GDfirefliesaboveObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefliesbelow"), gdjs.TitleCard2Code.GDfirefliesbelowObjects1);
gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.TitleCard2Code.GDgroundObjects1);
{for(var i = 0, len = gdjs.TitleCard2Code.GDBGbelowObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDBGbelowObjects1[i].setXOffset(gdjs.TitleCard2Code.GDBGbelowObjects1[i].getXOffset() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCard2Code.GDfirefliesbelowObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDfirefliesbelowObjects1[i].setXOffset(gdjs.TitleCard2Code.GDfirefliesbelowObjects1[i].getXOffset() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCard2Code.GDfirefliesbelowObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDfirefliesbelowObjects1[i].getBehavior("Flash").Flash(600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleCard2Code.GDBGupObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDBGupObjects1[i].setXOffset(gdjs.TitleCard2Code.GDBGupObjects1[i].getXOffset() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCard2Code.GDfirefliesaboveObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDfirefliesaboveObjects1[i].setXOffset(gdjs.TitleCard2Code.GDfirefliesaboveObjects1[i].getXOffset() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCard2Code.GDfirefliesaboveObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDfirefliesaboveObjects1[i].getBehavior("Flash").Flash(600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleCard2Code.GDgroundObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDgroundObjects1[i].setXOffset(gdjs.TitleCard2Code.GDgroundObjects1[i].getXOffset() + (60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.TitleCard2Code.eventsList6 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCard2Code.GDFadeObjectObjects1);
{for(var i = 0, len = gdjs.TitleCard2Code.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDFadeObjectObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.TitleCard2Code.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDFadeObjectObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.TitleCard2Code.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDFadeObjectObjects1[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.TitleCard2Code.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDFadeObjectObjects1[i].setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Title Cards.mp3", 78, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCard2Code.GDFadeObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCard2Code.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.TitleCard2Code.GDFadeObjectObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TitleCard2Code.GDFadeObjectObjects1[k] = gdjs.TitleCard2Code.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.TitleCard2Code.GDFadeObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 78);
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCard2Code.GDFadeObjectObjects1 */
{for(var i = 0, len = gdjs.TitleCard2Code.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.TitleCard2Code.GDFadeObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 255, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCard2Code.GDFadeObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCard2Code.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.TitleCard2Code.GDFadeObjectObjects1[i].getBehavior("Tween").hasFinished("FadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.TitleCard2Code.GDFadeObjectObjects1[k] = gdjs.TitleCard2Code.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.TitleCard2Code.GDFadeObjectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Graveyard of Hopes and Dreams (Main)", false);
}}

}


{


gdjs.TitleCard2Code.eventsList1(runtimeScene);
}


{



}


{


gdjs.TitleCard2Code.eventsList4(runtimeScene);
}


{


gdjs.TitleCard2Code.eventsList5(runtimeScene);
}


};

gdjs.TitleCard2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCard2Code.GDBitmapTitleObjects1.length = 0;
gdjs.TitleCard2Code.GDBitmapTitleObjects2.length = 0;
gdjs.TitleCard2Code.GDBitmapTitleObjects3.length = 0;
gdjs.TitleCard2Code.GDBitmapMenuExitObjects1.length = 0;
gdjs.TitleCard2Code.GDBitmapMenuExitObjects2.length = 0;
gdjs.TitleCard2Code.GDBitmapMenuExitObjects3.length = 0;
gdjs.TitleCard2Code.GDBitmapMenuCreditsObjects1.length = 0;
gdjs.TitleCard2Code.GDBitmapMenuCreditsObjects2.length = 0;
gdjs.TitleCard2Code.GDBitmapMenuCreditsObjects3.length = 0;
gdjs.TitleCard2Code.GDBitmapMenuStartObjects1.length = 0;
gdjs.TitleCard2Code.GDBitmapMenuStartObjects2.length = 0;
gdjs.TitleCard2Code.GDBitmapMenuStartObjects3.length = 0;
gdjs.TitleCard2Code.GDMenuBorderObjects1.length = 0;
gdjs.TitleCard2Code.GDMenuBorderObjects2.length = 0;
gdjs.TitleCard2Code.GDMenuBorderObjects3.length = 0;
gdjs.TitleCard2Code.GDMenuSelectorObjects1.length = 0;
gdjs.TitleCard2Code.GDMenuSelectorObjects2.length = 0;
gdjs.TitleCard2Code.GDMenuSelectorObjects3.length = 0;
gdjs.TitleCard2Code.GDTitleBG1Objects1.length = 0;
gdjs.TitleCard2Code.GDTitleBG1Objects2.length = 0;
gdjs.TitleCard2Code.GDTitleBG1Objects3.length = 0;
gdjs.TitleCard2Code.GDFadeObjectObjects1.length = 0;
gdjs.TitleCard2Code.GDFadeObjectObjects2.length = 0;
gdjs.TitleCard2Code.GDFadeObjectObjects3.length = 0;
gdjs.TitleCard2Code.GDKeyboardControlsObjects1.length = 0;
gdjs.TitleCard2Code.GDKeyboardControlsObjects2.length = 0;
gdjs.TitleCard2Code.GDKeyboardControlsObjects3.length = 0;
gdjs.TitleCard2Code.GDGamepadControlsObjects1.length = 0;
gdjs.TitleCard2Code.GDGamepadControlsObjects2.length = 0;
gdjs.TitleCard2Code.GDGamepadControlsObjects3.length = 0;
gdjs.TitleCard2Code.GDJumpAttackObjects1.length = 0;
gdjs.TitleCard2Code.GDJumpAttackObjects2.length = 0;
gdjs.TitleCard2Code.GDJumpAttackObjects3.length = 0;
gdjs.TitleCard2Code.GDBGupObjects1.length = 0;
gdjs.TitleCard2Code.GDBGupObjects2.length = 0;
gdjs.TitleCard2Code.GDBGupObjects3.length = 0;
gdjs.TitleCard2Code.GDgroundObjects1.length = 0;
gdjs.TitleCard2Code.GDgroundObjects2.length = 0;
gdjs.TitleCard2Code.GDgroundObjects3.length = 0;
gdjs.TitleCard2Code.GDfirefliesaboveObjects1.length = 0;
gdjs.TitleCard2Code.GDfirefliesaboveObjects2.length = 0;
gdjs.TitleCard2Code.GDfirefliesaboveObjects3.length = 0;
gdjs.TitleCard2Code.GDfirefliesbelowObjects1.length = 0;
gdjs.TitleCard2Code.GDfirefliesbelowObjects2.length = 0;
gdjs.TitleCard2Code.GDfirefliesbelowObjects3.length = 0;
gdjs.TitleCard2Code.GDBGbelowObjects1.length = 0;
gdjs.TitleCard2Code.GDBGbelowObjects2.length = 0;
gdjs.TitleCard2Code.GDBGbelowObjects3.length = 0;
gdjs.TitleCard2Code.GDLOGOObjects1.length = 0;
gdjs.TitleCard2Code.GDLOGOObjects2.length = 0;
gdjs.TitleCard2Code.GDLOGOObjects3.length = 0;
gdjs.TitleCard2Code.GDwordObjects1.length = 0;
gdjs.TitleCard2Code.GDwordObjects2.length = 0;
gdjs.TitleCard2Code.GDwordObjects3.length = 0;
gdjs.TitleCard2Code.GDStartBObjects1.length = 0;
gdjs.TitleCard2Code.GDStartBObjects2.length = 0;
gdjs.TitleCard2Code.GDStartBObjects3.length = 0;
gdjs.TitleCard2Code.GDOptionsBObjects1.length = 0;
gdjs.TitleCard2Code.GDOptionsBObjects2.length = 0;
gdjs.TitleCard2Code.GDOptionsBObjects3.length = 0;
gdjs.TitleCard2Code.GDExitBObjects1.length = 0;
gdjs.TitleCard2Code.GDExitBObjects2.length = 0;
gdjs.TitleCard2Code.GDExitBObjects3.length = 0;
gdjs.TitleCard2Code.GDTitleCard1Objects1.length = 0;
gdjs.TitleCard2Code.GDTitleCard1Objects2.length = 0;
gdjs.TitleCard2Code.GDTitleCard1Objects3.length = 0;

gdjs.TitleCard2Code.eventsList6(runtimeScene);

return;

}

gdjs['TitleCard2Code'] = gdjs.TitleCard2Code;
