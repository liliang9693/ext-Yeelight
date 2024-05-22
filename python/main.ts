//% color="#df2b2f" iconWidth=50 iconHeight=40
namespace Yeelight{
    //% block="in-network Yeelight devices list" blockType="reporter"
    export function devlist(parameter: any, block: any) {

        Generator.addImport("from yeelight import *"); 
        Generator.addCode(`discover_bulbs(timeout=3)`);

    }
    //% block="the [INF] of Yeelight in the order [DEV] " blockType="reporter"
    //% DEV.shadow="number"   DEV.defl="0"
    //% INF.shadow="dropdown"   INF.options="INF" 
    export function devgetinf(parameter: any, block: any) {
        let dev=parameter.DEV.code;
        let inf=parameter.INF.code;
        Generator.addImport("from yeelight import *"); 
        Generator.addCode(`discover_bulbs()[${dev}]${inf}`);

    }
    //% block="set the instance of [DEV] Yeelight and name as [NAME]" blockType="command"
    //% DEV.shadow="number"   DEV.defl="0"
    //% NAME.shadow="string"   NAME.defl="bulb" 
    export function devsetname(parameter: any, block: any) {
        let dev=parameter.DEV.code;
        let name=parameter.NAME.code;
        name = name.replace("\"","").replace("\"","");
        Generator.addImport("from yeelight import *"); 
        Generator.addCode(`${name} = Bulb(discover_bulbs()[${dev}]["ip"], auto_on=True)`);

    }

    //% block="set the ip of instance [NAME] to [IP] " blockType="command"
    //% IP.shadow="string"   IP.defl="192.168.0.0"
    //% NAME.shadow="string"   NAME.defl="bulb" 
    export function devsetip(parameter: any, block: any) {
        let ip=parameter.IP.code;
        let name=parameter.NAME.code;
        name = name.replace("\"","").replace("\"","");
        Generator.addImport("from yeelight import *"); 
        Generator.addCode(`${name} = Bulb(${ip})`);

    }
    //% block="[OPEN][NAME]" blockType="command"
    //% OPEN.shadow="dropdown"   OPEN.options="OPEN"
    //% NAME.shadow="string"   NAME.defl="bulb" 
    export function devopen(parameter: any, block: any) {
        let open=parameter.OPEN.code;
        let name=parameter.NAME.code;
        name = name.replace("\"","").replace("\"","");
        Generator.addImport("from yeelight import *"); 
        Generator.addImport("import time");
        Generator.addCode(`time.sleep(0.5)\n${name}.${open}`);

    }

    //% block="---"
    export function noteSep() {

    }

    //% block="[NAME]set color [COLOR]" blockType="command"
    //% COLOR.shadow="colorPalette" 
    //% NAME.shadow="string"   NAME.defl="bulb" 
    export function devsetcolor(parameter: any, block: any) {
        let color=parameter.COLOR.code;
        let name=parameter.NAME.code;
        name = name.replace("\"","").replace("\"","");

        var r = 0;
        var g = 0;
        var b = 0;
        try {
            if ( color.length == 8 ) {
                r = parseInt(color.substring(2, 4), 16);
                g = parseInt(color.substring(4, 6), 16);
                b = parseInt(color.substring(6, 8), 16);
            }
        } catch(e) {
            return '';
        }
        
        Generator.addImport("from yeelight import *"); 
        Generator.addImport("import time");
        Generator.addCode(`time.sleep(0.5)\nbulb.set_rgb(${r},${g},${b})`);

    }

    //% block="[NAME]sers R[R]G[G]B[B]" blockType="command"
    //% R.shadow="range"  R.params.min=0    R.params.max=255    R.defl=0
    //% G.shadow="range"  G.params.min=0    G.params.max=255    G.defl=255
    //% B.shadow="range"  B.params.min=0    B.params.max=255    B.defl=0
    //% NAME.shadow="string"   NAME.defl="bulb" 
    export function devsetcolorrgb(parameter: any, block: any) {
        let r=parameter.R.code;
        let g=parameter.G.code;
        let b=parameter.B.code;
        let name=parameter.NAME.code;
        name = name.replace("\"","").replace("\"","");
        Generator.addImport("from yeelight import *"); 
        Generator.addImport("import time");
        Generator.addCode(`time.sleep(0.5)\nbulb.set_rgb(${r},${g},${b})`);

    }
    //% block="[NAME] sets hue as [SD] saturation as [BHD]" blockType="command"
    //% SD.shadow="number"   SD.defl="359"
    //% BHD.shadow="number"   BHD.defl="100"
    //% NAME.shadow="string"   NAME.defl="bulb" 
    export function devsetcolorhsv(parameter: any, block: any) {
        let sd=parameter.SD.code;
        let bhd=parameter.BHD.code;
        let name=parameter.NAME.code;
        name = name.replace("\"","").replace("\"","");
        Generator.addImport("from yeelight import *"); 
        Generator.addImport("import time");
        Generator.addCode(`time.sleep(0.5)\nbulb.set_hsv(${sd},${bhd})`);

    }

    //% block="[NAME] sets brightness [LG]" blockType="command"
    //% LG.shadow="dropdownRound"   LG.options="LG"
    //% NAME.shadow="string"   NAME.defl="bulb" 
    export function devsetlight(parameter: any, block: any) {
        let lg=parameter.LG.code;
        let name=parameter.NAME.code;
        name = name.replace("\"","").replace("\"","");
        Generator.addImport("from yeelight import *"); 
        Generator.addImport("import time");
        Generator.addCode(`time.sleep(0.5)\nbulb.set_brightness(${lg})`);

    }

    //% block="[NAME] sets color temperature [TEMP]" blockType="command"
    //% TEMP.shadow="number"   TEMP.defl="1700"
    //% NAME.shadow="string"   NAME.defl="bulb" 
    export function devsetcolortemp(parameter: any, block: any) {
        let temp=parameter.TEMP.code;
        let name=parameter.NAME.code;
        name = name.replace("\"","").replace("\"","");
        Generator.addImport("from yeelight import *"); 
        Generator.addImport("import time");
        Generator.addCode(`time.sleep(0.5)\nbulb.set_color_temp(${temp})`);

    }

}
    