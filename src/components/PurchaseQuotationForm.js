import React, { useState } from 'react';
import './PurchaseQuotationForm.css';

const PurchaseQuotationForm = () => {
  const [formData, setFormData] = useState({
    vendor: 'TABAK TOBACCO TRADING L.L.C.-(CASH)',
    vendorCode: 'V00001',
    contactPerson: '',
    customerRefNo: 'Reference',
    seriesYear: '2025',
    seriesNumber: '2500002',
    paymentTerms: 'CREDIT',
    offerValidity: '29-08-2025',
    documentDate: '02-08-2025',
    salesEmployee: 'PRAKASH',
    remarks: 'test update record',
    totalDiscount: '1500.000000',
    tax: '157.500000',
    grossTotal: '3307.500000'
  });

  const [items, setItems] = useState([
    {
      id: 1,
      itemName: 'ALICAFE SIGNATURE FRE...',
      itemCode: 'ITM0023655',
      qty: 15,
      price: 100,
      discount: 1,
      vatGroup: 'V15',
      vat: 75,
      total: 1500,
      unit: 'P'
    },
    {
      id: 2,
      itemName: 'ALICAFE (3 IN 1) INSTAN...',
      itemCode: 'ITM0000158',
      qty: 20,
      price: 50,
      discount: 0,
      vatGroup: 'V15',
      vat: 50,
      total: 1000,
      unit: 'P'
    },
    {
      id: 3,
      itemName: 'GOODBYE ROACHES GEL ...',
      itemCode: 'ITM0003564',
      qty: 10,
      price: 20,
      discount: 0,
      vatGroup: 'V15',
      vat: 10,
      total: 200,
      unit: 'P'
    },
    {
      id: 4,
      itemName: 'AJINOMOTO GINISA MIX ...',
      itemCode: 'ITM0001585',
      qty: 15,
      price: 30,
      discount: 0,
      vatGroup: 'V15',
      vat: 22.5,
      total: 450,
      unit: 'P'
    }
  ]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="purchase-quotation-form">
      <div className="form-header">
        <h1>Purchase Quotation</h1>
      </div>

      {/* Header Details */}
      <div className="form-section header-details">
        <div className="form-row">
          {/* Left Column - Vendor Information */}
          <div className="form-column">
            <div className="form-group">
              <label>Vendor</label>
              <input 
                type="text" 
                value={formData.vendor}
                onChange={(e) => handleInputChange('vendor', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Vendor Code</label>
              <input 
                type="text" 
                value={formData.vendorCode}
                onChange={(e) => handleInputChange('vendorCode', e.target.value)}
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
              />
            </div>
            <div className="form-group">
              <label>Customer Ref. No</label>
              <input 
                type="text" 
                value={formData.customerRefNo}
                onChange={(e) => handleInputChange('customerRefNo', e.target.value)}
              />
            </div>
          </div>

          {/* Right Column - Quotation Details */}
          <div className="form-column">
            <div className="form-group">
              <label>Series</label>
              <div className="series-input-group">
                <input 
                  type="text" 
                  value={formData.seriesYear}
                  onChange={(e) => handleInputChange('seriesYear', e.target.value)}
                />
                <input 
                  type="text" 
                  value={formData.seriesNumber}
                  onChange={(e) => handleInputChange('seriesNumber', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Payment Terms</label>
              <select 
                value={formData.paymentTerms}
                onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
              >
                <option value="CREDIT">CREDIT</option>
                <option value="CASH">CASH</option>
                <option value="NET30">NET30</option>
              </select>
            </div>
            <div className="form-group">
              <label>Offer Validity</label>
              <div className="date-input-group">
                <input 
                  type="text" 
                  value={formData.offerValidity}
                  onChange={(e) => handleInputChange('offerValidity', e.target.value)}
                />
                <span className="calendar-icon">📅</span>
              </div>
            </div>
            <div className="form-group">
              <label>Document Date</label>
              <div className="date-input-group">
                <input 
                  type="text" 
                  value={formData.documentDate}
                  onChange={(e) => handleInputChange('documentDate', e.target.value)}
                />
                <span className="calendar-icon">📅</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Item Details Table */}
      <div className="form-section item-details">
        <div className="table-actions">
          <button className="btn-add">+ Add</button>
          <button className="btn-edit">Edit</button>
          <button className="btn-delete">Delete</button>
          <button className="btn-update">Update</button>
          <button className="btn-cancel">X Cancel</button>
        </div>

        <div className="table-container">
          <table className="items-table">
            <thead>
              <tr>
                <th>
                  Item Name
                  <span className="filter-icon">🔽</span>
                </th>
                <th>
                  Item Code
                  <span className="filter-icon">🔽</span>
                </th>
                <th>
                  Qty
                  <span className="filter-icon">🔽</span>
                </th>
                <th>
                  Price
                  <span className="filter-icon">🔽</span>
                </th>
                <th>
                  Discount %
                  <span className="filter-icon">🔽</span>
                </th>
                <th>
                  Vat Group
                  <span className="filter-icon">🔽</span>
                </th>
                <th>
                  Vat
                  <span className="filter-icon">🔽</span>
                </th>
                <th>
                  Total
                  <span className="filter-icon">🔽</span>
                </th>
                <th>
                  U
                  <span className="filter-icon">🔽</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.itemName}</td>
                  <td>{item.itemCode}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>{item.vatGroup}</td>
                  <td>{item.vat}</td>
                  <td>{item.total}</td>
                  <td>{item.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <span className="pagination-info">1 of 1 pages (4 items)</span>
          <div className="pagination-controls">
            <button>K</button>
            <button>&lt;</button>
            <button className="active">1</button>
            <button>&gt;</button>
            <button>&gt;|</button>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="form-section summary-section">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label>Sales Employee</label>
              <input 
                type="text" 
                value={formData.salesEmployee}
                onChange={(e) => handleInputChange('salesEmployee', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Remarks</label>
              <textarea 
                value={formData.remarks}
                onChange={(e) => handleInputChange('remarks', e.target.value)}
                rows="3"
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label>Total Discount</label>
              <input 
                type="text" 
                value={formData.totalDiscount}
                onChange={(e) => handleInputChange('totalDiscount', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Tax</label>
              <input 
                type="text" 
                value={formData.tax}
                onChange={(e) => handleInputChange('tax', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Gross Total</label>
              <input 
                type="text" 
                value={formData.grossTotal}
                onChange={(e) => handleInputChange('grossTotal', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="form-actions">
        <button className="btn-back">Back</button>
        <button className="btn-update-main">Update</button>
      </div>
    </div>
  );
};

export default PurchaseQuotationForm;
