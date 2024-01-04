import {OrgInformationModel} from './org-info.model';
import {ProductPropertyModel} from './product-model';

export class CartItemModel {
  organizationInfo: OrgInformationModel;
  cartProducts: ProductCartModel[];
  checked?: boolean;
  constructor() {
    this.organizationInfo = new OrgInformationModel();
    this.cartProducts = [];
  }
}
export class ProductCartModel {
  id: string;
  productId: string;
  name: string;
  organizationInfo: OrgInformationModel;
  imageUrl: string;
  code?: string;
  originalPrice: number;
  currency: string;
  unitPrice: number;
  imageUrls?: string[];
  quantity?: number;
  properties?: ProductPropertyModel[];
  checked?: boolean;
  constructor() {
    this.name = '';
    this.id = '';
    this.productId = '';
    this.organizationInfo = new OrgInformationModel();
    this.imageUrl = '';
    this.currency = '';
    this.originalPrice = 0;
    this.unitPrice = 0;
    this.imageUrls = [];
    this.properties = [];
  }
}
