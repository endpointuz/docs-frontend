import React from 'react';
import {
  List, Card, Button, Icon,
} from 'antd';
import { useTranslation } from 'react-i18next';

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
  canEdit = false,
  goToEditProductForm,
  goToCreateProductForm,
  removeProduct,
  isRemovingProduct,
}) => {
  const [t] = useTranslation();

  return (
    <>
      <h3 className="mt-5">
        {t('products')}
        &nbsp;
        {
          canEdit
            ? <Button type="primary" size="small" onClick={goToCreateProductForm}><Icon type="plus-circle" /></Button>
            : null
        }
      </h3>
      <List
        grid={grid}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.name}
              extra={
                canEdit
                  ? (
                    <>
                      <Button
                        type="danger"
                        size="small"
                        loading={isRemovingProduct}
                        onClick={removeProduct(item.id)}
                      >
                        <Icon type="delete" />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        loading={isRemovingProduct}
                        onClick={goToEditProductForm(item.id)}
                      >
                        <Icon type="edit" />
                      </Button>
                    </>
                  ) : null
              }
            >
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
    </>
  );
};

export default ProductList;
