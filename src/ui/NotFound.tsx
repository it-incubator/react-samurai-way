import {Link} from "react-router";

export function NotFound() {
    return <div>
        <h2>404 — page not found</h2>
        <Link to="/">Go to main page</Link>
    </div>
}
