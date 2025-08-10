import React, { useState } from 'react';
import './SalesQuotationForm.css';

const SalesQuotationForm = () => {
  const [formData, setFormData] = useState({
    customer: 'AL ADIL TRADING CO L.L.C.',
    customerCode: 'C00002',
    contactPerson: 'MR.RUPESH',
    customerRefNo: 'Reference',
    seriesDropdown: 'QNJP25',
    seriesNumber: '2530046',
    paymentTerms: '100% ADVANCE',
    offerValidity: '09/06/2025',
    documentDate: '08/07/2025',
    salesEmployee: '-- Select Sales Employee --',
    remarks: '',
    totalAmount: '0.000',
    totalDiscount: '0.000',
    roundOff: '',
    netAmount: '0.000',
    tax: '0.000',
    grossTotal: '0.000'
  });

  const [items, setItems] = useState([
    {
      id: 1,
      type: 'Regular',
      itemName: 'WINE SHELF L1200*W600',
      itemCode: 'SHWS202',
      qty: 1,
      price: 0,
      discount: 0,
      vatGroup: 'Output V',
      vat: 5,
      total: '0.000',
      grossPriceAfterDiscount: '0.000',
      uom: 'Manual'
    }
  ]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="sales-quotation-form">
      <div className="form-header">
        <h1>Sales Quotation</h1>
      </div>

      {/* Header Details */}
      <div className="form-section header-details">
        <div className="form-row">
          {/* Left Column - Customer Information */}
          <div className="form-column">
            <div className="form-group">
              <label>Customer</label>
              <input 
                type="text" 
                value={formData.customer}
                onChange={(e) => handleInputChange('customer', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Customer Code</label>
              <input 
                type="text" 
                value={formData.customerCode}
                onChange={(e) => handleInputChange('customerCode', e.target.value)}
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
                <select 
                  value={formData.seriesDropdown}
                  onChange={(e) => handleInputChange('seriesDropdown', e.target.value)}
                >
                  <option value="QNJP25">QNJP25</option>
                  <option value="QNJP24">QNJP24</option>
                  <option value="QNJP23">QNJP23</option>
                </select>
                <input 
                  type="text" 
                  value={formData.seriesNumber}
                  onChange={(e) => handleInputChange('seriesNumber', e.target.value)}
                  readOnly
                  className="readonly-field"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Payment Terms</label>
              <select 
                value={formData.paymentTerms}
                onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
              >
                <option value="100% ADVANCE">100% ADVANCE</option>
                <option value="NET30">NET30</option>
                <option value="NET60">NET60</option>
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
        <div className="table-header">
          <button className="btn-add-row">+ Add Row (Alt+A)</button>
        </div>

        <div className="table-container">
          <table className="items-table">
            <thead>
              <tr>
                <th>Type*</th>
                <th>Item Name*</th>
                <th>Item Code*</th>
                <th>Qty*</th>
                <th>Price*</th>
                <th>Discount %*</th>
                <th>Vat Group*</th>
                <th>Vat*</th>
                <th>Total*</th>
                <th>Gross Price after Discount*</th>
                <th>Uom*</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="type-dropdown">
                      <select value={item.type}>
                        <option value="Regular">Regular</option>
                        <option value="Service">Service</option>
                        <option value="Product">Product</option>
                      </select>
                      <span className="cart-icon">🛒</span>
                    </div>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      value={item.itemName}
                      className="item-name-input"
                    />
                  </td>
                  <td>
                    <input 
                      type="text" 
                      value={item.itemCode}
                      readOnly
                      className="readonly-field"
                    />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      value={item.qty}
                      className="qty-input"
                    />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      value={item.price}
                      className="price-input"
                    />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      value={item.discount}
                      className="discount-input"
                    />
                  </td>
                  <td>
                    <select value={item.vatGroup}>
                      <option value="Output V">Output V</option>
                      <option value="Output S">Output S</option>
                      <option value="Zero Rated">Zero Rated</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="number" 
                      value={item.vat}
                      className="vat-input"
                    />
                  </td>
                  <td>
                    <input 
                      type="text" 
                      value={item.total}
                      readOnly
                      className="readonly-field"
                    />
                  </td>
                  <td>
                    <input 
                      type="text" 
                      value={item.grossPriceAfterDiscount}
                      readOnly
                      className="readonly-field"
                    />
                  </td>
                  <td>
                    <select value={item.uom}>
                      <option value="Manual">Manual</option>
                      <option value="Pieces">Pieces</option>
                      <option value="Units">Units</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Section */}
      <div className="form-section summary-section">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label>Sales Employee</label>
              <select 
                value={formData.salesEmployee}
                onChange={(e) => handleInputChange('salesEmployee', e.target.value)}
              >
                <option value="-- Select Sales Employee --">-- Select Sales Employee --</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
              </select>
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
              <label>Total Amount</label>
              <input 
                type="text" 
                value={formData.totalAmount}
                onChange={(e) => handleInputChange('totalAmount', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
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
              <label>Round Off</label>
              <input 
                type="text" 
                value={formData.roundOff}
                onChange={(e) => handleInputChange('roundOff', e.target.value)}
                readOnly
                className="readonly-field"
              />
            </div>
            <div className="form-group">
              <label>Net Amount</label>
              <input 
                type="text" 
                value={formData.netAmount}
                onChange={(e) => handleInputChange('netAmount', e.target.value)}
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
        <button className="btn-generate">Generate Sales Quotation</button>
      </div>
    </div>
  );
};

export default SalesQuotationForm;
