import React, { useState, useEffect } from 'react';
import { useSearch } from '../pages/searchbar/SearchBarContext'; 
import { useNavigate, useParams } from 'react-router-dom';
import "./AddEditItemPage.css"; 

const AddEditItemPage = () => {
  const { searchType, categoryData, addItem, editItem } = useSearch();
  const { item } = useParams(); 
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(null); 
  const navigate = useNavigate();

  const columnStructure = {
    category: ['Category Name', 'Image', 'Status'],
    subcategory: ['Subcategory Name', 'Category Name', 'Image', 'Status'],
    product: ['Product Name', 'Subcategory Name', 'Category Name', 'Image', 'Status'],
  };

  useEffect(() => {
    if (item && categoryData[searchType]) {
      const existingItem = categoryData[searchType].find((i) => i.id === item);
      if (existingItem) {
        setFormData(existingItem);
        setImage(existingItem.Image || null); 
      }
    } else {
      const initialData = {};
      columnStructure[searchType]?.forEach((field) => {
        initialData[field] = '';
      });
      setFormData(initialData);
    }
  }, [item, searchType, categoryData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      setImage(URL.createObjectURL(file)); 
      setFormData((prevData) => ({
        ...prevData,
        Image: file, 
      }));
    } else {
      alert('Please upload a PNG or JPG image');
    }
  };

  const handleStatusChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      Status: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).includes('')) return; 

    if (item) {
      editItem(item, formData);
    } else {
      addItem(formData);
    }
    
    setFormData({});
    setImage(null); 
    navigate(`/`);
  };

  return (
    <div className="add-edit-page">
      <h3>{item ? `Edit ${searchType}` : `Add New ${searchType}`}</h3>
      <form onSubmit={handleSubmit}>
        {columnStructure[searchType]?.map((field, index) => {
          if (field === 'Status' && !item) {
            return null; 
          }

          if (field === 'Image') {
            return (
              <div key={index}>
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  id="image"
                  name="Image"
                  accept="image/png, image/jpeg"
                  onChange={handleImageUpload}
                />
                {image && <img src={image} alt="Uploaded Preview" />}
              </div>
            );
          }

          return (
            <div key={index}>
              <label htmlFor={field}>{field}</label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field] || ''}
                onChange={handleInputChange}
                placeholder={`Enter ${field.toLowerCase()}`}
              />
            </div>
          );
        })}
        <button type="submit">{item ? 'Save' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddEditItemPage;
