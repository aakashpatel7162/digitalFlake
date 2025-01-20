import React, { useState, useEffect } from 'react';
import SearchBar from '../pages/searchbar/SearchBar';
import './Dashboard.css';
import { useSearch } from '../pages/searchbar/SearchBarContext';
import { rawData } from '../db/config/rawData';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../pages/Deletmodal/DeleteModal';
export default function Dashboard() {
  const { searchType } = useSearch();
  const navigate = useNavigate();
  const [columns, setColumns] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { categoryData, setEditItem } = useSearch();

  const columnStructure = rawData.columnStructure

  useEffect(() => {
    setColumns(columnStructure[searchType] || []);
  }, [searchType]);

  const handleEdit = (itemId) => {
    navigate(`/edit`);
  };




  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log('Deleting item:', selectedItem);
    setIsModalOpen(false);
  };
  const getDataBySearchType = () => {
    switch (searchType) {
      case 'category':
        return rawData.categories.map((category, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{category.name}</div>
            <div className="table-cell">
              <img src={category.image} alt={category.name} width="50" />
            </div>
            <div className="table-cell" style={{ color: category.status === 'Active' ? 'green' : 'red' }}>
              {category.status}
            </div>
            <div className="table-cell action-icons">
              <PencilIcon className="icon" onClick={() => handleEdit(category.id)}style={{ width: '20px', height: '20px' }} />
              <TrashIcon className="icon delete-icon" onClick={() => handleDelete(category.id)} style={{ width: '20px', height: '20px' ,marginLeft:"20px" }}/>
            </div>
          </div>
        ));

      case 'subcategory':
        return rawData.categories.flatMap((category) =>
          category.subcategories.map((subcategory, index) => (
            <div className="table-row" key={index}>
              <div className="table-cell">{subcategory.subcategory}</div>
              <div className="table-cell">{category.name}</div>
              <div className="table-cell">
                <img src={subcategory.image} alt={subcategory.subcategory} width="50" />
              </div>
              <div className="table-cell" style={{ color: subcategory.status === 'Active' ? 'green' : 'red' }}>
                {subcategory.status}
              </div>
              <div className="table-cell action-icons">
                <PencilIcon className="icon" onClick={() => handleEdit(subcategory.id)} style={{ width: '20px', height: '20px' }}/>
                <TrashIcon className="icon delete-icon" onClick={() => handleDelete(subcategory.id)}style={{ width: '20px', height: '20px',marginLeft:"20px"  }} />
              </div>
            </div>
          ))
        );

      case 'product':
        return rawData.categories.flatMap((category) =>
          category.subcategories.flatMap((subcategory) =>
            subcategory.products.map((product, index) => (
              <div className="table-row" key={index}>
                <div className="table-cell">{product.product}</div>
                <div className="table-cell">{subcategory.subcategory}</div>
                <div className="table-cell">{category.name}</div>
                <div className="table-cell">
                  <img src={product.image} alt={product.product} width="50" />
                </div>
                <div className="table-cell" style={{ color: product.status === 'Active' ? 'green' : 'red' }}>
                  {product.status}
                </div>
                <div className="table-cell action-icons">
                  <PencilIcon className="icon" onClick={() => handleEdit(product.id)} style={{ width: '20px', height: '20px' }}/>
                  <TrashIcon className="icon delete-icon" onClick={() => handleDelete(product.id)} style={{ width: '20px', height: '20px' ,marginLeft:"20px" }} />
                </div>
              </div>
            ))
          )
        );

      default:
        return <div>No data available</div>;
    }
  };

  return (
    <div style={{ border: '1px solid red' }}>
      <SearchBar searchType={searchType} />
      <div className="table-container">
        <div className="table-row table-header">
          {columns.map((column, index) => (
            <div className="table-cell" key={index}>
              {column}
            </div>
          ))}
        </div>
        {getDataBySearchType()}
      </div>
      <DeleteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleConfirmDelete} 
      />
    </div>
  );
}
