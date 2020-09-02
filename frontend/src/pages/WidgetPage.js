import React from "react";
import '../styles/grid.css'
import '../styles/grid-item.css'
import PropTypes from "prop-types";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import DevicesCardCollection from "../components/DevicesCardCollection";
import IMUSensorWidget from "../components/widgets/IMUSensorWidget"
import WaterDepthSensorWidget from "../components/widgets/WaterDepthSensorWidget";
import GettingStartedWidget from "../components/widgets/GettingStartedWidget";
const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default class ShowcaseLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBreakpoint: "lg",
            compactType: "horizontal",
            mounted: false,
            layouts: { lg: props.initialLayout }
        };

        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.onNewLayout = this.onNewLayout.bind(this);
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    generateDOM() {
        const widgets = [<GettingStartedWidget/>, <IMUSensorWidget deviceID="8abb809774343cc001743447de0a0000"/>,
                <WaterDepthSensorWidget deviceID="8abb809773fedb7d0173fedb8ba60000" />];


        return widgets.map(function(widget, key) {
            return (
                <div key={key}>
                    {
                        <span>
                            {widget}
                        </span>}
                </div>
            );
        });
    }
    onLayoutChange(layout, layouts) {
        this.props.onLayoutChange(layout, layouts);
    }

    onNewLayout() {
        console.log(this.state.layouts)
        // this.setState({
        //     layouts: { lg: generateLayout() }
        // });
    }

    render() {
        return (
            <div>
                <ResponsiveReactGridLayout
                    {...this.props}
                    layouts={this.state.layouts}
                    onBreakpointChange={this.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}
                    // WidthProvider option
                    measureBeforeMount={false}
                    // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                    // and set `measureBeforeMount={true}`.
                    useCSSTransforms={this.state.mounted}
                    compactType={this.state.compactType}
                    preventCollision={!this.state.compactType}
                >
                    {this.generateDOM()}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

ShowcaseLayout.propTypes = {
    onLayoutChange: PropTypes.func.isRequired
};

ShowcaseLayout.defaultProps = {
    className: "layout",
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: generateLayout()
};

function generateLayout() {
    return [{x:0, y: 0, w: 4, h: 10, i: "0", static: false},
     {x: 4, y: 0, w: 4, h: 10, i: "1", static: false},
     {x: 8, y: 0, w: 4, h: 10, i: "2", static: false},
     {x: 0, y: 10, w: 4, h: 10, i: "3", static: false},
    {x: 4, y: 10, w: 4, h: 10, i: "4", static: false},
    {x: 8, y: 10, w: 4, h: 10, i: "5", static: false}];
}
