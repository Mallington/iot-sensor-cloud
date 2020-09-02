import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import React from 'react';
class WidgetPage extends React.Component {
    render() {
        // {lg: layout1, md: layout2, ...}
        const layouts = [
            {i: 'a', x: 0, y: 0, w: 2, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <ResponsiveGridLayout className="layout" layouts={layouts}
                                  breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                  cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}} style={{width:'100%', height:'100%', background:'red'}}>
                <div style={{background:'blue', flexGrow:'1', display: 'flex'}} key="1">
                    <a style={{background:'blue', flexGrow:'1', display: 'flex'}}>hdfdsfdfdsfdsfdsgdfgdfzcvcxgvcxzvcxsfdsfdsello</a></div>
                <div key="2">2</div>
                <div key="3">3</div>
            </ResponsiveGridLayout>
        )
    }
}
export default WidgetPage;