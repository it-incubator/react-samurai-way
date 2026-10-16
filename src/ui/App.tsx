import {MainPage} from "../MainPage.tsx";
import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";
import {SidebarMenu} from "./SidebarMenu.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import {NotFound} from "./NotFound.tsx";

export const App = () => {
    return (
        <BrowserRouter basename="/react-samurai-way">
            <div>
                <Header/>
                <div style={ {display: "flex", flexDirection: "row", gap: '40px' } }>
                    <SidebarMenu/>
                    <Routes>
                        <Route path="/" element={<MainPage />}/>
                        <Route path="/tracks/:trackId" element={<MainPage />}/>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
)
}