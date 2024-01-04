import {ProductTypeEnum} from '../libs/constants';
import {OrgInformationModel, ProInfoModel} from './org-info.model';

export class ProductInfoModel {
  id: string;
  imageUrl: string;
  name: string;
  organizationInfo: OrgInformationModel;
  unitPrice: number;
  originalPrice: number;
  discountAmount?: number;
  currency: string;
  discountPercent?: string;
  rated?: number;
  productType: ProductTypeEnum;

  constructor() {
    this.id = '';
    this.imageUrl = '';
    this.name = '';
    this.organizationInfo = new OrgInformationModel();
    this.unitPrice = 0;
    this.originalPrice = 0;
    this.discountAmount = 0;
    this.currency = '';
    this.discountPercent = '';
    this.productType = ProductTypeEnum.Products;
  }
}

export class ProductDetailModel {
  id: string;
  proInfo?: ProInfoModel;
  name: string;
  organizationInfo: OrgInformationModel;
  imageUrl: string;
  code?: string;
  originalPrice: number;
  currency: string;
  unitPrice: number;
  discountAmount?: number;
  discountPercent?: number;
  productType?: string;
  brand?: string;
  madeIn?: string;
  description: string;
  imageUrls?: string[];
  quantity?: number;
  properties?: ProductPropertyModel[];
  constructor() {
    this.name = '';
    this.id = '';
    this.proInfo = new ProInfoModel();
    this.organizationInfo = new OrgInformationModel();
    this.imageUrl = '';
    this.currency = '';
    this.originalPrice = 0;
    this.description = '';
    this.unitPrice = 0;
    this.imageUrls = [];
    this.properties = [];
  }
}
export class ProductPropertyModel {
  id: string;
  key: string;
  value: string;
  active?: boolean;

  constructor() {
    this.id = '';
    this.key = '';
    this.value = '';
  }
}

export class ProductOrderModel {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  originalPrice: number;
  amount: number;
  description: string;
  discountAmount?: number;
  discountPercent?: number;
  currency: string;
  imageUrl: string;
  constructor() {
    this.amount = 0;
    this.currency = '';
    this.id = '';
    this.name = '';
    this.quantity = 0;
    this.unitPrice = 0;
    this.originalPrice = 0;
    this.description = '';
    this.currency = '';
    this.imageUrl = '';
  }
}
