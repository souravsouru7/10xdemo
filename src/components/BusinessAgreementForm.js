import React, { useState } from 'react';
import './BusinessAgreementForm.css';

const BusinessAgreementForm = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    bpCode: 'V00001',
    bpName: 'TABAK TOBACCO TRADING L.L.C.-(CASH)',
    contactPerson: 'Abdul Rahman',
    vendorRefNo: '',
    bpCurrency: 'AED',
    telephoneNo: '987654',
    email: 'abc@gmail.com',
    description: '',
    agreementYear: '2025',
    agreementNumber: '2500003',
    agreementMethod: 'Items Method',
    startDate: '31-07-2025',
    endDate: '29-08-2025',
    businessPartnerProject: '',
    terminationDate: 'dd-mm-yyyy',
    signingDate: '31-07-2025',
    agreementType: '',
    ignorePrices: true,
    paymentTerms: '--Select Payment Term--',
    paymentMethod: '',
    shippingType: '',
    settlementProbability: '0.000000',
    remarks: '',
    status: 'Approved',
    priceList: '',
    owner: '',
    renewal: false,
    reminder: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'details', label: 'Details' },
    { id: 'supplierRebate', label: 'Supplier Rebate' },
    { id: 'supplierCharges', label: 'Supplier Charges' },
    { id: 'attachments', label: 'Attachments' }
  ];

  return (
    <div className="business-agreement-form">
      <div className="form-header">
        <h1>Business Development Agreement</h1>
      </div>

      {/* Top Section - Agreement Details */}
      <div className="form-section agreement-details">
        <div className="form-row">
          {/* Left Column - Business Partner Details */}
          <div className="form-column">
            <div className="form-group">
              <label>BP Code</label>
              <input 
                type="text" 
                value={formData.bpCode}
                onChange={(e) => handleInputChange('bpCode', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>BP Name</label>
              <input 
                type="text" 
                value={formData.bpName}
                onChange={(e) => handleInputChange('bpName', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Contact Person</label>
              <input 
                type="text" 
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Vendor Ref. No.</label>
              <input 
                type="text" 
                value={formData.vendorRefNo}
                onChange={(e) => handleInputChange('vendorRefNo', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>BP Currency</label>
              <input 
                type="text" 
                value={formData.bpCurrency}
                onChange={(e) => handleInputChange('bpCurrency', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Telephone No.</label>
              <input 
                type="text" 
                value={formData.telephoneNo}
                onChange={(e) => handleInputChange('telephoneNo', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>E-Mail</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea 
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows="3"
              />
            </div>
          </div>

          {/* Right Column - Agreement Specifics */}
          <div className="form-column">
            <div className="form-group">
              <label>No.</label>
              <div className="number-input-group">
                <select 
                  value={formData.agreementYear}
                  onChange={(e) => handleInputChange('agreementYear', e.target.value)}
                >
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
                <input 
                  type="text" 
                  value={formData.agreementNumber}
                  onChange={(e) => handleInputChange('agreementNumber', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Agreement Method</label>
              <select 
                value={formData.agreementMethod}
                onChange={(e) => handleInputChange('agreementMethod', e.target.value)}
              >
                <option value="Items Method">Items Method</option>
                <option value="Other Method">Other Method</option>
              </select>
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input 
                type="text" 
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input 
                type="text" 
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Business Partner Project</label>
              <select 
                value={formData.businessPartnerProject}
                onChange={(e) => handleInputChange('businessPartnerProject', e.target.value)}
              >
                <option value="">--Select Project--</option>
              </select>
            </div>
            <div className="form-group">
              <label>Termination Date</label>
              <div className="date-input-group">
                <input 
                  type="text" 
                  value={formData.terminationDate}
                  onChange={(e) => handleInputChange('terminationDate', e.target.value)}
                />
                <span className="calendar-icon">📅</span>
              </div>
            </div>
            <div className="form-group">
              <label>Signing Date</label>
              <input 
                type="text" 
                value={formData.signingDate}
                onChange={(e) => handleInputChange('signingDate', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="form-section tabs-section">
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'general' && (
            <div className="form-row">
              {/* Left Column - Agreement Terms */}
              <div className="form-column">
                <div className="form-group">
                  <label>Agreement Type</label>
                  <select 
                    value={formData.agreementType}
                    onChange={(e) => handleInputChange('agreementType', e.target.value)}
                  >
                    <option value="">--Select Type--</option>
                  </select>
                </div>
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={formData.ignorePrices}
                      onChange={(e) => handleInputChange('ignorePrices', e.target.checked)}
                    />
                    Ignore Prices Specified in Blanket Agreement
                  </label>
                </div>
                <div className="form-group">
                  <label>Payment Terms</label>
                  <select 
                    value={formData.paymentTerms}
                    onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
                  >
                    <option value="--Select Payment Term--">--Select Payment Term--</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Payment Method</label>
                  <select 
                    value={formData.paymentMethod}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                  >
                    <option value="">--Select Method--</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Shipping Type</label>
                  <select 
                    value={formData.shippingType}
                    onChange={(e) => handleInputChange('shippingType', e.target.value)}
                  >
                    <option value="">--Select Type--</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Settlement Probability %</label>
                  <input 
                    type="text" 
                    value={formData.settlementProbability}
                    onChange={(e) => handleInputChange('settlementProbability', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Remarks</label>
                  <textarea 
                    value={formData.remarks}
                    onChange={(e) => handleInputChange('remarks', e.target.value)}
                    rows="4"
                  />
                </div>
              </div>

              {/* Right Column - Status and Reminders */}
              <div className="form-column">
                <div className="form-group">
                  <label>Status</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="readonly-field"
                  >
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Price List</label>
                  <select 
                    value={formData.priceList}
                    onChange={(e) => handleInputChange('priceList', e.target.value)}
                  >
                    <option value="">--Select Price List--</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Owner</label>
                  <select 
                    value={formData.owner}
                    onChange={(e) => handleInputChange('owner', e.target.value)}
                  >
                    <option value="">--Select Owner--</option>
                  </select>
                </div>
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={formData.renewal}
                      onChange={(e) => handleInputChange('renewal', e.target.checked)}
                    />
                    Renewal
                  </label>
                </div>
                <div className="form-group">
                  <label>Reminder</label>
                  <div className="reminder-input-group">
                    <input 
                      type="text" 
                      value={formData.reminder}
                      onChange={(e) => handleInputChange('reminder', e.target.value)}
                    />
                    <span className="reminder-suffix">Day(s)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="form-actions">
        <button className="btn-save">Save</button>
        <button className="btn-cancel">Cancel</button>
        <button className="btn-floating">💬</button>
      </div>
    </div>
  );
};

export default BusinessAgreementForm;
