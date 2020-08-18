import { faServer, faQuestion, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
class DeviceConfig{
    static  iconMap ={
        "HOST": faServer,
        "SENSOR": faTachometerAlt
    };
    static GetIcon(name){
        var icon = this.iconMap[name];
        return (icon==null)? faQuestion : icon;
    }
}
export default DeviceConfig;
