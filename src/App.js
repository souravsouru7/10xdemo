import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import BusinessAgreementForm from './components/BusinessAgreementForm';
import PurchaseQuotationForm from './components/PurchaseQuotationForm';
import SalesQuotationForm from './components/SalesQuotationForm';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('businessDevelopmentAgreement');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const renderMainContent = () => {
    switch (activeMenuItem) {
      case 'businessDevelopmentAgreement':
        return <BusinessAgreementForm />;
      case 'purchaseQuotations':
        return <PurchaseQuotationForm />;
      case 'salesQuotation':
        return <SalesQuotationForm />;
      case 'dashboard':
        return <div className="dashboard-content">Dashboard Content</div>;
      case 'profile':
        return <div className="profile-content">Profile Content</div>;
      case 'rentalAgreement':
        return <div className="rental-content">Rental Agreement Content</div>;
      case 'soList':
        return <div className="so-list-content">SO List Content</div>;
      case 'invoiceList':
        return <div className="invoice-content">Invoice List Content</div>;
      case 'paymentConfirmation':
        return <div className="payment-content">Payment Confirmation Content</div>;
      case 'soa':
        return <div className="soa-content">SOA Content</div>;
      case 'reports':
        return <div className="reports-content">Reports Content</div>;
      default:
        return <BusinessAgreementForm />;
    }
  };

  return (
    <div className="App">
      <Sidebar
        activeMenuItem={activeMenuItem}
        onMenuItemClick={handleMenuItemClick}
      />
      <div className="main-content">
        {renderMainContent()}
      </div>
    </div>
  );
}

export default App;
