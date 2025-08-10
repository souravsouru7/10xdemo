import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ activeMenuItem, onMenuItemClick }) => {
  const [isContractsExpanded, setIsContractsExpanded] = useState(true);
  const [isUploadsExpanded, setIsUploadsExpanded] = useState(false);
  const [isSalesExpanded, setIsSalesExpanded] = useState(false);

  const toggleContracts = () => {
    setIsContractsExpanded(!isContractsExpanded);
  };

  const toggleUploads = () => {
    setIsUploadsExpanded(!isUploadsExpanded);
  };

  const toggleSales = () => {
    setIsSalesExpanded(!isSalesExpanded);
  };

  const handleMenuItemClick = (menuItem) => {
    onMenuItemClick(menuItem);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Dashboard */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${activeMenuItem === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('dashboard')}
          >
            <div className="sidebar-icon">📊</div>
            <span className="sidebar-text">Dashboard</span>
          </div>
        </div>

        {/* Profile */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${activeMenuItem === 'profile' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('profile')}
          >
            <div className="sidebar-icon">👤</div>
            <span className="sidebar-text">Profile</span>
          </div>
        </div>

        {/* Sales */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${isSalesExpanded ? 'active' : ''}`}
            onClick={toggleSales}
          >
            <div className="sidebar-icon">💰</div>
            <span className="sidebar-text">Sales</span>
            <div className={`sidebar-chevron ${isSalesExpanded ? 'expanded' : ''}`}>
              ▼
            </div>
          </div>

          {isSalesExpanded && (
            <div className="sidebar-submenu">
              <div
                className={`sidebar-sub-item ${activeMenuItem === 'salesQuotation' ? 'active' : ''}`}
                onClick={() => handleMenuItemClick('salesQuotation')}
              >
                <div className="sub-item-bullet red"></div>
                <span>Sales Quotation</span>
              </div>
            </div>
          )}
        </div>

        {/* Contracts */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${isContractsExpanded ? 'active' : ''}`}
            onClick={toggleContracts}
          >
            <div className="sidebar-icon">📁</div>
            <span className="sidebar-text">Contracts</span>
            <div className={`sidebar-chevron ${isContractsExpanded ? 'expanded' : ''}`}>
              ▼
            </div>
          </div>

          {isContractsExpanded && (
            <div className="sidebar-submenu">
              <div
                className={`sidebar-sub-item ${activeMenuItem === 'businessDevelopmentAgreement' ? 'active' : ''}`}
                onClick={() => handleMenuItemClick('businessDevelopmentAgreement')}
              >
                <div className="sub-item-bullet red"></div>
                <span>Business Development Agreement</span>
              </div>
              <div
                className={`sidebar-sub-item ${activeMenuItem === 'rentalAgreement' ? 'active' : ''}`}
                onClick={() => handleMenuItemClick('rentalAgreement')}
              >
                <div className="sub-item-bullet grey"></div>
                <span>Rental Agreement</span>
              </div>
            </div>
          )}
        </div>

        {/* SO List */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${activeMenuItem === 'soList' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('soList')}
          >
            <div className="sidebar-icon">🛒</div>
            <span className="sidebar-text">SO List</span>
          </div>
        </div>

        {/* Purchase Quotations */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${activeMenuItem === 'purchaseQuotations' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('purchaseQuotations')}
          >
            <div className="sidebar-icon">📋</div>
            <span className="sidebar-text">Purchase Quotations</span>
          </div>
        </div>

        {/* Uploads */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${isUploadsExpanded ? 'active' : ''}`}
            onClick={toggleUploads}
          >
            <div className="sidebar-icon">📄</div>
            <span className="sidebar-text">Uploads</span>
            <div className={`sidebar-chevron ${isUploadsExpanded ? 'expanded' : ''}`}>
              ▶
            </div>
          </div>
        </div>

        {/* Invoice List */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${activeMenuItem === 'invoiceList' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('invoiceList')}
          >
            <div className="sidebar-icon">💰</div>
            <span className="sidebar-text">Invoice List</span>
          </div>
        </div>

        {/* Payment Confirmation */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${activeMenuItem === 'paymentConfirmation' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('paymentConfirmation')}
          >
            <div className="sidebar-icon">✅</div>
            <span className="sidebar-text">Payment Confirmation</span>
          </div>
        </div>

        {/* SOA */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${activeMenuItem === 'soa' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('soa')}
          >
            <div className="sidebar-icon">📊</div>
            <span className="sidebar-text">SOA</span>
          </div>
        </div>

        {/* Reports */}
        <div className="sidebar-item">
          <div
            className={`sidebar-main-item ${activeMenuItem === 'reports' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('reports')}
          >
            <div className="sidebar-icon">📈</div>
            <span className="sidebar-text">Reports</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
