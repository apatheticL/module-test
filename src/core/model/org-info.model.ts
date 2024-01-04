export class OrgInformationModel {
  id: string;
  name: string;
  avatarUrl?: string;
  address?: string;
  hotline?: string;
  currency?: string;
  shipFee?: number;
  constructor() {
    this.id = '';
    this.name = '';
  }
}
export class ProInfoModel {
  id: string;
  name: string;
  constructor() {
    this.id = '';
    this.name = '';
  }
}

export interface AppSetting {
  miniApps: string[];
  superApp: string;
}

export interface Role {
  id: string;
  name: string;
}

export class Organization {
  accessibleModules: any[];
  activate: boolean;
  address: string;
  appSetting: AppSetting[];
  avatar: string;
  avatarUrl: string;
  country: any[];
  createdBy: string;
  description: string;
  fullName: string;
  hotline: string;
  id: string;
  isDigitalClinic: boolean;
  isSpa: boolean;
  location: string;
  name: string;
  orgType: number;
  orgTypeAsString: string;
  owner: string;
  roles: Role[];
  service: any[];
  signInStyle: number;
  signInStyleAsString: string;
  storeImage: boolean;
  workflow: any | null;

  constructor(json: any) {
    this.accessibleModules = json.accessibleModules || [];
    this.activate = json.activate || true;
    this.address = json.address || '';
    this.appSetting = json.appSetting || [];
    this.avatar = json.avatar || '';
    this.avatarUrl = json.avatarUrl || '';
    this.country = json.country || [];
    this.createdBy = json.createdBy || 'superadmin';
    this.description = json.description || '';
    this.fullName = json.fullName || '';
    this.hotline = json.hotline || '';
    this.id = json.id || '';
    this.isDigitalClinic = json.isDigitalClinic || false;
    this.isSpa = json.isSpa || false;
    this.location = json.location || '';
    this.name = json.name || '';
    this.orgType = json.orgType || 1;
    this.orgTypeAsString = json.orgTypeAsString || 'Demo';
    this.owner = json.owner || '';
    this.roles = json.roles || [];
    this.service = json.service || [];
    this.signInStyle = json.signInStyle || 2;
    this.signInStyleAsString = json.signInStyleAsString || 'PasswordLess';
    this.storeImage = json.storeImage || true;
    this.workflow = json.workflow || null;
  }
}

// Example usage:
export const json = {
  accessibleModules: [],
  activate: true,
  address: '',
  appSetting: [
    {
      miniApps: ['Array'],
      superApp: 'bPro',
    },
    {
      miniApps: ['Array'],
      superApp: 'bDemo',
    },
  ],
  avatar: '',
  avatarUrl: '',
  country: [],
  createdBy: 'superadmin',
  description: '',
  fullName: 'PT Beauty Spa-Dr.Thanh',
  hotline: '',
  id: '6a509b1e-7c91-4509-b901-713b743c889e',
  isDigitalClinic: false,
  isSpa: false,
  location: '',
  name: 'drthanhbeauty',
  orgType: 1,
  orgTypeAsString: 'Demo',
  owner: '',
  roles: [
    {
      id: '4df99c71-3652-4b0a-b8f5-907f5a88f3e9',
      name: 'member',
    },
    {
      id: '708b6af6-dee1-4be1-819e-734881f2e8c3',
      name: 'orgadmin',
    },
  ],
  service: [],
};
