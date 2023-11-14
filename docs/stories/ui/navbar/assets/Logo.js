import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Logo({ width = "100", height = "50", color = "#F5CDA7" }) {
    return (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 200 100", children: [_jsx("circle", { cx: "50%", cy: "50%", r: "40", fill: "transparent" }), _jsx("circle", { cx: "50%", cy: "50%", r: "40", fill: "#667eea", fillOpacity: "0.2" }), _jsx("circle", { cx: "50%", cy: "50%", r: "40", fill: "transparent", stroke: "#F5CDA7", strokeWidth: "5" }), _jsx("text", { x: "50%", y: "50%", fontSize: "30", fontFamily: "cursive", fontStyle: "italic", fill: color, textAnchor: "middle", dominantBaseline: "middle", children: "RnF" })] }));
}
export default Logo;
