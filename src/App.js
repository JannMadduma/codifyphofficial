import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { Provider } from "react-redux";
import ComponentRoute from "./ComponentRoute";
import { HashRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import configureStore from "./store/configureStore";
const store = configureStore({});

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <ComponentRoute />
            </HashRouter>
        </Provider>
    );
}

export default App;
