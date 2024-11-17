import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './infra/translate/i18n'
import './presentation/theme/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
