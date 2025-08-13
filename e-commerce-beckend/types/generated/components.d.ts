import type { Schema, Struct } from '@strapi/strapi';

export interface EcommerceItems extends Struct.ComponentSchema {
  collectionName: 'components_ecommerce_items';
  info: {
    displayName: 'Items';
  };
  attributes: {
    order: Schema.Attribute.Relation<'oneToOne', 'api::order.order'>;
    Price: Schema.Attribute.Decimal;
    Quanitiy: Schema.Attribute.Integer;
  };
}

export interface EcommerceOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_ecommerce_order_items';
  info: {
    displayName: 'OrderItem';
    icon: 'briefcase';
  };
  attributes: {
    Price: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    Quanitiy: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ecommerce.items': EcommerceItems;
      'ecommerce.order-item': EcommerceOrderItem;
    }
  }
}
