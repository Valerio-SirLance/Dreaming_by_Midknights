gdjs.CreditsCode = {};
gdjs.CreditsCode.GDCreditsObjects1= [];
gdjs.CreditsCode.GDCreditsObjects2= [];
gdjs.CreditsCode.GDNamesObjects1= [];
gdjs.CreditsCode.GDNamesObjects2= [];
gdjs.CreditsCode.GDSayingsObjects1= [];
gdjs.CreditsCode.GDSayingsObjects2= [];
gdjs.CreditsCode.GDNewSpriteObjects1= [];
gdjs.CreditsCode.GDNewSpriteObjects2= [];
gdjs.CreditsCode.GDLancelotObjects1= [];
gdjs.CreditsCode.GDLancelotObjects2= [];
gdjs.CreditsCode.GDSuryaObjects1= [];
gdjs.CreditsCode.GDSuryaObjects2= [];
gdjs.CreditsCode.GDKalelObjects1= [];
gdjs.CreditsCode.GDKalelObjects2= [];
gdjs.CreditsCode.GDSinagObjects1= [];
gdjs.CreditsCode.GDSinagObjects2= [];
gdjs.CreditsCode.GDCaloyObjects1= [];
gdjs.CreditsCode.GDCaloyObjects2= [];
gdjs.CreditsCode.GDCelestiaObjects1= [];
gdjs.CreditsCode.GDCelestiaObjects2= [];
gdjs.CreditsCode.GDMidknightsObjects1= [];
gdjs.CreditsCode.GDMidknightsObjects2= [];
gdjs.CreditsCode.GDbackObjects1= [];
gdjs.CreditsCode.GDbackObjects2= [];
gdjs.CreditsCode.GDbackclickObjects1= [];
gdjs.CreditsCode.GDbackclickObjects2= [];


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.CreditsCode.GDCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("backclick"), gdjs.CreditsCode.GDbackclickObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.CreditsCode.GDbackclickObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDbackclickObjects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("backclick"), gdjs.CreditsCode.GDbackclickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDbackclickObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDbackclickObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDbackclickObjects1[k] = gdjs.CreditsCode.GDbackclickObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDbackclickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26340244);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Clicking Buttons.wav", 1, false, 50, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;
gdjs.CreditsCode.GDNamesObjects1.length = 0;
gdjs.CreditsCode.GDNamesObjects2.length = 0;
gdjs.CreditsCode.GDSayingsObjects1.length = 0;
gdjs.CreditsCode.GDSayingsObjects2.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects2.length = 0;
gdjs.CreditsCode.GDLancelotObjects1.length = 0;
gdjs.CreditsCode.GDLancelotObjects2.length = 0;
gdjs.CreditsCode.GDSuryaObjects1.length = 0;
gdjs.CreditsCode.GDSuryaObjects2.length = 0;
gdjs.CreditsCode.GDKalelObjects1.length = 0;
gdjs.CreditsCode.GDKalelObjects2.length = 0;
gdjs.CreditsCode.GDSinagObjects1.length = 0;
gdjs.CreditsCode.GDSinagObjects2.length = 0;
gdjs.CreditsCode.GDCaloyObjects1.length = 0;
gdjs.CreditsCode.GDCaloyObjects2.length = 0;
gdjs.CreditsCode.GDCelestiaObjects1.length = 0;
gdjs.CreditsCode.GDCelestiaObjects2.length = 0;
gdjs.CreditsCode.GDMidknightsObjects1.length = 0;
gdjs.CreditsCode.GDMidknightsObjects2.length = 0;
gdjs.CreditsCode.GDbackObjects1.length = 0;
gdjs.CreditsCode.GDbackObjects2.length = 0;
gdjs.CreditsCode.GDbackclickObjects1.length = 0;
gdjs.CreditsCode.GDbackclickObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);

return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
