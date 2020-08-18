import { faServer, faQuestion, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
class DeviceConfig{
    static  iconMap ={
        "HOST": faServer,
        "SENSOR": faTachometerAlt
    };

    static empty = {
        "id":undefined,
        "deviceName": undefined,
        "deviceType": undefined,
        "parentId": undefined,
        "outputDataType": undefined,
        "pinMap": []
    };

    static types= ["HOST", "SENSOR"];

    static GetIcon(name){
        var icon = this.iconMap[name];
        return (icon==null)? faQuestion : icon;
    }
}
export default DeviceConfig;
