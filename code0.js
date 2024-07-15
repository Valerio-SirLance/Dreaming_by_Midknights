gdjs.TitleCode = {};
gdjs.TitleCode.GDBitmapTitleObjects1= [];
gdjs.TitleCode.GDBitmapTitleObjects2= [];
gdjs.TitleCode.GDBitmapTitleObjects3= [];
gdjs.TitleCode.GDBitmapMenuExitObjects1= [];
gdjs.TitleCode.GDBitmapMenuExitObjects2= [];
gdjs.TitleCode.GDBitmapMenuExitObjects3= [];
gdjs.TitleCode.GDBitmapMenuCreditsObjects1= [];
gdjs.TitleCode.GDBitmapMenuCreditsObjects2= [];
gdjs.TitleCode.GDBitmapMenuCreditsObjects3= [];
gdjs.TitleCode.GDBitmapMenuStartObjects1= [];
gdjs.TitleCode.GDBitmapMenuStartObjects2= [];
gdjs.TitleCode.GDBitmapMenuStartObjects3= [];
gdjs.TitleCode.GDMenuBorderObjects1= [];
gdjs.TitleCode.GDMenuBorderObjects2= [];
gdjs.TitleCode.GDMenuBorderObjects3= [];
gdjs.TitleCode.GDMenuSelectorObjects1= [];
gdjs.TitleCode.GDMenuSelectorObjects2= [];
gdjs.TitleCode.GDMenuSelectorObjects3= [];
gdjs.TitleCode.GDTitleBG1Objects1= [];
gdjs.TitleCode.GDTitleBG1Objects2= [];
gdjs.TitleCode.GDTitleBG1Objects3= [];
gdjs.TitleCode.GDFadeObjectObjects1= [];
gdjs.TitleCode.GDFadeObjectObjects2= [];
gdjs.TitleCode.GDFadeObjectObjects3= [];
gdjs.TitleCode.GDKeyboardControlsObjects1= [];
gdjs.TitleCode.GDKeyboardControlsObjects2= [];
gdjs.TitleCode.GDKeyboardControlsObjects3= [];
gdjs.TitleCode.GDGamepadControlsObjects1= [];
gdjs.TitleCode.GDGamepadControlsObjects2= [];
gdjs.TitleCode.GDGamepadControlsObjects3= [];
gdjs.TitleCode.GDJumpAttackObjects1= [];
gdjs.TitleCode.GDJumpAttackObjects2= [];
gdjs.TitleCode.GDJumpAttackObjects3= [];
gdjs.TitleCode.GDBGupObjects1= [];
gdjs.TitleCode.GDBGupObjects2= [];
gdjs.TitleCode.GDBGupObjects3= [];
gdjs.TitleCode.GDgroundObjects1= [];
gdjs.TitleCode.GDgroundObjects2= [];
gdjs.TitleCode.GDgroundObjects3= [];
gdjs.TitleCode.GDfirefliesaboveObjects1= [];
gdjs.TitleCode.GDfirefliesaboveObjects2= [];
gdjs.TitleCode.GDfirefliesaboveObjects3= [];
gdjs.TitleCode.GDfirefliesbelowObjects1= [];
gdjs.TitleCode.GDfirefliesbelowObjects2= [];
gdjs.TitleCode.GDfirefliesbelowObjects3= [];
gdjs.TitleCode.GDBGbelowObjects1= [];
gdjs.TitleCode.GDBGbelowObjects2= [];
gdjs.TitleCode.GDBGbelowObjects3= [];
gdjs.TitleCode.GDLOGOObjects1= [];
gdjs.TitleCode.GDLOGOObjects2= [];
gdjs.TitleCode.GDLOGOObjects3= [];
gdjs.TitleCode.GDwordObjects1= [];
gdjs.TitleCode.GDwordObjects2= [];
gdjs.TitleCode.GDwordObjects3= [];
gdjs.TitleCode.GDStartBObjects1= [];
gdjs.TitleCode.GDStartBObjects2= [];
gdjs.TitleCode.GDStartBObjects3= [];
gdjs.TitleCode.GDOptionsBObjects1= [];
gdjs.TitleCode.GDOptionsBObjects2= [];
gdjs.TitleCode.GDOptionsBObjects3= [];
gdjs.TitleCode.GDExitBObjects1= [];
gdjs.TitleCode.GDExitBObjects2= [];
gdjs.TitleCode.GDExitBObjects3= [];


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Starting Screen & Story Introduction.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Enchanted Forest.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Enchant Forest.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Graveyard of Hopes & Dreams.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "The Dreaming Kingdom.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Final Battle.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "In-Battle.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Conclusion & Credits.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Title Cards.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Clicking Buttons.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Clicking Next in Dialogues.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Tala Deads.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Tala Punch.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Tala Jump.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Tala Hurt.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Tala Whip.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Tiktik Sound.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Chanak Sound.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Santelmo Sound.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Santelmo Attack.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Item Collected.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Engk, Game Over.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Select.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Female Evil Laugh.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Johnathan_So-MechaCollection.ogg");
}}

}


};gdjs.TitleCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCode.GDFadeObjectObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(11).getChild("Checkpoint").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).getChild("Lives").setNumber(3);
}}

}


};gdjs.TitleCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BGbelow"), gdjs.TitleCode.GDBGbelowObjects1);
gdjs.copyArray(runtimeScene.getObjects("BGup"), gdjs.TitleCode.GDBGupObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuCredits"), gdjs.TitleCode.GDBitmapMenuCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuExit"), gdjs.TitleCode.GDBitmapMenuExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuStart"), gdjs.TitleCode.GDBitmapMenuStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapTitle"), gdjs.TitleCode.GDBitmapTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("GamepadControls"), gdjs.TitleCode.GDGamepadControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpAttack"), gdjs.TitleCode.GDJumpAttackObjects1);
gdjs.copyArray(runtimeScene.getObjects("KeyboardControls"), gdjs.TitleCode.GDKeyboardControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuBorder"), gdjs.TitleCode.GDMenuBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuSelector"), gdjs.TitleCode.GDMenuSelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefliesabove"), gdjs.TitleCode.GDfirefliesaboveObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefliesbelow"), gdjs.TitleCode.GDfirefliesbelowObjects1);
gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.TitleCode.GDgroundObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDBitmapMenuExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBitmapMenuExitObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBitmapMenuCreditsObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.TitleCode.GDBitmapMenuStartObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBitmapMenuStartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.TitleCode.GDBitmapTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBitmapTitleObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.TitleCode.GDMenuBorderObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMenuBorderObjects1[i].setPosition((( gdjs.TitleCode.GDBitmapMenuStartObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuStartObjects1[0].getCenterXInScene()) - ((gdjs.TitleCode.GDMenuBorderObjects1[i].getWidth()) / 2),(( gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuCreditsObjects1[0].getCenterYInScene()) - ((gdjs.TitleCode.GDMenuBorderObjects1[i].getHeight()) / 2));
}
}{for(var i = 0, len = gdjs.TitleCode.GDMenuSelectorObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMenuSelectorObjects1[i].setPosition((( gdjs.TitleCode.GDBitmapMenuStartObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuStartObjects1[0].getCenterXInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects1[i].getWidth()) / 2),(( gdjs.TitleCode.GDBitmapMenuStartObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuStartObjects1[0].getCenterYInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects1[i].getHeight()) / 2.2));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Starting Screen & Story Introduction.mp3", 100, true, 100, 1);
}{for(var i = 0, len = gdjs.TitleCode.GDGamepadControlsObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamepadControlsObjects1[i].setY((( gdjs.TitleCode.GDKeyboardControlsObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDKeyboardControlsObjects1[0].getY()));
}
}{for(var i = 0, len = gdjs.TitleCode.GDJumpAttackObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDJumpAttackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.TitleCode.GDBGbelowObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBGbelowObjects1[i].setXOffset(gdjs.TitleCode.GDBGbelowObjects1[i].getXOffset() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDfirefliesbelowObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDfirefliesbelowObjects1[i].setXOffset(gdjs.TitleCode.GDfirefliesbelowObjects1[i].getXOffset() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDfirefliesbelowObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDfirefliesbelowObjects1[i].getBehavior("Flash").Flash(600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleCode.GDBGupObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBGupObjects1[i].setXOffset(gdjs.TitleCode.GDBGupObjects1[i].getXOffset() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDfirefliesaboveObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDfirefliesaboveObjects1[i].setXOffset(gdjs.TitleCode.GDfirefliesaboveObjects1[i].getXOffset() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDfirefliesaboveObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDfirefliesaboveObjects1[i].getBehavior("Flash").Flash(600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleCode.GDgroundObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDgroundObjects1[i].setXOffset(gdjs.TitleCode.GDgroundObjects1[i].getXOffset() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.TitleCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.TitleCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BitmapMenuCredits"), gdjs.TitleCode.GDBitmapMenuCreditsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuExit"), gdjs.TitleCode.GDBitmapMenuExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuStart"), gdjs.TitleCode.GDBitmapMenuStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuCreditsObjects2[k] = gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuExitObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuExitObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuExitObjects2[i].getVariables().get("Action")) == "Credits" ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuExitObjects2[k] = gdjs.TitleCode.GDBitmapMenuExitObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuExitObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i].getVariables().get("Action")) == "Credits" ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuCreditsObjects2[k] = gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuStartObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuStartObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuStartObjects2[i].getVariables().get("Action")) == "Credits" ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuStartObjects2[k] = gdjs.TitleCode.GDBitmapMenuStartObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuStartObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24269476);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDBitmapMenuCreditsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("MenuSelector"), gdjs.TitleCode.GDMenuSelectorObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Clicking Buttons.wav", 1, false, 50, 1);
}{for(var i = 0, len = gdjs.TitleCode.GDMenuSelectorObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDMenuSelectorObjects2[i].setPosition((( gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuCreditsObjects2[0].getCenterXInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects2[i].getWidth()) / 2),(( gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuCreditsObjects2[0].getCenterYInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects2[i].getHeight()) / 2.2));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BitmapMenuCredits"), gdjs.TitleCode.GDBitmapMenuCreditsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuExit"), gdjs.TitleCode.GDBitmapMenuExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuStart"), gdjs.TitleCode.GDBitmapMenuStartObjects2);
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCode.GDFadeObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuStartObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuStartObjects2[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuStartObjects2[k] = gdjs.TitleCode.GDBitmapMenuStartObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuStartObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuExitObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuExitObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuExitObjects2[i].getVariables().get("Action")) == "Start" ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuExitObjects2[k] = gdjs.TitleCode.GDBitmapMenuExitObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuExitObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i].getVariables().get("Action")) == "Start" ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuCreditsObjects2[k] = gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuStartObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuStartObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuStartObjects2[i].getVariables().get("Action")) == "Start" ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuStartObjects2[k] = gdjs.TitleCode.GDBitmapMenuStartObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuStartObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDFadeObjectObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFadeObjectObjects2[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDFadeObjectObjects2[k] = gdjs.TitleCode.GDFadeObjectObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDFadeObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDBitmapMenuStartObjects2 */
/* Reuse gdjs.TitleCode.GDFadeObjectObjects2 */
gdjs.copyArray(runtimeScene.getObjects("MenuSelector"), gdjs.TitleCode.GDMenuSelectorObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 255, "linear", 500, false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Select.wav", 1, false, 50, 1);
}{for(var i = 0, len = gdjs.TitleCode.GDMenuSelectorObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDMenuSelectorObjects2[i].setPosition((( gdjs.TitleCode.GDBitmapMenuStartObjects2.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuStartObjects2[0].getCenterXInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects2[i].getWidth()) / 2),(( gdjs.TitleCode.GDBitmapMenuStartObjects2.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuStartObjects2[0].getCenterYInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects2[i].getHeight()) / 2.2));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sinag").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("SirLancelot").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Surya").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Kalel").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Caloy").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCode.GDFadeObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDFadeObjectObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFadeObjectObjects2[i].getBehavior("Tween").hasFinished("FadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDFadeObjectObjects2[k] = gdjs.TitleCode.GDFadeObjectObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDFadeObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24273940);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Introduction", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BitmapMenuCredits"), gdjs.TitleCode.GDBitmapMenuCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuExit"), gdjs.TitleCode.GDBitmapMenuExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuStart"), gdjs.TitleCode.GDBitmapMenuStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCode.GDFadeObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuExitObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuExitObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuExitObjects1[k] = gdjs.TitleCode.GDBitmapMenuExitObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuExitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuExitObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuExitObjects1[i].getVariableString(gdjs.TitleCode.GDBitmapMenuExitObjects1[i].getVariables().get("Action")) == "Exit" ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuExitObjects1[k] = gdjs.TitleCode.GDBitmapMenuExitObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuExitObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuCreditsObjects1[i].getVariableString(gdjs.TitleCode.GDBitmapMenuCreditsObjects1[i].getVariables().get("Action")) == "Exit" ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuCreditsObjects1[k] = gdjs.TitleCode.GDBitmapMenuCreditsObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuStartObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuStartObjects1[i].getVariableString(gdjs.TitleCode.GDBitmapMenuStartObjects1[i].getVariables().get("Action")) == "Exit" ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBitmapMenuStartObjects1[k] = gdjs.TitleCode.GDBitmapMenuStartObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuStartObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFadeObjectObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDFadeObjectObjects1[k] = gdjs.TitleCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDFadeObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDBitmapMenuExitObjects1 */
/* Reuse gdjs.TitleCode.GDFadeObjectObjects1 */
gdjs.copyArray(runtimeScene.getObjects("MenuSelector"), gdjs.TitleCode.GDMenuSelectorObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDMenuSelectorObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMenuSelectorObjects1[i].setPosition((( gdjs.TitleCode.GDBitmapMenuExitObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuExitObjects1[0].getCenterXInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects1[i].getWidth()) / 2),(( gdjs.TitleCode.GDBitmapMenuExitObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuExitObjects1[0].getCenterYInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects1[i].getHeight()) / 2.2));
}
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.TitleCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BGbelow"), gdjs.TitleCode.GDBGbelowObjects1);
gdjs.copyArray(runtimeScene.getObjects("BGup"), gdjs.TitleCode.GDBGupObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefliesabove"), gdjs.TitleCode.GDfirefliesaboveObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefliesbelow"), gdjs.TitleCode.GDfirefliesbelowObjects1);
gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.TitleCode.GDgroundObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDBGbelowObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBGbelowObjects1[i].setXOffset(gdjs.TitleCode.GDBGbelowObjects1[i].getXOffset() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDfirefliesbelowObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDfirefliesbelowObjects1[i].setXOffset(gdjs.TitleCode.GDfirefliesbelowObjects1[i].getXOffset() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDfirefliesbelowObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDfirefliesbelowObjects1[i].getBehavior("Flash").Flash(600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleCode.GDBGupObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBGupObjects1[i].setXOffset(gdjs.TitleCode.GDBGupObjects1[i].getXOffset() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDfirefliesaboveObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDfirefliesaboveObjects1[i].setXOffset(gdjs.TitleCode.GDfirefliesaboveObjects1[i].getXOffset() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDfirefliesaboveObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDfirefliesaboveObjects1[i].getBehavior("Flash").Flash(600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleCode.GDgroundObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDgroundObjects1[i].setXOffset(gdjs.TitleCode.GDgroundObjects1[i].getXOffset() + (60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.TitleCode.eventsList5 = function(runtimeScene) {

{


gdjs.TitleCode.eventsList0(runtimeScene);
}


{


gdjs.TitleCode.eventsList2(runtimeScene);
}


{


gdjs.TitleCode.eventsList3(runtimeScene);
}


{


gdjs.TitleCode.eventsList4(runtimeScene);
}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDBitmapTitleObjects1.length = 0;
gdjs.TitleCode.GDBitmapTitleObjects2.length = 0;
gdjs.TitleCode.GDBitmapTitleObjects3.length = 0;
gdjs.TitleCode.GDBitmapMenuExitObjects1.length = 0;
gdjs.TitleCode.GDBitmapMenuExitObjects2.length = 0;
gdjs.TitleCode.GDBitmapMenuExitObjects3.length = 0;
gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length = 0;
gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length = 0;
gdjs.TitleCode.GDBitmapMenuCreditsObjects3.length = 0;
gdjs.TitleCode.GDBitmapMenuStartObjects1.length = 0;
gdjs.TitleCode.GDBitmapMenuStartObjects2.length = 0;
gdjs.TitleCode.GDBitmapMenuStartObjects3.length = 0;
gdjs.TitleCode.GDMenuBorderObjects1.length = 0;
gdjs.TitleCode.GDMenuBorderObjects2.length = 0;
gdjs.TitleCode.GDMenuBorderObjects3.length = 0;
gdjs.TitleCode.GDMenuSelectorObjects1.length = 0;
gdjs.TitleCode.GDMenuSelectorObjects2.length = 0;
gdjs.TitleCode.GDMenuSelectorObjects3.length = 0;
gdjs.TitleCode.GDTitleBG1Objects1.length = 0;
gdjs.TitleCode.GDTitleBG1Objects2.length = 0;
gdjs.TitleCode.GDTitleBG1Objects3.length = 0;
gdjs.TitleCode.GDFadeObjectObjects1.length = 0;
gdjs.TitleCode.GDFadeObjectObjects2.length = 0;
gdjs.TitleCode.GDFadeObjectObjects3.length = 0;
gdjs.TitleCode.GDKeyboardControlsObjects1.length = 0;
gdjs.TitleCode.GDKeyboardControlsObjects2.length = 0;
gdjs.TitleCode.GDKeyboardControlsObjects3.length = 0;
gdjs.TitleCode.GDGamepadControlsObjects1.length = 0;
gdjs.TitleCode.GDGamepadControlsObjects2.length = 0;
gdjs.TitleCode.GDGamepadControlsObjects3.length = 0;
gdjs.TitleCode.GDJumpAttackObjects1.length = 0;
gdjs.TitleCode.GDJumpAttackObjects2.length = 0;
gdjs.TitleCode.GDJumpAttackObjects3.length = 0;
gdjs.TitleCode.GDBGupObjects1.length = 0;
gdjs.TitleCode.GDBGupObjects2.length = 0;
gdjs.TitleCode.GDBGupObjects3.length = 0;
gdjs.TitleCode.GDgroundObjects1.length = 0;
gdjs.TitleCode.GDgroundObjects2.length = 0;
gdjs.TitleCode.GDgroundObjects3.length = 0;
gdjs.TitleCode.GDfirefliesaboveObjects1.length = 0;
gdjs.TitleCode.GDfirefliesaboveObjects2.length = 0;
gdjs.TitleCode.GDfirefliesaboveObjects3.length = 0;
gdjs.TitleCode.GDfirefliesbelowObjects1.length = 0;
gdjs.TitleCode.GDfirefliesbelowObjects2.length = 0;
gdjs.TitleCode.GDfirefliesbelowObjects3.length = 0;
gdjs.TitleCode.GDBGbelowObjects1.length = 0;
gdjs.TitleCode.GDBGbelowObjects2.length = 0;
gdjs.TitleCode.GDBGbelowObjects3.length = 0;
gdjs.TitleCode.GDLOGOObjects1.length = 0;
gdjs.TitleCode.GDLOGOObjects2.length = 0;
gdjs.TitleCode.GDLOGOObjects3.length = 0;
gdjs.TitleCode.GDwordObjects1.length = 0;
gdjs.TitleCode.GDwordObjects2.length = 0;
gdjs.TitleCode.GDwordObjects3.length = 0;
gdjs.TitleCode.GDStartBObjects1.length = 0;
gdjs.TitleCode.GDStartBObjects2.length = 0;
gdjs.TitleCode.GDStartBObjects3.length = 0;
gdjs.TitleCode.GDOptionsBObjects1.length = 0;
gdjs.TitleCode.GDOptionsBObjects2.length = 0;
gdjs.TitleCode.GDOptionsBObjects3.length = 0;
gdjs.TitleCode.GDExitBObjects1.length = 0;
gdjs.TitleCode.GDExitBObjects2.length = 0;
gdjs.TitleCode.GDExitBObjects3.length = 0;

gdjs.TitleCode.eventsList5(runtimeScene);

return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
