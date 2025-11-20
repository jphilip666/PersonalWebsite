import { Routes, Route } from 'react-router-dom';
import CalculatorPrivacyPolicy from './ios_app/CalculatorPrivacyPolicy';
import SupportContact from './ios_app/SupportContact';
import Home from './Home';
import Contact from './Contact';

export const Router = () => {
    return <>
        <Routes>
            {/* Personal Website Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            {/* IOS calculator app privacy policy */}
            <Route path="/app-privacy-policy-calculator" element={<CalculatorPrivacyPolicy />} />
            <Route path="/support-contact" element={<SupportContact />} />            
        </Routes>
    </>
};