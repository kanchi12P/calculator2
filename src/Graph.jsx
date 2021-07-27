import functionPlot from "function-plot";

let width = 600;
let height = 400;
function Graph(props){
  let a=props.graphToPlot;
    const parameters = {
        target: "#root",
        width,
        height,
        data: [{
          fn:props.graphToPlot, 
          color: 'red'
        }],
        grid: true,
        yAxis: {domain: [-1, 1]},
        xAxis: {domain: [-4, 4]}
      };
    functionPlot(parameters);
    console.log("Function");
    return null;
}
export default Graph;