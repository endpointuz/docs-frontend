import React from 'react';
import { List, Card } from 'antd';

const grid = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 3,
  xl: 4,
  xxl: 4,
};

const ProductList = ({
  data,
}) => {
  return (
    <List
      grid={grid}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.name}>
            <div className="item">{item.category.name}</div>
            <div className="item">{item.model}</div>
            <div className="item">{item.specifications}</div>
            <div className="item">{item.count} {item.unit.full_name}</div>
            <div className="item">{item.price_per_unit} {item.currency.full_name}</div>
            <div className="item">{item.code_tnved.code}</div>
            <div className="item">{item.manufacturer} ({item.manufacturer_country.name})</div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default ProductList;
