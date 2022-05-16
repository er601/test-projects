import LeafLet from './components/leaflet/LeafLet'
import News from './components/news/News'
import GoogleMapFinal from "./components/Map/Google_map";

import 'antd/dist/antd.css'
import './App.css';
// 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

const App = () => {
    return (
        <>
            <div className="app-main-map-component">
                <div className="container">

                    {/*<LeafLet />*/}

                    {/*<GoogleMapFinal />*/}

                    <News />

                </div>
            </div>
        </>
);
}

export default App;
