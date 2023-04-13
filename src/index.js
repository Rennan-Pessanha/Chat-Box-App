import {createRoot } from 'react-dom/client'
import App from './app'
import GlobalStyle from './Styles/global'
const root = createRoot(document.querySelector('#root'))

root.render(<>
<GlobalStyle />
<App />
</>)