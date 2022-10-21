import { createRoot } from 'react-dom/client'
import App from "./AppReact"

createRoot(document.getElementById('app') as HTMLElement)
    .render(<App/>)