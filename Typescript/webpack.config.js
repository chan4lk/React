module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },
    
    devtool: "source-map",
    
    resolve:{
        extensions:["", ".webpack.js", "webpack.config.js", ".ts", ".tsx", ".js"]
    },
    
    module:{
        loaders: [
          {test: /\.tsx?$/, loader:"ts-loader"}  
        ],
        preLoaders:[
            {test: /\.js$/, loader:"source-map-loader"}
        ],
        
    },
    externals:{
        "react": "React",
        "react-dom": "ReactDOM"
    }
}